"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "3D Product Modeling",
      description: "High-fidelity product models for e-commerce, marketing, and presentations. Perfect for showcasing your products in stunning detail.",
      features: ["Photorealistic rendering", "Multiple angles", "Material variations", "Web-optimized versions"]
    },
    {
      title: "Architectural Visualization",
      description: "Bring architectural designs to life with immersive 3D renderings that help clients visualize spaces before construction.",
      features: ["Interior design", "Exterior views", "Virtual walkthroughs", "Lighting simulations"]
    },
    {
      title: "Character & Asset Design",
      description: "Create engaging characters and game-ready assets for games, animations, and interactive experiences.",
      features: ["Character rigging", "Animation-ready", "Low-poly options", "Texture maps"]
    },
    {
      title: "3D Animation",
      description: "Dynamic animations that tell your story. From product demos to explainer videos, we make your content move.",
      features: ["Product animations", "Logo reveals", "Motion graphics", "Video integration"]
    },
    {
      title: "AR/VR Content",
      description: "Immersive experiences optimized for augmented and virtual reality platforms. Take your audience into new dimensions.",
      features: ["AR product previews", "VR environments", "Interactive models", "Platform integration"]
    },
    {
      title: "Custom Solutions",
      description: "Unique projects require unique approaches. We collaborate closely to deliver exactly what you envision.",
      features: ["Consultation", "Iterative design", "Unlimited revisions", "Dedicated support"]
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purplish to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive 3D modeling solutions tailored to your industry and objectives. Whatever your vision, we make it real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purplish to-primary rounded-2xl flex items-center justify-center mb-6">
                <div className="text-3xl">🎨</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-8">Don't see what you're looking for? We love a challenge.</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purplish to-primary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            Discuss Custom Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}