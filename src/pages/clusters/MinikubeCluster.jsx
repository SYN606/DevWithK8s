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

import { PageNavigation } from "../../components";

export default function MinikubeCluster() {
    return (
        <main className="bg-gray-950 text-gray-300 font-sans px-4 md:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <FiCpu className="w-8 h-8" />
                    Minikube Cluster: Installation & Creation
                </h1>

                <p className="text-lg mb-8 text-gray-400">
                    <span className="text-yellow-400 font-semibold">Minikube</span> runs a local, single-node Kubernetes cluster for development and testing. It's ideal for learning Kubernetes without deploying to the cloud.
                </p>

                <Section
                    icon={<FiInfo className="w-6 h-6" />}
                    title="What is Minikube?"
                    items={[
                        "Runs Kubernetes locally using VM or container runtimes.",
                        "Compatible with Windows, macOS, and Linux.",
                        "Ideal for testing and learning Kubernetes.",
                        "Supports different Kubernetes versions.",
                        "Includes optional add-ons (dashboard, ingress, metrics-server).",
                    ]}
                />

                <Section
                    icon={<FiTool className="w-6 h-6" />}
                    title="Prerequisites"
                    items={[
                        "Virtualization enabled (Intel VT-x / AMD-V).",
                        "Installed hypervisor: VirtualBox, Docker, HyperKit, etc.",
                        "`kubectl` command-line tool installed.",
                    ]}
                />

                <CodeSection
                    icon={<FiDownload className="w-6 h-6" />}
                    title="Installing Minikube & kubectl"
                    description="Install both tools using the following shell script:"
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
                    description="Start a single-node cluster using Docker driver:"
                    code={`minikube start --driver=docker`}
                />

                <p className="text-gray-400 mt-2 mb-4">
                    You can also specify a Kubernetes version and hypervisor driver:
                </p>

                <div className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto font-mono mb-8">
                    minikube start --kubernetes-version=v1.30.0 --driver=virtualbox
                </div>

                <Section
                    icon={<FiSettings className="w-6 h-6" />}
                    title="Managing the Minikube Cluster"
                    items={[
                        "`minikube status` — Display current cluster status.",
                        "`minikube dashboard` — Launch the Kubernetes dashboard.",
                        "`minikube stop` — Stop the running cluster.",
                        "`minikube delete` — Remove the cluster completely.",
                    ]}
                />

                <Section
                    icon={<FiLayers className="w-6 h-6" />}
                    title="Advanced Usage"
                    items={[
                        "Use `--profile` to manage multiple clusters.",
                        "`minikube tunnel` exposes LoadBalancer services.",
                        "Enable add-ons: `minikube addons enable ingress`.",
                        "Access service URLs: `minikube service <svc-name>`.",
                        "`kubectl` auto-configured when cluster is running.",
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

            <PageNavigation
                leftPath="/clusters/kind-cluster-config"
                leftLabel="Introduction to Kubernetes"
                rightPath="/clusters/namespaces"
                rightLabel="Name Spcaes"
            />
        </main>
    );
}

function Section({ icon, title, items }) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2">
                {icon}
                {title}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {items.map((item, idx) => (
                    <li key={idx}>
                        <code className="text-yellow-400">{item}</code>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function CodeSection({ icon, title, description, code }) {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2">
                {icon}
                {title}
            </h2>
            {description && <p className="text-gray-400 mb-4">{description}</p>}
            <div className="bg-gray-800 p-4 rounded-lg text-sm text-green-400 overflow-x-auto font-mono whitespace-pre-wrap select-all">
                <pre>{code}</pre>
            </div>
        </section>
    );
}
