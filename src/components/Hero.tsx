import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { personalInfo, socials } from "../data/profile";
// import profile from "../assets/profile.jpg";
import avt from "../assets/avatar.png";
import DecryptedText from "./dectext/DecryptedText";
import ProfileCard from "./ProfileCard/ProfileCard";

const iconComponents: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
};

const TypewriterText: React.FC<{ text: string[] }> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // index in current string
  const [currentWord, setCurrentWord] = useState(0); // index of string in array
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => setIsPaused(false), 1000);
      return () => clearTimeout(pauseTimeout);
    }

    const currentString = text[currentWord];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentString.length) {
          setDisplayText(currentString.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        } else if (isDeleting && currentIndex > 0) {
          setDisplayText(currentString.slice(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          if (!isDeleting) {
            setIsPaused(true);
          } else {
            setCurrentWord((prev) => (prev + 1) % text.length);
          }
          setIsDeleting((prev) => !prev);
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, text, currentWord]);

  return (
    <span className="gradient-text glow-text relative">
      {displayText}
      <span className="inline-block w-1 h-8 bg-primary-500 ml-1 animate-blink" />
    </span>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden pt-24 pb-16 bg-hero-gradient"
    >
      {/* Enhanced background effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-glow-gradient opacity-20 blur-3xl"
        style={{ y, rotate }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-glow-gradient opacity-10 blur-3xl"
        style={{
          y: useTransform(scrollY, [0, 500], [0, -50]),
          rotate: useTransform(scrollY, [0, 500], [0, -5]),
        }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4">
              Hello, I'm <br />
              <TypewriterText text={personalInfo.name} />
            </h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-6 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {personalInfo.tagline}
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg max-w-lg mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <DecryptedText
                text={personalInfo.bio}
                speed={110}
                characters="01!?"
                animateOn="view"
                revealDirection="center"
              />
            </motion.p>

            <motion.div
              style={{ position: "relative", top: "-15px" }}
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-background-light/20 backdrop-blur-sm p-3 rounded-full hover:bg-primary-500/20 hover:text-primary-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <span className="relative z-10">
                    {iconComponents[social.icon]}
                  </span>
                  <span className="absolute inset-0 rounded-full bg-primary-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {/* Get In Touch Button */}
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:brightness-110 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              {/* Download Resume Button */}
              {/* <motion.a
                href="https://drive.google.com/file/d/1qOo_vh7qISjHWXhsSo2i6Ko5PEczCTzV/view?usp=sharing"
                download
                target="_blank"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full font-medium border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2 transition-colors duration-300 group-hover:fill-white group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download Resume
              </motion.a> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ scale }}
          >
            <div className="relative group">
              <div className="w-full h-120 md:h-96 lg:h-[38rem] relative rounded-2xl overflow-hidden border border-gray-700/30">
                {/* <img
                    src={profile}
                    // alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  /> */}
                <ProfileCard
                  name="Sarthak Shinde"
                  title="Developer"
                  handle="___.sarthakkk.___"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={avt}
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => console.log("Contact clicked")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent opacity-50 group-hover:opacity-60 transition-all duration-500" />
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-primary-500/10 rounded-2xl transform transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="absolute -top-2 -left-2 w-full h-full border border-secondary-500/10 rounded-2xl transform transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <a
        href="#projects"
        className="flex flex-col items-center cursor-pointer group"
      >
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-gray-400/50 rounded-full flex justify-center backdrop-blur-sm overflow-hidden">
            <motion.div
              className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
