import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center bg-gray-800 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        Contactez-moi
      </motion.h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input type="text" placeholder="Nom" className="p-3 rounded bg-gray-700 text-white focus:outline-none" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-gray-700 text-white focus:outline-none" />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-700 text-white focus:outline-none" rows={5}></textarea>
        <button className="bg-indigo-600 p-3 rounded font-semibold hover:scale-105 transition-transform">
          Envoyer
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
