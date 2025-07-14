import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaBookOpen, FaBolt, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function IdeaPage() {
    return (
        <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-10 font-sans text-[1.1rem] md:text-[1.15rem] leading-relaxed">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    💡 Why DevWithK8s?
                </motion.h1>

                <p className="text-center text-lg text-gray-400 mb-6 leading-relaxed">
                    <strong className="text-gray-100">DevWithK8s</strong> is built for developers who want a <strong>simple, effective way to learn Kubernetes</strong> and quickly <strong>recall concepts</strong> without digging through endless documentation.
                </p>

                {/* Section: The Problem */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 text-2xl font-bold text-blue-400">
                        <FaLightbulb /> The Problem
                    </div>
                    <p className="text-gray-300">
                        Kubernetes is powerful, but let’s be honest — it’s <strong>overwhelming</strong>. The official documentation is massive, tutorials are scattered, and it’s easy to forget the details of things like <strong>HPA</strong> or <strong>taints & tolerations</strong> after a few weeks away.
                    </p>
                    <p className="text-gray-400">
                        As developers, we need a <strong>single place</strong> where we can:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 pl-5">
                        <li><strong>🌱 Learn step by step</strong> without jargon.</li>
                        <li><strong>⚡ Quickly revisit</strong> key topics when needed.</li>
                        <li><strong>🛠 Focus on commands</strong> and practical use cases.</li>
                    </ul>
                </motion.div>

                {/* Section: The Solution */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 text-2xl font-bold text-green-400">
                        <FaRocket /> The Solution
                    </div>
                    <p className="text-gray-300">
                        <strong>DevWithK8s</strong> is your <strong>mini Kubernetes documentation</strong> — simple, focused, and designed for quick learning.
                    </p>
                    <p className="text-gray-400">
                        It’s like your <strong>personal Kubernetes notebook</strong> where each topic is:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 pl-5">
                        <li>📝 <strong>Explained concisely</strong> with plain language.</li>
                        <li>📄 <strong>Paired with examples</strong> and <strong>kubectl</strong> commands.</li>
                        <li>🚀 <strong>Quick to search</strong> and revisit anytime.</li>
                    </ul>
                </motion.div>

                {/* Section: The Vision */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center gap-3 text-2xl font-bold text-yellow-400">
                        <FaBolt /> The Vision
                    </div>
                    <p className="text-gray-300">
                        The goal of DevWithK8s is more than just documentation. It’s about building a <strong>learning companion</strong> for developers.
                    </p>
                    <p className="text-gray-400">
                        Think of it as a blend of:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 pl-5">
                        <li>✅ <strong>A cheatsheet</strong> for commands and syntax.</li>
                        <li>✅ <strong>A guidebook</strong> for understanding core concepts.</li>
                        <li>✅ <strong>A quick reference</strong> for when you’re stuck.</li>
                    </ul>
                </motion.div>

                {/* Section: For Developers */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 text-2xl font-bold text-purple-400">
                        <FaUserFriends /> For Developers Like You
                    </div>
                    <p className="text-gray-300">
                        Whether you’re just starting out or you’re managing production clusters, DevWithK8s is for <strong>people like us</strong> — curious, busy, and eager to learn.
                    </p>
                    <p className="text-gray-400">
                        With this resource, you’ll spend less time searching and more time <strong>building, debugging, and deploying.</strong>
                    </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-green-400 mb-3">
                        🚀 Start your Kubernetes journey now!
                    </h2>
                    <p className="text-gray-400 mb-5">
                        Begin with the basics, or jump straight into workloads and scaling strategies.
                    </p>
                    <Link
                        to="/basics/intro"
                        className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full font-semibold transition-colors duration-300"
                    >
                        Start Learning
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
