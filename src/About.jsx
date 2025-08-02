import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>

        <p className="text-lg leading-relaxed mb-4 text-white/90">
          Hello! I’m <span className="text-cyan-300 font-semibold">Karthik</span>, a passionate and self-motivated Full Stack Developer based in India. With a strong foundation in both frontend and backend development, I specialize in building fast, scalable, and user-friendly web applications.
        </p>

        <p className="text-lg leading-relaxed mb-4 text-white/80">
          I have hands-on experience with technologies like React, Node.js, Tailwind CSS, MongoDB, and more. I love turning complex problems into clean, efficient solutions.
        </p>

        <p className="text-lg leading-relaxed text-white/80">
          I’m constantly learning new tools and practices to keep up with industry trends. Whether it's contributing to open source, working on side projects, or exploring UI/UX design, I stay curious and creative.
        </p>

        <a
          href="/resume.pdf"
          className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full text-lg shadow-lg transition transform hover:-translate-y-1"
          download
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
