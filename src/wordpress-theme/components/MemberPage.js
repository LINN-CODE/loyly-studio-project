import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js";
import { SaunaExperience } from "./SaunaExperience.js";

// For WordPress, you'll need to update this path to point to your uploaded media
const merchLogo = "<?php echo get_template_directory_uri(); ?>/assets/images/loyly-logo.png";

const merchItems = [
  {
    name: "Löyly Studio Towel",
    description: "Premium cotton sauna towel",
    price: "Coming Soon",
    image: merchLogo
  },
  {
    name: "Insulated Water Bottle",
    description: "Stay hydrated in style",
    price: "Coming Soon",
    image: merchLogo
  },
  {
    name: "Sauna Robe",
    description: "Luxurious spa-quality robe",
    price: "Coming Soon",
    image: merchLogo
  },
  {
    name: "Wooden Accessories Set",
    description: "Traditional sauna bucket & ladle",
    price: "Coming Soon",
    image: merchLogo
  },
  {
    name: "Löyly Studio Tote Bag",
    description: "Carry your essentials",
    price: "Coming Soon",
    image: merchLogo
  },
  {
    name: "Eucalyptus Essential Oil",
    description: "Authentic sauna aromatherapy",
    price: "Coming Soon",
    image: merchLogo
  },
];

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
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Löyly Studio Merchandise</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Premium sauna essentials and branded products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {merchItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="overflow-hidden border-gray-200 hover:border-gray-400 transition-all group">
                  <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-gray-900">{item.name}</CardTitle>
                    <CardDescription className="text-gray-500">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 italic">{item.price}</span>
                      <motion.button
                        className="px-6 py-2 border border-gray-300 text-gray-400 cursor-not-allowed"
                        disabled
                      >
                        Notify Me
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Merch Info */}
          <motion.div
            className="mt-16 text-center max-w-2xl mx-auto p-8 border border-gray-200 bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h3 className="mb-4 text-gray-900">Merchandise Launch</h3>
            <p className="text-gray-600 mb-6">
              Our curated collection of sauna essentials and branded merchandise will be available soon. 
              Each piece is thoughtfully designed to enhance your löyly experience.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Notified
            </motion.a>
          </motion.div>
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
              <h3 className="mb-3 text-gray-900">Priority Booking</h3>
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
