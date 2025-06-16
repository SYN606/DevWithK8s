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
import { PageNavigation } from "../../components";

const ServicesPage = () => {
    return (
        <div className="bg-gray-950 text-gray-100 min-h-screen p-6">
            <div className="max-w-5xl mx-auto space-y-8">
                <section>
                    <h2 className="text-3xl font-bold text-[#00df9a] flex items-center gap-2">
                        <FiLink /> What is a Kubernetes Service?
                    </h2>
                    <p className="mt-2 text-gray-300">
                        A <strong>Service</strong> in Kubernetes is a stable abstraction that exposes a set of dynamic Pods under a fixed IP and DNS name. Since Pods are ephemeral, a Service ensures reliable communication by providing a stable endpoint for clients.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiZap /> Why Do We Need Services?
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                        <li>Pods are temporary and their IPs change frequently.</li>
                        <li>Services provide a consistent way to reach backend Pods.</li>
                        <li>They load-balance requests to healthy Pods.</li>
                        <li>They allow service discovery using DNS.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiGrid /> Types of Services
                    </h2>
                    <div className="space-y-6 mt-4">

                        <div>
                            <h3 className="text-xl font-semibold">1. ClusterIP (default)</h3>
                            <p className="text-gray-300 mt-1">
                                Exposes the service on an internal IP, making it accessible only within the cluster.
                            </p>
                            <code className="block bg-gray-800 p-2 mt-2 rounded">type: ClusterIP</code>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">2. NodePort</h3>
                            <p className="text-gray-300 mt-1">
                                Exposes the service on each Node's IP at a static port (30000–32767). Enables basic external access.
                            </p>
                            <code className="block bg-gray-800 p-2 mt-2 rounded">type: NodePort</code>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">3. LoadBalancer</h3>
                            <p className="text-gray-300 mt-1">
                                Provisions an external cloud load balancer. Suitable for production-grade external access.
                            </p>
                            <code className="block bg-gray-800 p-2 mt-2 rounded">type: LoadBalancer</code>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">4. ExternalName</h3>
                            <p className="text-gray-300 mt-1">
                                Maps the service to an external DNS. No actual proxying happens.
                            </p>
                            <pre className="bg-gray-800 p-2 rounded mt-2">
                                {`type: ExternalName
externalName: example.com`}
                            </pre>
                        </div>

                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiCode /> Sample YAML (ClusterIP)
                    </h2>
                    <pre className="bg-gray-800 p-4 rounded mt-2 text-sm text-gray-200 overflow-auto">
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
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiServer /> Internal Working
                    </h2>
                    <p className="text-gray-300 mt-2">
                        Kubernetes uses iptables or IPVS to route traffic to backend Pods based on selectors. A Service automatically keeps track of healthy Pod endpoints.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiGlobe /> DNS & Discovery
                    </h2>
                    <p className="text-gray-300 mt-2">
                        Services are auto-registered in CoreDNS and can be reached using:
                    </p>
                    <code className="block bg-gray-800 p-2 mt-2 rounded">
                        my-service.my-namespace.svc.cluster.local
                    </code>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiTerminal /> Headless Services
                    </h2>
                    <p className="text-gray-300 mt-2">
                        If you want DNS to return Pod IPs directly instead of a cluster IP, use:
                    </p>
                    <code className="block bg-gray-800 p-2 mt-2 rounded">
                        clusterIP: None
                    </code>
                    <p className="text-gray-300 mt-2">
                        Useful in StatefulSets or databases where direct pod communication is required.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiTerminal /> Useful kubectl Commands
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                        <li><code>kubectl get services</code></li>
                        <li><code>kubectl describe service my-service</code></li>
                        <li><code>curl http://my-service</code> (within the cluster)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiGrid /> Summary Table
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full text-left border border-gray-700 text-sm">
                            <thead className="bg-gray-800 text-gray-200">
                                <tr>
                                    <th className="px-4 py-2 border-r border-gray-700">Type</th>
                                    <th className="px-4 py-2 border-r border-gray-700">Accessible From</th>
                                    <th className="px-4 py-2 border-r border-gray-700">External Access</th>
                                    <th className="px-4 py-2">Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">ClusterIP</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Inside cluster</td>
                                    <td className="px-4 py-2 border-r border-gray-700">❌</td>
                                    <td className="px-4 py-2">Internal communication</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">NodePort</td>
                                    <td className="px-4 py-2 border-r border-gray-700">NodeIP:Port</td>
                                    <td className="px-4 py-2 border-r border-gray-700">✅ (basic)</td>
                                    <td className="px-4 py-2">Dev/test external access</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">LoadBalancer</td>
                                    <td className="px-4 py-2 border-r border-gray-700">Cloud Load Balancer</td>
                                    <td className="px-4 py-2 border-r border-gray-700">✅</td>
                                    <td className="px-4 py-2">Production external traffic</td>
                                </tr>
                                <tr className="border-t border-gray-700">
                                    <td className="px-4 py-2 border-r border-gray-700">ExternalName</td>
                                    <td className="px-4 py-2 border-r border-gray-700">External DNS</td>
                                    <td className="px-4 py-2 border-r border-gray-700">✅ (DNS only)</td>
                                    <td className="px-4 py-2">External service mapping</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            {/* <PageNavigation /> */}
        </div>
    );
};

export default ServicesPage;
