import { useState } from "react";
import { Link } from "react-router-dom";
import { TbBook2, TbSearch } from "react-icons/tb";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Basics",
        links: [
            { name: "Intro to Kubernetes", path: "/basics/intro" },
            { name: "Monolith vs Microservices", path: "/basics/monolith-vs-microservice" },
            { name: "Architecture & Kubectl", path: "/basics/architecture-of-k8s" },
            { name: "KIND Cluster & Installation", path: "/basics/introduction-to-kind-cluster-and-setup" },
        ],
    },
    {
        title: "Clusters",
        links: [
            { name: "KIND Cluster Creation", path: "/clusters/kind-cluster-config" },
            { name: "Minikube", path: "/clusters/minikube-clusters" },
            { name: "Namespaces", path: "/clusters/namespaces" },
        ],
    },
    {
        title: "Workloads",
        links: [
            { name: "Pods", path: "/workloads/pods" },
            { name: "Deployments", path: "/workloads/deployment" },
            { name: "ReplicaSet vs StatefulSet", path: "/workloads/rs-vs-sts" },
            { name: "Rolling Updates", path: "/workloads/rolling-updates" },
            { name: "DaemonSets", path: "/workloads/daemonsets" },
            { name: "Jobs & CronJobs", path: "/workloads/job&cron-jobs" },
        ],
    },
    {
        title: "Storage",
        links: [
            { name: "Storage Overview", path: "/storage/storage-overview" },
            { name: "Persistent Volumes (PV)", path: "/storage/persistent-volume" },
            { name: "StorageClasses", path: "/storage/" },
            { name: "Persistent Volume Claims (PVC)", path: "/storage/persistent-volume-claim" },
        ],
    },
    {
        title: "Networking",
        links: [
            { name: "Services", path: "/networking/services" },
            { name: "Ingress", path: "/networking/ingress" },
        ],
    },
    {
        title: "Configuration",
        links: [
            { name: "Annotations", path: "configuration/annotations" },
            { name: "ConfigMaps", path: "configuration/config-maps" },
            { name: "Secrets", path: "configuration/secrets" },
        ],
    },
    {
        title: "Scaling & Scheduling",
        links: [
            { name: "Probes", path: "scaling-and-scheduling/probes" },
            { name: "Taints & Tolerations", path: "scaling-and-scheduling/taints-and-tolerations" },
            { name: "HPA", path: "scaling-and-scheduling/HPA" },
            { name: "VPA", path: "scaling-and-scheduling/VPA" },
            { name: "Node Affinity", path: "scaling-and-scheduling/node-affinity" },
        ],
    },
    {
        title: "Access & Observability",
        links: [
            { name: "RBAC", path: "/rbac" },
            { name: "Monitoring & Logging", path: "/monitoring" },
        ],
    },
    {
        title: "Advanced Topics",
        links: [
            { name: "CRDs", path: "/crd" },
            { name: "Helm, API, Operators", path: "/helm" },
            { name: "Sidecar & Init Containers", path: "/sidecar" },
            { name: "Istio Service Mesh", path: "/istio" },
        ],
    },
]

export default function Homepage() {
    const [search, setSearch] = useState("");

    const filteredCategories = categories.map((category) => ({
        ...category,
        links: category.links.filter((link) =>
            link.name.toLowerCase().includes(search.toLowerCase())
        ),
    }));

    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen px-4 py-10 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🚀 Kubernetes with Kind
                </motion.h1>
                <p className="text-center text-lg text-gray-300 mb-8">
                    Learn Kubernetes faster with curated notes, Kind clusters, and practical <span className="text-green-400 font-semibold">kubectl</span> commands.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="🔍 Search topics..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <TbSearch className="absolute right-4 top-3.5 text-gray-400" size={20} />
                </div>

                {/* Cheat Sheet Highlight */}
                <div className="mb-12 grid md:grid-cols-2 gap-6">
                    <Link
                        to="/cheat-sheet"
                        className="bg-blue-700 hover:bg-blue-800 p-6 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1"
                    >
                        <h2 className="text-xl font-bold mb-2">📄 Kind + Kubectl Commands</h2>
                        <p className="text-gray-200 text-sm">
                            Quick reference for essential CLI commands to manage clusters.
                        </p>
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCategories.map(
                        (category) =>
                            category.links.length > 0 && (
                                <motion.div
                                    key={category.title}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gray-800 rounded-xl p-5 shadow-lg"
                                >
                                    <h3 className="text-lg font-semibold text-blue-300 mb-3">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {category.links.map((link) => (
                                            <li key={link.path}>
                                                <Link
                                                    to={link.path}
                                                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                                                >
                                                    • {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
