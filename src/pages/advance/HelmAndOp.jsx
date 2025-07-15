import { motion } from "framer-motion";
import {
    FaCogs,
    FaShip,
    FaTable,
    FaCube,
    FaWrench,
    FaCheckCircle,
} from "react-icons/fa";

export default function HelmVsOperator() {
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
                    className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow mb-12"
                >
                    <FaCube className="inline-block mb-1 mr-2 text-indigo-400" />
                    Helm vs <FaWrench className="inline-block mb-1" /> Kubernetes Operators
                </motion.h1>

                {/* Overview Section */}
                <section id="overview" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-indigo-400 mb-4">
                        <FaCogs className="inline-block mb-1 mr-2" /> Overview
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <h3 className="text-xl font-semibold text-indigo-400 flex items-center gap-2 mb-3">
                            <FaCube /> Helm: Kubernetes Package Manager
                        </h3>
                        <p className="mb-4">
                            Helm is a package manager for Kubernetes that streamlines deployment, management, and configuration of applications through <strong>Helm Charts</strong>.
                        </p>
                        <ul className="list-inside space-y-2">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                Helm Charts are YAML templates describing Kubernetes resources for an application.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                Automates install, upgrade, rollback, and deletion of resources using the Helm CLI.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                Simplifies managing complex apps but doesn’t handle runtime state beyond native controllers.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-indigo-400 flex items-center gap-2 mt-6">
                            <FaWrench /> Operators: Kubernetes Controllers for Custom Resources
                        </h3>
                        <p className="mb-4">
                            Operators are custom controllers that use Kubernetes APIs (and sometimes CRDs) to automate full lifecycle management of complex, stateful applications.
                        </p>
                        <ul className="list-inside space-y-2">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                Encapsulate operational knowledge to automate configuration, scaling, failover, and backups.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                Built with Operator SDK/Kubebuilder and application-specific logic.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                Continuously observe and reconcile actual vs desired state.
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* Comparison Table Section */}
                <section id="comparison" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-purple-400 mb-4">
                        <FaTable className="inline-block mb-1 mr-2" /> Comparison Table
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
                                <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                                    <th className="p-3 border">Aspect</th>
                                    <th className="p-3 border">Helm</th>
                                    <th className="p-3 border">Operator</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="p-3">Deployment Model</td>
                                    <td className="p-3">Declarative (YAML Charts)</td>
                                    <td className="p-3">Declarative + Imperative automation</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Resource API</td>
                                    <td className="p-3">Uses native Kubernetes resources</td>
                                    <td className="p-3">Extends API via CRDs & custom controllers</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Automation Level</td>
                                    <td className="p-3">Install/Upgrade/Rollback</td>
                                    <td className="p-3">Full lifecycle (install, repair, backup)</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Custom Logic</td>
                                    <td className="p-3">Limited (templating, hooks)</td>
                                    <td className="p-3">Extensive (custom code)</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Reconciliation</td>
                                    <td className="p-3">No (relies on Kubernetes)</td>
                                    <td className="p-3">Yes (active monitoring)</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Use Case</td>
                                    <td className="p-3">Stateless/simple stateful apps</td>
                                    <td className="p-3">Complex stateful apps needing automation</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </section>

                {/* When to Use Section */}
                <section id="when-to-use" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-green-400 mb-4">
                        <FaShip className="inline-block mb-1 mr-2" /> When to Use
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <ul className="list-inside space-y-3">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                <strong>Use Helm</strong> for packaging & deploying most apps, especially stateless workloads or simple stateful apps.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                <strong>Use Operators</strong> for complex, stateful apps requiring intelligent automation (failover, backups, upgrades with migrations).
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Summary:</strong> Helm simplifies <em>deployment</em>, while Operators embed operational <em>intelligence</em> for managing sophisticated apps.
                        </p>
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );
}
