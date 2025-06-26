import {
    FiLink,
    FiGlobe,
    FiCode,
    FiTerminal,
    FiZap,
    FiServer,
    FiGrid,
    FiCloud,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Section = ({ icon: Icon, title, children }) => (
    <motion.section
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <Icon className="w-6 h-6 text-cyan-400" /> {title}
        </h2>
        <div className="leading-relaxed text-base text-gray-300">{children}</div>
    </motion.section>
);

export default function ServicesPage() {
    return (
        <div className="bg-gray-950 text-gray-100 min-h-screen p-6 font-sans">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-emerald-400 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Kubernetes Services: Networking & Discovery
                </motion.h1>

                <Section icon={FiLink} title="What is a Kubernetes Service?">
                    A <strong>Service</strong> in Kubernetes is a stable abstraction that exposes a group of Pods under a single IP address and DNS name. It provides load balancing and service discovery, allowing reliable communication between different components of an application.
                    <br /><br />
                    Services decouple the consumer from the dynamic nature of Pods by ensuring a consistent endpoint, even when the underlying Pods change due to scaling or failures.
                </Section>

                <Section icon={FiZap} title="Why Do We Need Services?">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Pods are ephemeral and may be recreated with new IPs.</li>
                        <li>Services provide stable IP addresses and DNS names.</li>
                        <li>They enable load balancing across multiple Pods.</li>
                        <li>Services facilitate service discovery via DNS.</li>
                        <li>They help in exposing internal or external applications.</li>
                    </ul>
                </Section>

                <Section icon={FiGrid} title="Types of Kubernetes Services">
                    <h3 className="font-semibold text-lg mt-2">1. ClusterIP (default)</h3>
                    <p>
                        Exposes the Service internally within the cluster. Ideal for internal-only applications like databases.
                    </p>
                    <code className="block bg-gray-800 p-2 my-2 rounded">type: ClusterIP</code>

                    <h3 className="font-semibold text-lg mt-4">2. NodePort</h3>
                    <p>
                        Exposes the Service on each Node's IP at a static port. Suitable for exposing a Service outside the cluster without a load balancer.
                    </p>
                    <code className="block bg-gray-800 p-2 my-2 rounded">type: NodePort</code>

                    <h3 className="font-semibold text-lg mt-4">3. LoadBalancer</h3>
                    <p>
                        Provisions an external load balancer (usually cloud-provider specific) and routes traffic to NodePort automatically. Ideal for production applications.
                    </p>
                    <code className="block bg-gray-800 p-2 my-2 rounded">type: LoadBalancer</code>

                    <h3 className="font-semibold text-lg mt-4">4. ExternalName</h3>
                    <p>
                        Maps a Service to an external DNS name. It returns a CNAME record without proxying traffic.
                    </p>
                    <pre className="bg-gray-800 p-2 mt-2 rounded">
                        {`type: ExternalName
externalName: example.com`}
                    </pre>

                    <h3 className="font-semibold text-lg mt-4">5. Headless Service</h3>
                    <p>
                        Used when you don't need load-balancing or a single IP. Setting <code>clusterIP: None</code> returns individual Pod IPs in DNS lookup. Useful for StatefulSets or direct communication.
                    </p>
                    <code className="block bg-gray-800 p-2 my-2 rounded">clusterIP: None</code>
                </Section>

                <Section icon={FiCode} title="Sample YAML (ClusterIP)">
                    <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto">
                        {`apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080`}
                    </pre>
                </Section>

                <Section icon={FiServer} title="How Services Route Traffic">
                    Kubernetes uses either <code>iptables</code> or <code>IPVS</code> to handle traffic routing. When a request is sent to a Service IP, kube-proxy reroutes it to one of the matching Pod IPs.
                    <br /><br />
                    The selection of the backend Pod is done via round-robin or IPVS strategies. This mechanism ensures high availability and distribution of traffic.
                </Section>

                <Section icon={FiGlobe} title="DNS and Service Discovery">
                    All Services are automatically assigned DNS entries by CoreDNS. These DNS names follow the format:
                    <code className="block bg-gray-800 p-2 my-2 rounded">my-service.my-namespace.svc.cluster.local</code>
                    <p>
                        Pods can access Services using these names without worrying about underlying IPs.
                    </p>
                </Section>

                <Section icon={FiTerminal} title="kubectl Commands for Services">
                    <ul className="list-disc list-inside space-y-2">
                        <li><code>kubectl get services</code> – List all Services</li>
                        <li><code>kubectl describe service &lt;name&gt;</code> – Show details</li>
                        <li><code>kubectl expose pod &lt;pod-name&gt; --port=80 --target-port=8080 --name=web</code> – Create a Service</li>
                        <li><code>kubectl delete service &lt;name&gt;</code> – Delete a Service</li>
                    </ul>
                </Section>

                <Section icon={FiGrid} title="Service Type Comparison Table">
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full text-left border border-gray-700 text-sm">
                            <thead className="bg-gray-800 text-gray-200">
                                <tr>
                                    <th className="px-4 py-2 border-r border-gray-700">Type</th>
                                    <th className="px-4 py-2 border-r border-gray-700">Scope</th>
                                    <th className="px-4 py-2 border-r border-gray-700">Exposed Externally</th>
                                    <th className="px-4 py-2">Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">ClusterIP</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Internal</td>
                                    <td className="px-4 py-2 border-r border-gray-700">No</td>
                                    <td className="px-4 py-2">Internal app communication</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">NodePort</td>
                                    <td className="px-4 py-2 border-r border-gray-700">External via Node IP</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Yes</td>
                                    <td className="px-4 py-2">Dev/test environments</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">LoadBalancer</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Cloud provider</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Yes</td>
                                    <td className="px-4 py-2">Production deployments</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">ExternalName</td>
                                    <td className="px-4 py-2 border-r border-gray-700">External DNS</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Yes (DNS only)</td>
                                    <td className="px-4 py-2">Redirect to external service</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">Headless</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Direct Pod IPs</td>
                                    <td className="px-4 py-2 border-r border-gray-700">No</td>
                                    <td className="px-4 py-2">Stateful sets & discovery</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>
            </div>
        </div>
    );
}
