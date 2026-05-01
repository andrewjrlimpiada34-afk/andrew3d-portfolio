import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import moonIcon from "../assets/images/moon.svg";
import sunIcon from "../assets/images/sun.svg";

const ThemeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      initial={false}
      animate={{ 
        backgroundColor: isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-7 h-7">
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img 
                src={sunIcon} 
                alt="Sun" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img 
                src={moonIcon} 
                alt="Moon" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
