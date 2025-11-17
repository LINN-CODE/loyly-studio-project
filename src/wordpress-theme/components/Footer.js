import { motion } from "motion/react";
import { Facebook, Instagram } from "lucide-react";
import logo from "figma:asset/c1fe0840d62d05d3edb1606d9205cc0d00dbe7db.png";
import { Button } from "./ui/button.js";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="löyly studio Logo" className="w-16 h-16" />
              <span className="text-gray-900 text-2xl">löyly studio</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Experience authentic finnish sauna and culture with löyly studio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <motion.a 
                  href="#home" 
                  className="hover:text-gray-900 transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about" 
                  className="hover:text-gray-900 transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#blog" 
                  className="hover:text-gray-900 transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#member" 
                  className="hover:text-gray-900 transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  Member
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-gray-900">Home Sauna Solutions</h4>
            <p className="text-gray-500 leading-relaxed mb-6">
              Dreaming of your own sauna? Let's bring it to life.
            </p>
            <Button 
              variant="outline" 
              className="border-gray-300 hover:border-gray-900 transition-colors"
              asChild
            >
              <a 
                href="https://steamsauna.sg/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-gray-900">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61581544193788" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5 text-gray-600" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/loylystudio.sg/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-gray-600" />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@loylystudio.sg" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  className="w-5 h-5 text-gray-600" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; 2025 löyly studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
