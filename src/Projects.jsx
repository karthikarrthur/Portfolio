import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "ShaadiRoots Matrimony Website",
      date: "Jun 2024",
      stack: "MERN Stack",
      description: [
        "Built a full-stack matrimonial website using React.js, Node.js, Express.js, and MongoDB.",
        "Integrated Firebase Authentication, image upload, and responsive layout.",
        "Added messaging features with secure user login."
      ]
    },
    {
      title: "Portfolio Website",
      date: "Jan–Feb 2024",
      stack: "HTML, CSS, JavaScript",
      description: [
        "Developed a personal portfolio site with animations and responsive design.",
        "Included project showcase and contact form features."
      ]
    },
    {
      title: "Online Food Store Website",
      date: "Mar 2024",
      stack: "HTML, CSS, JavaScript",
      description: [
        "Designed a shopping layout with product filtering and cart functionality.",
        "Focused on clean, user-friendly interface using Flexbox and Grid."
      ]
    }
  ];

  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-cyan-400"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-sm text-cyan-100 mb-1">{project.date} — {project.stack}</p>
            <ul className="list-disc pl-5 space-y-1 text-white/80">
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
