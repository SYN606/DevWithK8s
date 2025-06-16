import React from "react";
import { motion } from "framer-motion";
import { FiHardDrive, FiFilePlus, FiLink, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PersistentVolumeClaim = () => {
    return (
        <div className="bg-gray-950 text-gray-100 p-6 font-sans">
            <motion.div
                className="max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.h1 className="text-4xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                    <FiFilePlus /> PersistentVolumeClaim (PVC) – Kubernetes Storage Notes
                </motion.h1>

                <motion.section variants={fadeIn}>
                    <h2 className="text-2xl text-yellow-400 font-semibold flex items-center gap-2 mt-4 mb-2">
                        <FiHardDrive /> What is a PVC?
                    </h2>
                    <p className="mb-4">
                        A <strong>PersistentVolumeClaim (PVC)</strong> is a request for storage by a user. It abstracts the
                        process of how storage is provisioned. Users define size, access modes, and storage class in PVC,
                        and Kubernetes matches it to a <strong>PersistentVolume (PV)</strong>.
                    </p>

                    <h3 className="text-xl text-green-400 flex items-center gap-2 mb-2">
                        <FiLink /> Key Concepts
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mb-6">
                        <li>PVCs bind to a suitable PV based on size, access mode, and storage class.</li>
                        <li>They allow users to request storage without knowing storage backend details.</li>
                        <li>If no PV matches, the PVC remains unbound until one becomes available.</li>
                    </ul>

                    <h3 className="text-xl text-green-400 mb-2">🧪 PVC YAML Example</h3>
                    <motion.pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mb-6">
                        <code>{`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: standard`}</code>
                    </motion.pre>

                    <h3 className="text-xl text-green-400 mb-2">🔐 Access Modes</h3>
                    <ul className="list-disc list-inside mb-6">
                        <li><strong>ReadWriteOnce (RWO)</strong> – mounted as read-write by a single node</li>
                        <li><strong>ReadOnlyMany (ROX)</strong> – mounted read-only by many nodes</li>
                        <li><strong>ReadWriteMany (RWX)</strong> – mounted read-write by many nodes</li>
                    </ul>

                    <h3 className="text-xl text-green-400 mb-2">🔄 PVC Lifecycle</h3>
                    <ol className="list-decimal list-inside mb-6">
                        <li>Developer defines PVC with size, mode, and storage class.</li>
                        <li>Kubernetes finds a matching PV or dynamically provisions one.</li>
                        <li>Binding occurs — PVC is linked to a PV.</li>
                        <li>Pod uses PVC by referencing it in the volume section.</li>
                    </ol>

                    <h3 className="text-xl text-green-400 mb-2">📦 Using PVC in a Pod</h3>
                    <motion.pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mb-6">
                        <code>{`apiVersion: v1
kind: Pod
metadata:
  name: pod-using-pvc
spec:
  containers:
  - name: myapp
    image: nginx
    volumeMounts:
    - mountPath: "/usr/share/nginx/html"
      name: my-storage
  volumes:
  - name: my-storage
    persistentVolumeClaim:
      claimName: my-pvc`}</code>
                    </motion.pre>

                    <h3 className="text-xl text-green-400 mb-2">✅ Best Practices</h3>
                    <ul className="list-disc list-inside mb-6">
                        <li>Use <code>storageClassName</code> to control dynamic provisioning.</li>
                        <li>Request only what is needed — avoid over-provisioning.</li>
                        <li>Use resource quotas to restrict PVC usage per namespace.</li>
                        <li>Monitor PVC status to ensure correct bindings.</li>
                    </ul>

                    <h3 className="text-xl text-green-400 mb-2">🛠️ Common Commands</h3>
                    <motion.pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mb-6">
                        <code>{`kubectl get pvc
kubectl describe pvc my-pvc
kubectl delete pvc my-pvc`}</code>
                    </motion.pre>

                    <h3 className="text-xl text-green-400 mb-2">⚠️ PVC States</h3>
                    <ul className="list-disc list-inside mb-6">
                        <li><strong>Pending</strong>: Waiting for a matching PV or provisioning</li>
                        <li><strong>Bound</strong>: Successfully matched to a PV</li>
                        <li><strong>Lost</strong>: Bound PV became unavailable</li>
                    </ul>

                    <p className="italic text-sm text-gray-400 flex items-center gap-2">
                        <FiAlertTriangle className="text-yellow-400" />
                        Note: Deleting a PVC does not always delete the PV, depending on the reclaim policy.
                    </p>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default PersistentVolumeClaim;
