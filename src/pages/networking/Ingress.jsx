import {
    FiCompass,
    FiGlobe,
    FiCode,
    FiMap,
    FiSettings,
    FiAlertCircle,
    FiTerminal
} from "react-icons/fi";
// import { PageNavigation } from "../../components";

const IngressPage = () => {
    return (
        <div className="bg-gray-950 text-gray-100 min-h-screen p-6">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* What is Ingress */}
                <section>
                    <h2 className="text-3xl font-bold flex items-center gap-2 text-[#00df9a]">
                        <FiCompass /> What is Ingress?
                    </h2>
                    <p className="mt-2 text-gray-300">
                        <strong>Ingress</strong> is a Kubernetes resource that manages **external access** to services within a cluster, typically HTTP and HTTPS. It provides **routing rules** based on URLs or hostnames, without exposing each service with a separate IP or LoadBalancer.
                    </p>
                </section>

                {/* Why Use Ingress */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiMap /> Why Use Ingress?
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                        <li>Acts as a single entry point for multiple services.</li>
                        <li>Allows **path-based** or **host-based** routing.</li>
                        <li>Supports SSL/TLS termination.</li>
                        <li>Reduces need for many LoadBalancers or NodePorts.</li>
                    </ul>
                </section>

                {/* Ingress Controller */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiSettings /> What is an Ingress Controller?
                    </h2>
                    <p className="text-gray-300 mt-2">
                        An <strong>Ingress Controller</strong> is a pod or daemon that reads the Ingress resources and configures a load balancer (like NGINX or Traefik) to route the traffic.
                    </p>
                    <p className="text-gray-300 mt-1">
                        Popular controllers:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-1">
                        <li>NGINX Ingress Controller</li>
                        <li>Traefik</li>
                        <li>HAProxy</li>
                        <li>AWS/GCP Ingress Controllers</li>
                    </ul>
                </section>

                {/* Sample YAML */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiCode /> Sample Ingress YAML
                    </h2>
                    <pre className="bg-gray-800 p-4 rounded mt-2 text-sm overflow-auto text-gray-200">
                        {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: myapp.example.com
      http:
        paths:
          - path: /app1
            pathType: Prefix
            backend:
              service:
                name: app1-service
                port:
                  number: 80
          - path: /app2
            pathType: Prefix
            backend:
              service:
                name: app2-service
                port:
                  number: 80`}
                    </pre>
                </section>

                {/* TLS Support */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiGlobe /> TLS / HTTPS Support
                    </h2>
                    <p className="text-gray-300 mt-2">
                        You can secure your applications using HTTPS by configuring TLS in your Ingress definition.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded mt-2 text-sm overflow-auto text-gray-200">
                        {`spec:
  tls:
    - hosts:
        - myapp.example.com
      secretName: tls-secret`}
                    </pre>
                    <p className="text-gray-400 mt-1">
                        The <code>tls-secret</code> must contain the certificate and private key.
                    </p>
                </section>

                {/* Path vs Host Based Routing */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiMap /> Path vs Host Based Routing
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        <li><strong>Path-based:</strong> e.g., `/api` → `api-service`</li>
                        <li><strong>Host-based:</strong> e.g., `api.myapp.com` → `api-service`</li>
                    </ul>
                </section>

                {/* Ingress Annotations */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiSettings /> Common Ingress Annotations
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        <li><code>nginx.ingress.kubernetes.io/rewrite-target</code>: rewrites URL path</li>
                        <li><code>nginx.ingress.kubernetes.io/ssl-redirect</code>: forces HTTPS</li>
                        <li><code>nginx.ingress.kubernetes.io/backend-protocol</code>: set to HTTPS for backend</li>
                    </ul>
                </section>

                {/* Commands */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#00df9a]">
                        <FiTerminal /> Useful kubectl Commands
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        <li><code>kubectl get ingress</code></li>
                        <li><code>kubectl describe ingress example-ingress</code></li>
                        <li><code>kubectl apply -f ingress.yaml</code></li>
                    </ul>
                </section>

                {/* Warnings */}
                <section>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-red-400">
                        <FiAlertCircle /> Notes & Warnings
                    </h2>
                    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                        <li>Ingress only works if an Ingress Controller is installed in the cluster.</li>
                        <li>Ensure DNS resolves to the Ingress Controller’s external IP.</li>
                        <li>Paths must not overlap unless explicitly intended.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default IngressPage;
