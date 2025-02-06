import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/js.svg";
import git from "../assets/git.svg";
import react from "../assets/react.svg";
import figma from "../assets/figma.svg";
import boot from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import sql from "../assets/mysql.svg";
import typescript from "../assets/typescript.svg";
import php from "../assets/php.svg";
import redux from "../assets/redux.svg";
import c from "../assets/c.svg";
import office from "../assets/office.svg";
import english from "../assets/english.svg";
import spanish from "../assets/spanish.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Box, Palette } from "lucide-react";
import Header from "./Header";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("development");

  const categories = {
    development: {
      title: "Development Skills",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 90, img: html },
        { name: "CSS3", level: 85, img: css },
        { name: "JavaScript", level: 60, img: javascript },
        { name: "React", level: 60, img: react },
        { name: "Bootstrap", level: 75, img: boot },
        { name: "Tailwind", level: 80, img: tailwind },
        { name: "Git", level: 75, img: git },
        { name: "Figma", level: 70, img: figma },
      ],
    },
    learning: {
      title: "Learning",
      icon: <Box className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 40, img: sql },
        { name: "TypeScript", level: 15, img: typescript },
        { name: "PHP", level: 15, img: php },
        { name: "Redux", level: 15, img: redux },
      ],
    },
    other: {
      title: "Other Skills",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "English", level: 80, img: english },
        { name: "Spanish", level: 60, img: spanish },
        { name: "Office", level: 85, img: office },
        { name: "C++", level: 50, img: c },
      ],
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <div className="max-w-6xl mx-auto mt-[8rem] pb-[6rem] px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Skills
          </h2>
          <p className="text-gray-400">
            Constantly evolving and learning new technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === key
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories[activeTab].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Atraso para cada item
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <img src={skill.img} alt={skill.name} className="w-12 h-12" />
                <span className="text-2xl font-bold text-blue-400">
                  {skill.level}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
