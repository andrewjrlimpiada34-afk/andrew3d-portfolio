import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.webp";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  
  // Dynamic classes for dark mode
  const navLinkClass = isDarkMode ? "text-white" : "text-black";
  const hamburgerLineClass = isDarkMode ? "bg-white" : "bg-black";
  const activeClass = "text-blue-600";
  
  return (
    <header className={`header flex items-center justify-between ${isDarkMode ? 'dark-navbar' : ''}`}>
      <NavLink to="/" className="flex items-center shrink-0">
        <img
          src={logo}
          alt="Andrew Jr logo"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
        />
      </NavLink>
      {/* Desktop nav */}
      <nav className="hidden sm:flex text-lg gap-7 font-medium items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeClass : navLinkClass
          }
        >
          About
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? activeClass : navLinkClass
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? activeClass : navLinkClass
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            isActive ? activeClass : navLinkClass
          }
        >
          Certifications
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeClass : navLinkClass
          }
        >
          Contact
        </NavLink>
        {/* Theme toggle beside Contact button on desktop */}
        <ThemeToggle />
      </nav>
      
      {/* Mobile view: hamburger and theme toggle container */}
      <div className="sm:hidden flex items-center gap-3">
        <ThemeToggle />
        {/* Hamburger icon for mobile */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className={`block w-7 h-1 ${hamburgerLineClass} mb-1 rounded`}></span>
          <span className={`block w-7 h-1 ${hamburgerLineClass} mb-1 rounded`}></span>
          <span className={`block w-7 h-1 ${hamburgerLineClass} rounded`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
