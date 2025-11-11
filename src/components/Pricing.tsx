import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="member" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-[#2b2b2b] text-5xl font-bold">Session Pricing and Packages</h2>
          <motion.p 
            className="text-[#004d40]/60 italic text-[48px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Coming Soon
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
