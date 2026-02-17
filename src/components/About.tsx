import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center bg-gray-800 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        À propos de moi
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-lg"
      >
        Passionné par le développement web, je crée des applications performantes et modernes en React, Next.js et Laravel, avec un focus sur l’UX et la qualité du code.
      </motion.p>
    </section>
  );
};

export default About;
