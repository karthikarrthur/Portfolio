import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex flex-col justify-center items-center px-6 py-16 text-center"
    >
      {/* Floating Icons */}
      <motion.div
        className="absolute top-16 left-16 text-purple-400"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        className="absolute top-32 right-24 text-purple-400"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Code2 size={36} />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-32 text-purple-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Rocket size={36} />
      </motion.div>

      {/* Hero Content */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, I'm <span className="text-purple-600">Karthik R</span>
      </motion.h1>

      <motion.p
        className="text-gray-700 max-w-2xl text-md md:text-lg leading-relaxed mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        A passionate full-stack developer focused on building beautiful, functional web applications.
        I specialize in the MERN stack and love crafting seamless user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold shadow-md transition hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="mailto:karthik782004@gmail.com"
          className="border border-purple-600 text-purple-600 hover:bg-purple-50 py-3 px-6 rounded-full font-semibold transition hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Scroll Down Arrow */}
<motion.div
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <span className="text-sm text-purple-600 font-medium mb-1">Scroll Down</span>
  <svg
    className="w-5 h-5 text-purple-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
  </svg>
</motion.div>

    
    </section>
  );
}
