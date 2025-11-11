import { motion } from "motion/react";
import { AspectRatio } from "./ui/aspect-ratio.js";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel.js";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay@8.6.0";
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
  const [api, setApi] = useState();
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
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
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
                          Löyly (pronounced "loy-lee") is the steam created when water is poured over hot stones.
                          Finns call it the "spirit" of the sauna—gentle, enveloping heat that invites you to slow down.
                        </motion.p>
                      </div>
                    </div>
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-gray-300" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-gray-300" />
            
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
        </motion.div>
      </div>
    </section>
  );
}
