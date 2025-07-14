import { motion } from 'framer-motion';
import {
    FaCube,
    FaTools,
    FaChartLine,
    FaInfoCircle,
    FaCogs,
    FaExclamationTriangle,
    FaLightbulb
} from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <Icon className="w-6 h-6 text-cyan-400" /> {title}
        </h2>
        <div className="leading-relaxed text-base">{children}</div>
    </motion.div>
);

export default function VPA() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-red-400 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Vertical Pod Autoscaler (VPA) in Kubernetes
                </motion.h1>

                <Section icon={FaCube} title="What is VPA?">
                    <p>
                        Vertical Pod Autoscaler (VPA) adjusts CPU and memory requests/limits of pods based on actual usage.
                        Unlike HPA, it resizes resources of existing pods instead of changing the number of replicas.
                    </p>
                </Section>

                <Section icon={FaTools} title="Key Components of VPA">
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Recommender:</strong> Monitors usage and suggests optimal resource requests/limits.
                        </li>
                        <li>
                            <strong>Updater:</strong> Evicts and recreates pods if current values are suboptimal.
                        </li>
                        <li>
                            <strong>Admission Controller:</strong> Injects recommendations during pod creation.
                        </li>
                    </ul>
                </Section>

                <Section icon={FaChartLine} title="How VPA Works">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Monitors usage → Generates recommendations.</li>
                        <li>Updates existing pods (via eviction) or injects values into new pods.</li>
                        <li>Pods scheduled according to updated resource requirements.</li>
                    </ul>
                </Section>

                <Section icon={FaInfoCircle} title="Operating Modes">
                    <table className="w-full border border-gray-700 text-sm">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="border px-2 py-1 text-left">Mode</th>
                                <th className="border px-2 py-1 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Off', 'Provides recommendations only, no changes made.'],
                                ['Initial', 'Applies recommended resources at pod creation.'],
                                ['Auto', 'Continuously adjusts resources by evicting pods.'],
                                ['Recreate', 'Updates at creation and evicts pods with major changes.']
                            ].map(([mode, desc]) => (
                                <tr key={mode}>
                                    <td className="border px-2 py-1 font-medium text-emerald-400">{mode}</td>
                                    <td className="border px-2 py-1">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-sm italic text-gray-400 mt-2">
                        Note: In-place updates are in development (not fully supported as of v1.33).
                    </p>
                </Section>

                <Section icon={FaCogs} title="VPA vs HPA">
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>HPA:</strong> Adjusts pod count. Best for stateless apps like web servers.
                        </li>
                        <li>
                            <strong>VPA:</strong> Adjusts resource values. Ideal for resource-sensitive apps like databases.
                        </li>
                        <li>
                            <strong className="text-red-400">⚠️ Note:</strong> Avoid using HPA and VPA together on the same resource unless configured carefully.
                        </li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Benefits">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Prevents over/under-provisioning.</li>
                        <li>Reduces manual resource tuning.</li>
                        <li>Helps prevent OOM/CPU starvation.</li>
                    </ul>
                </Section>

                <Section icon={FaExclamationTriangle} title="Limitations">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Evictions cause pod restarts and potential downtime.</li>
                        <li>No native in-place resource updates (yet).</li>
                        <li>Not suitable for all workloads (esp. highly dynamic ones).</li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Install Metrics Server.</li>
                        <li>Use Pod Disruption Budgets to minimize impact.</li>
                        <li>Start with "Off" mode to observe recommendations.</li>
                        <li>Avoid using HPA and VPA together unless necessary.</li>
                    </ul>
                </Section>

                <Section icon={FaCube} title="Example VPA YAML">
                    <pre className="bg-gray-800 text-green-400 text-sm p-4 rounded overflow-auto font-mono">
                        {`apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: my-app-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind:       Deployment
    name:       my-app
  updatePolicy:
    updateMode: "Auto"  # Options: "Off", "Initial", "Auto", "Recreate"`}
                    </pre>
                </Section>

                <Section icon={FaInfoCircle} title="Final Notes">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Not installed by default – deploy VPA as an add-on.</li>
                        <li>Supported by major cloud providers and open-source distros.</li>
                        <li>Improves efficiency by auto-tuning pod resources.</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
}
