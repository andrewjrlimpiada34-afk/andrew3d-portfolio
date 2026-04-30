import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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

const HamburgerMenu = ({ isOpen, onClose }) => (
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
          className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-[50] flex flex-col p-8 gap-8 pointer-events-auto"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <button
            className="self-end text-3xl font-bold text-gray-700 focus:outline-none"
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
                  isActive ? "text-blue-600" : "text-black"
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
);

export default HamburgerMenu;
