import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaBuilding, FaBook, FaInfoCircle, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navItems = [
    { id: 1, text: "Home", path: "/", icon: <FaHome /> },
    { id: 2, text: "Company", path: "/company", icon: <FaBuilding /> },
    { id: 3, text: "Resources", path: "/resources", icon: <FaBook /> },
    { id: 4, text: "About", path: "/about", icon: <FaInfoCircle /> },
    { id: 5, text: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  const activeClass =
    "bg-[#00df9a] text-black rounded-xl px-4 py-2 font-semibold transition-all duration-300";
  const defaultClass =
    "px-4 py-2 hover:bg-[#00df9a] hover:text-black rounded-xl transition-all duration-300";

  return (
    <nav className="bg-gray-950 text-white h-24 shadow-lg">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-full">
        <h1 className="text-3xl font-bold text-[#00df9a]">DevWithK8s</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map(({ id, text, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[60%] bg-[#000300] border-r border-gray-800 z-40 transform ${nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="flex flex-col gap-2 p-4">
          {navItems.map(({ id, text, path, icon }) => (
            <li key={id} onClick={() => setNav(false)}>
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
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

