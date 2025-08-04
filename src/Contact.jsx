import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Send,
  ArrowUp,
  MessageCircle
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-20 px-6 md:px-12 text-gray-800"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">
          Get In <span className="text-purple-600">Touch</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I’m open to freelance work, collaboration, or any interesting opportunity.
          Let’s create something great together.
        </p>
      </div>

      {/* Contact box */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl grid md:grid-cols-2 gap-8 p-6 md:p-10 items-start">
        {/* Left - Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <span className="bg-purple-100 p-3 rounded-full">
                  <Mail className="text-purple-600" />
                </span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">karthik782004@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-purple-100 p-3 rounded-full">
                  <Phone className="text-purple-600" />
                </span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 9514439496</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="text-purple-600" />
                </span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Connect With Me</p>
            <div className="flex gap-5 mt-2 text-2xl text-purple-600">
              <a
                href="https://linkedin.com/in/karthik-r-844078346"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/k_a_r_t_h_i_k__r__/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://wa.me/919514439496"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Send a Message</h3>
          <form
            action="https://formspree.io/f/mldlprnk"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Message</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Let’s talk about..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-purple-500"
              ></textarea>
            </div>

            {/* Optional honeypot field for spam protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md flex justify-center items-center gap-2 transition"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-14 text-center text-sm text-gray-500">
        © 2025 <span className="font-semibold text-purple-600">Karthik R</span> 💜 All rights reserved.
      </div>

      {/* Scroll to top button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full shadow-md transition"
      >
        <ArrowUp size={18} />
      </a>
    </section>
  );
}
