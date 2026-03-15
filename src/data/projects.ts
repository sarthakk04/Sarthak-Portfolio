import { Project } from "../types";
import unigold from "../assets/projects/unigold.png";
import pika from "../assets/projects/pika.png";
import portfolio from "../assets/projects/portfolio.png";
import jarvis from "../assets/projects/jarvis.png";
import persona from "../assets/projects/persona.png";
import funlingo from "../assets/projects/funlingo.png";
import ascent from "../assets/projects/ascent.png";
const projects: Project[] = [
    {
    id: 1,
    title: "Funlingo",
    description:
      "Chrome extension makes language learning easy with dual subtitles on YouTube, Netflix, and Amazon Prime.",
    image: funlingo,
    tags: ["React", "Manifest V3", "Webpack"],
    // github: "https://github.com/sarthakk04/Persona-AI",
    liveDemo: "https://chromewebstore.google.com/detail/funlingo-dual-subtitles-f/gjdpaicenfffjkgofmcjikilokigkonj",
  },
  {
    id: 2,
    title: "Persona - AI Chatbot",
    description:
      "Persona AI is a conversational AI platform built with Next.js that allows users to chat with custom personas.",
    image: persona,
    tags: ["NextJS", "NodeJS", "Agentic AI" , "AWS"],
    github: "https://github.com/sarthakk04/Persona-AI",
    liveDemo: "https://persona-ai-five.vercel.app/",
  },
  {
    id: 3,
    title: "Ascent",
    description:
      "Ascent transforms every new tab into a calm, focused space for productivity, inspiration, and clarity.",
    image: ascent,
    tags: ["React", "Manifest V3", "Webpack"],
    // github: "https://github.com/sarthakk04/Persona-AI",
    liveDemo: "https://chromewebstore.google.com/detail/ascent/ebkeoifaacjikcjdpdmdcgbnbecjopkb?authuser=0&hl=en",
  },
  {
    id: 4,
    title: "Unigold Packaging",
    description:
      "A static website made for the client for their business to increase their online presence",
    image: unigold,
    tags: ["React", "HTML", "Tailwind Css"],
    github: "https://github.com/sarthakk04/UniGold/",
    liveDemo: "https://unigoldpackaging.org/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work and skills with stunning animations.",
    image: portfolio,
    tags: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/sarthakk04",
    liveDemo: "https://sarthak-portfolio-chi.vercel.app/",
  },
  {
    id: 6,
    title: "PIKA Projects",
    description:
      "An ecommerce store to sell projects made by students . Best platform to monetize your development skills.  Easiest way to get quick projects according to the requirements along with the doceumentation",
    image: pika,
    tags: ["Python", "NextJS", "Firebase", "NodeJS"],
    github: "https://github.com/sarthakk04/PikaProjects",
    liveDemo: "https://pika-projects.vercel.app/",
  },
  {
    id: 7,
    title: "AI Assistant (Context Antman)",
    description:
      "An AI model which talks like AntMan form Marvel, it has the same humour, thinking and voice like AntMan . Developed in competition named make your own Jarvis for the roast battle.",
    image: jarvis,
    tags: ["React", "Groq API", "Python", "Flask"],
    github: "https://github.com/sarthakk04/Make-your-own-Jarvis-Competition",
  },
];

export default projects;
