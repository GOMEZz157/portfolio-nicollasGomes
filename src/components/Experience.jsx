import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Jovem Aprendiz - Área de BPO",
    company: "NEOBPO",
    period: "06/2025 - 08/2025",
    description: "Worked in Business Process Outsourcing supporting administrative routines, data organization, interacting with internal clients and using digital tools to control processes.",
  },
  {
    role: "Intern - IT",
    company: "Xelp",
    period: "08/2025 - Present",
    description: "IT intern focused on computer networks, cybersecurity and websites development.",
  },
];

export default function Experience() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-6" id="experience">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="relative w-full max-w-3xl">
        {/* Linha central da timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative w-full md:w-1/2 ${
                index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Bolinha da timeline */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

              {/* Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-500 font-medium">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
