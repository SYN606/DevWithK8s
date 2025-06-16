import { NavLink } from "react-router-dom";
import { FaCubes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-4 pt-16 pb-10 border-t border-gray-800">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <NavLink to="/" className="inline-flex items-center">
              <FaCubes className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold tracking-wide text-blue-400 uppercase">
                DevWithK8s
              </span>
            </NavLink>
            <p className="mt-4 text-sm text-gray-400">
              Your Kubernetes learning companion — curated notes, commands, and resources built with Kind and kubectl.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            {[
              {
                title: "Get Started",
                links: ["Home", "Intro to K8s", "Cluster Setup", "Architecture"],
              },
              {
                title: "Core Topics",
                links: ["Pods", "Deployments", "Services", "Volumes"],
              },
              {
                title: "Advanced",
                links: ["Helm", "CRDs", "Operators", "Service Mesh"],
              },
              {
                title: "About",
                links: ["Contribute", "GitHub Repo", "Contact"],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <p className="font-semibold tracking-wide text-blue-300">{section.title}</p>
                <ul className="mt-2 space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <NavLink
                        to="/"
                        className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                      >
                        {link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DevWithK8s. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-blue-500"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-blue-500"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-blue-500"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Crafted with ❤️ by <span className="text-blue-400 font-medium">SYN606</span>
        </p>
      </div>
    </footer>
  );
}
