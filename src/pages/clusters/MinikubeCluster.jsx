import {
    FiCpu,
    FiInfo,
    FiTool,
    FiDownload,
    FiCheckCircle,
    FiPlayCircle,
    FiSettings,
    FiLayers,
    FiBookOpen,
} from "react-icons/fi";

export default function MinikubeCluster() {
    return (
        <div className="bg-[#0f172a] text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                    <FiCpu className="w-8 h-8" />
                    Minikube Cluster: Installation & Creation
                </h1>

                <p className="text-lg mb-6">
                    <span className="text-yellow-400 font-semibold">Minikube</span> is a
                    tool that runs a single-node Kubernetes cluster locally on your
                    machine, mainly for learning and development purposes.
                </p>

                <Section
                    icon={<FiInfo className="w-6 h-6" />}
                    title="What is Minikube?"
                    items={[
                        "Runs a lightweight Kubernetes cluster locally using a VM or container runtime.",
                        "Supports Windows, macOS, and Linux.",
                        "Great for Kubernetes learning, testing, and development.",
                        "Supports different Kubernetes versions.",
                        "Includes add-ons like dashboard, ingress, metrics-server.",
                    ]}
                />

                <Section
                    icon={<FiTool className="w-6 h-6" />}
                    title="Prerequisites"
                    items={[
                        "Virtualization must be enabled (Intel VT-x / AMD-V).",
                        "A supported hypervisor like VirtualBox, HyperKit, or Docker.",
                        "kubectl CLI must be installed and configured.",
                    ]}
                />

                <CodeSection
                    icon={<FiDownload className="w-6 h-6" />}
                    title="Installing Minikube & kubectl"
                    description="Use the following script to install minikube and kubectl on Linux:"
                    code={`#!/bin/bash
# Install Minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
chmod +x minikube
sudo mv minikube /usr/local/bin/

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

echo "Minikube and kubectl installation complete."`}
                />

                <CodeSection
                    icon={<FiCheckCircle className="w-6 h-6" />}
                    title="Verify Installation"
                    code={`minikube version
kubectl version --client`}
                />

                <CodeSection
                    icon={<FiPlayCircle className="w-6 h-6" />}
                    title="Creating a Minikube Cluster"
                    description="To start a default single-node cluster with Docker as the driver:"
                    code={`minikube start --driver=docker`}
                />

                <p className="text-gray-300 mt-2 mb-6">
                    You can also specify version and other options:
                </p>

                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">
                    minikube start --kubernetes-version=v1.30.0 --driver=virtualbox
                </pre>

                <Section
                    icon={<FiSettings className="w-6 h-6" />}
                    title="Managing the Minikube Cluster"
                    items={[
                        "`minikube status` — Show cluster status.",
                        "`minikube dashboard` — Launch dashboard.",
                        "`minikube stop` — Stop the cluster.",
                        "`minikube delete` — Delete the cluster.",
                    ]}
                />

                <Section
                    icon={<FiLayers className="w-6 h-6" />}
                    title="Advanced Usage"
                    items={[
                        "You can create and switch between multiple clusters using `--profile`.",
                        "`minikube tunnel` lets you expose services with LoadBalancer type.",
                        "Enable useful add-ons: `minikube addons enable ingress`.",
                        "Access cluster services: `minikube service <svc-name>`.",
                        "`kubectl` works automatically once the cluster is started.",
                    ]}
                />

                <Section
                    icon={<FiBookOpen className="w-6 h-6" />}
                    title="Official Resources"
                    items={[
                        "Docs: https://minikube.sigs.k8s.io/docs/",
                        "GitHub: https://github.com/kubernetes/minikube",
                    ]}
                />
            </div>
        </div>
    );
}

function Section({ icon, title, items }) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-2 flex items-center gap-2">
                {icon}
                {title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                {items.map((item, idx) => (
                    <li key={idx}>
                        <code className="text-yellow-400">{item}</code>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CodeSection({ icon, title, description, code }) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-2 flex items-center gap-2">
                {icon}
                {title}
            </h2>
            {description && <p className="text-gray-300 mb-4">{description}</p>}
            <div className="bg-gray-800 p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto font-mono whitespace-pre-wrap select-all">
                <pre>{code}</pre>
            </div>
        </div>
    );
}
