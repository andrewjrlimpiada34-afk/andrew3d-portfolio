import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useTheme } from "../context/ThemeContext";
import grade10 from "../assets/AcadCertificates/grade10.jpg";
import grade10Alt from "../assets/AcadCertificates/grade10-1.jpg";
import grade10Wh from "../assets/AcadCertificates/grade10-wh.jpg";
import grade11 from "../assets/AcadCertificates/grade11.jpg";
import grade11Alt from "../assets/AcadCertificates/grade11-1.jpg";
import juniorhigh from "../assets/AcadCertificates/juniorhigh.jpg";
import wika from "../assets/AcadCertificates/wika.jpg";

const Certifications = () => {
  const { isDarkMode } = useTheme();
  
  const certifications = [
    {
      title: "Grade 10 Certificate",
      image: grade10,
      org: "AcadCertificates Folder",
      description: "One of my academic certificates stored in the local AcadCertificates collection.",
    },
    {
      title: "Grade 10 Certificate Alternate",
      image: grade10Alt,
      org: "AcadCertificates Folder",
      description: "An alternate academic certificate image included in my certificate folder.",
    },
    {
      title: "Grade 10 With Honors",
      image: grade10Wh,
      org: "AcadCertificates Folder",
      description: "This certificate is part of the academic recognitions I have placed in my portfolio assets.",
    },
    {
      title: "Grade 11 Certificate",
      image: grade11,
      org: "AcadCertificates Folder",
      description: "Academic certificate from my Grade 11 collection.",
    },
    {
      title: "Grade 11 Certificate Alternate",
      image: grade11Alt,
      org: "AcadCertificates Folder",
      description: "Another certificate image from my Grade 11 achievements.",
    },
    {
      title: "Junior High Certificate",
      image: juniorhigh,
      org: "AcadCertificates Folder",
      description: "A certificate from my junior high academic journey.",
    },
    {
      title: "Wika Certificate",
      image: wika,
      org: "AcadCertificates Folder",
      description: "A certificate included in my portfolio's local academic certificate archive.",
    },
  ];

// Dynamic classes - full grey background in dark mode
  const sectionClass = isDarkMode 
    ? "bg-[#1a1a2e]" 
    : "bg-slate-300/20";
  const cardBaseClass = isDarkMode 
    ? "dark-bg-card silver-glow silver-glow-hover" 
    : "bg-white";
  const certTitleClass = isDarkMode 
    ? "text-white" 
    : "text-gray-900";
  const certDescClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";
  const labelClass = isDarkMode 
    ? "bg-gray-600 text-white" 
    : "bg-gray-400 text-white";
  const buttonClass = isDarkMode 
    ? "bg-gray-600" 
    : "bg-blue-600";
  const descriptionTextClass = isDarkMode 
    ? "text-gray-300" 
    : "text-slate-500";

  return (
    <motion.section
      className={`max-container ${sectionClass} theme-transition`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO title="Certificates | Andrew B. Limpiada Jr." />

      <motion.h1
        className={`head-text ${isDarkMode ? 'text-white' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My{" "}
        <motion.span
          className="blue-gradient_text font-semibold drop-shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Certificates
        </motion.span>
      </motion.h1>

      <motion.div
        className={`mt-5 flex flex-col gap-3 ${descriptionTextClass}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          My certificates are placed in the AcadCertificates folder. This page displays the academic certificate images currently included in the portfolio.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className={`w-full p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col ${cardBaseClass}`}
          >
            <motion.div
              className="relative w-full h-48 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              />
            </motion.div>

            <motion.h3
              className={`text-xl font-bold mb-2 ${certTitleClass}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
            >
              {cert.title}
            </motion.h3>

            <motion.h4
              className={`w-fit text-xs px-2 py-1 rounded-lg ${labelClass}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
            >
              Source: {cert.org}
            </motion.h4>

            <motion.p
              className={`mb-4 ${certDescClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
            >
              {cert.description}
            </motion.p>

            <motion.div
              className={`${buttonClass} text-white px-3 py-2 rounded-lg mt-auto w-fit self-start text-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
            >
              Local Portfolio Asset
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
