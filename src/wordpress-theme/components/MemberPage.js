import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js";
import { SaunaExperience } from "./SaunaExperience.js";

export function MemberPage() {
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
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Session Pricing & Packages</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Exclusive membership options and day pass pricing
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="border-2 border-gray-200 p-20 text-center bg-gray-50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ borderColor: "#374151" }}
            >
              <div className="max-w-md mx-auto">
                <h3 className="mb-4 text-gray-900">Coming Soon</h3>
                <p className="text-gray-600 mb-8">
                  We're crafting the perfect membership experience for our community. 
                  Sign up below to be notified when pricing is announced.
                </p>
                <p className="text-[#004d40]">
                  Coming Soon
                </p>
              </div>
            </motion.div>
          </div>
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

        {/* Benefits Section */}
        <motion.section
          className="mt-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Membership Benefits</h2>
            <p className="text-gray-500">
              What you can expect as a löyly studio member
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-gray-900">Booking Access</h3>
              <p className="text-gray-600">
                Members get first access to session bookings and special events
              </p>
            </motion.div>

            <motion.div
              className="p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-gray-900">Exclusive Workshops</h3>
              <p className="text-gray-600">
                Learn authentic Finnish sauna traditions and wellness practices
              </p>
            </motion.div>

            <motion.div
              className="p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-gray-900">Community Events</h3>
              <p className="text-gray-600">
                Connect with fellow sauna enthusiasts at regular gatherings
              </p>
            </motion.div>

            <motion.div
              className="p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-gray-900">Member Discounts</h3>
              <p className="text-gray-600">
                Special pricing on sessions, merchandise, and guest passes
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}