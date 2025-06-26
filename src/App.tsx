import React, { useEffect, useState } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { NavbarDemo } from "./components/navbaracternity";
import HandLoader from "./components/loader/HandLoader"; // 👈 Import your loader
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Sarthak Shinde ";

    // Simulate loader delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background-dark">
        <HandLoader />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div className="min-h-screen bg-background-dark text-white">
        <AnimatedCursor />
        <NavbarDemo />

        <main>
          {/* <Hero /> */}
          <Projects />
          <Skills />
          <Achievements />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </motion.div>
  );
}

export default App;
