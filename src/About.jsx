import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="text-purple-600" size={40} />,
      title: "Front-End Development",
      description:
        "I build responsive, accessible interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      icon: <Database className="text-purple-600" size={40} />,
      title: "Database Integration",
      description:
        "Skilled with SQL and MongoDB, I handle seamless data interaction across the stack.",
    },
    {
      icon: <Users className="text-purple-600" size={40} />,
      title: "Full-Stack Collaboration",
      description:
        "Confidently contribute to full-stack workflows with Node.js and Express.js knowledge.",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-white py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-purple-600">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.div
          className="max-w-3xl mx-auto text-gray-700 text-md md:text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I’m a passionate web developer focused on creating elegant, functional web experiences.
            With a specialization in Front-End using React.js, I ensure designs are responsive,
            intuitive, and fast.
          </p>
          <p>
            Beyond the UI, I have a working knowledge of MongoDB, SQL, Node.js, and Express.js —
            enabling me to contribute effectively to full-stack applications and scalable solutions.
          </p>
          <p>
            I thrive in learning environments and love collaborating on projects that push
            boundaries while keeping user experience at the forefront.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 px-6"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="font-semibold text-xl text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Get In Touch
          </a>

       {/* View Resume */}
<motion.a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-full transition"
>
  View Resume
</motion.a>

{/* Download Resume */}
<motion.a
  href="/resume.pdf"
  download="Karthik-R-Full-Stack-Developer.pdf"
  className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-full transition"
>
  Download Resume
</motion.a>

        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="mt-32 flex flex-col items-center animate-bounce"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-sm text-purple-600 font-medium mb-1">Scroll Down</span>
          <svg
            className="w-5 h-5 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
