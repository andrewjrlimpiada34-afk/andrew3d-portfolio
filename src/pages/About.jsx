import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTA, Gallery, SEO } from "../components";
import { skills } from "../constants";
import { useTheme } from "../context/ThemeContext";
import marsuImage from "../assets/images/marsu.png";
import mscImage from "../assets/images/msc.png";

const About = () => {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

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
  const cardClass = isDarkMode 
    ? "bg-gray-800/80" 
    : "bg-white/80";
  const timelineLineClass = isDarkMode 
    ? "bg-gray-600" 
    : "bg-slate-400";

  // Timeline data
  const timelineData = [
    {
      year: "2026",
      title: "Currently studying at Marinduque State University",
      image: marsuImage,
      isFuture: true
    },
    {
      year: "2023",
      title: "Graduated Senior High School at Marinduque State College - Integrated High School",
      image: mscImage,
      isFuture: false
    },
    {
      year: "2021",
      title: "Graduated Junior High School at Marinduque State College - Laboratory School",
      image: mscImage,
      isFuture: false
    }
  ];

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

      {!activeSection && (
        <>
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

          {/* Navigation Buttons - Under quote, above My Skills */}
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                isDarkMode 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={() => setActiveSection("academic")}
            >
              My Academic Journey
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                isDarkMode 
                  ? "bg-purple-600 hover:bg-purple-700 text-white" 
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              onClick={() => setActiveSection("blog")}
            >
              My Blog
            </motion.button>
          </div>

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
        </>
      )}

      {/* Back button when section is active */}
      <AnimatePresence>
        {activeSection && (
          <motion.button
            className={`mb-6 px-4 py-2 rounded-lg font-semibold transition-all ${
              isDarkMode 
                ? "bg-gray-700 hover:bg-gray-600 text-white" 
                : "bg-slate-300 hover:bg-slate-400 text-slate-800"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => setActiveSection(null)}
          >
            ← Back
          </motion.button>
        )}
      </AnimatePresence>

      {/* My Academic Journey - Timeline */}
      <AnimatePresence>
        {activeSection === "academic" && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              My Academic Journey
            </h2>
            
            <div className="relative">
              {/* Vertical timeline line */}
              <div 
                className={`absolute left-8 md:left-12 top-0 bottom-0 w-0.5 ${timelineLineClass}`}
                style={{ left: '2rem' }}
              />
              
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Icon with circular border */}
                    <div 
                      className={`relative z-10 w-16 h-16 rounded-full flex-shrink-0 border-4 overflow-hidden ${
                        isDarkMode ? 'border-gray-600' : 'border-slate-400'
                      }`}
                      style={{ marginLeft: '0rem' }}
                    >
                      <img
                        src={item.image}
                        alt={item.year}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 p-4 rounded-xl ${cardClass}`}>
                      <span className={`text-lg font-bold ${
                        item.isFuture 
                          ? 'text-green-500' 
                          : isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {item.year}
                      </span>
                      <p className={`mt-1 ${textClass}`}>
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* My Blog Section */}
      <AnimatePresence>
        {activeSection === "blog" && (
          <motion.div
            className="mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              Andrew's Space
            </h2>
            
            <div className={`p-6 rounded-xl ${cardClass}`}>
              <p className={`leading-relaxed mb-4 ${textClass}`}>
                Welcome to my blog — a space where ideas, experiences, and creativity come together. This page is where I document my journey, share what I learn, and express thoughts that matter to me.
              </p>
              
              <p className={`leading-relaxed mb-4 ${textClass}`}>
                In this blog, you'll find content about my travels and student life. Each post reflects a part of my experiences, whether it's something I built, discovered, or simply reflected on.
              </p>
              
              <p className={`leading-relaxed mb-4 ${textClass}`}>
                I started this blog because I wanted to track my progress and share knowledge and experiences. Over time, it has become more than just a collection of posts—it's a record of growth, challenges, and achievements in life.
              </p>
              
              <p className={`leading-relaxed mb-4 ${textClass}`}>
                This blog is constantly evolving, just like me. As I continue to learn and explore new things, I'll keep adding content that reflects my journey.
              </p>
              
              <p className={`leading-relaxed mb-6 ${textClass}`}>
                If you're someone who's interested in learning, building projects, and self-improvement, then you're in the right place.
              </p>
              
              <p className={`font-semibold ${quoteClass}`}>
                Thanks for being here.
              </p>
              <p className={`mt-2 font-semibold ${quoteClass}`}>
                — Andrew Jr.
              </p>
              
{/* Gallery Button */}
              <motion.button
                className={`mt-8 px-6 py-3 rounded-xl font-semibold transition-all ${
                  isDarkMode 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowGallery(true);
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
              >
                Gallery
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Gallery />
            <button
              className={`mt-6 px-4 py-2 rounded-lg font-semibold transition-all ${
                isDarkMode 
                  ? "bg-gray-700 hover:bg-gray-600 text-white" 
                  : "bg-slate-300 hover:bg-slate-400 text-slate-800"
              }`}
              onClick={() => setShowGallery(false)}
            >
              ← Back to Blog
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeSection && <CTA />}
    </motion.section>
  );
};

export default About;
