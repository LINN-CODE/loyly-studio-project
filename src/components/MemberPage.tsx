import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Check, Gift, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SaunaExperience } from "./SaunaExperience";

export function MemberPage() {
  const pricingRef = useRef(null);
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });

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
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-gray-900">Membership</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join the löyly studio community and immerse yourself in authentic Finnish sauna culture
          </p>
        </motion.div>

        {/* How to Experience Section */}
        <SaunaExperience />

        {/* Session Pricing and Packages */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={pricingRef}
        >
          <div className="text-center mb-12">
            <h1 className="text-gray-900 mb-10">Session Pricing & Packages</h1>
            <motion.div 
              className="inline-block px-6 py-2 border-2 border-[#004d40] mt-4 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isPricingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#004d40] font-medium">Soft Launch (Promotional) - Ends 30 April 2026</p>
            </motion.div>
          </div>

          {/* View All Packages Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://loylystudio.rezerv.co/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#004d40] text-white hover:bg-[#003d33] transition-colors"
            >
              <span>View All Packages & Book</span>
              <ArrowRight className="w-5 h-10" />
            </a>
          </motion.div>
        </motion.section>

        {/* Merchandise Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="mb-4 text-gray-900">Löyly Studio Merchandise</h2>
          <p className="text-[#004d40] text-2xl">Coming Soon</p>
        </motion.section>
      </div>
    </div>
  );
}