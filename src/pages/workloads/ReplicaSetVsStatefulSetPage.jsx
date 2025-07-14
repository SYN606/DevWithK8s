import {
    FaLayerGroup,
    FaTerminal,

} from 'react-icons/fa';


const ReplicaSetVsStatefulSetPage = () => {
    return (
        <div className="bg-gray-950 text-gray-100 p-8 font-sans min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-indigo-400 mb-8 flex items-center gap-3">
                    <FaLayerGroup className="w-10 h-10" />
                    ReplicaSet vs StatefulSet vs Deployment
                </h1>

                <p className="text-lg text-gray-300 mb-4">
                    Kubernetes provides various controllers to manage the lifecycle of Pods. The three most commonly used are:
                    <strong> ReplicaSet</strong>, <strong>StatefulSet</strong>, and <strong>Deployment</strong>. Understanding
                    the differences between these helps in choosing the right resource for managing applications based on their nature—stateless or stateful.
                </p>

                {/* ReplicaSet */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">ReplicaSet</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        A <span className="text-green-300 font-medium">ReplicaSet</span> is a Kubernetes controller that ensures a
                        specified number of identical pods are always running.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6">
                        <li>Maintains a fixed number of identical Pods</li>
                        <li>Ensures high availability by automatically replacing failed Pods</li>
                        <li>Used mostly by Deployments, rarely managed directly</li>
                        <li>Does not support rolling updates or version tracking</li>
                    </ul>

                    <h3 className="text-xl font-bold text-green-300 mt-6 mb-2 flex items-center gap-2">
                        <FaTerminal className="w-5 h-5" />
                        ReplicaSet Commands
                    </h3>
                    <pre className="bg-gray-900 p-4 rounded text-green-300 text-sm overflow-x-auto">
                        {`# Create a ReplicaSet YAML
nano replicaset.yaml

# Apply the ReplicaSet
kubectl apply -f replicaset.yaml

# Check the ReplicaSet status
kubectl get rs

# Describe the ReplicaSet
kubectl describe rs <replicaset-name>

# Delete the ReplicaSet
kubectl delete -f replicaset.yaml`}
                    </pre>
                </section>

                {/* StatefulSet */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-purple-400 mb-4">StatefulSet</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        A <span className="text-purple-300 font-medium">StatefulSet</span> manages the deployment and scaling of a
                        set of Pods with persistent identities and storage.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6">
                        <li>Provides stable hostnames and persistent volume claims (PVCs) per pod</li>
                        <li>Ensures ordered, graceful deployment and termination</li>
                        <li>Used for applications that require data persistence like databases</li>
                        <li>Allows consistent access to storage for stateful workloads</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-300 mt-6 mb-2 flex items-center gap-2">
                        <FaTerminal className="w-5 h-5" />
                        StatefulSet Commands
                    </h3>
                    <pre className="bg-gray-900 p-4 rounded text-purple-300 text-sm overflow-x-auto">
                        {`# Create a StatefulSet YAML
nano statefulset.yaml

# Apply the StatefulSet
kubectl apply -f statefulset.yaml

# Get StatefulSets
kubectl get statefulsets

# Describe the StatefulSet
kubectl describe statefulset <name>

# Delete the StatefulSet
kubectl delete -f statefulset.yaml

# Check persistent storage
kubectl get pvc`}
                    </pre>
                </section>

                {/* Deployment */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">Deployment</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        A <span className="text-blue-300 font-medium">Deployment</span> provides declarative updates for Pods and
                        ReplicaSets.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6">
                        <li>Used to create and manage ReplicaSets</li>
                        <li>Enables zero-downtime rolling updates</li>
                        <li>Supports rollback to previous versions</li>
                        <li>Ideal for managing scalable and stateless web services</li>
                    </ul>

                    <h3 className="text-xl font-bold text-blue-300 mt-6 mb-2 flex items-center gap-2">
                        <FaTerminal className="w-5 h-5" />
                        Deployment Commands
                    </h3>
                    <pre className="bg-gray-900 p-4 rounded text-blue-300 text-sm overflow-x-auto">
                        {`# Create a Deployment YAML
nano deployment.yaml

# Apply the Deployment
kubectl apply -f deployment.yaml

# View Deployments
kubectl get deployments

# Describe a Deployment
kubectl describe deployment <deployment-name>

# Update the Deployment
kubectl set image deployment <name> container=image:tag

# Rollback to previous revision
kubectl rollout undo deployment <name>`}
                    </pre>
                </section>

                {/* Comparison Table */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-300 mb-4">Comparison Table</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left border border-gray-700 text-sm">
                            <thead className="bg-gray-800 text-indigo-300">
                                <tr>
                                    <th className="p-3 border border-gray-600">Feature</th>
                                    <th className="p-3 border border-gray-600">ReplicaSet</th>
                                    <th className="p-3 border border-gray-600">StatefulSet</th>
                                    <th className="p-3 border border-gray-600">Deployment</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr><td className="p-3 border border-gray-700">Purpose</td><td className="p-3 border border-gray-700">Maintains a fixed number of identical Pods</td><td className="p-3 border border-gray-700">Manages stateful Pods with stable identity</td><td className="p-3 border border-gray-700">Manages ReplicaSets and rolling updates</td></tr>
                                <tr><td className="p-3 border border-gray-700">Pod Identity</td><td className="p-3 border border-gray-700">Identical</td><td className="p-3 border border-gray-700">Unique and stable</td><td className="p-3 border border-gray-700">Identical</td></tr>
                                <tr><td className="p-3 border border-gray-700">Pod Names</td><td className="p-3 border border-gray-700">Randomized</td><td className="p-3 border border-gray-700">web-0, web-1, etc.</td><td className="p-3 border border-gray-700">Randomized</td></tr>
                                <tr><td className="p-3 border border-gray-700">Storage</td><td className="p-3 border border-gray-700">Ephemeral</td><td className="p-3 border border-gray-700">Persistent (PVCs)</td><td className="p-3 border border-gray-700">Ephemeral</td></tr>
                                <tr><td className="p-3 border border-gray-700">Scaling</td><td className="p-3 border border-gray-700">Manual</td><td className="p-3 border border-gray-700">Declarative or CLI</td><td className="p-3 border border-gray-700">Declarative or CLI</td></tr>
                                <tr><td className="p-3 border border-gray-700">Use Case</td><td className="p-3 border border-gray-700">Simple stateless replication</td><td className="p-3 border border-gray-700">Databases, message queues</td><td className="p-3 border border-gray-700">Stateless applications, web apps</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-300 mb-4">Real-World Use Cases</h2>
                    <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                        <li><strong>ReplicaSet:</strong> Cron job style logging microservices that must be kept alive but don't require persistence.</li>
                        <li><strong>StatefulSet:</strong> Redis cluster, Cassandra, or MySQL where data consistency and identity are key.</li>
                        <li><strong>Deployment:</strong> Frontend apps, APIs, stateless workloads with frequent version updates.</li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default ReplicaSetVsStatefulSetPage;
