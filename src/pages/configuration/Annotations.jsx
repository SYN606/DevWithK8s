import { motion } from 'framer-motion';
import {
    FaClipboardList,
    FaLightbulb,
    FaSearch,
    FaCode,
    FaTools,
    FaQuestionCircle
} from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-900 text-gray-300 rounded-2xl shadow p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-3 mb-3">
            <Icon className="text-yellow-400 w-5 h-5" /> {title}
        </h2>
        <div className="text-base leading-relaxed whitespace-pre-wrap">{children}</div>
    </motion.div>
);

export default function Annotations() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-cyan-400 mb-10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Kubernetes Annotations: Adding Metadata to Your Resources
                </motion.h1>

                <Section icon={FaClipboardList} title="What Are Kubernetes Annotations?">
                    Annotations in Kubernetes are non-identifying metadata that can be attached to any object. They allow tools, developers, and systems to store arbitrary information—such as documentation links, creator identities, build versions, or tool hints—without changing the behaviour of the cluster.

                    They are different from labels, which are used for selection and grouping. Annotations serve more as informative notes that can be read by automated tools or humans but not used in Kubernetes queries or selectors.
                </Section>

                <Section icon={FaTools} title="Why Use Annotations?">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Add extra information like team ownership, change history, or environment names</li>
                        <li>Integrate with tools like Helm, Prometheus, Istio, ArgoCD, etc.</li>
                        <li>Inject behavioural hints for admission controllers or sidecar injection</li>
                        <li>Store deployment metadata such as version, timestamp, or CI/CD info</li>
                        <li>Enhance documentation within the resource definitions</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Technical Characteristics">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Structure:</strong> Stored under <code>metadata.annotations</code> in key-value format.</li>
                        <li><strong>Key Format:</strong> Should follow domain-style naming to avoid conflicts (e.g. <code>myorg.com/config</code>).</li>
                        <li><strong>Value:</strong> Must be a string. JSON/YAML may be embedded as a string.</li>
                        <li><strong>Size Limit:</strong> 256KB per annotation, 1MB total per resource.</li>
                        <li><strong>Behaviour:</strong> Not indexable or queryable; annotations are ignored by Kubernetes logic.</li>
                    </ul>
                </Section>

                <Section icon={FaSearch} title="Example YAML with Annotations">
                    <pre className="bg-gray-800 text-green-400 text-sm p-4 rounded overflow-x-auto font-mono whitespace-pre-wrap">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: mypod
  annotations:
    example.com/owner: "alice@company.com"
    example.com/release-date: "2025-06-26"
spec:
  containers:
  - name: nginx
    image: nginx`}
                    </pre>
                </Section>

                <Section icon={FaClipboardList} title="Use Cases">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Tool integration (e.g., Prometheus service discovery)</li>
                        <li>Runtime behaviour control (e.g., Istio sidecar injection)</li>
                        <li>Helm hooks and lifecycle events</li>
                        <li>Deployment tracking (e.g., who deployed, which commit, when)</li>
                        <li>Documentation references or support contacts</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Annotations vs Labels">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-sm border-collapse">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="border px-4 py-2">Feature</th>
                                    <th className="border px-4 py-2">Labels</th>
                                    <th className="border px-4 py-2">Annotations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-700">
                                    <td className="border px-4 py-2">Purpose</td>
                                    <td className="border px-4 py-2">Selection/Grouping</td>
                                    <td className="border px-4 py-2">Metadata/Documentation</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="border px-4 py-2">Used in Queries</td>
                                    <td className="border px-4 py-2">Yes</td>
                                    <td className="border px-4 py-2">No</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="border px-4 py-2">Value Limit</td>
                                    <td className="border px-4 py-2">&le; 63 chars</td>
                                    <td className="border px-4 py-2">&le; 256KB</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="border px-4 py-2">Format</td>
                                    <td className="border px-4 py-2">Simple text</td>
                                    <td className="border px-4 py-2">Any string (JSON supported)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Use domain-based keys (e.g., <code>dev.company.com/owner</code>).</li>
                        <li>Don't store secrets in annotations. Use <code>Secrets</code> for sensitive data.</li>
                        <li>Clean up unused or outdated annotations to keep resources clean.</li>
                        <li>Document annotations clearly for teams and tooling.</li>
                        <li>Combine with admission controllers to validate annotation presence.</li>
                        <li>Avoid performance degradation by limiting large values.</li>
                    </ul>
                </Section>

                <Section icon={FaQuestionCircle} title="Common Examples">
                    <pre className="bg-gray-800 text-green-400 text-sm p-4 rounded overflow-x-auto font-mono whitespace-pre-wrap">
                        {`prometheus.io/scrape: "true"
prometheus.io/port: "8080"
sidecar.istio.io/inject: "false"
kubectl.kubernetes.io/last-applied-configuration: {...}
helm.sh/hook: "pre-install"`}
                    </pre>
                </Section>

                <Section icon={FaQuestionCircle} title="FAQ">
                    <ul className="list-disc list-inside ml-4 space-y-4">
                        <li><strong>Q:</strong> Are annotations secure?<br /><strong className="text-yellow-400">A:</strong> No, annotations are stored in plain text and readable by any user with access to the object.</li>
                        <li><strong>Q:</strong> Can annotations be used in selectors or filters?<br /><strong className="text-yellow-400">A:</strong> No, they are not queryable like labels.</li>
                        <li><strong>Q:</strong> Do annotations update automatically in running pods?<br /><strong className="text-yellow-400">A:</strong> Not unless mounted as a volume and reloaded by the app.</li>
                        <li><strong>Q:</strong> Can I use JSON or YAML in annotations?<br /><strong className="text-yellow-400">A:</strong> Yes, as long as it's a valid string value.</li>
                        <li><strong>Q:</strong> Can I apply annotations via kubectl?<br /><strong className="text-yellow-400">A:</strong> Yes, use <code>kubectl annotate</code> or include them in YAML definitions.</li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Conclusion">
                    Kubernetes annotations are a flexible and powerful way to enrich your workloads with metadata. They are ideal for enabling tooling, documentation, auditing, or automation without interfering with core Kubernetes scheduling or orchestration. Use them wisely for better observability, integration, and operational clarity.
                </Section>
            </div>
        </div>
    );
}
