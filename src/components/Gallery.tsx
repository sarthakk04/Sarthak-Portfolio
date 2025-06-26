import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import sumago from "../assets/gallery/sumago.jpeg";
import vpn from "../assets/gallery/vpn.png";
import dyp from "../assets/gallery/dyp.jpg";
import nits from "../assets/gallery/nits.png";
import viit from "../assets/gallery/viit.png";
import BlurText from "./blurtext/BlurText";
import DecryptedText from "./dectext/DecryptedText";

// Define TypeScript interface
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Gallery item data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "SCOPE Excellence Award",
    description:
      "Awarded by Sumago Infotech Pvt. Ltd. for demonstrating exceptional performance, dedication, and consistent contribution during the internship. Recognized as the top-performing intern under the SCOPE initiative for outstanding technical skills and professional growth.",
    image: sumago,
  },
  {
    id: 2,
    title: "Internship Completion at VPN Digital",
    description:
      "Successfully completed a 3-month internship at VPN Digital Services as a Backend Developer. Contributed to building and optimizing backend systems, APIs, and database management while gaining hands-on experience with real-world projects and collaborative team environments.",
    image: vpn,
  },
  {
    id: 3,
    title: "Hands On Java Workshop",
    description:
      "Served as a Resource Person for a Hands-on Java Programming Workshop organized by the Department of Information Technology, D.Y. Patil College of Engineering, Akurdi, for First Year students. Recognized for exceptional contribution, dedication, and enthusiastic support during the event held on 26 April 2025.",
    image: dyp,
  },
  {
    id: 4,
    title: "Appreciation Letter - Netleap IT Training Solutions",
    description:
      "Received an official Appreciation Letter from Netleap IT Training and Solutions (NTS) for outstanding leadership as a Full Stack Development Trainer, guiding over 50 interns. Recognized for effectively managing virtual sessions, delivering complex concepts clearly, and creating a productive learning environment. Awarded on 15 February 2025.",
    image: nits,
  },
  {
    id: 5,
    title: "1st Runner Up in Build Your Own Jarvis",
    description:
      "Achieved 1st Runner-Up position in the Build Your Jarvis Hackathon, showcasing innovative problem-solving and technical skills in AI-driven assistant development. Recognized for building a creative and functional project under time constraints, organized by AIMSS and partner organizations.",
    image: viit,
  },
];

const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="achievements"
      className="py-20 bg-background-light relative overflow-hidden"
    >
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
              text="Achievements"
              delay={120}
              animateBy="letters"
              direction="top"
              className="section-heading text-white"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            <DecryptedText
              text="Explore some of my creative and technical highlights"
              speed={110}
              characters="01234!?"
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer border border-gray-700 bg-background-dark"
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeItem && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-background-dark border border-gray-700 rounded-lg overflow-hidden shadow-lg relative max-w-3xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button
                  className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors"
                  onClick={() => setActiveItem(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-gray-400">{activeItem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
