import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skillsData = {
  All: [
    "HTML/CSS",
    "JavaScript",
    "React js",
    "Bootstrap",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git/GitHub",
    "VS Code",
    "Mongoose",
    "Firebase"
  ],
  Frontend: ["HTML/CSS", "JavaScript", "React js", "Bootstrap", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
  Tools: ["Git/GitHub", "VS Code", "Firebase"],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = Object.keys(skillsData);
  const activeSkills = skillsData[activeCategory];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white px-6 py-24 flex flex-col justify-center items-center text-center relative"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-purple-600">Skills</span>
      </motion.h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium border transition duration-300 ${
              activeCategory === cat
                ? "bg-purple-600 text-white border-purple-600"
                : "border-purple-300 text-purple-700 hover:bg-purple-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {activeSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="group bg-white/40 backdrop-blur-md border border-purple-300 rounded-xl p-6 shadow-xl text-gray-800 transition-transform transform hover:scale-105 hover:shadow-purple-200 duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 justify-center mb-2">
              <Sparkles className="text-purple-500 group-hover:animate-spin" size={20} />
              <span className="font-semibold text-lg">{skill}</span>
            </div>
            <div className="h-1 w-full bg-purple-100 rounded-full overflow-hidden">
              <motion.div
                className="h-1 bg-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
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
