import { motion } from "framer-motion";

import { github, linkedin } from "../assets/icons";
import { SEO } from "../components";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  
  const profiles = [
    {
      name: "GitHub",
      value: "github.com/andrewjrlimpiada34-afk",
      href: "https://github.com/andrewjrlimpiada34-afk",
      icon: github,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/limpiada-andrew-jr-b-3299513b7",
      href: "https://www.linkedin.com/in/limpiada-andrew-jr-b-3299513b7",
      icon: linkedin,
    },
  ];

  // Dynamic classes
  const sectionClass = isDarkMode 
    ? "bg-gray-900 dark-mode-bg" 
    : "bg-slate-300/20";
  const cardBaseClass = isDarkMode 
    ? "dark-bg-card silver-glow silver-glow-hover" 
    : "bg-white";
  const titleClass = isDarkMode 
    ? "text-white" 
    : "";
  const descClass = isDarkMode 
    ? "text-gray-300" 
    : "text-slate-600";
  const profileNameClass = isDarkMode 
    ? "text-white" 
    : "text-slate-800";
  const profileValueClass = isDarkMode 
    ? "text-gray-300" 
    : "text-slate-600";

  return (
    <motion.section
      className={`relative max-container ${sectionClass} theme-transition`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Contact | Andrew B. Limpiada Jr."
        description="Profile contact links for Andrew B. Limpiada Jr."
        name="Andrew B. Limpiada Jr."
        type="website"
      />

      <motion.div
        className="padding-t"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className={`head-text ${titleClass}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Profile Contacts
        </motion.h1>

        <motion.p
          className={`mt-5 max-w-2xl ${descClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          You can connect with me through the following online profiles.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow ${cardBaseClass}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <img src={profile.icon} alt={profile.name} className="w-10 h-10" />
              <div>
                <p className={`text-lg font-semibold ${profileNameClass}`}>{profile.name}</p>
                <p className={`break-all ${profileValueClass}`}>{profile.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
