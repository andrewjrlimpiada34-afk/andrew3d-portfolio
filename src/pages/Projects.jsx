import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { github, internet } from "../assets/icons";
import { CTA, SEO } from "../components";
import { projects } from "../constants";

const Projects = () => {
  const handleDownload = (pdfUrl, fileName) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

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

      {/* Projects categorized by type */}
      {projects.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          className="my-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            {category.category}
          </h2>

          <motion.div
            className={`grid gap-8 ${
              category.category === "Team Project"
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.1 }}
          >
            {category.items.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + categoryIndex * 0.1 + index * 0.1,
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
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mt-4">
                    {/* For Team Projects */}
                    {project.liveUrl && (
                      <Link
                        to={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        <img
                          src={internet}
                          alt="Live Demo"
                          className="w-4 h-4 invert"
                        />
                        Live
                      </Link>
                    )}
                    {project.sourceCode && (
                      <Link
                        to={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-blue-500 text-blue-500 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        <img src={github} alt="Source Code" className="w-4 h-4" />
                        Code
                      </Link>
                    )}

                    {/* For MATLAB/CISCO Projects */}
                    {project.pdfUrl && (
                      <button
                        onClick={() =>
                          handleDownload(
                            project.pdfUrl,
                            `${project.name}.pdf`
                          )
                        }
                        className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        📥 Download
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      <CTA />
    </motion.section>
  );
};

export default Projects;
