import { motion, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "figma:asset/c1fe0840d62d05d3edb1606d9205cc0d00dbe7db.png";
import textLogo from "figma:asset/c1cb3fbfc4b989e82eeee38945fd515f84ace2da.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navClass =
    "text-[#2b2b2b] hover:text-[#004d40] transition-colors";

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
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-1"
          >
            <motion.img
              src={logo}
              alt="löyly studio logo"
              className="w-16 h-16"
              whileHover={{ scale: 1.05 }}
            />
            <img
              src={textLogo}
              alt="löyly studio"
              className="md:hidden h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <NavLink to="/" onClick={closeMobileMenu} className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMobileMenu} className={navClass}>
              About
            </NavLink>

            <NavLink to="/member" onClick={closeMobileMenu} className={navClass}>
              Member
            </NavLink>

            <NavLink to="/blog" onClick={closeMobileMenu} className={navClass}>
              Blog
            </NavLink>

            <NavLink to="/gallery" onClick={closeMobileMenu} className={navClass}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={closeMobileMenu} className={navClass}>
              Contact
            </NavLink>
          </nav>

          {/* Brand Text */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="hidden md:block"
          >
            <img
              src={textLogo}
              alt="löyly studio"
              className="hover:opacity-80 transition-opacity"
              style={{ height: "4rem" }}
            />
          </Link>

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
              <NavLink to="/" onClick={closeMobileMenu} className={navClass}>
                Home
              </NavLink>

              <NavLink to="/about" onClick={closeMobileMenu} className={navClass}>
                About
              </NavLink>

              <NavLink to="/member" onClick={closeMobileMenu} className={navClass}>
                Member
              </NavLink>

              <NavLink to="/blog" onClick={closeMobileMenu} className={navClass}>
                Blog
              </NavLink>

              <NavLink to="/gallery" onClick={closeMobileMenu} className={navClass}>
                Gallery
              </NavLink>

              <NavLink to="/contact" onClick={closeMobileMenu} className={navClass}>
                Contact
              </NavLink>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
