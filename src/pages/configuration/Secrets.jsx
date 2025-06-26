import { motion } from 'framer-motion';
import {
    FaClipboardList,
    FaCode,
    FaSearch,
    FaTools,
    FaLightbulb,
    FaQuestionCircle,
    FaLock
} from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-950 text-gray-300 rounded-2xl shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <Icon className="w-6 h-6 text-cyan-400" /> {title}
        </h2>
        <div className="leading-relaxed text-base">{children}</div>
    </motion.div>
);

export default function Secrets() {
    return (
        <div className="bg-gray-950 text-gray-300 font-sans p-8 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-red-400 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Kubernetes Secrets: Secure Configuration Management
                </motion.h1>

                <Section icon={FaLock} title="What is a Kubernetes Secret?">
                    A <strong>Secret</strong> in Kubernetes is a native object used to securely store and manage sensitive information such as passwords, OAuth tokens, SSH private keys, TLS certificates, and more. Unlike ConfigMaps, Secrets are specifically designed for confidential data. The contents of a Secret are Base64 encoded and can be further encrypted at rest using Kubernetes encryption providers like KMS (Key Management Service).
                    <br /><br />
                    Secrets decouple sensitive information from application code, helping to maintain separation of concerns and improve the security posture of your infrastructure.
                </Section>

                <Section icon={FaTools} title="Use Cases for Secrets">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Storing database usernames and passwords</li>
                        <li>Managing API tokens and OAuth credentials</li>
                        <li>Storing TLS certificates and private keys for HTTPS</li>
                        <li>Passing SSH keys to containers for Git access or remote login</li>
                        <li>Holding license keys or cryptographic keys for encryption/decryption</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Creating Secrets in Kubernetes">
                    <p className="mb-2 font-semibold">1. From literal values (CLI):</p>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mb-4 font-mono overflow-x-auto">
                        {`kubectl create secret generic db-secret \
  --from-literal=username=admin \
  --from-literal=password=Pa55w0rd!`}
                    </pre>

                    <p className="mb-2 font-semibold">2. From a file (e.g. SSH private key):</p>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mb-4 font-mono overflow-x-auto">
                        {`kubectl create secret generic ssh-key-secret \
  --from-file=id_rsa=/home/user/.ssh/id_rsa`}
                    </pre>

                    <p className="mb-2 font-semibold">3. From an environment variable file:</p>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono overflow-x-auto">
                        {`# secrets.env
username=admin
password=Pa55w0rd!

kubectl create secret generic env-secret --from-env-file=secrets.env`}
                    </pre>
                </Section>

                <Section icon={FaSearch} title="Consuming Secrets in Pods">
                    <p className="font-semibold">1. As entire environment variables (envFrom):</p>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mb-4 font-mono overflow-x-auto">
                        {`envFrom:
  - secretRef:
      name: db-secret`}
                    </pre>

                    <p className="font-semibold">2. As specific environment variables:</p>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mb-4 font-mono overflow-x-auto">
                        {`env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: db-secret
        key: password`}
                    </pre>

                    <p className="font-semibold">3. Mounted as volumes (files):</p>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono overflow-x-auto">
                        {`volumes:
  - name: secret-volume
    secret:
      secretName: db-secret

volumeMounts:
  - mountPath: /etc/secrets
    name: secret-volume`}
                    </pre>
                </Section>

                <Section icon={FaClipboardList} title="Types of Kubernetes Secrets">
                    <ul className="list-disc list-inside space-y-1">
                        <li><code>Opaque</code> – Default, generic key-value pairs</li>
                        <li><code>kubernetes.io/basic-auth</code> – Username and password pairs</li>
                        <li><code>kubernetes.io/ssh-auth</code> – SSH credentials</li>
                        <li><code>kubernetes.io/tls</code> – TLS certificate and key pairs</li>
                        <li><code>kubernetes.io/dockerconfigjson</code> – Docker registry credentials for private images</li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices for Managing Secrets">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Enable encryption at rest for Secrets using a Kubernetes Encryption Provider (e.g., KMS)</li>
                        <li>Use RBAC to strictly control access to Secrets</li>
                        <li>Avoid exposing Secrets via environment variables unless necessary</li>
                        <li>Use Secrets as volumes for better security and runtime rotation</li>
                        <li>Rotate credentials regularly and automate rotation when possible</li>
                        <li>Use external secret managers like HashiCorp Vault or AWS Secrets Manager when needed</li>
                        <li>Monitor and audit Secret usage with Kubernetes audit logs and policies</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="YAML Example of a Secret">
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono overflow-x-auto">
                        {`apiVersion: v1
kind: Secret
metadata:
  name: db-secret
  namespace: default
type: Opaque
data:
  username: YWRtaW4=
  password: UGE1NXcwcmQh`}
                    </pre>
                    <p className="mt-2 text-sm text-gray-400">
                        Note: All values in the <code>data</code> field must be Base64 encoded. Tools like <code>echo -n 'admin' | base64</code> help convert plain text to Base64.
                    </p>
                </Section>

                <Section icon={FaQuestionCircle} title="FAQ">
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong>Q:</strong> What type of Secret is recommended for TLS certificates?<br /><strong>A:</strong> <code>kubernetes.io/tls</code></li>

                        <li><strong>Q:</strong> How do you decode a stored secret value?<br /><strong>A:</strong> <code>{`kubectl get secret db-secret -o jsonpath="{.data.password}" | base64 --decode`}</code></li>

                        <li><strong>Q:</strong> Will updates to Secrets reflect in running pods automatically?<br /><strong>A:</strong> Only if mounted as volumes. Environment variable changes require a pod restart.</li>

                        <li><strong>Q:</strong> What’s the default type of a Secret?<br /><strong>A:</strong> <code>Opaque</code></li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Conclusion">
                    Kubernetes Secrets provide a secure and declarative method for managing sensitive data in containerized applications. By externalizing credentials, certificates, and tokens from source code, Secrets help enforce the principle of least privilege and minimize attack surface. When integrated with Kubernetes' access controls, encryption providers, and best practices, Secrets become a cornerstone of secure DevOps practices in modern cloud-native infrastructure.
                </Section>
            </div>
        </div>
    );
}
