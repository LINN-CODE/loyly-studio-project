import { motion } from "motion/react";
import { Calendar } from "lucide-react";

export function FloatingBookNow() {
  return (
    <motion.a 
      href="https://loylystudio.rezerv.co/timetable"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        left: 0,
        top: "50%",
        zIndex: 50,
      }}
      className="px-6 py-3 bg-[#004d40] text-white flex items-center gap-3 
                 hover:bg-[#003d33] transition-colors shadow-lg border border-[#004d40]"
      aria-label="Book Now"
      initial={{ opacity: 0, y: "-50%", x: -100 }}
      animate={{ opacity: 1, y: "-50%", x: 15 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ opacity: 1, y: "-50%", x: 10 }}
      whileTap={{ scale: 0.95, y: "-50%" }}
    >
      <Calendar className="w-5 h-5" />
      <span className="font-medium">Book Now</span>
    </motion.a>
  );
}