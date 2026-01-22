import { motion } from "motion/react";
import { Facebook, Instagram } from "lucide-react";
import logo from "figma:asset/c1fe0840d62d05d3edb1606d9205cc0d00dbe7db.png";
import textLogo from "figma:asset/c1cb3fbfc4b989e82eeee38945fd515f84ace2da.png";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-4 border-[#004d40] py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="löyly studio Logo" className="w-16 h-16" />
              <img src={textLogo} alt="löyly studio" style={{ height: "4rem" }} />
            </div>
            <p className="text-[#2b2b2b]/70 leading-relaxed">
              Experience authentic finnish sauna and culture with löyly studio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-[#004d40]">Quick Links</h4>
            <ul className="space-y-3 text-[#2b2b2b]/70">
              <li>
                <motion.button
                  type="button"
                  className="hover:text-[#004d40] transition-colors inline-block text-left"
                  whileHover={{ x: 5 }}
                  onClick={() => go("/")}
                >
                  Home
                </motion.button>
              </li>

              <li>
                <motion.button
                  type="button"
                  className="hover:text-[#004d40] transition-colors inline-block text-left"
                  whileHover={{ x: 5 }}
                  onClick={() => go("/about")}
                >
                  About
                </motion.button>
              </li>

              <li>
                <motion.button
                  type="button"
                  className="hover:text-[#004d40] transition-colors inline-block text-left"
                  whileHover={{ x: 5 }}
                  onClick={() => go("/blog")}
                >
                  Blog
                </motion.button>
              </li>

              <li>
                <motion.button
                  type="button"
                  className="hover:text-[#004d40] transition-colors inline-block text-left"
                  whileHover={{ x: 5 }}
                  onClick={() => go("/member")}
                >
                  Member
                </motion.button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-[#004d40]">Home Sauna Solutions</h4>
            <p className="text-[#2b2b2b]/70 leading-relaxed mb-6">
              Dreaming of your own sauna? Let's bring it to life.
            </p>

            <Button
              variant="outline"
              className="border-2 border-[#004d40] text-[#004d40] hover:bg-[#004d40] hover:text-white transition-colors"
              onClick={() => go("/supplier")}
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-[#004d40]">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61581544193788"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-[#004d40] rounded-lg flex items-center justify-center hover:bg-[#004d40] transition-colors group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5 text-[#004d40] group-hover:text-white" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/loylystudio.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-[#004d40] rounded-lg flex items-center justify-center hover:bg-[#004d40] transition-colors group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-[#004d40] group-hover:text-white" />
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/@loylystudio.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-[#004d40] rounded-lg flex items-center justify-center hover:bg-[#004d40] transition-colors group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 text-[#004d40] group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#004d40]/20 pt-8 text-center text-[#2b2b2b]/60">
          <p>&copy; 2025 löyly studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
