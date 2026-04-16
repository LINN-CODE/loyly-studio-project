import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Gift } from "lucide-react";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sessionPackages = [
    {
      name: "Daylight KIPINÄ",
      price: "$22",
      type: "Individual",
      sessions: "Single session",
      validity: "3 months",
      transferable: true,
      description: "Mon to Fri (*Wed)",
      hours: "9am to 4pm",
      note: "Last booking at 2pm"
    },
    {
      name: "Fullday KIPINÄ",
      price: "$29",
      type: "Individual",
      sessions: "Single session",
      validity: "3 months",
      transferable: true,
      description: "Mon to Sun (*Wed)",
      hours: "9am to 9pm",
      note: "Last booking at 7pm"
    },
    {
      name: "Fullday SISU - 3",
      price: "$79",
      type: "Individual",
      sessions: "3 sessions",
      validity: "3 months",
      transferable: true,
      description: "Mon to Sun (*Wed)",
      hours: "9am to 9pm",
      note: "Last booking at 7pm"
    },
    {
      name: "Daylight KUMPPANI",
      price: "$38",
      type: "Couple (2 to check-in)",
      sessions: "Single session",
      validity: "3 months",
      transferable: false,
      description: "Mon to Fri (*Wed)",
      hours: "9am to 4pm",
      note: "Last booking at 2pm"
    },
    {
      name: "KUMPPANI 3",
      price: "$138",
      type: "Couple (2 to check-in)",
      sessions: "3 sessions",
      validity: "3 months",
      transferable: false,
      description: "Mon to Sun (*Wed)",
      hours: "9am to 9pm",
      note: "Last booking at 7pm"
    },
    {
      name: "Her Wednesday",
      price: "$32",
      type: "Individual",
      sessions: "Single session",
      validity: "3 months",
      transferable: true,
      description: "Wednesdays Only",
      hours: "9am to 9pm",
      note: "Last booking at 7pm"
    }
  ];

  const memberships = [
    {
      name: "BreatheRoom Unlimited",
      price: "$239",
      period: "per month",
      type: "Individual",
      sessions: "Unlimited",
      commitment: "3 months",
      features: ["Unlimited sessions", "Mon to Sun access", "9am to 9pm"]
    },
    {
      name: "KUMPPANI Unlimited Together",
      price: "$439",
      period: "per month",
      type: "Couple (2 to check-in)",
      sessions: "Unlimited",
      commitment: "3 months",
      features: ["Unlimited sessions", "Mon to Sun access", "9am to 9pm"]
    }
  ];

  return (
    <section id="member" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-[#2b2b2b]">Session Pricing and Packages</h2>
          <motion.div 
            className="inline-block px-6 py-2 border-2 border-[#004d40] mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#004d40] font-medium">Soft Launch (Promotional) - Ends 30 April 2026</p>
          </motion.div>
        </motion.div>

        {/* Session Packages */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center mb-12 text-[#2b2b2b]">Session Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sessionPackages.map((pkg, index) => (
              <motion.a
                key={pkg.name}
                href="https://loylystudio.rezerv.co/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 p-8 hover:border-[#004d40] transition-all duration-300 cursor-pointer block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-[#2b2b2b] text-xl">{pkg.name}</h4>
                  {pkg.transferable && (
                    <div className="flex items-center gap-1 text-[#004d40]" title="Can be used as Gift">
                      <Gift className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#004d40]">{pkg.price}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2b2b]/70">{pkg.type}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2b2b]/70">{pkg.sessions}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2b2b]/70">Valid for {pkg.validity}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-[#2b2b2b]/60 mb-1">{pkg.description}</p>
                  <p className="text-sm text-[#2b2b2b]/60 mb-1">{pkg.hours}</p>
                  <p className="text-sm text-[#2b2b2b]/60 italic">{pkg.note}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center mb-12 text-[#2b2b2b]">Memberships (Monthly Recurring)</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {memberships.map((membership, index) => (
              <motion.a
                key={membership.name}
                href="https://loylystudio.rezerv.co/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#004d40] p-8 bg-[#004d40]/5 cursor-pointer block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-[#2b2b2b] mb-4">{membership.name}</h4>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#004d40]">{membership.price}</span>
                  <span className="text-[#2b2b2b]/70 ml-2">{membership.period}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2b2b]/70">{membership.type}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2b2b]/70">{membership.sessions} sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2b2b]/70">{membership.commitment} commitment</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#004d40]/20">
                  {membership.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 mb-2">
                      <Check className="w-5 h-5 text-[#004d40] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2b2b2b]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#2b2b2b]/60 text-sm italic flex items-center justify-center gap-2">
            <Gift className="w-4 h-4" />
            Packages marked with gift icon are transferable and can be used as gifts
          </p>
        </motion.div>
      </div>
    </section>
  );
}