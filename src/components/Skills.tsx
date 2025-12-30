import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../data/skills";
import { Skill, SkillCategory } from "../types";
import BlurText from "./blurtext/BlurText";
import DecryptedText from "./dectext/DecryptedText";
import {
  Code,
  Database,
  Server,
  Layout,
  Wrench,
  Terminal,
  
  Cpu,
} from "lucide-react";

// Map categories to Lucide icons
const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  Frontend: <Layout className="w-4 h-4" />,
  Backend: <Server className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Tools: <Wrench className="w-4 h-4" />,
  Languages: <Code className="w-4 h-4" />,
};

// Get unique categories
const categories = Array.from(
  new Set(skills.map((skill) => skill.category))
) as SkillCategory[];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Frontend");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  // Auto-select the first skill when category changes
  useEffect(() => {
    if (filteredSkills.length > 0) {
      setSelectedSkill(filteredSkills[0]);
    }
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="py-24 bg-background-light relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-secondary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center w-full">
            <BlurText
              text="Tech Ecosystem"
              delay={120}
              animateBy="letters"
              direction="top"
              className="section-heading text-white"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 font-light leading-relaxed text-lg">
            <DecryptedText
              text="Explore the technologies I use to architect robust and scalable digital solutions."
              speed={100}
              characters="01234!?"
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* LEFT COLUMN: Navigation & List */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Navbar (Tabs) */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md self-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10
                    ${
                      activeCategory === cat
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }
                  `}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500 rounded-xl shadow-lg shadow-primary-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {categoryIcons[cat] || <Terminal className="w-4 h-4" />}
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills List Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.button
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    className={`
                      relative group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 w-full
                      ${
                        selectedSkill?.name === skill.name
                          ? "bg-card-gradient border-primary-500/50 shadow-[0_0_20px_rgba(78,234,255,0.15)] translate-x-2"
                          : "bg-background-dark/40 border-white/5 hover:border-white/20 hover:bg-white/5"
                      }
                    `}
                  >
                    <div
                      className={`
                      w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                      ${
                        selectedSkill?.name === skill.name
                          ? "bg-background-dark border border-white/10"
                          : "bg-white/5"
                      }
                    `}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.iconSlug}/${
                          selectedSkill?.name === skill.name
                            ? skill.color.replace("#", "")
                            : "9ca3af"
                        }`}
                        alt={skill.name}
                        className="w-5 h-5 transition-all duration-300"
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                        selectedSkill?.name === skill.name
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      {skill.name}
                    </span>
                    
                    {selectedSkill?.name === skill.name && (
                         <motion.div
                            layoutId="active-indicator"
                            className="absolute right-4 w-1.5 h-1.5 rounded-full bg-primary-400"
                         />
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Sticky Detail Card */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {selectedSkill && (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-3xl bg-card-gradient border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-xl h-full flex flex-col justify-between"
                  >
                    {/* Decorative Background */}
                    <div
                      className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
                      style={{ backgroundColor: selectedSkill.color }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center bg-background-dark border border-white/10 shadow-lg"
                          style={{
                            boxShadow: `0 0 30px -5px ${selectedSkill.color}30`,
                          }}
                        >
                          <img
                            src={`https://cdn.simpleicons.org/${
                              selectedSkill.iconSlug
                            }/${selectedSkill.color.replace("#", "")}`}
                            alt={selectedSkill.name}
                            className="w-10 h-10 md:w-12 md:h-12"
                          />
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 mb-2">
                                {selectedSkill.category}
                            </span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(selectedSkill.level / 20) ? 'bg-primary-500' : 'bg-gray-700'}`}
                                    />
                                ))}
                            </div>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {selectedSkill.name}
                      </h2>
                      <div className="h-1 w-16 rounded-full mb-8" style={{ backgroundColor: selectedSkill.color }} />

                      <div className="bg-background-dark/30 rounded-xl p-6 border border-white/5">
                        <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-primary-400 font-bold mb-3">
                            <Cpu className="w-4 h-4" /> Usage & Experience
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                            {selectedSkill.description}
                        </p>
                      </div>
                    </div>

                    {/* <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/5 p-4 -mx-4 -mb-4 transition-colors rounded-b-xl">
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                        View related projects
                      </span>
                      <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary-500 group-hover:text-black transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
