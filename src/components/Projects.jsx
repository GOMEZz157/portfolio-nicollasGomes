import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import nicollas from "../assets/nicollas.jpg";
import cars from "../assets/cars.jpg";
import card from "../assets/spotify.jpg";
import easybank from "../assets/easybank.png";
import simple from "../assets/simple.png";
import Header from "./Header";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { title: "Portfolio", description: "Personal portfolio developed with React and TailwindCSS, focused on presenting my projects and skills in a professional way.", tags: ["React", "TailwindCSS"], image: nicollas, github: "https://github.com/GOMEZz157/portfolio-nicollasGomes", live: "https://nicollas-gomes-oliveira.vercel.app" },
    { title: "Cars", description: "Developed in React with Tailwind CSS. Features a responsive interface with cards for displaying vehicles.", tags: ["React", "TailwindCSS"], image: cars, github: "https://github.com/GOMEZz157/Projeto-Cars", live: "https://carros-nicollasgomes32b.vercel.app" },
    { title: "Spotify Clone", description: "A simple Spotify clone built with React and MongoDB. It displays a list of songs stored in the database and includes a functional music player.", tags: ["React", "CSS", "MongoDB"], image: card, github: "https://github.com/GOMEZz157/spotify-jornada-full-stack", live: "https://front-end-spotify-lovat.vercel.app/" },
    { title: "Easybank", description: "Developed in React with Tailwind CSS. Features a responsive interface for bank landing page.", tags: ["React", "TailwindCSS"], image: easybank, github: "https://github.com/GOMEZz157/Easybank", live: "https://easybank-gamma-teal.vercel.app/" },
    { title: "Simple Grid Component", description: "Developed in React with Tailwind CSS. Features a responsive card for sell something.", tags: ["HTML", "CSS"], image: simple, github: "https://github.com/GOMEZz157/simple-grid-component/", live: "https://simple-grid-component-inky.vercel.app/" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Mostra apenas 3 projetos se showAll for false
  const displayedProjects =
  window.innerWidth < 768 ? projects : showAll ? projects : projects.slice(0, 3);

  return (
    <section className="bg-(--bg-color) min-h-screen pb-30">
      <Header />
      <div className="max-w-6xl mx-auto mt-[8rem] px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-(--main-text) font-raleway">
            Projects
          </motion.h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="gap-2 items-center px-3 py-1 bg-(--head-bg) text-(--text-color) hover:bg-(--text-color) hover:text-(--head-bg) text-sm rounded-full font-poppins transition hidden md:flex"
          >
            {showAll ? "See Less" : "See More"} <ChevronDown className={`transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.article key={index} variants={itemVariants} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-(--shadow-button) transition-all duration-300">
              <div className="relative overflow-hidden">
                <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-(--main-text) font-poppins mb-2">{project.title}</h3>
                <p className="text-sm text-(--text-color) font-poppins mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-(--head-bg) text-(--text-color) text-sm rounded-full font-poppins">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-(--head-bg) hover:bg-(--button-color) text-(--text-color) hover:text-white rounded-md transition-colors duration-300 font-poppins">
                    <Github className="w-4 h-4" /> Code
                  </motion.a>
                  {project.live && (
                    <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-(--button-color) hover:bg-(--border-button) text-white rounded-md transition-colors duration-300 font-poppins">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
