export default function CheatSheet() {
    return (
        <div className="bg-gray-900 text-white font-sans p-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-400 mb-6">
                    📘 Kubernetes Commands – Kind + Kubectl
                </h1>

                <Section title="🔧 KIND – Kubernetes IN Docker" color="text-yellow-400">
                    <Command>kind create cluster</Command>
                    <Command>kind create cluster --name my-cluster</Command>
                    <Command>kind get clusters</Command>
                    <Command>kind delete cluster --name my-cluster</Command>
                    <Command>kind export kubeconfig --name my-cluster</Command>
                    <Command>kind load docker-image my-image --name my-cluster</Command>
                    <Command>kind create cluster --config=cluster-config.yaml</Command>
                </Section>

                <Section title="📌 kubectl Basics" color="text-yellow-400">
                    <Command>kubectl version --client</Command>
                    <Command>kubectl config view</Command>
                    <Command>kubectl config use-context kind-my-cluster</Command>
                    <Command>kubectl cluster-info</Command>
                    <Command>kubectl get nodes</Command>
                    <Command>kubectl get all</Command>
                </Section>

                <Section title="📦 Pods, Deployments, Services" color="text-yellow-400">
                    <Command>kubectl run nginx --image=nginx</Command>
                    <Command>kubectl get pods</Command>
                    <Command>kubectl describe pod nginx</Command>
                    <Command>kubectl delete pod nginx</Command>
                    <Command>kubectl create deployment web --image=nginx</Command>
                    <Command>kubectl get deployments</Command>
                    <Command>kubectl scale deployment web --replicas=3</Command>
                    <Command>kubectl expose deployment web --port=80 --type=NodePort</Command>
                </Section>

                <Section title="📝 YAML-based Deployment" color="text-yellow-400">
                    <Command>kubectl apply -f deployment.yaml</Command>
                    <Command>kubectl delete -f deployment.yaml</Command>
                    <Command>kubectl get -f deployment.yaml</Command>
                </Section>

                <Section title="🔍 Logs, Events, and Debugging" color="text-yellow-400">
                    <Command>kubectl logs pod-name</Command>
                    <Command>kubectl exec -it pod-name -- /bin/sh</Command>
                    <Command>kubectl describe pod pod-name</Command>
                    <Command>kubectl get events</Command>
                    <Command>kubectl get svc</Command>
                </Section>

                <Section title="🔄 ConfigMaps and Secrets" color="text-yellow-400">
                    <Command>kubectl create configmap my-config --from-literal=key=value</Command>
                    <Command>kubectl create secret generic my-secret --from-literal=password=1234</Command>
                    <Command>kubectl get configmaps</Command>
                    <Command>kubectl get secrets</Command>
                </Section>

                <Section title="🗑️ Clean Up" color="text-yellow-400">
                    <Command>kubectl delete deployment web</Command>
                    <Command>kubectl delete service web</Command>
                    <Command>kubectl delete pod nginx</Command>
                </Section>

                <p className="mt-10 text-sm text-gray-400">📄 Last updated: June 2025</p>
            </div>
        </div>
    );
}

function Section({ title, children, color }) {
    return (
        <div className="mt-8">
            <h2 className={`text-2xl font-semibold mb-2 ${color}`}>{title}</h2>
            <ul className="list-disc list-inside space-y-1">{children}</ul>
        </div>
    );
}

function Command({ children }) {
    return (
        <li>
            <code className="bg-gray-800 text-white px-2 py-1 rounded">{children}</code>
        </li>
    );
}
