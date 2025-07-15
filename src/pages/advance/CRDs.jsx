import { motion } from "framer-motion";
import { CodeBlock, dracula } from "react-code-blocks";
import { FaCogs, FaCode, FaTable } from "react-icons/fa";

export default function KubernetesCRD() {
    const crdYaml = `
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: crontabs.stable.example.com
spec:
  group: stable.example.com
  versions:
    - name: v1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                cronSpec:
                  type: string
                image:
                  type: string
                replicas:
                  type: integer
  scope: Namespaced
  names:
    plural: crontabs
    singular: crontab
    kind: CronTab
    shortNames:
      - ct`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-100 min-h-screen px-4 py-10 sm:px-6 lg:px-8"
        >
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow mb-12"
                >
                    <FaCogs className="inline-block mb-1 mr-2 text-cyan-400" />
                    Kubernetes Custom Resource Definitions (CRDs)
                </motion.h1>

                {/* Overview Section */}
                <section id="overview" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-cyan-400 mb-4">
                        <FaCogs className="inline-block mb-1 mr-2" /> Overview
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <p className="mb-3">
                            Custom Resource Definitions (CRDs) in Kubernetes allow you to
                            extend the Kubernetes API by defining your own resource types,
                            known as <strong>custom resources</strong>. These work like
                            built-in Kubernetes objects (e.g., Pods or Deployments), but
                            are tailored to specific needs.
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                CRDs enable you to add new resource types without modifying
                                Kubernetes core code.
                            </li>
                            <li>
                                The API server automatically exposes REST endpoints for custom resources.
                            </li>
                            <li>
                                Controllers or operators manage their lifecycle.
                            </li>
                            <li>
                                Example: A <code>Database</code> CRD can automate database
                                provisioning and scaling.
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* YAML Example Section */}
                <section id="yaml-example" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-green-400 mb-4">
                        <FaCode className="inline-block mb-1 mr-2" /> CRD YAML Example
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <p className="mb-4">
                            Here’s a sample CRD YAML for defining a <code>CronTab</code> custom resource:
                        </p>
                        <CodeBlock
                            text={crdYaml}
                            language="yaml"
                            showLineNumbers={true}
                            theme={dracula}
                            wrapLines
                        />
                    </motion.div>
                </section>

                {/* Feature Comparison Section */}
                <section id="comparison" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-purple-400 mb-4">
                        <FaTable className="inline-block mb-1 mr-2" /> Feature Comparison
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50 overflow-x-auto"
                    >
                        <table className="min-w-full border border-slate-700 text-center text-sm">
                            <thead>
                                <tr className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                                    <th className="p-2 border border-slate-600">Feature</th>
                                    <th className="p-2 border border-slate-600">Built-in Resources</th>
                                    <th className="p-2 border border-slate-600">Custom Resources (CRDs)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="p-2">Defined by</td>
                                    <td className="p-2">Kubernetes</td>
                                    <td className="p-2">User (via CRD YAML)</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Managed by</td>
                                    <td className="p-2">Built-in controllers</td>
                                    <td className="p-2">Custom controllers/operators</td>
                                </tr>
                                <tr>
                                    <td className="p-2">API Path</td>
                                    <td className="p-2">/api/v1/...</td>
                                    <td className="p-2">/apis/&lt;group&gt;/&lt;version&gt;/...</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Use kubectl</td>
                                    <td className="p-2">✔️ Yes</td>
                                    <td className="p-2">✔️ Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Schema validation</td>
                                    <td className="p-2">✔️ Yes</td>
                                    <td className="p-2">✔️ Yes (via OpenAPI schema)</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );
}
