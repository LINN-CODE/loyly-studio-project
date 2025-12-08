import { motion, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/c1fe0840d62d05d3edb1606d9205cc0d00dbe7db.png";

export function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page, hash) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (hash && page === "home") {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="löyly studio Logo" className="w-16 h-16" />
            <span className="md:hidden text-gray-800 text-2xl">löyly studio</span>
          </motion.button>
          
          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <motion.button 
              onClick={() => handleNavClick("home", "#home")} 
              className="text-gray-800 hover:text-gray-600 transition-colors relative"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("about")} 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("member")} 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Member
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("contact")} 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("blog")} 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("gallery")} 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Gallery
            </motion.button>
          </nav>

          {/* Brand Name */}
          <div className="hidden md:block">
            <span 
              className="text-gray-800 cursor-pointer hover:text-gray-600 transition-colors" 
              style={{ fontSize: '2.7rem' }}
              onClick={() => handleNavClick("home")}
            >
              löyly studio
            </span>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="md:hidden mt-6 pb-4 flex flex-col gap-4 bg-white/95"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button 
                onClick={() => handleNavClick("home", "#home")} 
                className="text-gray-800 hover:text-gray-600 transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("about")} 
                className="text-gray-800 hover:text-gray-600 transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("member")} 
                className="text-gray-800 hover:text-gray-600 transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Member
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("blog")} 
                className="text-gray-800 hover:text-gray-600 transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Blog
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("contact")} 
                className="text-gray-800 hover:text-gray-600 transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("gallery")} 
                className="text-gray-800 hover:text-gray-600 transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Gallery
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
