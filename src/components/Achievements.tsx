import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import DecryptedText from "./dectext/DecryptedText";
import BlurText from "./blurtext/BlurText";

const timelineData = [
  {
    year: "2021 - 2024",
    title: "Diploma in Computer Technology",
    description:
      "Completed Diploma with technical foundation in software development and computer systems.",
  },
  {
    year: "Jan 2024 - Mar 2024",
    title: "MERN Stack Internship",
    organization: "Sumago Infotech Pvt Ltd",
    description:
      "Worked as a MERN stack intern, developing full-stack applications and learning real-world project workflows.",
  },
  {
    year: "Apr 2024 - Feb 2025",
    title: "Junior Full Stack Developer",
    organization: "NetLeap IT Training and Solutions",
    description:
      "Developing production-level web apps using React, Node.js, and Firebase with a strong focus on UI/UX.",
  },
  {
    year: "Sep 2024 - Ongoing",
    title: "B.E. 3rd Year - Information Technology",
    organization: "DY Patil College of Engineering",
    description:
      "Pursuing Bachelor’s in IT with specialization in Software Engineering, AI, and Full Stack development.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-glow-gradient opacity-10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center">
            <BlurText
              text="Timeline"
              delay={120}
              animateBy="letters"
              direction="top"
              className="section-heading text-white"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            <DecryptedText
              text="A glimpse of my academic and professional journey from 2021 to present."
              speed={110}
              characters="01234!?"
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </motion.div>

        <div className="relative border-l border-primary-500 pl-6 md:pl-12 space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Circle marker */}
              <span className="absolute -left-4 md:-left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary-500 group-hover:scale-125 transition-transform duration-300" />

              <div className="bg-card-gradient backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-500 hover:border-primary-500">
                <div className="flex items-center mb-2 text-sm text-secondary-400">
                  <CalendarDays className="w-4 h-4 mr-2 text-primary-500" />
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-500 transition-colors duration-300">
                  {item.title}
                </h3>
                {item.organization && (
                  <p className="text-sm text-gray-400 mb-2 font-medium">
                    {item.organization}
                  </p>
                )}
                <p className="text-gray-400 font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
