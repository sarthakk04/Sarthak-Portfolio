import React from "react";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { socials, navLinks } from "../data/profile";

const iconComponents: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute -top-20 left-1/3 w-1/3 h-1/3 bg-glow-gradient opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a
              href="#hero"
              className="text-2xl font-bold font-heading gradient-text glow-text inline-block mb-4"
            >
              Sarthak Shinde<span className="text-primary-500">.</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful, functional digital experiences with a focus on
              performance, accessibility, and user-centric design principles.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {iconComponents[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  App Development
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Technical Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © {currentYear} Sarthak Shinde. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-accent-DEFAULT" /> by
            Sarthak Shinde
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
