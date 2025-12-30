import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, Briefcase, Award } from "lucide-react";
import DecryptedText from "./dectext/DecryptedText";
import BlurText from "./blurtext/BlurText";

const timelineData = [
  {
    year: "2021 - 2024",
    title: "Diploma in Computer Technology",
    organization: "Government Polytechnic Nashik",
    type: "education",
    description:
      "Completed Diploma with technical foundation in software development and computer systems.",
  },
  {
    year: "Jan 2024 - Mar 2024",
    title: "MERN Stack Internship",
    organization: "Sumago Infotech Pvt Ltd",
    type: "work",
    description:
      "Worked as a MERN stack intern, developing full-stack applications and learning real-world project workflows.",
  },
  {
    year: "Apr 2024 - Feb 2025",
    title: "Junior Full Stack Developer",
    organization: "NetLeap IT Training and Solutions",
    type: "work",
    description:
      "Developing production-level web apps using React, Node.js, and Firebase with a strong focus on UI/UX.",
  },
  {
    year: "Sep 2024 - Ongoing",
    title: "B.E. 3rd Year - Information Technology",
    organization: "DY Patil College of Engineering",
    type: "education",
    description:
      "Pursuing Bachelor’s in IT with specialization in Software Engineering, AI, and Full Stack development.",
  },
  {
    year: "Oct 2025 - Ongoing",
    title: "Software Engineering Interns",
    type: "work",
    organization: "New Big Tools",
    description:
      "Actively developing scalable and optimized Chrome extensions with a focus on performance and efficiency.",
  },
];

const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-white" />;
      case "work":
        return <Briefcase className="w-5 h-5 text-white" />;
      default:
        return <Award className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background-dark">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="flex justify-center w-full">
            <BlurText
              text="Journey So Far"
              delay={120}
              animateBy="letters"
              direction="top"
              className="section-heading text-white"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 font-light leading-relaxed text-lg">
            <DecryptedText
              text="Tracing the path of my academic and professional milestones."
              speed={100}
              characters="01234!?"
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Continuous Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/50 to-transparent md:left-1/2 md:-ml-px hidden md:block" />
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/50 to-transparent md:hidden" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-5/12" />

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-background-dark border border-primary-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(78,234,255,0.3)] relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-primary-500/20 animate-pulse" />
                      {getIcon(item.type)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full pl-16 md:pl-0 md:w-5/12">
                    <div
                      className={`
                        relative bg-card-gradient border border-white/10 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(78,234,255,0.1)] transition-all duration-300 group
                        ${isEven ? "md:text-left" : "md:text-left"} 
                      `}
                    >
                      {/* Horizontal Connector Line (Desktop) */}
                      <div 
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-primary-500/50 ${
                          isEven ? "-left-8" : "-right-8"
                        }`} 
                      />
                      
                      {/* Horizontal Connector Line (Mobile) */}
                      <div className="md:hidden absolute top-8 -left-10 w-10 h-px bg-primary-500/50" />

                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          <CalendarDays className="w-3 h-3 mr-1.5" />
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="text-sm font-medium text-gray-400 mb-3">
                        {item.organization}
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
