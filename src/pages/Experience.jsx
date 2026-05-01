import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { experiences } from "../constants";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  
  // Dynamic classes
  const sectionClass = isDarkMode 
    ? "bg-gray-900 dark-mode-bg" 
    : "bg-slate-300/20";
  const cardBaseClass = isDarkMode 
    ? "dark-bg-card silver-glow" 
    : "bg-white/20";
  const titleClass = isDarkMode 
    ? "text-white" 
    : "text-slate-800";
  const companyClass = isDarkMode 
    ? "blue-gradient_text" 
    : "blue-gradient_text";
  const durationClass = isDarkMode 
    ? "text-gray-400" 
    : "text-slate-600";
  const descClass = isDarkMode 
    ? "text-gray-300" 
    : "text-slate-700";

  return (
    <section className={`max-w-5xl mx-auto sm:p-16 pb-12 px-8 pt-[126px] min-h-[calc(100vh-80px)] ${sectionClass} theme-transition`}>
      <Helmet>
        <title>Experience | Andrew B. Limpiada Jr.</title>
        <meta
          name="description"
          content="Leadership and campus involvement of Andrew B. Limpiada Jr."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`head-text ${isDarkMode ? 'text-white' : ''}`}>
          My <span className="text-gradient">Experience</span>
        </h1>

        <div className="mt-12 flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col sm:flex-row gap-6 p-8 rounded-lg backdrop-blur-md border border-white/10 ${cardBaseClass}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl font-bold ${titleClass}`}>
                    {experience.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-md">
                    {experience.type}
                  </span>
                </div>
                <p className={`font-bold text-xl mt-2 ${companyClass}`}>
                  {experience.company}
                </p>
                <p className={`font-medium mt-2 ${durationClass}`}>
                  {experience.duration}
                </p>
                <p className={`mt-4 text-lg ${descClass}`}>
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
