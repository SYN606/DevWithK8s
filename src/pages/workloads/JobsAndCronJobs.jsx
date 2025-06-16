import React from "react";
import {
    FiClock,
    FiSettings,
    FiRepeat,
    FiAlertCircle,
    FiCalendar,
    FiCheckCircle,
    FiXCircle,
    FiTerminal,
    FiBarChart2,
} from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const JobsAndCronJobs = () => {
    return (
        <div className="bg-gray-950 text-white font-sans p-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.h1
                    className="text-4xl font-bold mb-4 text-blue-400 flex items-center gap-2"
                >
                    🧠 Kubernetes Jobs & CronJobs – Complete Notes
                </motion.h1>

                <motion.section variants={fadeIn}>
                    <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-2 flex items-center gap-2">
                        <FiTerminal /> 📌 What is a Job in Kubernetes?
                    </h2>
                    <p className="mb-4">
                        A <strong>Job</strong> in Kubernetes is used to <em>run a pod to completion</em>. Unlike Deployments or
                        DaemonSets, which run continuously, a Job ensures that a task <strong>runs to successful completion</strong>.
                        It is ideal for batch processing and one-off tasks.
                    </p>

                    <p className="mb-4">
                        Jobs are managed by the <code>Job</code> controller, which watches over pods and ensures the desired number of pods finish successfully.
                        You can use Jobs to run single or multiple pods in parallel or sequentially, depending on your need.
                    </p>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiBarChart2 /> 🔍 Key Characteristics:
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>A Job creates one or more pods.</li>
                        <li>It ensures a specified number of pods successfully terminate.</li>
                        <li>Used for <strong>batch or parallel jobs</strong>.</li>
                        <li>Does not restart once complete (unless configured).</li>
                        <li>Has fields to control retry behavior and failure handling.</li>
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 text-green-400 flex items-center gap-2">
                        <FiSettings /> 🔧 Use Cases for Jobs
                    </h3>
                    <motion.table className="table-auto border-collapse border border-gray-700 w-full text-sm" initial="hidden" animate="visible" variants={fadeIn}>
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="border border-gray-700 px-4 py-2">Use Case</th>
                                <th className="border border-gray-700 px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-700 px-4 py-2">Database Migration</td>
                                <td className="border border-gray-700 px-4 py-2">Apply schema changes or seed data</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 px-4 py-2">Data Processing</td>
                                <td className="border border-gray-700 px-4 py-2">ETL jobs or analytics</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 px-4 py-2">Backup Jobs</td>
                                <td className="border border-gray-700 px-4 py-2">Export and back up data</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 px-4 py-2">Cleanup Tasks</td>
                                <td className="border border-gray-700 px-4 py-2">Delete temp files, logs</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 px-4 py-2">One-time Initialization</td>
                                <td className="border border-gray-700 px-4 py-2">Configure systems before main app starts</td>
                            </tr>
                        </tbody>
                    </motion.table>

                    <h3 className="text-xl mt-6 mb-2 text-green-400">📦 Job YAML Example</h3>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto whitespace-pre-wrap" initial="hidden" animate="visible" variants={fadeIn}>
                        <code>{`apiVersion: batch/v1
kind: Job
metadata:
  name: hello-job
spec:
  completions: 1
  parallelism: 1
  backoffLimit: 4
  template:
    spec:
      containers:
      - name: hello
        image: busybox
        command: ["echo", "Hello from Kubernetes Job"]
      restartPolicy: Never`}</code>
                    </motion.pre>

                    <h3 className="text-xl mt-6 mb-2 text-green-400">📌 What is a CronJob?</h3>
                    <p className="mb-4">
                        A <strong>CronJob</strong> creates Jobs on a defined schedule, similar to <code>cron</code> on UNIX systems.
                        It is used for recurring tasks such as periodic backups, cleanup operations, or report generations.
                    </p>

                    <p className="mb-4">
                        CronJobs automatically manage time-based Job creation and can retain history for troubleshooting or auditing purposes.
                    </p>

                    <h3 className="text-xl mt-6 mb-2 text-green-400">📦 CronJob YAML Example</h3>
                    <motion.pre className="bg-gray-800 text-sm rounded p-4 overflow-x-auto whitespace-pre-wrap" initial="hidden" animate="visible" variants={fadeIn}>
                        <code>{`apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello-cron
spec:
  schedule: "*/5 * * * *"
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            args: ["/bin/sh", "-c", "date; echo Hello from the CronJob"]
          restartPolicy: OnFailure`}</code>
                    </motion.pre>

                    <p className="mb-4">
                        The above example runs the job every 5 minutes and keeps history of the last 3 successful and 1 failed job.
                    </p>

                    <h3 className="text-xl mt-6 mb-2 text-green-400">📘 More About Cron Format</h3>
                    <ul className="list-disc list-inside">
                        <li><code>*</code> = Every value</li>
                        <li><code>*/5</code> = Every 5 units (e.g., minutes)</li>
                        <li><code>1,15</code> = Specific values (e.g., 1st and 15th)</li>
                        <li><code>1-5</code> = Range of values</li>
                        <li>Order: Minute Hour Day-of-Month Month Day-of-Week</li>
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 text-green-400">🚦 Common Pitfalls</h3>
                    <ul className="list-disc list-inside">
                        <li>Improper <code>restartPolicy</code> in Jobs (must be <code>Never</code> or <code>OnFailure</code>).</li>
                        <li>Not setting <code>backoffLimit</code>—can lead to endless retries.</li>
                        <li>Using overlapping CronJob schedules without handling concurrency.</li>
                        <li>Not setting limits for job history retention.</li>
                    </ul>

                </motion.section>
            </motion.div>
        </div>
    );
};

export default JobsAndCronJobs;