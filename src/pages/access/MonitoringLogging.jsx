import { motion } from 'framer-motion';
import {
    FaChartLine,
    FaTools,
    FaClipboardList,
    FaServer,
    FaEye,
    FaLightbulb,
} from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-900 shadow-lg rounded-2xl p-6 mb-6 border border-gray-800 hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        <div className="flex items-center mb-4 text-2xl font-bold text-green-400">
            <Icon className="mr-3 text-green-500" />
            {title}
        </div>
        <div className="text-gray-300 space-y-3 text-[1.1rem] leading-relaxed">
            {children}
        </div>
    </motion.div>
);

export default function MonitoringLogging() {
    return (
        <div className="bg-gray-950 min-h-screen px-6 py-10">
            <div className="max-w-5xl mx-auto space-y-8">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    📊 Monitoring & Logging in Kubernetes
                </motion.h1>

                <p className="text-center text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Ensure <span className="text-green-400 font-semibold">cluster health</span>,
                    troubleshoot issues, and maintain application reliability with effective monitoring and logging practices in Kubernetes.
                </p>

                <Section icon={FaChartLine} title="Monitoring in Kubernetes">
                    <p>
                        Monitoring provides visibility into <strong className="text-green-400">resource usage</strong>,
                        application performance, and system events.
                    </p>
                </Section>

                <Section icon={FaClipboardList} title="Key Metrics to Monitor">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Resource metrics:</strong> CPU, memory, disk, and network usage at pod, node, and cluster levels.</li>
                        <li><strong>API metrics:</strong> Request rates, error rates, and latency.</li>
                        <li><strong>Application-level metrics:</strong> Custom KPIs like request counts or business metrics.</li>
                    </ul>
                </Section>

                <Section icon={FaTools} title="Popular Monitoring Tools">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Prometheus:</strong> Collects and queries metrics.</li>
                        <li><strong>Grafana:</strong> Visualizes metrics from Prometheus and other sources.</li>
                        <li><strong>Jaeger:</strong> Traces distributed requests across microservices.</li>
                        <li><strong>Others:</strong> Splunk, New Relic, Sysdig, Azure Monitor.</li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices for Monitoring">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Unified dashboards:</strong> View metrics in a single pane for faster analysis.</li>
                        <li><strong>Scalability & retention:</strong> Handle cluster growth and retain historical data.</li>
                        <li><strong>Relevant metrics:</strong> Focus on metrics reflecting real user experience.</li>
                        <li><strong>Tagging:</strong> Use labels and annotations for better organization.</li>
                        <li><strong>Service auto-discovery:</strong> Automatically monitor new services.</li>
                    </ul>
                </Section>

                <Section icon={FaServer} title="Logging in Kubernetes">
                    <p>
                        Logs provide a record of system and application events for debugging and compliance.
                    </p>
                </Section>

                <Section icon={FaClipboardList} title="What to Log">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Application logs:</strong> Output from containers (stdout/stderr).</li>
                        <li><strong>System logs:</strong> Events from control plane and nodes.</li>
                        <li><strong>Audit logs:</strong> Access and API request records for security.</li>
                    </ul>
                </Section>

                <Section icon={FaTools} title="Popular Logging Approaches & Tools">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Centralized logging:</strong> Aggregate logs for analysis.</li>
                        <li><strong>Stacks:</strong> ELK/EFK (Elasticsearch, Logstash/Fluentd, Kibana), Loki, Splunk.</li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices for Logging">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Structured logging:</strong> Use JSON format for parsing.</li>
                        <li><strong>Retention policies:</strong> Balance compliance and cost.</li>
                        <li><strong>Correlation:</strong> Link logs with metrics and traces for root cause analysis.</li>
                    </ul>
                </Section>

                <Section icon={FaEye} title="Observability: The Big Picture">
                    <p>
                        Observability combines <strong className="text-green-400">monitoring (metrics)</strong>,
                        <strong className="text-green-400"> logging</strong>, and
                        <strong className="text-green-400"> tracing</strong> for a holistic view of system health.
                        This enables teams to detect, investigate, and resolve issues efficiently.
                    </p>
                </Section>

                <Section icon={FaLightbulb} title="Summary">
                    <p>
                        Kubernetes monitoring and logging rely on the right tools (like <strong>Prometheus</strong>,
                        <strong> Grafana</strong>, <strong>ELK</strong>, and cloud-native solutions),
                        best practices (like unified dashboards and structured logging),
                        and an observability mindset to ensure robust, reliable, and secure clusters.
                    </p>
                </Section>
            </div>
        </div>
    );
};
