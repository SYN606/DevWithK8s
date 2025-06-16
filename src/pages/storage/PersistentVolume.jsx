import {
    FiDatabase,
    FiSave,
    FiHardDrive,
    FiCheckCircle,
    FiCode,
    FiAlertCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PersistentVolume = () => {
    return (
        <div className="bg-gray-950 text-white font-sans p-6 min-h-screen">
            <motion.div
                className="max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h1 className="text-4xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                    <FiHardDrive /> Persistent Volume (PV) in Kubernetes
                </h1>

                <motion.section variants={fadeIn}>
                    <h2 className="text-2xl font-semibold text-yellow-400 mt-4 mb-2 flex items-center gap-2">
                        <FiSave /> What is a Persistent Volume?
                    </h2>
                    <p>
                        A <strong>Persistent Volume (PV)</strong> is a piece of storage in a Kubernetes cluster
                        that has been provisioned by an administrator or dynamically by a <em>StorageClass</em>.
                        It is an abstraction over physical storage, enabling pods to store data persistently.
                    </p>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2 flex items-center gap-2">
                        <FiCheckCircle /> Key Features
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Defined as a cluster resource (like CPU or memory).</li>
                        <li>Outlives the lifetime of individual pods.</li>
                        <li>Decouples storage from the pod lifecycle.</li>
                        <li>Can be statically or dynamically provisioned.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2 flex items-center gap-2">
                        <FiCode /> Example: PV YAML Manifest
                    </h2>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto">
                        <code>{`apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-example
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  hostPath:
    path: "/mnt/data"`}</code>
                    </motion.pre>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2 flex items-center gap-2">
                        <FiDatabase /> Fields in a PV Spec
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>capacity:</strong> How much storage is available (e.g., 5Gi).</li>
                        <li><strong>accessModes:</strong> How the volume can be mounted (RWO, ROX, RWX).</li>
                        <li><strong>persistentVolumeReclaimPolicy:</strong> What happens to the PV when it's released (Retain, Recycle, Delete).</li>
                        <li><strong>storage backend:</strong> e.g., <code>hostPath</code>, <code>nfs</code>, <code>awsElasticBlockStore</code>, etc.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2 flex items-center gap-2">
                        <FiAlertCircle /> Reclaim Policies
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Retain:</strong> Manual cleanup required. Data remains.</li>
                        <li><strong>Recycle:</strong> Basic scrub (deprecated).</li>
                        <li><strong>Delete:</strong> Associated storage is automatically deleted.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2 flex items-center gap-2">
                        📌 Static vs Dynamic Provisioning
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Static:</strong> Admin creates PVs manually.</li>
                        <li><strong>Dynamic:</strong> PVC triggers automatic provisioning using a <code>StorageClass</code>.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2">
                        ✅ Use Cases
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Databases (MySQL, PostgreSQL, MongoDB).</li>
                        <li>Application logs and cache data.</li>
                        <li>Shared file storage between pods.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2">
                        🔍 Commands to Interact with PVs
                    </h2>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto">
                        <code>{`kubectl get pv
kubectl describe pv pv-example
kubectl delete pv pv-example`}</code>
                    </motion.pre>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-2">
                        🚨 Things to Remember
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>A PV is not namespaced — it is a cluster-wide resource.</li>
                        <li>A PV must be bound to a PVC before it can be used by a pod.</li>
                        <li>If no matching PV is found for a PVC, the pod will remain in <code>Pending</code> state.</li>
                    </ul>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default PersistentVolume;
