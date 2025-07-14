import { motion } from 'framer-motion';
import { FaBan, FaTags, FaCogs, FaCode, FaLightbulb } from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <Icon className="w-6 h-6 text-cyan-400" />
            {title}
        </h2>
        <div className="leading-relaxed text-base">{children}</div>
    </motion.div>
);

export default function TaintsTolerations() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-red-400 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Taints and Tolerations in Kubernetes
                </motion.h1>

                <Section icon={FaBan} title="What are Taints and Tolerations?">
                    <p>
                        Taints and tolerations are advanced scheduling mechanisms that control how pods are assigned to nodes, ensuring certain nodes only accept specific pods and repel others.
                    </p>
                </Section>

                <Section icon={FaTags} title="Key Concepts">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Taints:</strong> Applied to nodes. Repels pods unless they tolerate the taint.</li>
                        <li><strong>Tolerations:</strong> Applied to pods. Allows pods to be scheduled on nodes with matching taints.</li>
                    </ul>
                </Section>

                <Section icon={FaCogs} title="How It Works">
                    <ul className="list-disc list-inside space-y-1">
                        <li>When a node is tainted, it repels all pods except those with a matching toleration.</li>
                        <li>Taints format: <code>key=value:effect</code>.</li>
                        <li>Pods require tolerations matching the taint's key, value, and effect to be scheduled.</li>
                    </ul>
                </Section>

                <Section icon={FaTags} title="Taint Effects">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>NoSchedule:</strong> Pods without matching toleration won’t be scheduled.</li>
                        <li><strong>PreferNoSchedule:</strong> Scheduler avoids the node unless necessary.</li>
                        <li><strong>NoExecute:</strong> Evicts existing pods without tolerations and blocks new ones.</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Example Usage">
                    <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto">
                        {`# Add taint to a node
kubectl taint nodes node1 key1=value1:NoSchedule

# Pod toleration example
tolerations:
  - key: "key1"
    operator: "Equal"
    value: "value1"
    effect: "NoSchedule"`}
                    </pre>
                    <p className="text-sm italic text-gray-400 mt-2">
                        This pod tolerates the taint and can be scheduled on nodes with <code>key1=value1:NoSchedule</code>.
                    </p>
                </Section>

                <Section icon={FaLightbulb} title="Use Cases & Best Practices">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Reserve nodes for specific workloads like GPU or critical apps.</li>
                        <li>Use with spot/preemptible nodes to allow only tolerant pods.</li>
                        <li>Temporarily repel pods during node maintenance.</li>
                        <li>Combine with node affinity for fine-grained control.</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
}
