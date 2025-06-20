import { motion } from 'framer-motion';
import {
    FaClipboardList,
    FaCode,
    FaSearch,
    FaTools,
    FaLightbulb,
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
        <div className="text-base leading-relaxed">{children}</div>
    </motion.div>
);

export default function ConfigMaps() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-cyan-400 mb-10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Kubernetes ConfigMaps: Externalized Configuration Management
                </motion.h1>

                <Section icon={FaClipboardList} title="What is a ConfigMap?">
                    A <strong className="text-yellow-400">ConfigMap</strong> is a Kubernetes object designed to store non-sensitive configuration data as key-value pairs. ConfigMaps allow you to decouple configuration artifacts from application images, enabling more flexibility, portability, and environment-specific customization without modifying your app.
                    <br /><br />
                    ConfigMaps can be used by pods through environment variables, CLI arguments, or by mounting them as configuration files inside the container. They support dynamic configuration, especially when consumed via mounted volumes.
                </Section>

                <Section icon={FaTools} title="Use Cases for ConfigMaps">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Defining environment-specific settings</li>
                        <li>Providing CLI arguments or properties to apps</li>
                        <li>Managing configuration for multiple microservices</li>
                        <li>Centralizing shared configs across environments</li>
                        <li>Dynamic updates to non-sensitive data</li>
                        <li>Injecting app versioning or toggling debug flags</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Creating ConfigMaps">
                    <p className="mb-1 font-semibold text-yellow-400">From literals:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm mb-4 overflow-x-auto">
                        kubectl create configmap app-config --from-literal=ENV=production --from-literal=LOG_LEVEL=debug
                    </pre>

                    <p className="mb-1 font-semibold text-yellow-400">From a file:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm mb-4 overflow-x-auto">
                        kubectl create configmap app-config --from-file=app.properties
                    </pre>

                    <p className="mb-1 font-semibold text-yellow-400">From a directory:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">
                        kubectl create configmap app-config --from-file=./configs/
                    </pre>
                </Section>

                <Section icon={FaSearch} title="Using ConfigMaps in Pods">
                    <p className="font-semibold text-yellow-400 mb-1">As environment variables:</p>
                    <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm mb-4 overflow-x-auto">
                        {`envFrom:
  - configMapRef:
      name: app-config`}
                    </pre>

                    <p className="font-semibold text-yellow-400 mb-1">Specific keys as env vars:</p>
                    <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm mb-4 overflow-x-auto">
                        {`env:
  - name: LOG_LEVEL
    valueFrom:
      configMapKeyRef:
        name: app-config
        key: LOG_LEVEL`}
                    </pre>

                    <p className="font-semibold text-yellow-400 mb-1">Mount as files:</p>
                    <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto">
                        {`volumes:
  - name: config-volume
    configMap:
      name: app-config

volumeMounts:
  - mountPath: /etc/config
    name: config-volume`}
                    </pre>
                </Section>

                <Section icon={FaClipboardList} title="ConfigMap vs Secret">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-sm border-collapse">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="border px-4 py-2">Feature</th>
                                    <th className="border px-4 py-2">ConfigMap</th>
                                    <th className="border px-4 py-2">Secret</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-700">
                                    <td className="border px-4 py-2">Data Type</td>
                                    <td className="border px-4 py-2">Non-sensitive</td>
                                    <td className="border px-4 py-2">Sensitive</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="border px-4 py-2">Encoding</td>
                                    <td className="border px-4 py-2">Plain text</td>
                                    <td className="border px-4 py-2">Base64</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="border px-4 py-2">Encryption</td>
                                    <td className="border px-4 py-2">None</td>
                                    <td className="border px-4 py-2">Optional at rest</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="border px-4 py-2">Usage</td>
                                    <td className="border px-4 py-2">env, volumes, args</td>
                                    <td className="border px-4 py-2">env, volumes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices">
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Use for non-sensitive configuration only</li>
                        <li>Organize related keys logically in one ConfigMap</li>
                        <li>Label ConfigMaps for discoverability and management</li>
                        <li>Automate ConfigMap updates and versioning</li>
                        <li>Validate configuration in CI before applying</li>
                        <li>Combine with RBAC to control read/write access</li>
                    </ul>
                </Section>

                <Section icon={FaClipboardList} title="Managing ConfigMaps">
                    <p className="mb-1 font-semibold text-yellow-400">Edit a ConfigMap:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm mb-4 overflow-x-auto">
                        kubectl edit configmap app-config
                    </pre>

                    <p className="mb-1 font-semibold text-yellow-400">Apply from YAML:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm mb-4 overflow-x-auto">
                        kubectl apply -f app-config.yaml
                    </pre>

                    <p className="mb-1 font-semibold text-yellow-400">Delete a ConfigMap:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">
                        kubectl delete configmap app-config
                    </pre>
                </Section>

                <Section icon={FaCode} title="YAML Example">
                    <pre className="bg-gray-800 text-green-400 text-sm p-4 rounded overflow-x-auto font-mono whitespace-pre-wrap">
                        {`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  labels:
    app: demo
    tier: backend
  annotations:
    created-by: dev-team
data:
  ENV: production
  LOG_LEVEL: info`}
                    </pre>
                </Section>

                <Section icon={FaQuestionCircle} title="FAQ">
                    <ul className="list-disc list-inside ml-4 space-y-4">
                        <li><strong>Q:</strong> Can ConfigMaps hold binary data?<br /><strong className="text-yellow-400">A:</strong> No, use Secrets.</li>
                        <li><strong>Q:</strong> Do updates auto-refresh in pods?<br /><strong className="text-yellow-400">A:</strong> Only when mounted as volumes and reread.</li>
                        <li><strong>Q:</strong> Create from env file?<br /><strong className="text-yellow-400">A:</strong> <code>kubectl create configmap my-config --from-env-file=.env</code></li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Conclusion">
                    ConfigMaps provide an elegant way to manage environment-specific configuration in Kubernetes. They support clean separation of concerns, CI/CD integration, and dynamic deployment strategies — especially when used alongside Secrets and automation.
                </Section>
            </div>
        </div>
    );
}
