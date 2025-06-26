import {
    FaClipboardList,
    FaCode,
    FaSearch,
    FaTools,
    FaLightbulb,
    FaQuestionCircle,
} from "react-icons/fa";

export default function ConfigMaps() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <FaClipboardList className="w-8 h-8" />
                    Kubernetes ConfigMaps: Externalized Configuration Management
                </h1>

                <p className="text-lg mb-6">
                    A <strong>ConfigMap</strong> in Kubernetes lets you store non-sensitive
                    configuration data as key-value pairs. This helps decouple config from
                    your application image and manage it independently.
                </p>

                {/* What is a ConfigMap */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaClipboardList /> What is a ConfigMap?
                </h2>
                <p className="mb-4">
                    ConfigMaps can be consumed via environment variables, CLI args, or mounted as files. They enable dynamic configuration without rebuilding container images.
                </p>

                {/* Use Cases */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaTools /> Use Cases for ConfigMaps
                </h2>
                <ul className="list-disc list-inside ml-6 mb-6">
                    <li>Environment-specific configurations</li>
                    <li>Passing CLI args or properties</li>
                    <li>Managing config across microservices</li>
                    <li>Centralizing reusable configs</li>
                    <li>Dynamic updates (via mounted volume)</li>
                    <li>Versioning/debug flag injection</li>
                </ul>

                {/* Creating ConfigMaps */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaCode /> Creating ConfigMaps
                </h2>
                <p className="mb-1 font-semibold">From literals:</p>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                    kubectl create configmap app-config --from-literal=ENV=production --from-literal=LOG_LEVEL=debug
                </pre>

                <p className="mb-1 font-semibold">From a file:</p>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                    kubectl create configmap app-config --from-file=app.properties
                </pre>

                <p className="mb-1 font-semibold">From a directory:</p>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-6">
                    kubectl create configmap app-config --from-file=./configs/
                </pre>

                {/* Using in Pods */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaSearch /> Using ConfigMaps in Pods
                </h2>
                <p className="mb-1 font-semibold">As env variables:</p>
                <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                    {`envFrom:
  - configMapRef:
      name: app-config`}
                </pre>

                <p className="mb-1 font-semibold">As specific env key:</p>
                <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                    {`env:
  - name: LOG_LEVEL
    valueFrom:
      configMapKeyRef:
        name: app-config
        key: LOG_LEVEL`}
                </pre>

                <p className="mb-1 font-semibold">Mounted as files:</p>
                <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto mb-6">
                    {`volumes:
  - name: config-volume
    configMap:
      name: app-config

volumeMounts:
  - mountPath: /etc/config
    name: config-volume`}
                </pre>

                {/* Comparison Table */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaClipboardList /> ConfigMap vs Secret
                </h2>
                <div className="overflow-x-auto mb-6">
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
                                <td className="border px-4 py-2">Plaintext</td>
                                <td className="border px-4 py-2">Base64</td>
                            </tr>
                            <tr className="bg-gray-700">
                                <td className="border px-4 py-2">Security</td>
                                <td className="border px-4 py-2">None</td>
                                <td className="border px-4 py-2">Encrypted (optional)</td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="border px-4 py-2">Pod Use</td>
                                <td className="border px-4 py-2">env, volume, args</td>
                                <td className="border px-4 py-2">env, volume</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Best Practices */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaLightbulb /> Best Practices
                </h2>
                <ul className="list-disc list-inside ml-6 space-y-2 mb-6">
                    <li>Keep sensitive data in Secrets, not ConfigMaps.</li>
                    <li>Use labels for organization and querying.</li>
                    <li>Validate data via CI pipelines.</li>
                    <li>Automate versioning and updates.</li>
                    <li>Apply RBAC to restrict ConfigMap access.</li>
                </ul>

                {/* Managing ConfigMaps */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaClipboardList /> Managing ConfigMaps
                </h2>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-3">
                    kubectl edit configmap app-config
                </pre>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-3">
                    kubectl apply -f app-config.yaml
                </pre>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-6">
                    kubectl delete configmap app-config
                </pre>

                {/* YAML Example */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaCode /> YAML Example
                </h2>
                <pre className="bg-gray-800 p-4 rounded text-green-400 text-sm overflow-x-auto mb-6 font-mono whitespace-pre-wrap">
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

                {/* Quiz */}
                <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <FaQuestionCircle /> Interactive Quiz
                </h2>
                <ul className="list-disc list-inside space-y-4 mb-10">
                    <li><strong>Q:</strong> Can you store binary data in ConfigMaps?<br /><strong>A:</strong> No. Use Secrets.</li>
                    <li><strong>Q:</strong> Will ConfigMap changes auto-update pods?<br /><strong>A:</strong> Only if mounted as volume and reread. Env changes need a restart.</li>
                    <li><strong>Q:</strong> How to create ConfigMap from env file?<br /><strong>A:</strong> <code>kubectl create configmap my-config --from-env-file=env.conf</code></li>
                </ul>

                {/* Conclusion */}
                <h2 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    <FaLightbulb /> Conclusion
                </h2>
                <p>
                    ConfigMaps provide a flexible way to manage non-sensitive configuration data. Use them wisely in combination with Secrets, RBAC, and CI/CD practices to manage your Kubernetes workloads efficiently.
                </p>
            </div>
        </div>
    );
}
