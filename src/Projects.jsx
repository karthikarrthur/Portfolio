import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ShaadiRoots Matrimony Website",
    image: "https://ik.imagekit.io/xdrmufpnj/mern%20full%20stack/Screenshot%202025-08-04%20193938.png?", // Make sure this image exists in /public/images
    description:
      "A full-stack matrimonial platform built using MERN stack with authentication, image upload, and messaging.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    demo: "https://shaadiroots.netlify.app/",
    github: "https://github.com/karthikarrthur"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-4 md:px-16 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work That <span className="text-purple-600">Stands Out</span>
      </motion.h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-16">
        Here is a featured project that highlights my development skills and passion for building elegant web solutions.
      </p>

      {/* Project Card */}
      <div className="grid justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-purple-100 hover:border-purple-300 transition-all duration-300 rounded-xl shadow-md hover:shadow-purple-200 overflow-hidden max-w-sm w-full text-left transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Image */}
            <div className="h-48 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              {/* Demo + GitHub */}
              <div className="flex gap-4 text-purple-500">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-700 transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-700 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-16">
        <a
          href="https://github.com/karthikarrthur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
        >
          Check My GitHub →
        </a>
      </div>

      
    </section>
  );
}
