import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
};

const links = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

const HamburgerMenu = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  
  // Dynamic classes for dark mode
  const menuBgClass = isDarkMode ? "bg-gray-800" : "bg-white";
  const textClass = isDarkMode ? "text-white" : "text-black";
  const closeBtnClass = isDarkMode ? "text-white" : "text-gray-700";
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-[40] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className={`fixed top-0 right-0 w-3/4 max-w-xs h-full ${menuBgClass} shadow-lg z-[50] flex flex-col p-8 gap-8 pointer-events-auto`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <button
              className={`self-end text-3xl font-bold ${closeBtnClass} focus:outline-none`}
              onClick={onClose}
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : textClass
                  }
                  onClick={onClose}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            
            {/* Theme toggle below hamburger menu on mobile */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Toggle Theme
              </p>
              <div className="flex justify-start">
                <ThemeToggle />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;
