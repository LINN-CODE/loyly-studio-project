import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, MessageCircle, Mail, Phone } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f5f9f8] to-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-[#2b2b2b] text-5xl font-bold">Get In Touch</h2>
          <p className="text-[#2b2b2b]/70 max-w-2xl mx-auto text-[24px]">
            Reach out to us for more information & updates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-8 text-[#2b2b2b]">Contact Information</h3>
            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#004d40] stroke-1" />
                </div>
                <div>
                  <div className="text-[#2b2b2b] mb-1">Address</div>
                  <p className="text-[#2b2b2b]/70">34 Siglap Drive, 456159</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#004d40] stroke-1" />
                </div>
                <div>
                  <div className="text-[#2b2b2b] mb-1">Phone</div>
                  <a href="tel:+6560411306" className="text-[#2b2b2b]/70 hover:text-[#004d40] transition-colors">6041 1306</a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#004d40] stroke-1" />
                </div>
                <div>
                  <div className="text-[#2b2b2b] mb-1">WhatsApp Only</div>
                  <a href="https://wa.me/6590080133" target="_blank" rel="noopener noreferrer" className="text-[#2b2b2b]/70 hover:text-[#004d40] transition-colors">+65 9008 0133</a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#004d40] stroke-1" />
                </div>
                <div>
                  <div className="text-[#2b2b2b] mb-1">Email</div>
                  <p className="text-[#2b2b2b]/70">hello@loylystudio.sg</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-10 border-2 border-[#004d40]/20 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="mb-6 text-[#2b2b2b] text-center font-bold text-[36px]">Join Our löyly Community</h3>
            <p className="text-[#2b2b2b]/70 mb-8 text-center max-w-md">To receive more informations and updates and the opportunity to be invited to our prelaunch events</p>
            
            <motion.a
              href="https://loylystudio.rezerv.co/prioritylist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-[#004d40] text-[#004d40] hover:bg-[#004d40] hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}