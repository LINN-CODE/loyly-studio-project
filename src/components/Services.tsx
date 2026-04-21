import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import infraredCabinImage from "../assets/2a50e78db63a25dfaf19c3357349ab93c7c88dc7.png";
import traditionalSaunaImage from "../assets/c0a3f03a4d82af92ed6651b8cefcf16492ab7a4f.png";
import steamRoomImage from "../assets/873c94e81cbd6df4048da44196f538004a917894.png";
import coldPlungeImage from "../assets/4f0209d8a91b341e6ab1e10914178ac64e6308a5.png";

const services = [
  {
    title: "Traditional Finnish Sauna",
    description: "Experience authentic dry heat therapy in our classic wooden sauna, heated to 80-100°C for the ultimate purifying experience.",
    image: traditionalSaunaImage
  },
  {
    title: "Steam Room",
    description: "Indulge in our humid steam rooms, perfect for opening pores, improving skin health, and respiratory wellness.",
    image: steamRoomImage
  },
  {
    title: "Infrared Cabin",
    description: "Modern infrared technology penetrates deeper into muscles for enhanced recovery and relaxation at lower temperatures.",
    image: infraredCabinImage
  },
  {
    title: "Cold Plunge",
    description: "Complete your wellness ritual with our invigorating cold plunge, reducing inflammation and boosting recovery after heat therapy.",
    image: coldPlungeImage
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-white to-[#f5f9f8]">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4 text-[#2b2b2b] text-5xl font-bold">Facilities</h2>
          <p className="text-[#2b2b2b]/70 max-w-2xl mx-auto">
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
                className="relative overflow-hidden mb-6 h-80 rounded-lg border-2 border-transparent group-hover:border-[#004d40]/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <h3 className="mb-3 text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#004d40]">{service.title}</h3>
              <p className="text-[#2b2b2b]/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}