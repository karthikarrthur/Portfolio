import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white text-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400 opacity-10 rounded-full blur-3xl z-0"></div>

      {/* Glass Effect Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-lg max-w-3xl text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Hi, I'm <span className="text-cyan-400">Karthik</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl mt-4 text-cyan-200"
        >
          MERN Stack Developer | React Enthusiast | UI Builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center space-x-6"
        >
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full text-base shadow-lg transition transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white py-3 px-6 rounded-full text-base shadow-lg transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-cyan-400 text-2xl z-10"
      >
        ↓
      </motion.div>
    </section>
  );
}
