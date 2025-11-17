import { motion } from "motion/react";
import { Facebook, Instagram } from "lucide-react";

export function FloatingSocial() {
  return (
    <motion.div 
      className="fixed left-1/2 -translate-x-1/2 bottom-8 md:left-auto md:right-8 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-40 flex flex-row md:flex-col gap-3 md:gap-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.a 
        href="https://www.facebook.com/profile.php?id=61581544193788" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
        aria-label="Facebook"
        whileHover={{ scale: 1.15, x: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Facebook className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
      </motion.a>
      <motion.a 
        href="https://www.instagram.com/loylystudio.sg/" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
        aria-label="Instagram"
        whileHover={{ scale: 1.15, x: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Instagram className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
      </motion.a>
      <motion.a 
        href="https://www.tiktok.com/@loylystudio.sg" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
        aria-label="TikTok"
        whileHover={{ scale: 1.15, x: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <svg 
          className="w-4 h-4 md:w-5 md:h-5 text-gray-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      </motion.a>
    </motion.div>
  );
}
