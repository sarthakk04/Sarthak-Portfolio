import React, { useEffect } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
// import GooeyNav from "./components/GooeyNav/gooeynav";

function App() {
  // const items = [
  //   { label: "Home", href: "#" },
  //   { label: "About", href: "#" },
  //   { label: "Contact", href: "#" },
  // ];

  useEffect(() => {
    // Update page title
    document.title = "Sarthak Shinde ";
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div className="min-h-screen bg-background-dark text-white">
          <AnimatedCursor />

          <Navbar />
          {/* <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div> */}
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default App;
