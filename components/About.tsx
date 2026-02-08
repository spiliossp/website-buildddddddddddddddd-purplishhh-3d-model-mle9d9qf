"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Photorealistic Quality",
      description: "Every model crafted with meticulous attention to detail and lifelike textures.",
      icon: "✨"
    },
    {
      title: "Fast Turnaround",
      description: "Efficient workflow ensures your projects are delivered on time, every time.",
      icon: "⚡"
    },
    {
      title: "Custom Solutions",
      description: "Tailored 3D modeling services designed to match your unique requirements.",
      icon: "🎯"
    },
    {
      title: "Expert Team",
      description: "Seasoned 3D artists with years of experience across diverse industries.",
      icon: "👥"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purplish to-primary bg-clip-text text-transparent">
              Purplish 3D
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring imagination to life through cutting-edge 3D modeling and rendering technology. Our passion for perfection drives every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-purplish to-primary rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Ideas?</h3>
          <p className="text-xl mb-8 opacity-90">Join hundreds of satisfied clients who trust us with their 3D modeling needs.</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}