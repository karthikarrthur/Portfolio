import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Contact Me</h2>
        <p className="text-white/80 mb-6">
          Have a project or opportunity? Let’s connect! Fill in the form below and I’ll get back to you.
        </p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 rounded-md border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 rounded-md border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-white/10 rounded-md border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full font-medium shadow-md transition transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-white/60 text-sm">
          Or reach me directly at:
          <br />
          <a href="mailto:karthik782004@gmail.com" className="text-cyan-400 hover:underline">
            karthik782004@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
