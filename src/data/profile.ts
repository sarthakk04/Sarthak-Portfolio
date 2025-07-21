import { Social, NavLink } from "../types";
import profile from "../assets/profile.png";

export const personalInfo = {
  name: ["Sarthak Shinde", "Developer", "Learner", "Dreamer"],
  tagline: "Sky was never the limit",
  bio: "I’m a curious student and passionate developer who loves turning innovative ideas into real solutions. I believe in looking at problems from unique perspectives — it’s what helps me grow and build better every day.",
  location: "Pune, Maharashtra",
  email: "sartech2005@gmail.com",
  profileImage: { profile },
};

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/sarthakk04",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarthakshinde04/",
    icon: "linkedin",
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/___.sarthakkk.___/",
    icon: "instagram",
  },
];

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Achievements",
    href: "#achievements",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
