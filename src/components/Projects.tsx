import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectList = [
  { title: "Portfolio", description: "Mon portfolio personnel", link: "#" },
  { title: "Gestion de stocks", description: "Application React + Laravel", link: "#" },
  { title: "Blog", description: "Blog Next.js avec CMS", link: "#" },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="min-h-screen bg-gray-900 px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Mes Projets
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-500 font-medium">
              Voir plus
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
