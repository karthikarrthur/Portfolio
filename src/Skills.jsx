import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js",
    "Node.js", "Express.js", "MongoDB",
    "Git", "GitHub", "Firebase", "Vite",
    "VS Code", "Python"
  ];

  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-cyan-400"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-cyan-400/50 transition transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-cyan-300">{skill}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-cyan-200">
        MERN Stack Certified | Always learning and growing 💡
      </p>
    </section>
  );
}