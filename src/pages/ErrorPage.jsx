import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 rounded-2xl">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-gray-800/60 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] max-w-lg w-full text-center"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 text-2xl font-semibold"
                >
                    Page Not Found
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-2 text-gray-400"
                >
                    The page you are looking for doesn’t exist or has been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Link
                        to="/"
                        aria-label="Go to homepage"
                        className="mt-6 inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-lg transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                    >
                        Go to Homepage
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
