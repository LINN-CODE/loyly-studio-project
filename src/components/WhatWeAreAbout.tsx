import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface WhatWeAreAboutProps {
  onNavigate?: (page: "about") => void;
}

export function WhatWeAreAbout({ onNavigate }: WhatWeAreAboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f5f9f8] border-t-2 border-b-2 border-[#004d40]/20">
      <div className="container mx-auto px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-8 text-[#004d40] text-[48px] font-bold">What We Are About</h2>
          <div className="space-y-6 text-[#2b2b2b]/80 leading-relaxed">
            <p className="text-[24px]">
              Löyly Studio is a sanctuary that shares calm - a space to reset the body and mind, breathe deeply, and reconnect with the community
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Button
              onClick={() => onNavigate?.("about")}
              className="bg-[#004d40] hover:bg-[#003d33] text-white px-8 py-6 group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
