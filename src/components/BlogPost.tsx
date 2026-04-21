import { motion } from "motion/react";
import constructionImg1 from "../assets/144314cbbcef073cc4d553eaf3c1f18438ed71c9.png";
import constructionImg2 from "../assets/852c5ba6c8d29bda0b4a22c6882de98796cce019.png";
import constructionImg3 from "../assets/5ab88e774633ab80e7c7de52e46e1f5c08b50932.png";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  onNavigate?: (page: string) => void;
}

export function BlogPost({ onNavigate }: BlogPostProps) {
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
            <h1 className="text-gray-900 mb-4">The Journey Begins</h1>
            <p className="text-gray-500 text-xl">December 2025</p>
          </div>

          {/* Post Content */}
          <div className="space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              There's something strange about standing in an empty space that's about to become something.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              December was that month for us. No sauna yet. No steam, no wood, no benches where people would eventually sit and sweat and breathe. Just concrete floors, tape measures, and a lot of back-and-forth about whether things would actually work the way we'd imagined.
            </p>

            {/* First Image */}
            <motion.div
              className="my-12 overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={constructionImg1} 
                alt="Construction phase - December 2025" 
                className="w-full h-auto"
              />
            </motion.div>

            <p className="text-gray-700 text-lg leading-relaxed">
              It's the boring part, honestly. The part nobody photographs. But it's also the part that matters most. We were figuring out the bones of the place—how people would move through it, where the heat needed to go, where someone might want to just sit quietly for a minute.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              In Finnish sauna culture, there's a rhythm to everything. You don't rush it. So we didn't either. Every decision that month was made slowly, carefully. Not because we were overthinking it, but because we knew if we got this part wrong, nothing else would feel right later.
            </p>

            {/* Second Image */}
            <motion.div
              className="my-12 overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src={constructionImg2} 
                alt="Construction progress - early phase" 
                className="w-full h-auto"
              />
            </motion.div>

            <p className="text-gray-700 text-lg leading-relaxed">
              December was us trusting that the invisible work—the stuff you never see once a place is finished—was worth getting right.
            </p>

            {/* Section Divider */}
            <div className="my-16 border-t border-gray-200"></div>

            <h2 className="text-gray-900 text-3xl mb-4">Fast Taking Shape</h2>
            <p className="text-gray-500 text-xl mb-8">January to February 2026</p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Then suddenly, it wasn't empty anymore.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Walls went up. You could walk through and actually picture it—oh, this is where the sauna will be. This is where people will cool down. This corner? That's going to be perfect for just sitting and doing nothing.
            </p>

            {/* Third Image */}
            <motion.div
              className="my-12 overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img 
                src={constructionImg3} 
                alt="Construction taking shape - February 2026" 
                className="w-full h-auto"
              />
            </motion.div>

            <p className="text-gray-700 text-lg leading-relaxed">
              The whole vibe changed. It stopped feeling like a construction site and started feeling like our space. Rough, unfinished, but ours.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We liked it this way, actually. The raw concrete, the exposed framework, the unpainted walls. It felt honest. Like seeing someone without makeup—you get a better sense of who they really are.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              By February, Löyly wasn't just an idea we'd been carrying around anymore. It was real. Still half-built, still a mess in places, but undeniably real.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              And that felt like everything.
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
