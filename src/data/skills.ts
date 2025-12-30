import { Skill } from "../types";

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: 90,
    iconSlug: "react",
    color: "#61DAFB",
    description:
      "My go-to library for building interactive, state-driven user interfaces. I love its component-based architecture and vast ecosystem.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    iconSlug: "tailwindcss",
    color: "#38B2AC",
    description:
      "I use Tailwind to rapidly build custom designs without leaving my HTML. It ensures consistency and responsiveness out of the box.",
  },
  {
    name: "HTML",
    category: "Frontend",
    level: 95,
    iconSlug: "html5",
    color: "#E34F26",
    description:
      "The foundation of web development. I use semantic HTML to build accessible, SEO-friendly, and well-structured web pages.",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: 90,
    iconSlug: "css",
    color: "#1572B6",
    description:
      "I use CSS to create responsive layouts, animations, and visually polished interfaces across devices and screen sizes.",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: 80,
    iconSlug: "nodedotjs",
    color: "#539E43",
    description:
      "Enables me to build scalable, event-driven backend services using the same language (JavaScript) as the frontend.",
  },
  {
    name: "Express.js",
    category: "Backend",
    level: 85,
    iconSlug: "express",
    color: "#000000",
    description:
      "A minimal and flexible Node.js framework that I use to build REST APIs, handle middleware, and create scalable backend architectures.",
  },
  {
    name: "Firebase",
    category: "Backend",
    level: 75,
    iconSlug: "firebase",
    color: "#FFCA28",
    description:
      "A backend-as-a-service platform I use for authentication, real-time databases, hosting, and rapid application development.",
  },

  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    level: 85,
    iconSlug: "javascript",
    color: "#F7DF1E",
    description:
      "The core language of the web. I use it to build dynamic, interactive applications across frontend and backend environments.",
  },
  {
    name: "Python",
    category: "Languages",
    level: 70,
    iconSlug: "python",
    color: "#3776AB",
    description:
      "My preferred language for scripting, automation, and AI/ML integration due to its readability and powerful libraries.",
  },
  {
    name: "Java",
    category: "Languages",
    level: 65,
    iconSlug: "openjdk",
    color: "#F89820",
    description:
      "I use Java for building robust, object-oriented enterprise applications where strict structure and performance are paramount.",
  },
  {
    name: "C++",
    category: "Languages",
    level: 60,
    iconSlug: "cplusplus",
    color: "#00599C",
    description:
      "I use C++ to understand object-oriented programming, performance optimization, and problem-solving at a lower level.",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    level: 75,
    iconSlug: "mongodb",
    color: "#47A248",
    description:
      "A flexible NoSQL database that pairs perfectly with Node.js, allowing for rapid iteration and handling unstructured data easily.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: 75,
    iconSlug: "postgresql",
    color: "#336791",
    description:
      "A powerful relational database that I use for complex queries, data integrity, and scalable production-grade applications.",
  },
  {
    name: "MySQL",
    category: "Database",
    level: 70,
    iconSlug: "mysql",
    color: "#4479A1",
    description:
      "A reliable relational database commonly used for web applications, offering simplicity, performance, and wide ecosystem support.",
  },

  // Tools
  {
    name: "WordPress",
    category: "Tools",
    level: 90,
    iconSlug: "wordpress",
    color: "#21759B",
    description:
      "I leverage WordPress for rapid content management solutions, customization, and e-commerce setups for clients.",
  },

    {
    name: "Supabase",
    category: "Backend",
    level: 75,
    iconSlug: "supabase",
    color: "#3ECF8E",
    description:
      "An open-source backend-as-a-service that I use for authentication, PostgreSQL databases, real-time subscriptions, and scalable full-stack applications.",
  },

];

export default skills;
