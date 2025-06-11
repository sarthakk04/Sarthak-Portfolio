import React from "react";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import skills from "../data/skills";
import BlurText from "./blurtext/BlurText";
import DecryptedText from "./dectext/DecryptedText";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-background-light relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 w-1/3 h-1/3 bg-glow-gradient opacity-15 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <BlurText
              text="Technical Skills"
              delay={120}
              animateBy="letters"
              direction="top"
              className="section-heading text-white "
            />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            <DecryptedText
              text="Here's a breakdown of my technical expertise and the technologies I work with."
              speed={110}
              characters="01234!?"
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          className="bg-card-gradient rounded-xl p-8 mt-16 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Development Philosophy
          </h3>
          <p className="text-gray-300 mb-4">
            I believe in writing clean, maintainable code that delivers
            exceptional user experiences. My approach combines technical
            excellence with a deep understanding of user needs to create
            applications that are both powerful and intuitive.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Focus on performance and accessibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Component-based architecture for scalability</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Test-driven development practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Continuous learning and adapting to new technologies</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
