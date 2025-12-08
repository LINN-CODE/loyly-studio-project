import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function WhatWeAreAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-8 text-gray-900 text-[48px] font-bold">What We Are About</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-[24px]">
              Löyly Studio is a sanctuary that shares calm - a space to reset the body and mind, breathe deeply, and reconnect with the community
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
