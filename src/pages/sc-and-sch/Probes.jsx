import { motion } from 'framer-motion';
import {
    FaHeartbeat,
    FaSitemap,
    FaTags,
    FaCode,
    FaCogs,
    FaLightbulb
} from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <Icon className="w-6 h-6 text-cyan-400" />
            {title}
        </h2>
        <div className="leading-relaxed text-base">{children}</div>
    </motion.div>
);

export default function Probes() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-red-400 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Probes in Kubernetes
                </motion.h1>

                <Section icon={FaHeartbeat} title="What are Probes?">
                    <p>
                        Probes are mechanisms for checking the health and status of containers within pods. They help Kubernetes decide when to send traffic to a container, when to restart it, and when to consider it fully started.
                    </p>
                </Section>

                <Section icon={FaTags} title="Types of Probes">
                    <table className="w-full border border-gray-700 text-sm">
                        <thead className="bg-gray-800 text-emerald-400">
                            <tr>
                                <th className="border border-gray-700 px-3 py-2 text-left">Probe Type</th>
                                <th className="border border-gray-700 px-3 py-2 text-left">Purpose</th>
                                <th className="border border-gray-700 px-3 py-2 text-left">Action on Failure</th>
                                <th className="border border-gray-700 px-3 py-2 text-left">Typical Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr>
                                <td className="border border-gray-700 px-3 py-2 font-medium text-cyan-400">Liveness</td>
                                <td className="border border-gray-700 px-3 py-2">Checks if a container is running and healthy.</td>
                                <td className="border border-gray-700 px-3 py-2">Container is restarted.</td>
                                <td className="border border-gray-700 px-3 py-2">Detecting deadlocks or runtime failures.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 px-3 py-2 font-medium text-cyan-400">Readiness</td>
                                <td className="border border-gray-700 px-3 py-2">Checks if a container is ready to accept traffic.</td>
                                <td className="border border-gray-700 px-3 py-2">Pod is removed from service endpoints.</td>
                                <td className="border border-gray-700 px-3 py-2">Waiting for app initialization or warm-up.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 px-3 py-2 font-medium text-cyan-400">Startup</td>
                                <td className="border border-gray-700 px-3 py-2">Checks if an app has started successfully.</td>
                                <td className="border border-gray-700 px-3 py-2">Liveness/readiness deferred until startup completes.</td>
                                <td className="border border-gray-700 px-3 py-2">Slow-starting apps or legacy applications.</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                <Section icon={FaCogs} title="Probe Methods">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>HTTP GET:</strong> Sends an HTTP request to an endpoint.</li>
                        <li><strong>TCP Socket:</strong> Tries to open a TCP connection on a port.</li>
                        <li><strong>Exec Command:</strong> Runs a command in the container and checks exit code.</li>
                        <li><strong>gRPC:</strong> (in some Kubernetes versions) Uses gRPC health checks.</li>
                    </ul>
                </Section>

                <Section icon={FaSitemap} title="Key Configuration Fields">
                    <ul className="list-disc list-inside space-y-1">
                        <li><code>initialDelaySeconds</code>: Wait time before the first probe.</li>
                        <li><code>periodSeconds</code>: Frequency of probe execution (default: 10s).</li>
                        <li><code>timeoutSeconds</code>: Probe response wait time (default: 1s).</li>
                        <li><code>successThreshold</code>: Consecutive successes needed (default: 1).</li>
                        <li><code>failureThreshold</code>: Failures before action (default: 3).</li>
                        <li><code>terminationGracePeriodSeconds</code>: Grace period before force stop.</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Example Probe Configuration">
                    <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto">
                        {`livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5

readinessProbe:
  tcpSocket:
    port: 3306
  initialDelaySeconds: 5
  periodSeconds: 10

startupProbe:
  exec:
    command:
      - cat
      - /tmp/started
  failureThreshold: 30
  periodSeconds: 10`}
                    </pre>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Use liveness probes to auto-recover from crashes or deadlocks.</li>
                        <li>Use readiness probes to prevent sending traffic to unready pods.</li>
                        <li>Use startup probes for apps with long initialization.</li>
                        <li>Tune probe parameters for your application's startup/response characteristics.</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
}
