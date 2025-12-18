import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop";

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
  const location = useLocation();

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
      {/* 🔑 THIS IS THE FIX */}
      <ScrollToTop />

      <Header />
      <FloatingSocial />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
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
            }
          />

          <Route
            path="/about"
            element={
              <motion.div {...motionProps(pageVariants, pageTransition)}>
                <About />
              </motion.div>
            }
          />

          <Route
            path="/member"
            element={
              <motion.div {...motionProps(pageVariants, pageTransition)}>
                <MemberPage />
              </motion.div>
            }
          />

          <Route
            path="/blog"
            element={
              <motion.div {...motionProps(pageVariants, pageTransition)}>
                <Blog />
              </motion.div>
            }
          />

          <Route
            path="/gallery"
            element={
              <motion.div {...motionProps(pageVariants, pageTransition)}>
                <Gallery />
              </motion.div>
            }
          />

          <Route
            path="/supplier"
            element={
              <motion.div {...motionProps(pageVariants, pageTransition)}>
                <SupplierPage />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div {...motionProps(pageVariants, pageTransition)}>
                <ContactPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}


function motionProps(variants: any, transition: any) {
  return {
    variants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition,
  };
}
