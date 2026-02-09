import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import me from "../assets/photo.png";

export default function About() {
  const skills = ["React", "TypeScript", "Tailwind", "MySQL", "Python", "Git"];
  const canvasRef = useRef(null);

  // Particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    const createParticles = (num) => {
      particlesArray = [];
      for (let i = 0; i < num; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: "#4f46e5", // single blue color
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(100);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const chipVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Canvas of particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Central card */}
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center py-12 px-8 border border-white/20 mx-4">
        
        {/* Avatar */}
        <motion.img
          src={me}
          alt="Nicollas Gomes"
          className="w-40 h-40 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-lg mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-gray-200 text-lg mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am a <span className="text-blue-400 font-semibold">Front-end Developer</span> passionate about creating modern and futuristic digital experiences. My journey began during technical high school in IT.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-5 py-2 rounded-full bg-blue-500 text-white font-medium shadow-lg cursor-pointer hover:scale-110"
              variants={chipVariants}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
              whileHover={{ y: -5 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Contact bar */}
        <motion.div
          className="flex gap-6 justify-center mt-4 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="mailto:nicksss.gomes@gmail.com"
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            Contact me
          </a>
          <a
            href="https://linkedin.com/in/nicollas-gomes-4479952b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:scale-110 transition-transform"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/GOMEZz157"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 text-2xl hover:scale-110 transition-transform"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://wa.me/5511914462438"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-2xl hover:scale-110 transition-transform"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://drive.google.com/file/d/1PxsOnv7ReZYev2zBD3JuYp-qVUWlYrn_/view?usp=sharing" target="_blank" className="bg-white rounded-xl py-2 px-4">Download CV</a>
        </motion.div>
      </div>
    </section>
  );
}
