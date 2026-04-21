import { motion } from "motion/react";
import { useState } from "react";
import { X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Masonry from "react-responsive-masonry";

import img5715 from "../assets/IMG_5715.jpg";
import img5796 from "../assets/IMG_5796.jpg";
import img5798 from "../assets/IMG_5798.jpg";
import img5806 from "../assets/IMG_5806.jpg";
import img5814 from "../assets/IMG_5814.jpg";
import img5817 from "../assets/IMG_5817.jpg";
import img5826 from "../assets/IMG_5826.jpg";
import img5901 from "../assets/IMG_5901.jpg";
import img5912 from "../assets/IMG_5912.jpg";
import img5913 from "../assets/IMG_5913 2.jpg";
import img5916 from "../assets/IMG_5916.jpg";
import img5920 from "../assets/IMG_5920.jpg";
import img5921 from "../assets/IMG_5921.jpg";


const galleryImages = [
  { src: img5715, alt: "löyly studio experience" },
  { src: img5796, alt: "löyly studio experience" },
  { src: img5798, alt: "löyly studio experience" },
  { src: img5806, alt: "löyly studio experience" },
  { src: img5814, alt: "löyly studio experience" },
  { src: img5817, alt: "löyly studio experience" },
  { src: img5826, alt: "löyly studio experience" },
  { src: img5901, alt: "löyly studio experience" },
  { src: img5912, alt: "löyly studio experience" },
  { src: img5913, alt: "löyly studio experience" },
  { src: img5916, alt: "löyly studio experience" },
  { src: img5920, alt: "löyly studio experience" },
  { src: img5921, alt: "löyly studio experience" },

];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

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
          <h1 className="mb-4 text-[#2b2b2b]">Gallery</h1>
          <p className="text-[#2b2b2b]/70 max-w-2xl mx-auto">
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
          className="border-t-2 border-[#004d40]/20 pt-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-[#004d40]" />
              <h2 className="text-[#2b2b2b]">Follow Us on Instagram</h2>
            </div>
            <p className="text-[#2b2b2b]/70 max-w-2xl mx-auto mb-6">
              Stay connected with our community and see the latest from löyly studio
            </p>
            <a
              href="https://www.instagram.com/loylystudio.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-[#004d40] text-[#004d40] hover:bg-[#004d40] hover:text-white transition-all duration-300"
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

          {/* Previous Button */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-3"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-3"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <motion.img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            key={selectedImage}
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