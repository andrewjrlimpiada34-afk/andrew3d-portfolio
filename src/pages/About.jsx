import { motion } from "framer-motion";
import { CTA, SEO } from "../components";
import { skills } from "../constants";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  // Dynamic classes
  const sectionClass = isDarkMode 
    ? "bg-[#1a1a2e]" 
    : "bg-slate-300/20";
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-slate-500";
  const quoteClass = isDarkMode 
    ? "text-white" 
    : "text-slate-700";
  const skillsTextClass = isDarkMode 
    ? "text-gray-300" 
    : "text-slate-500";

return (
    <motion.section
      className={`w-full min-h-screen ${sectionClass} theme-transition pt-[126px] pb-12 px-4 sm:px-8`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="About | Andrew B. Limpiada Jr."
        description="Learn more about Andrew B. Limpiada Jr., an aspiring Computer Engineer from Marinduque State College."
        name="Andrew B. Limpiada Jr."
        type="profile"
      />

      <motion.h1
        className={`head-text ${isDarkMode ? 'text-white' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        About{" "}
        <motion.span
          className="blue-gradient_text font-semibold drop-shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Me
        </motion.span>
      </motion.h1>

      <motion.div
        className={`mt-5 flex flex-col gap-3 ${textClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I come from Paye, Mogpog, Marinduque, a place that has shaped my values, perspective, and determination to pursue my goals. Growing up in a simple environment taught me the importance of hard work, resilience, and staying grounded while aiming high.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Currently, I am taking up Bachelor of Science in Computer Engineering at Marinduque State University. As a student in this field, I am continuously developing my skills in programming, problem-solving, and system design. I am especially interested in how technology can be used to improve everyday processes and create meaningful solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Beyond academics, I enjoy playing mobile games, listening to music, watching movies, and reading Marvel comics. Every experience helps shape how I think, learn, and create as I continue my journey.
        </motion.p>

        <motion.p
          className={`font-semibold ${quoteClass}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          "I believe that growth comes from continuous learning, and success is built through persistence, passion, and purpose."
        </motion.p>
      </motion.div>

      <div className="py-10 flex flex-col">
        <h3 className={`subhead-text ${isDarkMode ? 'text-white' : ''}`}>My Skills</h3>

        <div className="mt-6">
          <p className={skillsTextClass}>MySQL, MongoDB, React, JS</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <motion.div
              className="block-container w-20 h-20"
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </motion.section>
  );
};

export default About;
