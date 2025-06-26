import {
    FiPackage,
    FiSearch,
    FiTool,
    FiDownload,
    FiCpu,
    FiCheckCircle,
    FiPlayCircle,
    FiSettings,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { PageNavigation } from "../../components";

const KindClusterInstallation = () => {
    return (
        <main className="bg-gray-950 text-gray-300 font-sans px-4 md:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-3"
                    initial={{ opacity: 1, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <FiPackage className="w-8 h-8" /> KIND Cluster & Installation
                </motion.h1>

                <p className="text-lg text-gray-300 mb-6">
                    <span className="text-yellow-400 font-semibold">KIND</span> (Kubernetes IN Docker) is a tool for running local Kubernetes clusters using Docker container nodes. It is designed for testing and local development, especially in CI pipelines.
                </p>

                <Section icon={<FiSearch />} title="What is KIND?">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Lightweight and fast to create local Kubernetes clusters</li>
                        <li>Each node in the cluster runs as a Docker container</li>
                        <li>Used for CI/CD testing, prototyping, and development</li>
                        <li>No need for a VM or cloud provider</li>
                        <li>Single-node or multi-node clusters supported</li>
                    </ul>
                </Section>

                <Section icon={<FiTool />} title="Prerequisites">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Docker must be installed and running</li>
                        <li>Go 1.11+ (optional, if building KIND from source)</li>
                        <li>kubectl CLI installed and configured</li>
                    </ul>
                </Section>

                <Section icon={<FiDownload />} title="KIND Installation Steps">
                    <div className="bg-[#1e293b] p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto">
                        <p className="mb-2">Install using Go (if you have Go installed):</p>
                        <pre>GO111MODULE="on" go install sigs.k8s.io/kind@v0.22.0</pre>

                        <p className="mt-4 mb-2">Or install using prebuilt binary (Linux/Mac):</p>
                        <pre>{`curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.22.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind`}</pre>
                    </div>
                </Section>

                <Section icon={<FiCpu />} title="Automated Installation Script">
                    <p className="text-gray-300 mb-4">
                        You can use the following script to install both <code>kind</code> and <code>kubectl</code> quickly on a Linux system:
                    </p>
                    <div className="bg-[#1e293b] p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto font-mono whitespace-pre-wrap">
                        <pre>{`#!/bin/bash

echo "Installation Script created by SYN 606."
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.27.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

VERSION="v1.30.0"
URL="https://dl.k8s.io/release/\${VERSION}/bin/linux/amd64/kubectl"
INSTALL_DIR="/usr/local/bin"

curl -LO "\$URL"
chmod +x kubectl
sudo mv kubectl \$INSTALL_DIR/
kubectl version --client

rm -f kubectl
rm -rf kind

echo "kind & kubectl installation complete."`}</pre>
                    </div>
                </Section>

                <Section icon={<FiCheckCircle />} title="Verify Installation">
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">kind version</pre>
                </Section>

                <Section icon={<FiPlayCircle />} title="Create a KIND Cluster">
                    <p className="text-gray-300 mb-2">To create a default single-node cluster:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">kind create cluster</pre>
                    <p className="text-gray-300 mt-4 mb-2">To create a multi-node cluster, use a config file:</p>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">kind create cluster --config=cluster-config.yaml</pre>
                </Section>

                <Section icon={<FiSettings />} title="Cluster Management">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><code>kind get clusters</code> — List existing clusters</li>
                        <li><code>kind delete cluster</code> — Delete the default cluster</li>
                        <li><code>kind delete cluster --name custom-name</code> — Delete a specific cluster</li>
                    </ul>
                </Section>

                <PageNavigation
                    leftPath="/basics/architecture-of-k8s"
                    leftLabel="Architecture of Kubernetes"
                    rightPath="/clusters/kind-cluster-config"
                    rightLabel="Kind Cluster Creation"
                />
            </div>
        </main>
    );
};

const Section = ({ icon, title, children }) => (
    <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-2 flex items-center gap-2">
            {icon} {title}
        </h2>
        {children}
    </motion.div>
);

export default KindClusterInstallation;