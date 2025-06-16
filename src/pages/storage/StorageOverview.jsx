import React from "react";
import {
    FiDatabase,
    FiHardDrive,
    FiLink,
    FiCloud,
    FiSettings,
    FiFolder,
    FiServer,
    FiInfo,
} from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StorageOverview = () => {
    return (
        <div className="bg-gray-950 text-white font-sans p-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h1 className="text-4xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                    <FiDatabase /> Kubernetes Storage – Overview
                </h1>

                <motion.section variants={fadeIn}>
                    <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2 flex items-center gap-2">
                        <FiInfo /> 📌 What is Storage in Kubernetes?
                    </h2>
                    <p>
                        Kubernetes provides a highly flexible and abstracted model for managing persistent and ephemeral storage across clusters. It allows workloads to <strong>store, access, and manage data</strong> using pluggable storage backends (cloud, network, local).
                    </p>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiHardDrive /> 📦 Key Storage Concepts
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Volumes:</strong> Basic storage unit attached to pods (ephemeral or persistent).</li>
                        <li><strong>Persistent Volumes (PV):</strong> Cluster resource provisioned by admin or dynamically.</li>
                        <li><strong>Persistent Volume Claims (PVC):</strong> User request for storage (size, access mode).</li>
                        <li><strong>StorageClass:</strong> Defines storage types, provisioners, and parameters.</li>
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiLink /> 🔗 Volume Types
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><code>emptyDir</code> – Temporary storage for a pod's lifecycle.</li>
                        <li><code>hostPath</code> – Mounts directory from the node (not portable).</li>
                        <li><code>nfs</code>, <code>glusterfs</code> – Mount network file systems.</li>
                        <li><code>configMap</code>, <code>secret</code> – Mount configuration or secrets as files.</li>
                        <li><code>persistentVolumeClaim</code> – Reference to a PVC that binds to a PV.</li>
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiFolder /> 🧾 Persistent Volume (PV)
                    </h3>
                    <p>
                        A <strong>PV</strong> is a piece of storage in the cluster that has been provisioned by an admin or dynamically created. It’s a resource in the cluster just like a node.
                    </p>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto mt-2" initial="hidden" animate="visible" variants={fadeIn}>
                        <code>{`apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-demo
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/data/pv-demo"`}</code>
                    </motion.pre>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiServer /> 🧾 Persistent Volume Claim (PVC)
                    </h3>
                    <p>
                        A <strong>PVC</strong> is a request for storage by a user. It specifies size, access mode, and optionally a StorageClass.
                    </p>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto mt-2" initial="hidden" animate="visible" variants={fadeIn}>
                        <code>{`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi`}</code>
                    </motion.pre>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiCloud /> ☁️ StorageClass
                    </h3>
                    <p>
                        A <strong>StorageClass</strong> defines a provisioner and parameters for dynamic provisioning of PVs. Useful for integrating with cloud storage (e.g., EBS, GCE, Azure Disk).
                    </p>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto mt-2" initial="hidden" animate="visible" variants={fadeIn}>
                        <code>{`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2`}</code>
                    </motion.pre>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiSettings /> 🔄 Access Modes
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>ReadWriteOnce (RWO):</strong> Mounted as read-write by a single node.</li>
                        <li><strong>ReadOnlyMany (ROX):</strong> Mounted read-only by many nodes.</li>
                        <li><strong>ReadWriteMany (RWX):</strong> Mounted read-write by many nodes.</li>
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 text-green-400">✅ Best Practices</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Use dynamic provisioning with StorageClasses where possible.</li>
                        <li>Don’t use <code>hostPath</code> in production.</li>
                        <li>Define resource quotas for PVCs to avoid exhausting storage.</li>
                        <li>Monitor PV usage and cleanup unused PVs/PVCs.</li>
                        <li>Choose appropriate access modes based on workload needs.</li>
                    </ul>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default StorageOverview;
