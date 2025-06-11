import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import DecryptedText from "./dectext/DecryptedText";
import BlurText from "./blurtext/BlurText";

const Projects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-background-dark"
    >
      {/* Enhanced parallax background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/95 to-background-dark"
        style={{ opacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(120,119,198,0.15),transparent_50%)]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]), rotate }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(120,119,198,0.15),transparent_50%)]"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 50]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -5]),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <BlurText
              text="My Projects"
              delay={120}
              animateBy="letters"
              direction="top"
              className="section-heading text-white "
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            <DecryptedText
              text="Here are some of my recent projects. Each project is a unique challenge that I've tackled with creativity and technical expertise."
              speed={110}
              characters="01234!?"
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ scale }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/sarthakk04"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-gradient-to-r from-primary-500/80 to-secondary-500/80 backdrop-blur-sm text-background-dark font-medium py-3 px-8 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white">View More Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-secondary-500/80 to-primary-500/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
