import { NavLink, useLocation } from "react-router-dom";

const routes = [
    {
        section: "Home",
        items: [
            { name: "Homepage", path: "/" },
            { name: "Cheat Sheet", path: "/cheat-sheet" },
        ],
    },
    {
        section: "Basics",
        items: [
            { name: "Intro", path: "/basics/intro" },
            { name: "Monolith vs Microservices", path: "/basics/monolith-vs-microservice" },
            { name: "Kubernetes Architecture", path: "/basics/architecture-of-k8s" },
            { name: "Kind Cluster Setup", path: "/basics/introduction-to-kind-cluster-and-setup" },
        ],
    },
    {
        section: "Clusters",
        items: [
            { name: "Minikube", path: "/clusters/minikube-clusters" },
            { name: "Kind Config", path: "/clusters/kind-cluster-config" },
            { name: "Namespaces", path: "/clusters/namespaces" },
        ],
    },
    {
        section: "Workloads",
        items: [
            { name: "Pods", path: "/workloads/pods" },
            { name: "Deployment", path: "/workloads/deployment" },
            { name: "RS vs STS", path: "/workloads/rs-vs-sts" },
            { name: "Rolling Updates", path: "/workloads/rolling-updates" },
            { name: "DaemonSets", path: "/workloads/daemonsets" },
            { name: "Jobs & CronJobs", path: "/workloads/job&cron-jobs" },
        ],
    },
    {
        section: "Storage",
        items: [
            { name: "Overview", path: "/storage/storage-overview" },
            { name: "Persistent Volume", path: "/storage/persistent-volume" },
            { name: "Storage Classes", path: "/storage/storage-classes" },
            { name: "Persistent Volume Claim", path: "/storage/persistent-volume-claim" },
        ],
    },
    {
        section: "Networking",
        items: [
            { name: "Services", path: "/networking/services" },
            { name: "Ingress", path: "/networking/ingress" },
        ],
    },
    {
        section: "Configuration",
        items: [
            { name: "Annotations", path: "/configuration/annotations" },
            { name: "ConfigMaps", path: "/configuration/config-maps" },
            { name: "Secrets", path: "/configuration/secrets" },
        ],
    },
    {
        section: "Scaling & Scheduling",
        items: [
            { name: "Probes", path: "/scaling-and-scheduling/probes" },
            { name: "Taints and Tolrations", path: "/scaling-and-scheduling/taints-and-tolrations" },
            { name: "HPA", path: "/scaling-and-scheduling/HPA" },
            { name: "VPA", path: "/scaling-and-scheduling/VPA" },
            { name: "Node Affinity", path: "/scaling-and-scheduling/node-affinity" },
        ],
    },
    {
        section: "Access & Observability",
        items: [
            { name: "RBAC", path: "/access-and-observability/rbac" },
            { name: "Monitoring and Logging", path: "/access-and-observability/monitoring-and-logging" },
        ],
    },
    {
        section: "Advance Topics",
        items: [
            { name: "CRDs", path: "/advance-topics/CRDs" },
            { name: "Helm API and Operators", path: "/advance-topics/helm-api-and-operators" },
            { name: "SideCar and Init Containers", path: "/advance-topics/sidecar-and-init-container" },
            { name: "Service Mesh", path: "/advance-topics/service-mesh" },
        ],
    },
];

export default function RoutingTable() {
    const { pathname } = useLocation();

    // Hide on homepage
    if (pathname === "/") return null;
    else if (pathname === "/idea") return null;
    else if (pathname === '/support') return null;

    return (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 shadow-lg text-sm max-h-[85vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">📘 Kubernetes Topics</h2>

            {routes.map(({ section, items }) => (
                <div key={section} className="mb-4">
                    <h3 className="text-yellow-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                        {section}
                    </h3>
                    <ul className="space-y-1 pl-2 border-l border-gray-700">
                        {items.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block px-2 py-1 rounded transition-colors duration-200 ${isActive
                                            ? "text-emerald-400 font-semibold bg-gray-800"
                                            : "text-gray-300 hover:text-white hover:bg-gray-800"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
