import { motion, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/c1fe0840d62d05d3edb1606d9205cc0d00dbe7db.png";
import textLogo from "figma:asset/c1cb3fbfc4b989e82eeee38945fd515f84ace2da.png";

interface HeaderProps {
  currentPage: "home" | "about" | "member" | "blog" | "gallery" | "contact";
  onNavigate: (page: "home" | "about" | "member" | "blog" | "gallery" | "contact") => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: "home" | "about" | "member" | "blog" | "gallery" | "contact", hash?: string) => {
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#004d40]/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="löyly studio Logo" className="w-16 h-16" />
            <img src={textLogo} alt="löyly studio" className="md:hidden h-12" />
          </motion.button>
          
          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <motion.button 
              onClick={() => handleNavClick("home", "#home")} 
              className="text-[#2b2b2b] hover:text-[#004d40] transition-colors relative"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("about")} 
              className="text-[#2b2b2b] hover:text-[#004d40] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("member")} 
              className="text-[#2b2b2b] hover:text-[#004d40] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Member
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("contact")} 
              className="text-[#2b2b2b] hover:text-[#004d40] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("blog")} 
              className="text-[#2b2b2b] hover:text-[#004d40] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick("gallery")} 
              className="text-[#2b2b2b] hover:text-[#004d40] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Gallery
            </motion.button>
          </nav>

          {/* Brand Name */}
          <div className="hidden md:block">
            <img
              src={textLogo}
              alt="löyly studio"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              style={{ height: '4rem' }}
              onClick={() => handleNavClick("home")}
            />
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
                className="text-[#2b2b2b] hover:text-[#004d40] transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("about")} 
                className="text-[#2b2b2b] hover:text-[#004d40] transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("member")} 
                className="text-[#2b2b2b] hover:text-[#004d40] transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Member
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("blog")} 
                className="text-[#2b2b2b] hover:text-[#004d40] transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Blog
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("contact")} 
                className="text-[#2b2b2b] hover:text-[#004d40] transition-colors text-left"
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
              <motion.button 
                onClick={() => handleNavClick("gallery")} 
                className="text-[#2b2b2b] hover:text-[#004d40] transition-colors text-left"
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
