import { motion } from "motion/react";
import blogFeaturedImg from "../assets/144314cbbcef073cc4d553eaf3c1f18438ed71c9.png";
import realmFeaturedImg from "../assets/bc4250ada87cf53f7eee87e25935033ea3a466e0.png";

interface BlogProps {
  onNavigate?: (page: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="mb-4 text-gray-900 text-[40px] font-bold">Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Insights on sauna culture, wellness science, and the art of heat therapy
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Realm Partnership Post */}
          <motion.article
            className="border border-gray-200 overflow-hidden hover:border-gray-400 transition-all cursor-pointer group flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigate?.("blog-post-realm")}
          >
            {/* Featured Image */}
            <div className="overflow-hidden md:w-2/5 flex-shrink-0">
              <img 
                src={realmFeaturedImg} 
                alt="Löyly Studio x Realm Partnership" 
                className="w-full h-full md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-12 flex-1">
              {/* Post Header */}
              <div className="mb-6">
                <h2 className="text-gray-900 mb-2 group-hover:text-[#004d40] transition-colors">
                  Löyly Studio x Realm — The Ritual of Renewal
                </h2>
                <p className="text-gray-500">March 2026</p>
              </div>

              {/* Post Excerpt */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                Löyly Studio is proud to announce a partnership with Realm, the premium electrolyte 
                brand redefining next-level hydration. Together, we're merging Nordic wellness 
                traditions with modern hydration science...
              </p>

              {/* Read More */}
              <motion.div
                className="text-[#004d40] font-medium inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Read More →
              </motion.div>
            </div>
          </motion.article>

          {/* The Journey Begins Post */}
          <motion.article
            className="border border-gray-200 overflow-hidden hover:border-gray-400 transition-all cursor-pointer group flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => onNavigate?.("blog-post")}
          >
            {/* Featured Image */}
            <div className="overflow-hidden md:w-2/5 flex-shrink-0">
              <img 
                src={blogFeaturedImg} 
                alt="The Journey Begins - Construction phase" 
                className="w-full h-full md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-12 flex-1">
              {/* Post Header */}
              <div className="mb-6">
                <h2 className="text-gray-900 mb-2 group-hover:text-[#004d40] transition-colors">
                  The Journey Begins
                </h2>
                <p className="text-gray-500">December 2025</p>
              </div>

              {/* Post Excerpt */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                There's something strange about standing in an empty space that's about to become something. 
                December was that month for us. No sauna yet. No steam, no wood, no benches where people would 
                eventually sit and sweat and breathe...
              </p>

              {/* Read More */}
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