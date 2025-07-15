import { motion } from "framer-motion";
import {
    FaCogs,
    FaTasks,
    FaTable,
    FaProjectDiagram,
    FaRocket,
    FaSyncAlt,
    FaTools,
    FaCheckCircle,
} from "react-icons/fa";

export default function SidecarVsInitContainers() {
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
                    <FaProjectDiagram className="inline-block mb-1 mr-2 text-blue-400" />
                    Sidecar vs Init Containers
                </motion.h1>

                {/* Sidecar Containers Section */}
                <section id="sidecar" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-blue-400 mb-4">
                        <FaSyncAlt className="inline-block mb-1 mr-2" /> Sidecar Containers
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <p>
                            A <strong>sidecar container</strong> runs alongside the main application container
                            within the same Pod, providing supplementary services that enhance or extend
                            the application's capabilities without modifying its code.
                        </p>
                        <h3 className="text-lg font-semibold text-cyan-400 mt-4 flex items-center gap-2">
                            <FaCogs /> Key Characteristics
                        </h3>
                        <ul className="list-inside space-y-2">
                            <li className="flex items-start gap-2">
                                <FaTools className="text-cyan-400 mt-1" />
                                Starts and runs concurrently with the main container.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaTools className="text-cyan-400 mt-1" />
                                Shares the Pod's network and volumes but has its own filesystem.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaTools className="text-cyan-400 mt-1" />
                                Provides ongoing auxiliary functions.
                            </li>
                        </ul>
                        <h3 className="text-lg font-semibold text-cyan-400 mt-4 flex items-center gap-2">
                            <FaTasks /> Common Use Cases
                        </h3>
                        <ul className="list-inside space-y-2">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-400 mt-1" />
                                Logging and monitoring: Export logs or metrics.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-400 mt-1" />
                                Service mesh proxy (e.g., Istio’s Envoy) for traffic control.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-400 mt-1" />
                                Security: Certificate rotation, authentication handlers.
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* Init Containers Section */}
                <section id="init" className="space-y-4">
                    <h2 className="sticky top-0 backdrop-blur-md z-10 text-2xl font-bold text-cyan-400 mb-4">
                        <FaRocket className="inline-block mb-1 mr-2" /> Init Containers
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-md border border-slate-700/50"
                    >
                        <p>
                            An <strong>init container</strong> runs to completion before any application or
                            sidecar containers start inside a Pod. It’s used for setup tasks required before
                            the main application launches.
                        </p>
                        <h3 className="text-lg font-semibold text-cyan-400 mt-4 flex items-center gap-2">
                            <FaCogs /> Key Characteristics
                        </h3>
                        <ul className="list-inside space-y-2">
                            <li className="flex items-start gap-2">
                                <FaTools className="text-cyan-400 mt-1" />
                                Runs sequentially and exits before main containers start.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaTools className="text-cyan-400 mt-1" />
                                Performs one-time initialization or setup.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaTools className="text-cyan-400 mt-1" />
                                Ensures prerequisites are ready for main containers.
                            </li>
                        </ul>
                        <h3 className="text-lg font-semibold text-cyan-400 mt-4 flex items-center gap-2">
                            <FaTasks /> Common Use Cases
                        </h3>
                        <ul className="list-inside space-y-2">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-400 mt-1" />
                                Download or prepare configuration files and data.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-400 mt-1" />
                                Wait for external services to become available.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-400 mt-1" />
                                Setup environment prerequisites.
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
                                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                    <th className="p-3 border">Aspect</th>
                                    <th className="p-3 border">Sidecar Container</th>
                                    <th className="p-3 border">Init Container</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="p-3">Lifecycle</td>
                                    <td className="p-3">Runs concurrently with the main container</td>
                                    <td className="p-3">
                                        Runs before main and sidecar containers, then exits
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3">Purpose</td>
                                    <td className="p-3">
                                        Provides ongoing auxiliary functions (e.g., logging, proxy)
                                    </td>
                                    <td className="p-3">
                                        Performs one-time initialization tasks
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3">Duration</td>
                                    <td className="p-3">Runs as long as the pod is running</td>
                                    <td className="p-3">Exists only during initialization</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Use Case</td>
                                    <td className="p-3">
                                        Logging, monitoring, proxy, config sync
                                    </td>
                                    <td className="p-3">
                                        Pre-download data, setup config, wait-for-service
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );
}
