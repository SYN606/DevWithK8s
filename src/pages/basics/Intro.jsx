import { motion } from "framer-motion";
import { PageNavigation } from "../../components";


export default function KubernetesIntro() {
    return (
        <div className="bg-gray-950 text-white font-sans p-8 leading-relaxed min-h-screen">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-blue-400 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    📘 Introduction to Kubernetes
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Kubernetes, often abbreviated as <span className="text-yellow-300 font-semibold">K8s</span>, is an open-source
                    container orchestration platform designed to automate the deployment, scaling, and management of
                    containerized applications.
                </motion.p>

                <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <h2 className="text-2xl font-bold text-green-400 mb-2">🌐 Why Kubernetes?
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Manage large-scale distributed systems efficiently.</li>
                        <li>Provides self-healing, load balancing, scaling, and service discovery.</li>
                        <li>Supports multi-environment (cloud, hybrid, on-prem).</li>
                    </ul>
                </motion.div>

                <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-2xl font-bold text-green-400 mb-2">🧱 From Monolithic to Microservices
                    </h2>
                    <p className="text-gray-300 mb-2">
                        Traditional applications were often built using a <span className="text-blue-400 font-semibold">monolithic architecture</span>, bundling all features into one codebase. Modern applications favor <span className="text-blue-400 font-semibold">microservices</span> — a collection of small, loosely coupled services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-lg font-bold text-yellow-300 mb-2">Monolithic</h3>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Single deployment</li>
                                <li>Tightly coupled components</li>
                                <li>Difficult to scale parts independently</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-lg font-bold text-yellow-300 mb-2">Microservices</h3>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Independent components</li>
                                <li>Decoupled deployments</li>
                                <li>Scalable and flexible</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-gray-300">
                        Kubernetes embraces the microservices philosophy, enabling independent deployment and management of containers.
                    </p>
                </motion.div>

                <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-2xl font-bold text-green-400 mb-2">⚙️ Core Kubernetes Concepts
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li><strong className="text-yellow-300">Pod:</strong> Smallest deployable unit; contains one or more containers.</li>
                        <li><strong className="text-yellow-300">Node:</strong> A worker machine in Kubernetes (VM/physical).</li>
                        <li><strong className="text-yellow-300">Cluster:</strong> A set of nodes managed by the control plane.</li>
                        <li><strong className="text-yellow-300">Deployment:</strong> Manages desired state of apps.</li>
                        <li><strong className="text-yellow-300">Service:</strong> Exposes app pods over the network.</li>
                    </ul>
                </motion.div>

                <motion.div className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <h2 className="text-2xl font-bold text-green-400 mb-2">🚀 Benefits of Kubernetes
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Self-healing and auto-restarts</li>
                        <li>Load balancing & service discovery</li>
                        <li>Declarative config & automation</li>
                        <li>Horizontal scaling</li>
                    </ul>
                </motion.div>

                <PageNavigation
                    leftPath="/"
                    leftLabel="Homepage"
                    rightPath="/basics/monolith-vs-microservice"
                    rightLabel="Monolithic Vs Microservices"
                />
            </div>
        </div>
    );
}
