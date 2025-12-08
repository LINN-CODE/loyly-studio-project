import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Flame, Snowflake, Armchair, RotateCw, ArrowRight, ArrowDown } from "lucide-react";

const ritualSteps = [
  {
    id: 1,
    title: "Heat",
    icon: Flame,
    options: ["Finnish Sauna", "Steam Room", "Infrared Cabin"],
    duration: "15-20 min",
    color: "from-orange-50 to-red-50"
  },
  {
    id: 2,
    title: "Cold Plunge",
    icon: Snowflake,
    description: "Immerse in cold water",
    duration: "1-3 min",
    color: "from-blue-50 to-cyan-50"
  },
  {
    id: 3,
    title: "Rest",
    icon: Armchair,
    description: "Relax and hydrate",
    duration: "10-15 min",
    color: "from-gray-50 to-slate-50"
  }
];

export function Rituals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-gray-900 text-5xl font-bold">The Finnish Sauna Ritual</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience the traditional heat-cold-rest cycle for maximum benefits
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View - Horizontal Flow */}
          <div className="hidden md:block">
            <div className="flex items-stretch justify-center gap-8">
              {ritualSteps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${step.color} border-2 border-gray-200 p-8 h-[320px] flex flex-col items-center justify-center text-center relative`}
                      whileHover={{ scale: 1.05, borderColor: "#666" }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Step Number */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 text-white flex items-center justify-center text-sm">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                      >
                        <step.icon className="w-12 h-12 text-gray-800 stroke-1" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-gray-900 mb-3">{step.title}</h3>

                      {/* Options or Description */}
                      {step.options ? (
                        <div className="space-y-1 mb-3">
                          {step.options.map((option, i) => (
                            <p key={i} className="text-gray-600 text-sm">
                              {option}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 mb-3">{step.description}</p>
                      )}

                      {/* Duration */}
                      <div className="mt-auto pt-2">
                        <span className="text-gray-500 text-sm border border-gray-300 px-3 py-1 inline-block">
                          {step.duration}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < ritualSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <ArrowRight className="w-12 h-12 text-gray-400 mx-4" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Repeat Indicator */}
            <motion.div
              className="flex items-center justify-center mt-12 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex-1 h-px bg-gray-300"></div>
              <motion.div 
                className="flex items-center gap-3 bg-gray-100 border border-gray-300 px-6 py-3"
                whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
              >
                <RotateCw className="w-12 h-12 text-gray-700" />
                <span className="text-gray-700">Repeat 2-3 cycles</span>
              </motion.div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </motion.div>
          </div>

          {/* Mobile View - Vertical Flow */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
              {ritualSteps.map((step, index) => (
                <div key={step.id} className="w-full">
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${step.color} border-2 border-gray-200 p-8 min-h-[280px] flex flex-col items-center justify-center text-center relative`}
                      whileHover={{ scale: 1.02, borderColor: "#666" }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Step Number */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 text-white flex items-center justify-center text-sm">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                      >
                        <step.icon className="w-12 h-12 text-gray-800 stroke-1" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-gray-900 mb-3">{step.title}</h3>

                      {/* Options or Description */}
                      {step.options ? (
                        <div className="space-y-1 mb-3">
                          {step.options.map((option, i) => (
                            <p key={i} className="text-gray-600 text-sm">
                              {option}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 mb-3">{step.description}</p>
                      )}

                      {/* Duration */}
                      <div className="mt-2">
                        <span className="text-gray-500 text-sm border border-gray-300 px-3 py-1 inline-block">
                          {step.duration}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < ritualSteps.length - 1 && (
                    <motion.div
                      className="flex justify-center my-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <ArrowDown className="w-12 h-12 text-gray-400" />
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Repeat Indicator */}
              <motion.div
                className="mt-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="flex items-center justify-center gap-3 bg-gray-100 border border-gray-300 px-6 py-4"
                  whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                >
                  <RotateCw className="w-12 h-12 text-gray-700" />
                  <span className="text-gray-700">Repeat 2-3 cycles</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
