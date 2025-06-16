import { FiHardDrive, FiSettings, FiAlertCircle, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StorageClass = () => {
    return (
        <div className="bg-gray-950 text-white font-sans p-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h1 className="text-4xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                    <FiHardDrive /> 📦 StorageClass in Kubernetes
                </h1>

                <p className="mb-4">
                    A <strong>StorageClass</strong> in Kubernetes defines <em>how dynamic storage is provisioned</em>.
                    It helps automate the creation of Persistent Volumes using different storage backends.
                </p>

                <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2 flex items-center gap-2">
                    <FiZap /> Why Use a StorageClass?
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Automates storage provisioning for Persistent Volume Claims (PVCs).</li>
                    <li>Supports different storage types (e.g., SSDs, NFS, cloud disks).</li>
                    <li>Provides multiple performance tiers using named classes.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2 flex items-center gap-2">
                    <FiSettings /> Key Fields
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><code>provisioner</code>: The driver/plugin used to provision storage (e.g., <code>ebs.csi.aws.com</code>).</li>
                    <li><code>parameters</code>: Key-value configuration for the provisioner.</li>
                    <li><code>reclaimPolicy</code>: <code>Delete</code> or <code>Retain</code> the volume after PVC deletion.</li>
                    <li><code>allowVolumeExpansion</code>: Allows PVC resizing if true.</li>
                    <li><code>volumeBindingMode</code>: <code>Immediate</code> or <code>WaitForFirstConsumer</code>.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2">📄 Example YAML</h2>
                <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto" variants={fadeIn}>
                    <code>{`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: WaitForFirstConsumer`}</code>
                </motion.pre>

                <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2">🎯 Common Provisioners</h2>
                <table className="table-auto border-collapse border border-gray-700 w-full text-sm">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="border border-gray-700 px-4 py-2">Provisioner</th>
                            <th className="border border-gray-700 px-4 py-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-700 px-4 py-2">kubernetes.io/aws-ebs</td>
                            <td className="border border-gray-700 px-4 py-2">AWS Elastic Block Store</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-700 px-4 py-2">kubernetes.io/gce-pd</td>
                            <td className="border border-gray-700 px-4 py-2">Google Persistent Disk</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-700 px-4 py-2">hostpath</td>
                            <td className="border border-gray-700 px-4 py-2">Local development and testing</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-700 px-4 py-2">longhorn</td>
                            <td className="border border-gray-700 px-4 py-2">Open-source distributed block storage</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2">✅ Best Practices</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Set a default StorageClass to simplify PVC usage.</li>
                    <li>Use <code>WaitForFirstConsumer</code> in multi-zone clusters to avoid zone mismatches.</li>
                    <li>Label classes clearly (e.g., <code>gold</code>, <code>silver</code>, <code>bronze</code>).</li>
                    <li>Limit resource usage and allow expansion where needed.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2">🛠 Commands</h2>
                <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto" variants={fadeIn}>
                    <code>{`kubectl get storageclass
kubectl describe storageclass <name>
kubectl get pvc`}</code>
                </motion.pre>

                <p className="mt-6 text-gray-400 text-sm flex items-center gap-2">
                    <FiAlertCircle className="text-yellow-400" /> Note: Without a default class, PVCs without <code>storageClassName</code> will remain Pending.
                </p>
            </motion.div>
        </div>
    );
};

export default StorageClass;
