import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu
} from "react-icons/ai";
import {
  FaHome,
  FaBuilding,
  FaBook,
  FaPhone
} from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navItems = [
    {
      id: 1,
      text: "Home",
      path: "/",
      icon: <FaHome />,
      internal: true,
    },
    {
      id: 2,
      text: "About Me",
      path: "https://syn606.pages.dev",
      icon: <FaBuilding />,
      internal: false, // external link
    },
    {
      id: 3,
      text: "Idea",
      path: "/idea",
      icon: <FaBook />,
      internal: true,
    },
  ];

  const activeClass =
    "bg-[#00df9a] text-black rounded-xl px-4 py-2 font-semibold transition-all duration-300";
  const defaultClass =
    "px-4 py-2 hover:bg-[#00df9a] hover:text-black rounded-xl transition-all duration-300";

  return (
    <nav className="bg-gray-950 text-white h-24 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-full">
        <h1 className="text-3xl font-bold text-[#00df9a]">DevWithK8s</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-4">
          {navItems.map(({ id, text, path, internal }) => (
            <li key={id}>
              {internal ? (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  {text}
                </NavLink>
              ) : (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={defaultClass}
                >
                  {text}
                </a>
              )}
            </li>
          ))}
          {/* Highlighted Support Button */}
          <li>
            <NavLink
              to="/support"
              className="bg-[#00df9a] text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              Support Me
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={handleNav}
          aria-label={nav ? "Close menu" : "Open menu"}
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[60%] bg-[#000300] border-r border-gray-800 z-40 transform ${nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">DevWithK8s</h1>
        <ul className="flex flex-col gap-2 p-4">
          {navItems.map(({ id, text, path, icon, internal }) => (
            <li key={id} onClick={() => setNav(false)}>
              {internal ? (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? `${activeClass} flex items-center gap-2`
                      : `${defaultClass} flex items-center gap-2`
                  }
                >
                  {icon}
                  {text}
                </NavLink>
              ) : (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${defaultClass} flex items-center gap-2`}
                >
                  {icon}
                  {text}
                </a>
              )}
            </li>
          ))}

          {/* Mobile Support Button */}
          <li onClick={() => setNav(false)}>
            <NavLink
              to="/support"
              className="bg-[#00df9a] text-black px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <FaPhone />
              Support Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
