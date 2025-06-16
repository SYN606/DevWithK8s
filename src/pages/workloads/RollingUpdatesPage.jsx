import { FiRefreshCw } from 'react-icons/fi';

const RollingUpdatesPage = () => {
    return (
        <div className="bg-[#0f172a] text-gray-100 p-8 font-sans min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-indigo-400 mb-8 flex items-center gap-3">
                    <FiRefreshCw className="w-10 h-10" />
                    Kubernetes Rolling Updates in Deployments
                </h1>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    <strong>Rolling updates</strong> allow you to update the version or configuration of your application in a
                    Deployment incrementally, without downtime.
                    Instead of stopping all old Pods and starting new ones simultaneously, Kubernetes gradually replaces old
                    Pods with new ones, ensuring continuous availability.
                </p>

                {/* What is a Rolling Update */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">What is a Rolling Update?</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        Imagine you have an app running in several Pods. When you release a new version, you want to replace old
                        Pods with new ones without interrupting service.
                        Rolling update does exactly this: it updates Pods one at a time (or in small batches), keeping your app
                        available during the process.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Old Pods are terminated gradually.</li>
                        <li>New Pods are created and become ready before old ones are removed.</li>
                        <li>Ensures zero or minimal downtime during deployments.</li>
                        <li>Kubernetes Deployment controller manages the process automatically.</li>
                    </ul>
                </section>

                {/* Why Use Rolling Updates */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-purple-400 mb-4">Why Use Rolling Updates?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                        <li>Maintain service availability during upgrades.</li>
                        <li>Reduce risk by gradually replacing Pods.</li>
                        <li>Easy rollback to previous version if something goes wrong.</li>
                        <li>Improved user experience with no downtime.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Without rolling updates, upgrades might cause downtime or service interruptions as all old Pods stop
                        before new ones start.
                    </p>
                </section>

                {/* Analogy */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-indigo-300 mb-4">Analogy: Rolling Updates in Real Life</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        Imagine a restaurant replacing all its chefs with new ones but wants to keep cooking running smoothly:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                        <li>They don't send all chefs home at once.</li>
                        <li>Instead, they replace chefs one by one or in small groups.</li>
                        <li>This way, food service continues without interruption.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Similarly, Kubernetes replaces Pods gradually to avoid downtime.
                    </p>
                </section>

                {/* YAML Example */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">Rolling Update Example YAML</h2>
                    <pre className="bg-gray-900 p-4 rounded text-yellow-300 text-sm overflow-x-auto mb-6">
                        {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app-container
          image: my-app:v2  # Updated image version
          ports:
            - containerPort: 80
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1`}
                    </pre>
                    <p className="text-gray-300">
                        <strong>maxUnavailable:</strong> Maximum number of Pods that can be unavailable during update.<br />
                        <strong>maxSurge:</strong> Maximum number of extra Pods created above desired replicas during update.
                    </p>
                </section>

                {/* kubectl Commands */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-300 mb-4">kubectl Rolling Update Commands</h2>
                    <pre className="bg-gray-900 p-4 rounded text-indigo-300 text-sm overflow-x-auto">
                        {`# Update the Deployment with a new image version
kubectl set image deployment/my-app my-app-container=my-app:v2

# Watch rollout status
kubectl rollout status deployment/my-app

# Rollback to previous version if needed
kubectl rollout undo deployment/my-app

# View rollout history
kubectl rollout history deployment/my-app`}
                    </pre>
                </section>

               
            </div>
        </div>
    );
};

export default RollingUpdatesPage;
