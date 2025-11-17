import { motion } from "motion/react";
import { useState } from "react";
import { X, Instagram, Heart, MessageCircle } from "lucide-react";
import Masonry from "react-responsive-masonry";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1759300031446-88e81c8a26c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMGludGVyaW9yJTIwd29vZHxlbnwxfHx8fDE3NjIzMjYzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wooden sauna interior",
  },
  {
    src: "https://images.unsplash.com/photo-1759216853310-7d315a1fd07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMHdlbGxuZXNzJTIwc3BhfGVufDF8fHx8MTc2MjMyNjM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Sauna wellness spa",
  },
  {
    src: "https://images.unsplash.com/photo-1723810385053-21cd42433fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5uaXNoJTIwc2F1bmElMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjIyNDY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Traditional Finnish sauna",
  },
  {
    src: "https://images.unsplash.com/photo-1749561532375-c8c50f128d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMG1vZGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NjIzMjYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern sauna design",
  },
  {
    src: "https://images.unsplash.com/photo-1741601272577-fc2c46f87d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMHN0b25lcyUyMHN0ZWFtfGVufDF8fHx8MTc2MjMyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Sauna stones and steam",
  },
  {
    src: "https://images.unsplash.com/photo-1757937176646-d943553b5f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMG5hdHVyZSUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMzI2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Outdoor sauna in nature",
  },
  {
    src: "https://images.unsplash.com/photo-1596748176765-08b3a6c9969a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwdG93ZWxzfGVufDF8fHx8MTc2MjMyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Spa towels and relaxation",
  },
  {
    src: "https://images.unsplash.com/photo-1687180948580-c4892a9a82c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NjIyNjc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wellness meditation",
  },
  {
    src: "https://images.unsplash.com/photo-1743286159555-ea765c1bc5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMGJ1Y2tldCUyMGxhZGxlfGVufDF8fHx8MTc2MjMyNjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Sauna bucket and ladle",
  },
  {
    src: "https://images.unsplash.com/photo-1678988226654-8a8540faa8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMGJlbmNoJTIwd29vZCUyMGRldGFpbHxlbnwxfHx8fDE3NjIzMjYzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wooden sauna bench details",
  },
  {
    src: "https://images.unsplash.com/photo-1734117928667-c7f943a27e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBjb2xkJTIwcGx1bmdlfGVufDF8fHx8MTc2MjMyNjM0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Winter cold plunge",
  },
  {
    src: "https://images.unsplash.com/photo-1741601274064-b0b23cfb332d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMGV4cGVyaWVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzYyMzI2MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Sauna experience",
  },
];

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1759300031446-88e81c8a26c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMGludGVyaW9yJTIwd29vZHxlbnwxfHx8fDE3NjIzMjYzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 342,
    comments: 28,
    caption: "Experience the warmth of Finnish tradition",
  },
  {
    image: "https://images.unsplash.com/photo-1723810385053-21cd42433fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5uaXNoJTIwc2F1bmElMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjIyNDY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 289,
    comments: 15,
    caption: "Traditional Finnish sauna at its finest",
  },
  {
    image: "https://images.unsplash.com/photo-1741601272577-fc2c46f87d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMHN0b25lcyUyMHN0ZWFtfGVufDF8fHx8MTc2MjMyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 421,
    comments: 32,
    caption: "The spirit of löyly 💨",
  },
  {
    image: "https://images.unsplash.com/photo-1757937176646-d943553b5f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMG5hdHVyZSUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMzI2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 567,
    comments: 41,
    caption: "Nature meets wellness",
  },
  {
    image: "https://images.unsplash.com/photo-1596748176765-08b3a6c9969a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwdG93ZWxzfGVufDF8fHx8MTc2MjMyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 198,
    comments: 12,
    caption: "Relax and unwind",
  },
  {
    image: "https://images.unsplash.com/photo-1734117928667-c7f943a27e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBjb2xkJTIwcGx1bmdlfGVufDF8fHx8MTc2MjMyNjM0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 612,
    comments: 58,
    caption: "Complete the ritual with a cold plunge ❄️",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-gray-900">Gallery</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore the beauty and serenity of löyly studio through our curated collection
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <Masonry columnsCount={3} gutter="1.5rem">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="cursor-pointer overflow-hidden group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {/* Instagram Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-gray-900" />
              <h2 className="text-gray-900">Follow Us on Instagram</h2>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto mb-6">
              Stay connected with our community and see the latest from löyly studio
            </p>
            <a
              href="https://www.instagram.com/loylystudio.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              @loylystudio.sg
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === index ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
