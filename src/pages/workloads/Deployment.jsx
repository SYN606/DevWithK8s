import { PageNavigation } from "../../components";
import { FiLayers, FiInfo, FiStar, FiFileText, FiRefreshCw, FiBarChart2, FiTerminal, FiCheckCircle } from "react-icons/fi";

const Deployment = () => {
    return (
        <div className="bg-gray-950 text-gray-200 font-sans p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold text-indigo-400 mb-8 flex items-center gap-3">
                    <FiLayers className="w-10 h-10" />
                    Kubernetes Deployments — In-depth Guide
                </h1>

                {/* Introduction */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiInfo className="w-7 h-7" />
                        What is a Kubernetes Deployment?
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        A <strong>Kubernetes Deployment</strong> is a high-level API object used to manage the lifecycle of a group of <em>Pods</em>.
                        It declaratively defines how many replicas of a Pod should be running, what container images to use,
                        and how updates to the application are rolled out.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400 text-lg max-w-prose">
                        <li>Rolling out new versions of your application with zero downtime.</li>
                        <li>Scaling the number of replicas up or down.</li>
                        <li>Rolling back to previous versions in case of failures.</li>
                        <li>Self-healing by automatically replacing crashed or unhealthy Pods.</li>
                    </ul>
                    <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                        In short, Deployments automate the process of managing application instances (Pods) to ensure your desired state is maintained.
                    </p>
                </section>

                {/* Why Deployments are Important */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiStar className="w-7 h-7" />
                        Why Use Deployments?
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-prose">
                        While you can create Pods directly, managing Pods individually is cumbersome and error-prone.
                        Deployments offer:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400 text-lg max-w-prose">
                        <li><strong>Declarative management:</strong> Define your desired state once; Kubernetes enforces it.</li>
                        <li><strong>Automated updates:</strong> Seamless rolling updates for zero downtime.</li>
                        <li><strong>Rollback support:</strong> Easily revert to a stable version on failure.</li>
                        <li><strong>Scalability:</strong> Adjust replicas quickly to meet load.</li>
                        <li><strong>Resilience:</strong> Self-healing behavior to maintain availability.</li>
                    </ul>
                </section>

                {/* Core Components */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiLayers className="w-7 h-7" />
                        Core Components of a Deployment
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-prose">
                        Deployments manage ReplicaSets, which manage Pods. Key components include:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 text-lg max-w-prose">
                        <li><strong>ReplicaSet:</strong> Ensures the desired number of Pods are always running.</li>
                        <li><strong>Pod Template:</strong> Defines how each Pod is configured.</li>
                        <li><strong>Labels and Selectors:</strong> Helps target specific Pods.</li>
                        <li><strong>Revision History:</strong> Supports rollbacks through version history.</li>
                    </ul>
                </section>

                {/* YAML Example */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiFileText className="w-7 h-7" />
                        Deployment YAML Example & Detailed Explanation
                    </h2>
                    <pre className="bg-black text-green-400 p-6 rounded-lg overflow-x-auto max-w-prose text-sm font-mono whitespace-pre-wrap">
                        {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.21.1
          ports:
            - containerPort: 80`}
                    </pre>
                    <div className="bg-gray-800 rounded-lg p-5 text-gray-300 max-w-prose space-y-2 text-lg mt-4">
                        <p><strong>Explanation:</strong></p>
                        <ul className="list-disc list-inside">
                            <li><code>apiVersion: apps/v1</code> — Deployment API version.</li>
                            <li><code>kind: Deployment</code> — Resource kind.</li>
                            <li><code>metadata.name</code> — Name of the Deployment.</li>
                            <li><code>metadata.labels</code> — Tags for organization and querying.</li>
                            <li><code>spec.replicas</code> — Desired number of Pods.</li>
                            <li><code>spec.selector.matchLabels</code> — Selector to match Pods.</li>
                            <li><code>template</code> — Describes Pods to be created.</li>
                            <li><code>containers</code> — Container settings (name, image, ports).</li>
                        </ul>
                    </div>
                </section>

                {/* Lifecycle */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiRefreshCw className="w-7 h-7" />
                        Deployment Lifecycle and Updates
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-prose">
                        On applying a Deployment, Kubernetes creates a ReplicaSet and Pods.
                        Updates trigger rolling updates, replacing Pods gradually. Failed rollouts can be rolled back automatically.
                    </p>
                </section>

                {/* Scaling */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiBarChart2 className="w-7 h-7" />
                        Scaling Deployments
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-prose">
                        You can scale Deployments by editing the `replicas` field or using:
                        <code> kubectl scale deployment my-deploy --replicas=5</code>
                    </p>
                </section>

                {/* Common kubectl Commands */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiTerminal className="w-7 h-7" />
                        Common kubectl Commands for Deployments
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-prose text-lg">
                        <li><code>kubectl get deployments</code></li>
                        <li><code>kubectl describe deployment &lt;name&gt;</code></li>
                        <li><code>kubectl apply -f deployment.yaml</code></li>
                        <li><code>kubectl rollout status deployment/&lt;name&gt;</code></li>
                        <li><code>kubectl scale deployment &lt;name&gt; --replicas=5</code></li>
                        <li><code>kubectl rollout undo deployment/&lt;name&gt;</code></li>
                        <li><code>kubectl delete deployment &lt;name&gt;</code></li>
                    </ul>
                </section>

                {/* Summary */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                        <FiCheckCircle className="w-7 h-7" />
                        Summary
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-prose">
                        Deployments are essential for managing stateless applications. They offer zero-downtime updates, self-healing, rollbacks, and easy scaling in Kubernetes.
                    </p>
                </section>

                {/* Navigation */}
                <PageNavigation
                    leftPath="/clusters"
                    leftLabel="Pods"
                    rightPath="/clusters/rs-vs-sts"
                    rightLabel="ReplicaSet vs StatefulSet"
                />
            </div>
        </div>
    );
};

export default Deployment;
