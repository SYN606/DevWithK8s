import { motion } from "framer-motion";
import {
    FaCogs,
    FaChartLine,
    FaBook,
    FaTools,
    FaExclamationTriangle,
    FaLightbulb
} from "react-icons/fa";

const Section = ({ title, icon: Icon, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-6"
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <Icon className="w-6 h-6 text-cyan-400" /> {title}
        </h2>
        <div className="leading-relaxed text-base">{children}</div>
    </motion.div>
);

export default function HPA() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-red-400 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Horizontal Pod Autoscaler (HPA) in Kubernetes
                </motion.h1>

                <Section title="Overview" icon={FaBook}>
                    <p>
                        Horizontal Pod Autoscaler (HPA) is a Kubernetes controller that
                        automatically adjusts the number of pod replicas in a deployment,
                        replica set, or stateful set based on observed metrics such as CPU
                        utilization, memory usage, or custom/external metrics.
                    </p>
                    <p>
                        HPA enables applications to scale out (add pods) to meet increased
                        demand or scale in (remove pods) when resources are no longer needed,
                        ensuring efficient resource utilization and consistent performance.
                    </p>
                </Section>

                <Section title="How HPA Works" icon={FaCogs}>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Control Loop:</strong> Operates at regular intervals
                            (default: every 15 seconds), querying metrics and adjusting replica
                            count.
                        </li>
                        <li>
                            <strong>Metrics Gathering:</strong> Collects metrics from the Metrics
                            Server or custom/external APIs.
                        </li>
                        <li>
                            <strong>Evaluation:</strong> Compares collected metrics against
                            target thresholds in the HPA config.
                        </li>
                        <li>
                            <strong>Scaling Decision:</strong> Adds/removes pods based on usage.
                        </li>
                        <li>
                            <strong>Actuation:</strong> Updates the replica count via API.
                        </li>
                        <li>
                            <strong>Stabilization:</strong> Prevents rapid repeated scaling
                            (thrashing).
                        </li>
                    </ul>
                </Section>

                <Section title="Key Concepts" icon={FaLightbulb}>
                    <h3 className="font-semibold text-emerald-400">Horizontal vs. Vertical Scaling</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Horizontal Scaling:</strong> Adds/removes pod replicas (HPA)
                        </li>
                        <li>
                            <strong>Vertical Scaling:</strong> Adjusts resources for existing
                            pods (handled by VPA)
                        </li>
                    </ul>

                    <h3 className="font-semibold text-emerald-400 mt-3">Metrics Used</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>CPU and memory usage per pod</li>
                        <li>Custom Metrics: e.g., requests per second</li>
                        <li>External Metrics: e.g., queue length in cloud services</li>
                    </ul>
                </Section>

                <Section title="Configuration" icon={FaTools}>
                    <p>
                        Define min/max replicas and target utilization (e.g., 50% CPU usage).
                        Multiple metrics can also be configured; scaling uses the highest
                        demand metric.
                    </p>
                    <pre className="bg-gray-800 text-green-400 rounded p-4 mt-3 overflow-auto text-sm font-mono">
                        {`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: demo
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: demo
  minReplicas: 3
  maxReplicas: 9
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50`}
                    </pre>
                </Section>

                <Section title="Common Commands" icon={FaChartLine}>
                    <pre className="bg-gray-800 text-green-400 rounded p-4 mt-3 overflow-auto text-sm font-mono">
                        {`kubectl get hpa
kubectl autoscale deploy <deployment-name> --min=<min> --max=<max> --cpu-percent=<target>
kubectl delete hpa <hpa-name>`}
                    </pre>
                </Section>

                <Section title="Best Practices & Limitations" icon={FaExclamationTriangle}>
                    <h3 className="font-semibold text-emerald-400">Best Practices</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Avoid static replica counts in workload manifests</li>
                        <li>Regularly monitor and test HPA behavior under load</li>
                    </ul>
                    <h3 className="font-semibold text-emerald-400 mt-3">Limitations</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Scaling delay due to control loop and pod startup time</li>
                        <li>HPA is best for stateless apps that can scale horizontally</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
}
