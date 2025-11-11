import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Shield, Moon, Sparkles, Users, Brain } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Heart & Metabolic Health",
    description: "Heat exposure can support circulation, blood pressure, and recovery."
  },
  {
    icon: Shield,
    title: "Immunity & Respiratory",
    description: "Regular sessions are associated with fewer common colds and easier breathing."
  },
  {
    icon: Moon,
    title: "Mood & Sleep",
    description: "The heat–cold rhythm helps the body unwind and the mind reset."
  },
  {
    icon: Sparkles,
    title: "Healthy Ageing",
    description: "Gentle heat suits many older adults; consistency matters more than intensity."
  },
  {
    icon: Users,
    title: "Social Wellness",
    description: "Shared benches, unhurried conversation, and real community."
  },
  {
    icon: Brain,
    title: "Reduced Risk of Dementia",
    description: "Regular sauna use has been linked to better cognitive health and reduced dementia risk."
  }
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-[#2b2b2b] text-5xl font-bold">Health Benefits</h2>
          <p className="text-[#2b2b2b]/70 max-w-2xl mx-auto">
            Experience the transformative power of traditional sauna therapy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="w-20 h-20 mb-6 flex items-center justify-center mx-auto bg-[#004d40]/10 rounded-full border-2 border-[#004d40]/20"
                whileHover={{ scale: 1.1, rotate: 5, borderColor: "rgba(0, 77, 64, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="w-10 h-10 text-[#004d40] stroke-[1.5]" />
              </motion.div>
              <h3 className="mb-3 text-[#2b2b2b] text-2xl font-bold">{benefit.title}</h3>
              <p className="text-[#2b2b2b]/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
