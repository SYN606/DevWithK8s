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
            { name: "Services", path: "/services" },
            { name: "Ingress", path: "/ingress" },
        ],
    },
    {
        title: "Configuration",
        links: [
            { name: "Annotations", path: "/annotations" },
            { name: "ConfigMaps", path: "/configmaps" },
            { name: "Secrets", path: "/secrets" },
        ],
    },
    {
        title: "Scaling & Scheduling",
        links: [
            { name: "Probes", path: "/probes" },
            { name: "Taints & Tolerations", path: "/taints" },
            { name: "HPA", path: "/hpa" },
            { name: "VPA", path: "/vpa" },
            { name: "Node Affinity", path: "/affinity" },
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
];

export default function Homepage() {
    const [search, setSearch] = useState("");

    const filteredCategories = categories.map((category) => ({
        ...category,
        links: category.links.filter((link) =>
            link.name.toLowerCase().includes(search.toLowerCase())
        ),
    }));

    return (
        <div className="bg-gray-950 text-white min-h-screen px-6 py-10 font-sans">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-blue-400 text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    📘 Kubernetes with Kind – Notes Hub
                </motion.h1>

                <p className="text-center text-lg text-gray-300 mb-8">
                    A centralized collection of comprehensive Kubernetes notes using{" "}
                    <span className="text-yellow-300 font-semibold">Kind</span> clusters and{" "}
                    <span className="text-yellow-300 font-semibold">kubectl</span> commands.
                </p>

                <div className="mb-12 grid md:grid-cols-2 gap-6">
                    <Link
                        to="/cheat-sheet"
                        className="bg-blue-700 hover:bg-blue-800 p-6 rounded-xl shadow transition duration-300"
                    >
                        <h2 className="text-xl font-bold mb-2">📄 Kind + Kubectl Commands</h2>
                        <p className="text-sm text-gray-300">
                            CLI commands from basic to advanced for working with Kubernetes clusters.
                        </p>
                    </Link>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
                            <TbBook2 size={24} /> Kubernetes Syllabus
                        </h2>
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                placeholder="Search topics..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-4 py-2 text-sm text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <TbSearch className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {filteredCategories.map(
                        (category) =>
                            category.links.length > 0 && (
                                <div key={category.title} className="mb-6">
                                    <h3 className="text-lg font-semibold text-blue-300 mb-2">{category.title}</h3>
                                    <ul className="space-y-1 list-disc list-inside text-gray-300 text-sm md:text-base">
                                        {category.links.map((link) => (
                                            <motion.li
                                                key={link.path}
                                                whileHover={{ scale: 1.02, x: 6 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    className="hover:text-green-300 transition-colors duration-200"
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
