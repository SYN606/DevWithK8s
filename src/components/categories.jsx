
import { FaCube, FaServer, FaTasks, FaDatabase, FaNetworkWired, FaCogs, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";

const categories = [
    {
        title: "Basics",
        icon: FaCube,
        links: [
            { name: "Intro to Kubernetes", path: "/basics/intro" },
            { name: "Monolith vs Microservices", path: "/basics/monolith-vs-microservice" },
            { name: "Architecture & Kubectl", path: "/basics/architecture-of-k8s" },
            { name: "KIND Cluster & Installation", path: "/basics/introduction-to-kind-cluster-and-setup" },
        ],
    },
    {
        title: "Clusters",
        icon: FaServer,
        links: [
            { name: "KIND Cluster Creation", path: "/clusters/kind-cluster-config" },
            { name: "Minikube", path: "/clusters/minikube-clusters" },
            { name: "Namespaces", path: "/clusters/namespaces" },
        ],
    },
    {
        title: "Workloads",
        icon: FaTasks,
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
        icon: FaDatabase,
        links: [
            { name: "Storage Overview", path: "/storage/storage-overview" },
            { name: "Persistent Volumes (PV)", path: "/storage/persistent-volume" },
            { name: "StorageClasses", path: "/storage/storage-classes" },
            { name: "Persistent Volume Claims (PVC)", path: "/storage/persistent-volume-claim" },
        ],
    },
    {
        title: "Networking",
        icon: FaNetworkWired,
        links: [
            { name: "Services", path: "/networking/services" },
            { name: "Ingress", path: "/networking/ingress" },
        ],
    },
    {
        title: "Configuration",
        icon: FaCogs,
        links: [
            { name: "Annotations", path: "/configuration/annotations" },
            { name: "ConfigMaps", path: "/configuration/config-maps" },
            { name: "Secrets", path: "/configuration/secrets" },
        ],
    },
    {
        title: "Scaling & Scheduling",
        icon: FaChartLine,
        links: [
            { name: "Probes", path: "/scaling-and-scheduling/probes" },
            { name: "Taints & Tolerations", path: "/scaling-and-scheduling/taints-and-tolerations" },
            { name: "HPA", path: "/scaling-and-scheduling/HPA" },
            { name: "VPA", path: "/scaling-and-scheduling/VPA" },
            { name: "Node Affinity", path: "/scaling-and-scheduling/node-affinity" },
        ],
    },
    {
        title: "Access & Observability",
        icon: FaShieldAlt,
        links: [
            { name: "RBAC", path: "/access-and-observability/rbac" },
            { name: "Monitoring & Logging", path: "/access-and-observability/monitoring-and-logging" },
        ],
    },
    {
        title: "Advanced Topics",
        icon: FaRocket,
        links: [
            { name: "CRDs", path: "advance-topics/CRDs" },
            { name: "Helm, API, Operators", path: "advance-topics/helm-api-and-operators" },
            { name: "Sidecar & Init Containers", path: "advance-topics/sidecar-and-init-container" },
            { name: "Service Mesh", path: "advance-topics/service-mesh" },
        ],
    },
];

export default categories;