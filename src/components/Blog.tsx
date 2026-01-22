import blogFeaturedImg from "../assets/144314cbbcef073cc4d553eaf3c1f18438ed71c9.png";
import { motion } from "motion/react";

interface BlogProps {
  onNavigate?: (page: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="mb-4 text-gray-900 text-[40px] font-bold">Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Insights on sauna culture, wellness science, and the art of heat
            therapy
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.article
            className="
              border border-gray-200 overflow-hidden hover:border-gray-400 transition-all cursor-pointer group
              flex flex-row items-stretch
              max-md:flex-col
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigate?.("blog-post")}
          >
            {/* ✅ Image (small on all screens) */}
            <div
              className="
                flex-shrink-0 overflow-hidden
                w-[220px] h-[140px]
                max-md:w-[200px] max-md:h-[130px]
                max-md:mx-auto
              "
            >
              <img
                src={blogFeaturedImg}
                alt="The Journey Begins - Construction phase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-10 flex-1 min-w-0">
              <div className="mb-4">
                <h2 className="text-gray-900 mb-2 group-hover:text-[#004d40] transition-colors text-3xl font-semibold">
                  The Journey Begins
                </h2>
                <p className="text-gray-500 text-sm">December 2025</p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                There's something strange about standing in an empty space
                that's about to become something. December was that month for
                us. No sauna yet. No steam, no wood, no benches where people
                would eventually sit and sweat and breathe...
              </p>

              <motion.div
                className="text-[#004d40] font-medium inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Read More →
              </motion.div>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
