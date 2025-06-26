import {
    FiLayers,
    FiInfo,
    FiShield,
    FiDatabase,
    FiPlusSquare,
    FiCommand,
    FiBarChart2,
    FiKey,
} from 'react-icons/fi';
import { PageNavigation } from '../../components'


const NamespacesPage = () => {
    return (
        <div className="bg-gray-950 text-gray-200 font-sans p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <FiLayers className="w-8 h-8" />
                    Kubernetes Namespaces
                </h1>

                {/* What are Namespaces */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiInfo className="w-6 h-6" />
                        What are Namespaces?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Namespaces in Kubernetes provide a way to divide cluster resources between multiple users or teams.
                        They create virtual clusters backed by the same physical cluster, enabling resource isolation,
                        access control, and organization.
                    </p>
                </section>

                {/* Why Use Namespaces */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiShield className="w-6 h-6" />
                        Why Use Namespaces?
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Isolate resources between teams, projects, or environments (e.g., dev, staging, production).</li>
                        <li>Enable fine-grained access control with Role-Based Access Control (RBAC) scoped to namespaces.</li>
                        <li>Manage resource quotas and limits per namespace to prevent resource contention.</li>
                        <li>Organize cluster resources logically for easier management and visibility.</li>
                    </ul>
                </section>

                {/* Default Namespaces */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiDatabase className="w-6 h-6" />
                        Default Namespaces in Kubernetes
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><code>default</code>: Default namespace for objects with no other namespace specified.</li>
                        <li><code>kube-system</code>: For Kubernetes system components and services.</li>
                        <li><code>kube-public</code>: Public namespace, readable by all users (used for cluster info).</li>
                        <li><code>kube-node-lease</code>: For node lease objects to improve node heartbeat performance.</li>
                    </ul>
                </section>

                {/* Creating and Managing Namespaces */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiPlusSquare className="w-6 h-6" />
                        Creating and Managing Namespaces
                    </h2>
                    <p className="mb-4 text-gray-300">
                        You can create and manage namespaces using <code>kubectl</code> commands or YAML manifests.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Create Namespace Using kubectl</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                        kubectl create namespace my-namespace
                    </pre>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Create Namespace Using YAML</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-2">
                        {`apiVersion: v1
kind: Namespace
metadata:
  name: my-namespace`}
                    </pre>

                    <div className="bg-gray-700 p-3 rounded text-gray-300 text-sm mb-6">
                        <strong>Explanation:</strong>
                        <ul className="list-disc list-inside">
                            <li><code>apiVersion: v1</code> — Specifies the Kubernetes API version.</li>
                            <li><code>kind: Namespace</code> — Declares that this resource is a Namespace object.</li>
                            <li><code>metadata.name</code> — The name of the namespace to create.</li>
                        </ul>
                        <p>This YAML manifest defines a new Kubernetes namespace called <code>my-namespace</code> which can be applied with <code>kubectl apply -f filename.yaml</code>.</p>
                    </div>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">List Namespaces</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                        kubectl get namespaces
                    </pre>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Delete Namespace</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">
                        kubectl delete namespace my-namespace
                    </pre>
                </section>

                {/* Using Namespaces */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiCommand className="w-6 h-6" />
                        Using Namespaces
                    </h2>
                    <p className="mb-4 text-gray-300">
                        When you create or manage Kubernetes resources, you can specify the namespace with the <code>-n</code> or <code>--namespace</code> flag.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Example: List Pods in a Namespace</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-4">
                        kubectl get pods -n my-namespace
                    </pre>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Example: Set Default Namespace in Context</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto">
                        kubectl config set-context --current --namespace=my-namespace
                    </pre>
                    <p className="text-gray-300 mt-2">
                        This sets the default namespace for subsequent <code>kubectl</code> commands in the current context.
                    </p>
                </section>

                {/* Resource Quotas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiBarChart2 className="w-6 h-6" />
                        Resource Quotas and Limits per Namespace
                    </h2>
                    <p className="mb-4 text-gray-300">
                        Namespaces can have resource quotas to control the amount of CPU, memory, and other resources that can be used.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Example ResourceQuota YAML</h3>
                    <pre className="bg-black p-3 rounded text-green-400 text-sm overflow-x-auto mb-2">
                        {`apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-resources
  namespace: my-namespace
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi`}
                    </pre>

                    <div className="bg-gray-700 p-3 rounded text-gray-300 text-sm mb-6">
                        <strong>Explanation:</strong>
                        <ul className="list-disc list-inside">
                            <li><code>apiVersion: v1</code> — Kubernetes API version.</li>
                            <li><code>kind: ResourceQuota</code> — Defines a resource quota object.</li>
                            <li><code>metadata.name</code> — Name of the quota object.</li>
                            <li><code>metadata.namespace</code> — The namespace where this quota applies.</li>
                            <li><code>spec.hard</code> — Specifies hard limits on resources like CPU and memory.</li>
                            <li><code>requests.cpu</code> and <code>requests.memory</code> — The total CPU and memory requested allowed in the namespace.</li>
                            <li><code>limits.cpu</code> and <code>limits.memory</code> — The total CPU and memory limits allowed in the namespace.</li>
                        </ul>
                        <p>This YAML enforces resource consumption limits in the <code>my-namespace</code> namespace.</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <FiKey className="w-6 h-6" />
                        Role-Based Access Control (RBAC) with Namespaces
                    </h2>
                    <p className="mb-4 text-gray-300">
                        RBAC policies can be scoped to namespaces to provide fine-grained access control.
                    </p>
                    <p className="mb-4 text-gray-300">
                        You can create roles and role bindings limited to specific namespaces to restrict user permissions.
                    </p>
                </section>
            </div>
            <PageNavigation
                leftPath="/clusters/minikube-clusters"
                leftLabel="Introduction to Kubernetes"
                rightPath="/workloads"
                rightLabel="Pods"
            />
        </div>
    );
};

export default NamespacesPage;
