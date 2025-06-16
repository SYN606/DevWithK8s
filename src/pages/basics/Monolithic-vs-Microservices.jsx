import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PageNavigation } from '../../components';

const MonolithicVsMicroservices = () => {
    return (
        <div className="bg-gray-950 text-white font-sans p-8">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-yellow-400 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    🏗️ Monolithic vs Microservices Architecture
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Understanding the difference between <span className="text-blue-400 font-semibold">Monolithic</span> and <span className="text-blue-400 font-semibold">Microservices</span> architectures is essential when designing scalable and maintainable applications.
                </motion.p>

                <Section
                    title="🔸 What is Monolithic Architecture?"
                    points={[
                        'Single-tiered, unified structure',
                        'Components are tightly coupled and share memory/database',
                        'Entire application must be redeployed for any change',
                        'Easy to develop in early stages, but hard to scale',
                    ]}
                    description="Monolithic architecture is a traditional software design pattern where all components of an application are integrated into a single codebase and deployed as one unit."
                />

                <Section
                    title="🔹 What is Microservices Architecture?"
                    points={[
                        'Each service focuses on a single business function',
                        'Services are loosely coupled and independently deployable',
                        'Ideal for continuous deployment and large-scale systems',
                        'Scalable, resilient, and aligned with DevOps practices',
                    ]}
                    description="Microservices architecture breaks down an application into a collection of small, independent services that communicate over APIs."
                />

                <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-2xl font-bold text-green-400 mb-4">🔄 Key Differences</h2>
                    <div className="overflow-auto">
                        <table className="w-full text-left text-sm text-gray-300 border border-gray-700">
                            <thead className="bg-gray-800 text-yellow-300">
                                <tr>
                                    <th className="p-3 border border-gray-700">Feature</th>
                                    <th className="p-3 border border-gray-700">Monolithic</th>
                                    <th className="p-3 border border-gray-700">Microservices</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Architecture', 'Single codebase', 'Independent services'],
                                    ['Deployment', 'Deployed as a whole', 'Each service is deployed individually'],
                                    ['Scalability', 'Hard to scale components separately', 'Easily scalable per service'],
                                    ['Development', 'Slower for large teams', 'Enables parallel team development'],
                                    ['Tech Stack', 'Usually uniform', 'Polyglot possible'],
                                ].map(([feature, mono, micro]) => (
                                    <tr key={feature}>
                                        <td className="p-3 border border-gray-700">{feature}</td>
                                        <td className="p-3 border border-gray-700">{mono}</td>
                                        <td className="p-3 border border-gray-700">{micro}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-2xl font-bold text-green-400 mb-2">📦 When to Use What?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong className="text-yellow-300">Use Monolithic</strong> if you're building a small application with a tight-knit team, limited features, or MVP.
                        </li>
                        <li>
                            <strong className="text-yellow-300">Use Microservices</strong> if you're developing a large-scale system with independent modules and expect frequent updates.
                        </li>
                    </ul>
                </motion.div>

                <PageNavigation
                    leftPath="/basics/intro"
                    leftLabel="Introduction to Kubernetes"
                    rightPath="/basics/architecture-of-k8s"
                    rightLabel="Kubernetes Architecture"
                />
            </div>
        </div>
    );
};

const Section = ({ title, description, points }) => (
    <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2 className="text-2xl font-bold text-green-400 mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default MonolithicVsMicroservices;
