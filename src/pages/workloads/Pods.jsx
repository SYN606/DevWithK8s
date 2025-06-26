import {
    FaCubes,
    FaInfoCircle,
    FaSyncAlt,
    FaFileAlt,
    FaTerminal,
    FaLayerGroup,
    FaNetworkWired,
    FaClock
} from "react-icons/fa";
import { PageNavigation } from "../../components";

const PodsPage = () => {
    return (
        <div className="bg-gray-950 text-gray-200 font-sans p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <FaCubes className="w-8 h-8" />
                    Kubernetes Pods
                </h1>

                <Section icon={<FaInfoCircle />} title="What is a Pod?">
                    <p className="text-gray-300 leading-relaxed">
                        A <strong>Pod</strong> is the smallest and simplest Kubernetes object. It represents one or more containers
                        (usually one) that are deployed together on a single node. Containers in a Pod share the same network IP,
                        port space, and storage volumes.
                    </p>
                </Section>

                <Section icon={<FaSyncAlt />} title="Pod Lifecycle">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Pending:</strong> Pod has been accepted by the system, but containers are not yet running.</li>
                        <li><strong>Running:</strong> Pod has been bound to a node and all containers are running or starting.</li>
                        <li><strong>Succeeded:</strong> All containers in the Pod have completed successfully and will not restart.</li>
                        <li><strong>Failed:</strong> All containers terminated, and at least one container terminated with a failure.</li>
                        <li><strong>Unknown:</strong> The state of the Pod cannot be determined (usually due to communication problems).</li>
                    </ul>
                </Section>

                <Section icon={<FaFileAlt />} title="Pod YAML Example">
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
    - name: nginx-container
      image: nginx:latest
      ports:
        - containerPort: 80`}
                    </pre>
                    <div className="bg-gray-700 p-3 rounded text-gray-300 text-sm mb-6">
                        <strong>Explanation:</strong>
                        <ul className="list-disc list-inside mt-2">
                            <li><code>apiVersion: v1</code> — Kubernetes API version.</li>
                            <li><code>kind: Pod</code> — Defines this resource as a Pod.</li>
                            <li><code>metadata.name</code> — The name of the Pod (<code>nginx-pod</code>).</li>
                            <li><code>metadata.labels</code> — Labels for identification and selection.</li>
                            <li><code>spec.containers</code> — List of containers in the Pod.</li>
                            <li><code>containers[].name</code> — Container name inside the Pod.</li>
                            <li><code>containers[].image</code> — Docker image used (<code>nginx:latest</code>).</li>
                            <li><code>containers[].ports</code> — Ports exposed by the container.</li>
                        </ul>
                    </div>
                </Section>

                <Section icon={<FaTerminal />} title="Common kubectl Commands for Pods">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><code>kubectl get pods</code> — List all pods in the current namespace.</li>
                        <li><code>kubectl describe pod nginx-pod</code> — Show detailed info about a specific Pod.</li>
                        <li><code>kubectl logs nginx-pod</code> — View logs of the Pod's containers.</li>
                        <li><code>kubectl exec -it nginx-pod -- /bin/bash</code> — Execute a shell inside the Pod container.</li>
                        <li><code>kubectl delete pod nginx-pod</code> — Delete the specified Pod.</li>
                    </ul>
                </Section>

                <Section icon={<FaLayerGroup />} title="Multi-container Pods">
                    <p className="text-gray-300 leading-relaxed">
                        Pods can run multiple containers that work closely together, such as a main application container and a
                        helper container (sidecar). These containers share resources like networking and volumes.
                    </p>
                </Section>

                <Section icon={<FaNetworkWired />} title="Pod Networking">
                    <p className="text-gray-300 leading-relaxed">
                        All containers in a Pod share the same IP address and port space. Containers can communicate over
                        <code> localhost</code>. Each Pod gets its own unique IP address within the cluster.
                    </p>
                </Section>

                <Section icon={<FaClock />} title="Pod Lifecycle Management">
                    <p className="text-gray-300 leading-relaxed">
                        Pods are ephemeral; if a Pod dies, it will not be resurrected automatically (unless managed by a controller like
                        Deployment or StatefulSet). Kubernetes controllers ensure desired state by managing Pods lifecycle.
                    </p>
                </Section>

                <PageNavigation
                    leftPath="/clusters/namespaces"
                    leftLabel="Namespaces"
                    rightPath="/workloads/deployment"
                    rightLabel="Deployments"
                />
            </div>
        </div>
    );
};

const Section = ({ icon, title, children }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
            {icon} {title}
        </h2>
        {children}
    </section>
);

export default PodsPage;
