import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { WhatWeAreAbout } from "./components/WhatWeAreAbout.js";
import { Benefits } from "./components/Benefits.js";
import { Rituals } from "./components/Rituals.js";
import { Services } from "./components/Services.js";
import { Pricing } from "./components/Pricing.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";
import { About } from "./components/About.js";
import { Blog } from "./components/Blog.js";
import { Gallery } from "./components/Gallery.js";
import { ContactPage } from "./components/ContactPage.js";
import { MemberPage } from "./components/MemberPage.js";
import { FloatingSocial } from "./components/FloatingSocial.js";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <FloatingSocial />
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.div
            key="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Hero />
            <WhatWeAreAbout />
            <Benefits />
            <Rituals />
            <Services />
            <Pricing />
            <Contact />
          </motion.div>
        ) : currentPage === "about" ? (
          <motion.div
            key="about"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <About />
          </motion.div>
        ) : currentPage === "member" ? (
          <motion.div
            key="member"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <MemberPage />
          </motion.div>
        ) : currentPage === "blog" ? (
          <motion.div
            key="blog"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Blog />
          </motion.div>
        ) : currentPage === "gallery" ? (
          <motion.div
            key="gallery"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Gallery />
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ContactPage />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

// Initialize React app when DOM is ready
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
