import {
    FiCpu,
    FiFileText,
    FiSettings,
    FiBox,
} from "react-icons/fi";
import { PageNavigation } from "../../components";

export default function KindClusterConfig() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                    <FiBox className="w-8 h-8" />
                    KIND Cluster Creation & Config File
                </h1>

                <p className="text-lg mb-6">
                    Creating Kubernetes clusters locally is simple with{" "}
                    <span className="text-yellow-400 font-semibold">KIND</span>. You can
                    create default clusters easily or customize node count, Kubernetes
                    versions, port mappings, and more using configuration files.
                </p>

                {/* Basic Cluster Creation */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-2 flex items-center gap-2">
                    <FiCpu className="w-6 h-6" /> Basic Cluster Creation
                </h2>
                <p className="mb-2">To spin up a single-node cluster:</p>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">
                    kind create cluster
                </pre>
                <p className="mt-2">
                    This runs a control-plane-only cluster inside a Docker container.
                </p>

                {/* Config File Creation */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-8 mb-2 flex items-center gap-2">
                    <FiFileText className="w-6 h-6" /> Creating a Cluster with a Config File
                </h2>
                <p className="mb-2">
                    To customize the cluster, create a YAML config file and pass it using
                    the <code>--config</code> flag.
                </p>
                <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-2">
                    kind create cluster --config=kind-config.yaml --name=my-cluster
                </pre>

                {/* Sample Config */}
                <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-2">
                    Sample Config File (kind-config.yaml)
                </h3>
                <div className="bg-gray-800 p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto font-mono whitespace-pre-wrap">
                    <pre>
                        {`kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
  - role: worker
  - role: worker
networking:
  apiServerAddress: "127.0.0.1"
  apiServerPort: 6443`}
                    </pre>
                </div>

                {/* Cluster Node Roles */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-10 mb-3">
                    Cluster Node Roles
                </h2>
                <ul className="list-disc list-inside ml-6 space-y-2 mb-6">
                    <li>
                        <strong>control-plane</strong>: Manages the Kubernetes API and cluster state.
                    </li>
                    <li>
                        <strong>worker</strong>: Runs actual application workloads.
                    </li>
                    <li>
                        You can add multiple nodes with different roles to simulate real-world setups.
                    </li>
                </ul>

                {/* Custom Kubernetes Version */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-10 mb-3">
                    Custom Kubernetes Version
                </h2>
                <p className="mb-4">
                    You can specify the Kubernetes version by setting the image per node:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto font-mono whitespace-pre-wrap">
                    <pre>
                        {`nodes:
  - role: control-plane
    image: kindest/node:v1.27.3
  - role: worker
    image: kindest/node:v1.27.3`}
                    </pre>
                </div>

                {/* Volume Mounts */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-10 mb-3">
                    Volume Mounts for Persistent Data
                </h2>
                <p className="mb-4">
                    You can mount host directories into KIND containers for testing
                    persistent volumes:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto font-mono whitespace-pre-wrap">
                    <pre>
                        {`extraMounts:
  - hostPath: /your/local/path
    containerPath: /container/path`}
                    </pre>
                </div>

                {/* Networking */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-10 mb-3">
                    Networking and Port Mappings
                </h2>
                <p className="mb-2">
                    You can map ports on the host machine to ports inside the KIND nodes:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg text-sm text-green-400 mb-6 overflow-x-auto font-mono whitespace-pre-wrap">
                    <pre>
                        {`kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    extraPortMappings:
      - containerPort: 30000
        hostPort: 80
        protocol: TCP`}
                    </pre>
                </div>
                <p className="mb-6">
                    This maps NodePort services to your local machine for browser access.
                </p>

                {/* Managing Multiple Clusters */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-10 mb-3">
                    Managing Multiple Clusters
                </h2>
                <ul className="list-disc list-inside ml-6 space-y-2 mb-6">
                    <li>
                        Use <code>--name</code> when creating multiple clusters:<br />
                        <code>kind create cluster --name dev-cluster</code>
                    </li>
                    <li>
                        List all clusters with: <code>kind get clusters</code>
                    </li>
                    <li>
                        Delete a specific one with: <code>kind delete cluster --name dev-cluster</code>
                    </li>
                </ul>

                {/* Extra Tips */}
                <h2 className="text-2xl font-bold text-emerald-400 mt-10 mb-3 flex items-center gap-2">
                    <FiSettings className="w-6 h-6" /> Extra Tips
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-12">
                    <li>
                        KIND runs clusters inside Docker containers — ensure Docker is running before using it.
                    </li>
                    <li>
                        Use <code>kubectl cluster-info --context kind-yourclustername</code> to access info on specific clusters.
                    </li>
                    <li>
                        KIND is great for CI pipelines and local development, but not production workloads.
                    </li>
                </ul>
            </div>

            <PageNavigation
                leftPath="/basics/introduction-to-kind-cluster-and-setup"
                leftLabel="Kind Cluster | Setup"
                rightPath="/clusters/minikube-clusters"
                rightLabel="Minikube"
            />
        </div>
    );
}
