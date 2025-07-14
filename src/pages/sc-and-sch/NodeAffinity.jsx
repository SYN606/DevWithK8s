import { motion } from 'framer-motion';
import { FaSitemap, FaTags, FaCode, FaCogs, FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        <h2 className="text-2xl font-bold flex items-center gap-2 text-purple-400">
            <Icon className="w-6 h-6 text-purple-500" /> {title}
        </h2>
        <div className="leading-relaxed text-base">{children}</div>
    </motion.div>
);

export default function NodeAffinity() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans min-h-screen p-8">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-purple-400 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Node Affinity in Kubernetes
                </motion.h1>

                <Section icon={FaSitemap} title="What is Node Affinity?">
                    <p>
                        Node Affinity allows you to control which nodes a pod can be scheduled on based on node labels. It provides more flexibility than <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">nodeSelector</code>, enabling strict and preferred placement rules.
                    </p>
                </Section>

                <Section icon={FaTags} title="Key Concepts">
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Node Affinity:</strong> Schedule pods only on nodes with specific labels (e.g., hardware type, region).
                        </li>
                        <li>
                            <strong>Node Anti-Affinity:</strong> Prevent pods from being scheduled on certain nodes.
                        </li>
                        <li>
                            <strong>Hard vs. Soft Requirements:</strong>
                            <ul className="list-disc pl-6">
                                <li>
                                    <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">requiredDuringSchedulingIgnoredDuringExecution</code>: Hard requirement. Pod only runs on matching nodes.
                                </li>
                                <li>
                                    <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">preferredDuringSchedulingIgnoredDuringExecution</code>: Soft preference. Scheduler tries but isn’t strict.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Section>

                <Section icon={FaCogs} title="How Node Affinity Works">
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Node Labels:</strong> Nodes are labeled with key-value pairs.
                            <pre className="bg-gray-800 rounded p-3 mt-2 overflow-auto text-green-400 text-sm font-mono">
                                kubectl label nodes &lt;node-name&gt; &lt;key&gt;=&lt;value&gt;
                            </pre>
                        </li>
                        <li>
                            <strong>Pod Specification:</strong> Define affinity rules under <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">affinity.nodeAffinity</code>.
                        </li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Example YAML">
                    <pre className="bg-gray-800 text-green-400 text-sm p-4 rounded-md overflow-auto font-mono">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: example-pod
spec:
  containers:
  - name: app
    image: nginx
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: disktype
            operator: In
            values:
            - ssd
            - hdd`}
                    </pre>
                    <p className="text-sm italic text-gray-400 mt-2">
                        Ensures pod is scheduled only on nodes labeled <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">disktype=ssd</code> or <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">disktype=hdd</code>.
                    </p>
                </Section>

                <Section icon={FaSitemap} title="Node Affinity vs. Taints & Tolerations">
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Node Affinity:</strong> Attracts pods to nodes with specific labels.
                        </li>
                        <li>
                            <strong>Taints and Tolerations:</strong> Repels pods unless tolerations are defined.
                        </li>
                        <li>
                            Node Affinity is expressive; Taints/Tolerations are exclusion-focused.
                        </li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Use Cases">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Ensure workloads run on nodes with specific hardware (e.g., GPU, SSD).</li>
                        <li>Place pods in zones or regions for latency/compliance.</li>
                        <li>Optimize performance by grouping or separating workloads.</li>
                    </ul>
                </Section>

                <Section icon={FaExclamationTriangle} title="Best Practices">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">required</code> rules for critical workloads.</li>
                        <li>Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400">preferred</code> rules for flexible workloads.</li>
                        <li>Regularly update node labels and affinity rules as the cluster evolves.</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
}
