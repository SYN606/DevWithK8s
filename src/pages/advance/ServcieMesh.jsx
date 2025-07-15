import { motion } from "framer-motion";
import {
    FaNetworkWired,
    FaLayerGroup,
    FaShieldAlt,
    FaList,
    FaCheckCircle,
} from "react-icons/fa";

export default function ServiceMesh() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-100 min-h-screen px-4 py-10 sm:px-6 lg:px-8"
        >
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 drop-shadow mb-12"
                >
                    <FaNetworkWired className="inline-block mb-1 mr-2 text-blue-400" />
                    Kubernetes Service Mesh
                </motion.h1>

                {/* Overview Section */}
                <section id="overview" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-blue-400 mb-4">
                        <FaNetworkWired className="inline-block mb-1 mr-2" /> Overview
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <p>
                            A <strong>service mesh</strong> in Kubernetes is a dedicated infrastructure layer that manages and optimizes communication between microservices. It decouples complex networking functions like security, traffic management, observability, and reliability from your application code.
                        </p>
                        <p className="mt-2">
                            Service meshes are essential for scalable, cloud-native microservice architectures.
                        </p>
                    </motion.div>
                </section>

                {/* Architecture Section */}
                <section id="architecture" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-cyan-400 mb-4">
                        <FaLayerGroup className="inline-block mb-1 mr-2" /> Architecture
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <p>A service mesh typically has two primary components:</p>
                        <table className="min-w-full border border-slate-700 text-left text-sm mt-4">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                    <th className="p-3 border">Component</th>
                                    <th className="p-3 border">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="p-3">Data Plane</td>
                                    <td className="p-3">
                                        Lightweight network proxies (usually sidecars) that handle
                                        service-to-service communication and enforce policies.
                                        Popular proxy: Envoy.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3">Control Plane</td>
                                    <td className="p-3">
                                        Centralized management layer that configures and coordinates
                                        the data plane, sets security policies, updates routing
                                        rules, observes telemetry, and manages certificates.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-4">
                            Some architectures (like Istio Ambient Mesh) may also include node
                            proxies instead of sidecars.
                        </p>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section id="features" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-green-400 mb-4">
                        <FaShieldAlt className="inline-block mb-1 mr-2" /> Features
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
                                <strong>Advanced Traffic Management:</strong> Smart routing, traffic splitting, canary and blue/green releases.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                <strong>Service Discovery & Load Balancing:</strong> Automatic and dynamic within the mesh.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                <strong>Security:</strong> End-to-end encryption (mTLS), authentication, and fine-grained authorization.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                <strong>Observability:</strong> Metrics, logs, and distributed tracing without touching application code.
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* Summary Table Section */}
                <section id="comparison" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-purple-400 mb-4">
                        <FaList className="inline-block mb-1 mr-2" /> Summary Table
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
                                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                    <th className="p-3 border">Functionality</th>
                                    <th className="p-3 border">Without Service Mesh</th>
                                    <th className="p-3 border">With Service Mesh</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="p-3">Service Discovery</td>
                                    <td className="p-3">Built-in, basic</td>
                                    <td className="p-3">Advanced, dynamic, zero-trust capable</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Traffic Management</td>
                                    <td className="p-3">Simple load balancing</td>
                                    <td className="p-3">Canary, blue/green, retries, circuit breaking</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Security</td>
                                    <td className="p-3">Manual TLS setup</td>
                                    <td className="p-3">Automatic mTLS, policy enforcement</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Observability</td>
                                    <td className="p-3">Custom libraries & tooling</td>
                                    <td className="p-3">Built-in metrics, tracing, logging</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );
}
