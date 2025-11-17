import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatWeAreAbout } from "./components/WhatWeAreAbout";
import { Benefits } from "./components/Benefits";
import { Rituals } from "./components/Rituals";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Gallery } from "./components/Gallery";
import { ContactPage } from "./components/ContactPage";
import { MemberPage } from "./components/MemberPage";
import { SupplierPage } from "./components/SupplierPage";
import { FloatingSocial } from "./components/FloatingSocial";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "about"
    | "member"
    | "blog"
    | "gallery"
    | "contact"
    | "supplier"
  >("home");

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
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
            <WhatWeAreAbout onNavigate={setCurrentPage} />
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
        ) : currentPage === "supplier" ? (
          <motion.div
            key="supplier"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <SupplierPage />
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
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}