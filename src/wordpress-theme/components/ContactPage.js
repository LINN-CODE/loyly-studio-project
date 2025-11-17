import { motion } from "motion/react";
import { MapPin, Mail, Clock, Instagram, MessageCircle, Facebook } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

export function ContactPage() {
  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-gray-900">Contact Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have questions or ready to experience authentic Finnish sauna? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-8 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mb-12">
                Whether you're interested in a membership, have questions about our services, or want to book a private session, our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <motion.div
                className="flex items-start gap-4 p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-gray-50">
                  <MapPin className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Siglap Area</p>
                  <p className="text-gray-600">Singapore</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start gap-4 p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-gray-50">
                  <MessageCircle className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/6590080133" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                    +65 9008 0133
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-start gap-4 p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-gray-50">
                  <Mail className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info@loylystudio.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                    info@loylystudio.com
                  </a>
                </div>
              </motion.div>

              {/* Opening Hours */}
              <motion.div
                className="flex items-start gap-4 p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-gray-50">
                  <Clock className="w-6 h-6 text-gray-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-3">Opening Hours</h3>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 border-t border-gray-200"
            >
              <h3 className="text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/loylystudio.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61581544193788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@loylystudio.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://wa.me/6590080133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="border border-gray-200 overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731082154898-2e63df0f2a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMHBpbnxlbnwxfHx8fDE3NjIyNzAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Map showing löyly studio location in Siglap"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center text-white p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="mb-2 text-white">Visit Us</h3>
                    <p className="text-white/90">Siglap Area, Singapore</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-gray-900 mb-3">How to Find Us</h3>
                <p className="text-gray-600 mb-4">
                  Located in the heart of Siglap, löyly studio is easily accessible by public transport and car.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><span className="text-gray-900">By MRT:</span> 10-minute walk from Siglap MRT Station</p>
                  <p><span className="text-gray-900">By Bus:</span> Multiple bus routes nearby</p>
                  <p><span className="text-gray-900">Parking:</span> Street parking available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-20"
        >
          <h2 className="mb-6 text-gray-900">Ready to Experience Löyly?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and discover the authentic Finnish sauna tradition. Book a session or become a member today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="tel:+6590080133"
              className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.a>
            <motion.a
              href="https://wa.me/6590080133"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
