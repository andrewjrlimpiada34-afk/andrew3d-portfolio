import { motion } from "framer-motion";

const Links = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/andrewjrlimpiada34-afk",
      icon: "fab fa-github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/limpiada-andrew-jr-b-3299513b7",
      icon: "fab fa-linkedin",
    },
  ];

  return (
    <section className="max-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center py-12 px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px #3b82f6" }}
          className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-blue-500 shadow-lg"
        >
          <img
            src="/favicon/web-app-manifest-192x192.png"
            alt="Andrew B. Limpiada Jr."
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Connect with Andrew
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-800 text-center max-w-lg mb-8"
        >
          Hello World! I'm Andrew B. Limpiada Jr., an aspiring Computer Engineer currently pursuing my studies at Marinduque State College.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.5 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
        >
          {socialLinks.map((link) => {
            const brandColors = {
              GitHub: "#333",
              LinkedIn: "#0077B5",
            };
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(59,130,246,0.15)",
                  boxShadow: "0 4px 24px #3b82f6",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <i
                  className={`${link.icon} text-2xl`}
                  style={{ color: brandColors[link.platform] || "#333" }}
                ></i>
                <span className="text-sm">{link.platform}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Links;
