import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

const services = [
  {
    title: "Traditional Finnish Sauna",
    description: "Experience authentic dry heat therapy in our classic wooden sauna, heated to 80-100°C for the ultimate purifying experience.",
    image: "https://images.unsplash.com/photo-1757940661240-f2e8d2ff93bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzYXVuYXxlbnwxfHx8fDE3NjIyNTQzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Steam Room",
    description: "Indulge in our humid steam rooms, perfect for opening pores, improving skin health, and respiratory wellness.",
    image: "https://images.unsplash.com/photo-1676452458169-318fd3b9a98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMHJvb218ZW58MXx8fHwxNzYyMzEzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Infrared Cabin",
    description: "Modern infrared technology penetrates deeper into muscles for enhanced recovery and relaxation at lower temperatures.",
    image: "https://images.unsplash.com/photo-1554424518-336ec861b705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzYyMjM3NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Cold Plunge",
    description: "Complete your wellness ritual with our invigorating cold plunge, reducing inflammation and boosting recovery after heat therapy.",
    image: "https://images.unsplash.com/photo-1497638538792-bc3c26959486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwcGx1bmdlJTIwcG9vbHxlbnwxfHx8fDE3NjIzMjAzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-gray-900 text-5xl font-bold">Facilities</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from our range of premium sauna rituals, each designed for your wellness journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="relative overflow-hidden mb-6 h-80 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <h3 className="mb-3 text-gray-900 transition-colors duration-300 group-hover:text-gray-600">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
