import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbRocket, TbSearch } from "react-icons/tb";
import { categories } from "../components";

export default function Homepage() {
    const [search, setSearch] = useState("");

    const filteredCategories = categories.map((category) => ({
        ...category,
        links: category.links.filter((link) =>
            link.name.toLowerCase().includes(search.toLowerCase())
        ),
    }));

    return (
        <div className="relative bg-gray-950 text-white min-h-screen">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow">
                        🚀 DevWithK8s: Master Kubernetes
                    </h1>
                    <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Learn Kubernetes faster with curated notes, <span className="text-green-400 font-semibold">Kind clusters</span>, and practical{" "}
                        <span className="text-green-400 font-semibold">kubectl</span> commands.
                    </p>
                    <Link
                        to="/cheat-sheet"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold rounded-full shadow hover:shadow-lg hover:scale-105 transition transform duration-300"
                    >
                        <TbRocket size={20} /> Get Started
                    </Link>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative max-w-lg mx-auto mb-12"
                >
                    <input
                        type="text"
                        placeholder="🔍 Search Kubernetes topics..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 rounded-full bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                    <TbSearch className="absolute right-4 top-3.5 text-gray-400" size={22} />
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredCategories.map(
                        (category) =>
                            category.links.length > 0 && (
                                <motion.div
                                    key={category.title}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0px 12px 30px rgba(14, 165, 233, 0.2)",
                                    }}
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-inner border border-gray-700/50 hover:border-green-400 transition-all duration-300"
                                >
                                    <h3 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                                        <category.icon size={20} /> {category.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {category.links.map((link) => (
                                            <li key={link.path}>
                                                <Link
                                                    to={link.path}
                                                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                                                >
                                                    • {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                    )}
                </motion.div>
            </div>
        </div>
    );
}
