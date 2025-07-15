import React from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaSitemap, FaTags, FaCogs, FaCode, FaLightbulb } from 'react-icons/fa';

const Section = ({ icon: Icon, title, children }) => (
    <motion.div
        className="bg-gray-900 shadow-lg rounded-2xl p-6 mb-6 border border-gray-800 hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        <div className="flex items-center mb-4 text-2xl font-bold text-purple-400">
            <Icon className="mr-3 text-purple-500" />
            {title}
        </div>
        <div className="text-gray-300 space-y-3 text-[1.1rem] leading-relaxed">
            {children}
        </div>
    </motion.div>
);

export default function RBAC() {
    return (
        <div className="bg-gray-950 min-h-screen px-6 py-10">
            <div className="max-w-5xl mx-auto space-y-8">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🔐 Role-Based Access Control (RBAC) in Kubernetes
                </motion.h1>

                <p className="text-center text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Learn how <span className="text-purple-300 font-semibold">RBAC</span> secures your Kubernetes cluster by controlling who can do what — with the power of roles, bindings, and fine-grained permissions.
                </p>

                <Section icon={FaUserShield} title="What is RBAC?">
                    <p>
                        <strong className="text-purple-300">Role-Based Access Control (RBAC)</strong> is a security mechanism that regulates access to cluster resources based on roles assigned to users, groups, or service accounts. It enforces the <strong className="text-purple-300">principle of least privilege</strong> in Kubernetes.
                    </p>
                </Section>

                <Section icon={FaTags} title="Core Concepts and Components">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Role:</strong> Grants permissions within a specific namespace.</li>
                        <li><strong>ClusterRole:</strong> Grants permissions cluster-wide across all namespaces.</li>
                        <li><strong>RoleBinding:</strong> Assigns a Role to a subject (user, group, service account) in a namespace.</li>
                        <li><strong>ClusterRoleBinding:</strong> Assigns a ClusterRole to a subject across the entire cluster.</li>
                        <li><strong>Subjects:</strong> Users, groups, or service accounts receiving permissions.</li>
                        <li><strong>Permissions:</strong> Actions (verbs like get, list, create, delete) on resources.</li>
                    </ul>
                </Section>

                <Section icon={FaCogs} title="How RBAC Works">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Authentication:</strong> The API server authenticates the requestor.</li>
                        <li><strong>Authorization:</strong> RBAC policies are checked to allow or deny the action.</li>
                    </ul>
                </Section>

                <Section icon={FaSitemap} title="Default User-Facing Roles">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>cluster-admin:</strong> Full access to all resources.</li>
                        <li><strong>admin:</strong> Broad namespace access, including role management.</li>
                        <li><strong>edit:</strong> Read/write access but cannot modify roles or bindings.</li>
                        <li><strong>view:</strong> Read-only access within a namespace.</li>
                    </ul>
                </Section>

                <Section icon={FaCode} title="Enabling RBAC">
                    <p>
                        Enable RBAC by setting the API server flag:
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded ml-2">--authorization-mode=RBAC</code>.
                        Policies are managed dynamically through the Kubernetes API.
                    </p>
                </Section>

                <Section icon={FaLightbulb} title="Best Practices">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Apply the <strong>principle of least privilege</strong> to all users and workloads.</li>
                        <li>Prefer Roles and RoleBindings over ClusterRoles unless necessary.</li>
                        <li>Avoid using wildcards to prevent over-permissioning.</li>
                        <li>Restrict <code className="bg-gray-800 text-green-400 px-1 rounded">cluster-admin</code> usage to trusted administrators only.</li>
                    </ul>
                </Section>

                <Section icon={FaLightbulb} title="Why Use RBAC?">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Provides granular access control for users and workloads.</li>
                        <li>Improves security and reduces the risk of accidental or malicious actions.</li>
                        <li>Supports access auditing for compliance and troubleshooting.</li>
                        <li>Simplifies permission management at scale.</li>
                    </ul>
                </Section>
            </div>
        </div>
    );
};


