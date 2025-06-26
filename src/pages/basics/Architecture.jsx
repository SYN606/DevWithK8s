import { motion } from 'framer-motion';
import { PageNavigation } from '../../components';

export default function KubernetesArchitecture() {
    return (
        <main className="bg-gray-950 text-white font-sans px-4 md:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-blue-400 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    📀 Kubernetes Architecture & Kubectl
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Kubernetes follows a client-server architecture with a centralised{' '}
                    <span className="text-yellow-300 font-semibold">Control Plane</span> and multiple{' '}
                    <span className="text-yellow-300 font-semibold">Worker Nodes</span>. The interaction between components is
                    managed via the <span className="text-green-400 font-semibold">kubectl</span> CLI tool.
                </motion.p>

                <Section
                    title="🏢 Control Plane Components"
                    description="These components manage the cluster and make global decisions about the cluster (like scheduling)."
                    items={[
                        ['kube-apiserver', 'Frontend of the control plane, receives all REST requests.'],
                        ['etcd', 'Consistent and highly-available key-value store for configuration data.'],
                        ['kube-scheduler', 'Assigns pods to nodes based on resource availability.'],
                        ['kube-controller-manager', 'Runs various controllers (like ReplicationController, NodeController).'],
                        ['cloud-controller-manager', 'Integrates cloud provider APIs into the cluster.'],
                    ]}
                />

                <Section
                    title="💻 Worker Node Components"
                    description="Worker nodes run the actual application workloads in the form of containers."
                    items={[
                        ['kubelet', 'Ensures that containers are running in a Pod as expected.'],
                        ['kube-proxy', 'Handles networking and forwarding traffic between pods.'],
                        ['Container Runtime', 'Software responsible for running containers (e.g., containerd, Docker).'],
                    ]}
                />

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-green-400 mb-2">🔧 Kubectl</h2>
                    <p className="text-gray-300 mb-4">
                        Kubectl is the CLI tool used to interact with the Kubernetes API server.
                    </p>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-gray-300 mb-2">Examples:</p>
                        <pre className="bg-black p-3 rounded text-green-300 text-sm overflow-x-auto">
                            {`kubectl get nodes             # List all nodes
kubectl get pods              # List all pods in current namespace
kubectl describe pod <pod-name>  # Get detailed info about a pod
kubectl apply -f pod.yaml     # Apply a YAML file
kubectl delete pod <pod-name>    # Delete a specific pod`}
                        </pre>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-green-400 mb-4">🧹 Logical Architecture</h2>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <pre className="text-sm text-gray-200 overflow-x-auto whitespace-pre-wrap">
                            {`+-------------------+
|    kubectl CLI    |
+--------+----------+
         |
         v
+---------------------------+
|  API Server (Control Plane) |
+--------+----------+----------+----------+
|        |          |          |
v        v          v          v
etcd  Scheduler  Controller  Cloud Controller
                 Manager       Manager
         |
         v
  +----------------+
  |  Worker Nodes  |
  +----------------+
  |  Kubelet       |
  |  Kube Proxy    |
  |  Containerd    |
  +----------------+`}
                        </pre>
                    </div>
                </motion.div>

                <PageNavigation
                    leftPath="/basics/monolith-vs-microservice"
                    leftLabel="Monolith vs Microservices"
                    rightPath="/basics/introduction-to-kind-cluster-and-setup"
                    rightLabel="KIND Cluster & Installation"
                />
            </div>
        </main>
    );
}

// Reusable Section Component
const Section = ({ title, description, items }) => (
    <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
    >
        <h2 className="text-2xl font-bold text-green-400 mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
            {items.map(([title, desc], idx) => (
                <li key={idx}>
                    <span className="text-yellow-300 font-semibold">{title}</span>: {desc}
                </li>
            ))}
        </ul>
    </motion.div>
);
