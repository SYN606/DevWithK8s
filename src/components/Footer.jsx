import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <NavLink
            to="/"
            aria-label="Go home"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-pink-600"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </NavLink>
          <p className="mt-4 text-sm text-gray-600">
            We provide the best services in the industry with a touch of innovation and dedication.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          {[
            { title: "Category", links: ["News", "World", "Games", "References"] },
            { title: "Business", links: ["Web", "eCommerce", "Business", "Entertainment", "Portfolio"] },
            { title: "Apples", links: ["Media", "Brochure", "Nonprofit", "Educational", "Projects"] },
            { title: "Cherry", links: ["Infopreneur", "Personal", "Wiki", "Forum"] }
          ].map((section, idx) => (
            <div key={idx}>
              <p className="font-semibold tracking-wide text-gray-800">
                {section.title}
              </p>
              <ul className="mt-2 space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-pink-600"
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

      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          {[
            {
              href: "/",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8..." />
                </svg>
              )
            },
            {
              href: "/",
              icon: (
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14..." />
                </svg>
              )
            },
            {
              href: "/",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0..." />
                </svg>
              )
            }
          ].map((item, index) => (
            <NavLink
              to={item.href}
              key={index}
              className="text-gray-500 transition-colors duration-300 hover:text-pink-600"
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
