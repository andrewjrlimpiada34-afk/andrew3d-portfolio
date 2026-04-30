import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { github, internet } from "../assets/icons";
import { CTA, SEO } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Projects | Andrew B. Limpiada Jr."
        description="A growing collection of portfolio work by Andrew B. Limpiada Jr."
        name="Andrew B. Limpiada Jr."
        type="website"
      />

      <motion.h1
        className="head-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My{" "}
        <motion.span
          className="blue-gradient_text drop-shadow font-semibold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Projects
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-slate-500 mt-2 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        This section represents the start of my project journey. As I continue learning and building in Computer Engineering, more works and experiments will be added here over time.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.2,
            }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-48 w-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4 mt-4">
                {project.liveUrl && (
                  <Link
                    to={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <img
                      src={internet}
                      alt="Live Demo"
                      className="w-5 h-5 invert"
                    />
                    Live Demo
                  </Link>
                )}
                <Link
                  to={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <img src={github} alt="Source Code" className="w-5 h-5" />
                  Source Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <CTA />
    </motion.section>
  );
};

export default Projects;
