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
              At löyly studio, we believe in the transformative power of authentic Finnish sauna. 
              Our mission is to bring sauna bathing to modern life, creating a 
              sanctuary where wellness, community, and mindfulness converge.
            </p>
            <p className="text-[24px]">
              We're dedicated to providing an authentic Finnish sauna experience that honors centuries-old 
              traditions while embracing contemporary wellness practices. From the carefully selected wood 
              to the gentle heat and the ritual of löyly—the steam created by water on hot stones—every 
              detail is thoughtfully curated.
            </p>
            <p className="text-[24px]">
              Whether you're seeking physical rejuvenation, mental clarity, or meaningful connection, 
              löyly studio offers a welcoming space to slow down, breathe deeply, and rediscover balance 
              in your life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
