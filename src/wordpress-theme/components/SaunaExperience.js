import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Wind, Cloud, Droplets, Clock, Snowflake, Coffee } from "lucide-react";

const experienceSteps = [
  {
    icon: Wind,
    description: "Although temperatures can reach up to 90 degrees Celsius, the environment should not feel oppressive or stifling, as a genuine Finnish sauna features proper ventilation and effective air circulation within the cabin."
  },
  {
    icon: Cloud,
    description: "Engage in Löyly to enjoy the sensation of soft, gentle steam surrounding you. It is best to sit on the highest bench near the ceiling, where the steam rises, then gradually move lower as the air circulates."
  },
  {
    icon: Droplets,
    description: "During Löyly, water is carefully ladled onto the heated stones; avoid throwing water or saturating the stones excessively."
  },
  {
    icon: Clock,
    description: "A typical session lasts around 15 to 20 minutes, with Löyly applied two to three times."
  },
  {
    icon: Snowflake,
    description: "Following the sauna, cool down with a cold shower or a dip in a cold plunge pool."
  },
  {
    icon: Coffee,
    description: "Finally, rest, relax, and hydrate before repeating the process as desired."
  }
];

export function SaunaExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-gray-900 text-5xl font-bold">How to experience an authentic Finnish sauna</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[32px]">
            Follow these traditional practices for the most authentic and beneficial experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-6 bg-white p-8 border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <step.icon className="w-8 h-8 text-gray-800 stroke-1" />
              </motion.div>
              <p className="text-gray-600 leading-relaxed pt-1">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
