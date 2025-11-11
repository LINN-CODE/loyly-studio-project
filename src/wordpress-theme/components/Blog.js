import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Sauna Benefits",
    excerpt: "Recent research reveals how heat exposure triggers profound physiological changes that support cardiovascular health, immune function, and longevity.",
    image: "https://images.unsplash.com/photo-1734594709660-3f2a2a540735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MjMxOTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "October 28, 2025",
    readTime: "5 min read",
    content: `
      <p>The ancient practice of sauna bathing has found new relevance in modern wellness science. Studies from Finland, where sauna use is deeply embedded in culture, show compelling evidence of its health benefits.</p>
      
      <h3>Cardiovascular Health</h3>
      <p>Regular sauna use (4-7 times per week) has been associated with a 50% reduction in cardiovascular-related mortality. The heat stress mimics moderate exercise, increasing heart rate and improving circulation without the physical strain.</p>
      
      <h3>Detoxification and Immune Response</h3>
      <p>Sweating helps eliminate toxins while the elevated body temperature can trigger heat shock proteins, which support cellular repair and immune function. Regular sauna users report 30% fewer common colds.</p>
      
      <h3>Mental Health Benefits</h3>
      <p>The relaxation response triggered by heat exposure helps reduce cortisol levels and promotes the release of endorphins, contributing to improved mood and reduced anxiety.</p>
      
      <p>Whether you're seeking physical recovery, mental clarity, or simply a moment of peace, the science supports what practitioners have known for centuries: regular sauna use is a powerful tool for holistic wellness.</p>
    `
  },
  {
    id: 2,
    title: "How to Build the Perfect Sauna Routine",
    excerpt: "Maximize your wellness journey with a structured approach to sauna bathing. Learn the ideal duration, frequency, and complementary practices.",
    image: "https://images.unsplash.com/photo-1609357912334-e96886c0212b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJvdXRpbmV8ZW58MXx8fHwxNzYyMjg1NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "October 22, 2025",
    readTime: "6 min read",
    content: `
      <p>Building a sustainable sauna routine requires understanding your body's needs and creating a practice that fits seamlessly into your lifestyle.</p>
      
      <h3>Starting Out: Beginner Guidelines</h3>
      <p>If you're new to sauna bathing, start with 2-3 sessions per week at lower temperatures (150-160°F) for 10-15 minutes. Allow your body to acclimate gradually before extending duration or frequency.</p>
      
      <h3>The Optimal Session Structure</h3>
      <p>A traditional Finnish sauna session involves cycles of heat and cooling. Spend 10-20 minutes in the sauna, followed by a cool shower or outdoor air break. Repeat 2-3 times, always ending with a cooling period.</p>
      
      <h3>Hydration is Key</h3>
      <p>Drink plenty of water before, during, and after your session. You can lose up to a liter of fluid during a single session, so proper hydration is essential for safety and maximizing benefits.</p>
      
      <h3>Advanced Practice</h3>
      <p>Once acclimated, aim for 4-7 sessions weekly. Some enthusiasts practice daily. Listen to your body—consistency matters more than intensity. Pair your sauna routine with meditation, gentle stretching, or breathwork for enhanced benefits.</p>
      
      <h3>Recovery and Rest</h3>
      <p>Post-sauna, allow time for your body to cool naturally. Many find this the perfect moment for meditation or quiet reflection. Avoid strenuous activity immediately after—your body needs time to restore balance.</p>
    `
  },
  {
    id: 3,
    title: "Finnish Sauna Etiquette: What You Need to Know",
    excerpt: "Understanding traditional sauna customs ensures a respectful and authentic experience. Discover the unwritten rules of Finnish sauna culture.",
    image: "https://images.unsplash.com/photo-1728404259075-209cfb5bb89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5uaXNoJTIwc2F1bmF8ZW58MXx8fHwxNzYyMzE5MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "October 15, 2025",
    readTime: "4 min read",
    content: `
      <p>In Finland, sauna is more than a wellness practice—it's a sacred space for both body and mind. Understanding traditional etiquette enriches your experience and honors this ancient tradition.</p>
      
      <h3>Silence and Respect</h3>
      <p>The sauna is traditionally a quiet space. Conversation is welcome but should be low and respectful. Loud talking, phone calls, and disruptive behavior break the meditative atmosphere that makes sauna special.</p>
      
      <h3>Cleanliness First</h3>
      <p>Always shower thoroughly before entering the sauna. This is non-negotiable in Finnish culture—entering dirty is considered deeply disrespectful to others sharing the space.</p>
      
      <h3>The Sitting Arrangement</h3>
      <p>Bring a towel to sit on—never sit directly on the wood. This keeps the benches clean and hygienic for everyone. The higher benches are hotter; choose your level based on your comfort.</p>
      
      <h3>Löyly: The Art of Steam</h3>
      <p>In a shared sauna, always ask before throwing water on the stones (creating löyly). The amount and frequency of steam is a communal decision. Start small—you can always add more.</p>
      
      <h3>Nudity and Comfort</h3>
      <p>Traditional Finnish saunas are enjoyed nude, separated by gender. However, modern facilities often accommodate swimwear. Follow the posted guidelines and respect others' comfort levels.</p>
      
      <h3>Know When to Leave</h3>
      <p>Listen to your body. If you feel dizzy, nauseous, or uncomfortable, exit immediately. There's no prize for endurance—sauna should feel good, not painful.</p>
    `
  },
  {
    id: 4,
    title: "Heat Therapy vs Cold Plunge: The Perfect Contrast",
    excerpt: "Alternating between extreme temperatures creates a powerful stimulus for circulation, recovery, and mental resilience. Here's how to do it safely.",
    image: "https://images.unsplash.com/photo-1757689978558-eac49b2e6814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwcGx1bmdlJTIwaWNlJTIwYmF0aHxlbnwxfHx8fDE3NjIyNDgzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "October 8, 2025",
    readTime: "7 min read",
    content: `
      <p>The practice of contrast therapy—alternating between heat and cold—has been used for centuries in Nordic countries. Modern science is now validating what traditional cultures have long known: this temperature dance offers remarkable benefits.</p>
      
      <h3>The Physiological Response</h3>
      <p>Heat causes blood vessels to dilate, increasing circulation to the skin and extremities. Cold causes them to constrict, redirecting blood to vital organs. This vascular "workout" improves circulatory health and can enhance cardiovascular function.</p>
      
      <h3>Athletic Recovery</h3>
      <p>Athletes use contrast therapy to reduce muscle soreness and accelerate recovery. The alternating temperatures help flush metabolic waste products while reducing inflammation. Studies show 20-30% faster recovery times with consistent practice.</p>
      
      <h3>Mental Resilience</h3>
      <p>The voluntary stress of cold exposure builds mental toughness. Regular practitioners report improved stress management, better mood regulation, and increased confidence in handling discomfort.</p>
      
      <h3>How to Practice Safely</h3>
      <p>Start with heat: 10-20 minutes in the sauna. Follow with 30-60 seconds of cold exposure—a cold shower or plunge. Repeat the cycle 2-3 times, always ending with cold. Beginners should use lukewarm water and gradually decrease temperature over weeks.</p>
      
      <h3>Important Cautions</h3>
      <p>Contrast therapy is powerful but not for everyone. Those with cardiovascular conditions, pregnancy, or certain health issues should consult a physician first. Never practice alone, especially when using cold plunges. Listen to your body and progress gradually.</p>
      
      <h3>The Integration</h3>
      <p>At löyly studio, we offer both traditional sauna and cold plunge facilities designed for safe contrast therapy. Our staff can guide you through your first sessions and help you build a practice that supports your wellness goals.</p>
    `
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="mb-4 text-gray-900 text-5xl font-bold">Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Insights on sauna culture, wellness science, and the art of heat therapy
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto space-y-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="h-80 md:h-auto">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="mb-4 text-gray-900 text-3xl font-bold">{post.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <button className="self-start px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                    Read More
                  </button>
                </div>
              </div>

              {/* Full Content (Hidden by default, would be shown on click in a real implementation) */}
              <div className="hidden p-8 border-t border-gray-200">
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
