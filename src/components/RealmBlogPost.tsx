import { motion } from "motion/react";
import realmImg from "../assets/bc4250ada87cf53f7eee87e25935033ea3a466e0.png";
import { ArrowLeft } from "lucide-react";

interface RealmBlogPostProps {
  onNavigate?: (page: string) => void;
}
  
export function RealmBlogPost({ onNavigate }: RealmBlogPostProps) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-8">
        {/* Back Button */}
        <motion.button
          onClick={() => onNavigate?.("blog")}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-[#004d40] transition-colors"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </motion.button>

        {/* Blog Post */}
        <motion.article 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Post Header */}
          <div className="mb-12 text-center">
            <h1 className="text-gray-900 mb-4">Löyly Studio x Realm — The Ritual of Renewal</h1>
            <p className="text-gray-500 text-xl">March 2026</p>
          </div>

          {/* Featured Image */}
          <motion.div
            className="my-12 overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={realmImg} 
              alt="Realm Electrolyte Mix - Honey Lemon" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Post Content */}
          <div className="space-y-8">
            <h2 className="text-gray-900 text-3xl mb-4">Löyly Studio x Realm Announcement</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Löyly Studio is proud to announce a partnership with Realm, the premium electrolyte brand redefining next-level hydration. Together, we're merging Nordic wellness traditions with modern hydration science to offer a ritual in service of longevity, vitality, and balance.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              In the Finnish ritual of löyly — heat awakens, cold refreshes, hydration renews, and rest completes the cycle. With Realm, we bring precision hydration to this ancient process of recovery and renewal. Formulated with essential electrolytes and trace minerals, it replenishes what is lost and helps sustain the body's natural capacity to regulate and recover. A small measure, taken with intention, that extends the benefits of the studio beyond its doors.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We invite our community to experience the ritual as a complete cycle, thoughtfully supported at every stage. This partnership brings together Löyly Studio and Realm in a shared belief that wellness is a practice, shaped through purposeful daily ritual.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed font-medium text-[#004d40]">
              Experience Löyly Studio x Realm exclusively at Löyly Studio.
            </p>
          </div>

          {/* Back to Blog Button */}
          <motion.button
            onClick={() => onNavigate?.("blog")}
            className="mt-16 px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </motion.button>
        </motion.article>
      </div>
    </div>
  );
}
