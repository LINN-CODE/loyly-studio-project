import { motion } from "motion/react";
import { Droplet, Thermometer, Award, Users, Wrench, Heart } from "lucide-react";

export function SupplierPage() {
  const features = [
    {
      icon: Thermometer,
      title: "Precision Engineering",
      description: "Every piece of equipment is crafted with meticulous attention to detail, ensuring optimal performance and longevity."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "SteamSauna.sg sources only the finest materials and components, delivering excellence in every installation."
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Their experienced team handles every aspect of setup with professionalism and care, from planning to completion."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "A deep commitment to understanding client needs and delivering tailored solutions that exceed expectations."
    },
    {
      icon: Droplet,
      title: "Innovation",
      description: "Bringing cutting-edge technology and time-tested traditions together to create the ultimate sauna experience."
    },
    {
      icon: Heart,
      title: "Passion for Wellness",
      description: "A genuine dedication to promoting health and wellbeing through authentic steam and sauna bathing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-gray-900 mb-6 font-bold text-[48px]">Our Trusted Supplier</h1>
            <div className="w-24 h-1 bg-[#004d40] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              At löyly studio, we partner with the very best in the industry. Our saunas and equipment 
              are supplied by SteamSauna.sg, Singapore's premier provider of exceptional steam and sauna solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About SteamSauna.sg Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#004d40] to-[#00695c] text-white p-12 border-2 border-gray-200">
              <h2 className="text-white mb-6">Creating The Perfect Heat</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  SteamSauna.sg is a Singapore brand dedicated to creating <span className="font-semibold">THE PERFECT HEAT</span> by 
                  bringing an equal measure of art and science to the process of steam and sauna bathing.
                </p>
                <p>
                  Operating as a business within Water + Plants Lab Pte Ltd since 2018, SteamSauna Singapore Pte Ltd 
                  was corporatised in 2023 to better focus on delivering exceptional value to their customers.
                </p>
                <p>
                  Their unwavering commitment to excellence and innovation has made them our trusted partner in 
                  bringing authentic Finnish sauna experiences to Singapore.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why We Trust Them */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-gray-900 text-center mb-4">Why We Trust SteamSauna.sg</h2>
            <div className="w-24 h-1 bg-[#004d40] mx-auto mb-16"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="border-2 border-gray-200 p-8 h-full hover:border-[#004d40] transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-[#004d40] flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Partnership Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gray-50 p-12 border-2 border-gray-200"
          >
            <h3 className="text-gray-900 mb-6">A Partnership Built on Excellence</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              Our collaboration with SteamSauna.sg ensures that every sauna at löyly studio meets 
              the highest standards of quality, safety, and performance. Their expertise and dedication 
              to creating the perfect heat environment allows us to deliver an authentic Finnish sauna 
              experience that promotes genuine wellness and rejuvenation.
            </p>
            <a 
              href="https://steamsauna.sg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#004d40] text-[#004d40] px-8 py-3 hover:bg-[#004d40] hover:text-white transition-colors duration-300"
            >
              Visit SteamSauna.sg
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
