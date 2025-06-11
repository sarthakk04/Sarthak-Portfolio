import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden card-hover group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover object-center transition-all duration-500 group-hover:scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/70 via-transparent to-transparent opacity-50 transition-all duration-500" />
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2 text-white group-hover:text-primary-500 transition-colors duration-500"
          whileHover={{ x: 2 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-gray-400 mb-4 font-light leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-primary-500/5 text-primary-400 border border-primary-500/10"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(78, 234, 255, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* GitHub and Live Demo buttons inside links */}
        <div className="flex space-x-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <motion.button
                className="group/link relative p-3 rounded-full bg-background-light/10 text-white hover:text-primary-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  <Github className="w-5 h-5" />
                </span>
                <span className="absolute inset-0 rounded-full bg-primary-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <motion.button
                className="group/link relative p-3 rounded-full bg-background-light/10 text-white hover:text-primary-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  <ExternalLink className="w-5 h-5" />
                </span>
                <span className="absolute inset-0 rounded-full bg-primary-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </a>
          )}
        </div>
      </div>

      {/* Subtle borders */}
      <div className="absolute -bottom-2 -right-2 w-full h-full border border-primary-500/10 rounded-xl transform transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
      <div className="absolute -top-2 -left-2 w-full h-full border border-secondary-500/10 rounded-xl transform transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
    </motion.div>
  );
};

export default ProjectCard;
