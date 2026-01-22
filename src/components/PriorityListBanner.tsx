import { motion, AnimatePresence } from "motion/react";
import { Bell, Gift, CalendarClock, DollarSign } from "lucide-react";
import { useState } from "react";

export function PriorityListBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href="https://loylystudio.rezerv.co/prioritylist"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          className="bg-gradient-to-br from-[#004d40] to-[#00695c] text-white rounded-lg shadow-lg border border-[#004d40]/20"
          animate={{
            width: isHovered ? "280px" : "200px",
            x: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Compact View */}
          <div className="px-4 py-3">
            <div className="flex items-center gap-2 mb-1.5">
              <Bell className="w-4 h-4 flex-shrink-0" />
              <h3 className="text-white text-[11px] font-medium">Priority List</h3>
            </div>
            <p className="text-white/90 text-[10px] leading-snug">
              Join for exclusive early access
            </p>
          </div>

          {/* Expanded View - Incentives */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-white/20"
              >
                <div className="px-4 py-3 space-y-2.5">
                  <p className="text-white/90 text-[10px] mb-2 font-medium">
                    Members receive:
                  </p>

                  <div className="flex items-start gap-2">
                    <Gift className="w-3.5 h-3.5 flex-shrink-0 text-white/90 mt-0.5" />
                    <p className="text-white/80 text-[10px] leading-snug">
                      Invitation to Complimentary pre-launch sessions (by
                      invitation, limited slots)
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <CalendarClock className="w-3.5 h-3.5 flex-shrink-0 text-white/90 mt-0.5" />
                    <p className="text-white/80 text-[10px] leading-snug">
                      Exclusive Soft Launch pricing packages reserved for
                      Priority List members (available only during our Soft
                      Launch period and in limited quantities)
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="w-3.5 h-3.5 flex-shrink-0 text-white/90 mt-0.5" />
                    <p className="text-white/80 text-[10px] leading-snug">
                      Chance to win a 5-Day Pass (details will be released to
                      Priority List only)
                    </p>
                  </div>

                  <div className="pt-1.5 mt-1.5 border-t border-white/20">
                    <p className="text-white text-[10px] text-center">
                      Click to sign up →
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}