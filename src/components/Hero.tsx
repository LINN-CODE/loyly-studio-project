import { motion } from "motion/react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay@8.6.0";
import { ExternalLink } from "lucide-react";
import heroImage1 from "figma:asset/9052db6e3c0327ffd10444ce972c2586f9f15e4d.png";
import heroImage2 from "figma:asset/ade919e50b306badede2fd87395e1f45ec76e877.png";
import heroImage3 from "figma:asset/a50e7967f5fb46c103d8a0f5db6f60519f8e3cb1.png";

const galleryImages = [
  {
    src: heroImage1,
    alt: "Relaxing in Finnish sauna",
  },
  {
    src: heroImage2,
    alt: "Sauna stones with löyly steam",
  },
  {
    src: heroImage3,
    alt: "Cold plunge experience",
  },
];

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="home" className="bg-white pt-24">
      <div className="container mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004d40]/60 via-[#004d40]/30 to-transparent md:flex items-center justify-center hidden">
                      <div className="text-center text-white max-w-4xl px-8">
                        <motion.h1
                          className="mb-8 text-white text-5xl md:text-6xl drop-shadow-lg"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          How do the Finns enjoy Finnish sauna?
                        </motion.h1>
                        <motion.p
                          className="mb-6 text-white text-2xl md:text-3xl drop-shadow-md"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          The essence of a Finnish sauna experience centres around <span className="italic">"Löyly"</span>
                        </motion.p>
                        <motion.p
                          className="text-white text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          Löyly (pronounced "loy-loo") is the steam created when water is poured over hot stones.
                          Finns call it the "spirit" of the sauna—gentle, enveloping heat that invites you to slow down.
                        </motion.p>
                      </div>
                    </div>
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-[#004d40] hover:text-white border-[#004d40]/20" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-[#004d40] hover:text-white border-[#004d40]/20" />
            
            {/* Dots indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
          
          {/* Image credit */}
          <motion.div
            className="mt-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-gray-500">
              <span className="text-sm">Images provided by Sauna from Finland</span>
            </span>
          </motion.div>
        </motion.div>
        
        {/* Mobile text box - only visible on mobile */}
        <motion.div
          className="md:hidden mt-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-lg p-6 shadow-lg border border-[#004d40]/20">
            <h2 className="mb-4 text-white text-center">
              How do the Finns enjoy Finnish sauna?
            </h2>
            <p className="mb-3 text-white/90 text-center">
              The essence of a Finnish sauna experience centres around <span className="italic font-medium">"Löyly"</span>
            </p>
            <p className="text-white/80 text-center">
              Löyly (pronounced "loy-loo") is the steam created when water is poured over hot stones.
              Finns call it the "spirit" of the sauna—gentle, enveloping heat that invites you to slow down.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}