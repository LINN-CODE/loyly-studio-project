import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import ritualImage from "figma:asset/e7ead56ff4f38bc9eff1ab8a1e71714896609951.png";

export function Rituals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <img 
            src={ritualImage} 
            alt="Finnish Sauna Ritual" 
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}