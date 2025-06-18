import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "Unigold Packaging",
    description:
      "A static website made for the client for their business to increase their online presence",
    image:
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    tags: ["React", "HTML", "Tailwind Css"],
    github: "https://github.com/sarthakk04/UniGold/",
    liveDemo: "https://unigoldpackaging.org/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work and skills with stunning animations.",
    image:
      "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    tags: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/sarthakk04",
    liveDemo: "https://sarthak-portfolio-chi.vercel.app/",
  },
  {
    id: 3,
    title: "PIKA Projects",
    description:
      "An ecommerce store to sell projects made by students . Best platform to monetize your development skills.  Easiest way to get quick projects according to the requirements along with the doceumentation",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    tags: ["Python", "NextJS", "Firebase", "NodeJS"],
    github: "https://github.com/sarthakk04/PikaProjects",
    liveDemo: "https://vercel.com/sarthaks-projects-60a9306f/pika-projects",
  },
  {
    id: 4,
    title: "AI Assistant (Context Antman)",
    description:
      "An AI model which talks like AntMan form Marvel, it has the same humour, thinking and voice like AntMan . Developed in competition named make your own Jarvis for the roast battle.",
    image:
      "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    tags: ["React", "Groq API", "Python", "Flask"],
    github: "https://github.com/sarthakk04/Make-your-own-Jarvis-Competition",
  },
];

export default projects;
