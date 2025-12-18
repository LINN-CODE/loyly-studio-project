import { Helmet } from "react-helmet-async";
import { FinnishLegacy } from "./FinnishLegacy";

import finnishSaunaImage from "figma:asset/34852c42159712e78eb36f34b0aa4078e41dc30d.png";
import saunaCommunityImage from "figma:asset/3f82ed19698f946deea36344c27b2a3a2aa1d19f.png";
import saunaStonesImage from "figma:asset/981b9494c08304d7525dde0133575a64ed95ee91.png";

export function About() {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>About Us | Löyly Studio Singapore</title>
        <meta
          name="description"
          content="Learn about Löyly Studio, a sauna and wellness studio in Singapore inspired by Finnish sauna culture, community, and holistic wellbeing."
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <div className="bg-white pt-24">
        {/* Header Section */}
        <div className="container mx-auto px-8 py-16 text-center">
          <h1 className="mb-4 text-[#2b2b2b] text-5xl font-bold">Our Story</h1>
          <p className="text-[#2b2b2b]/70 max-w-3xl mx-auto text-[32px]">
            A journey from Finland to Singapore, bringing the ancient ritual of sauna bathing to modern wellness
          </p>
        </div>

        {/* Where it all started */}
        <section className="py-16 bg-gradient-to-b from-white to-[#f5f9f8]">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="mb-6 text-[#004d40] text-4xl font-bold">
                  Where it all started
                </h2>
                <p className="text-[#2b2b2b]/80 leading-relaxed mb-4 text-[20px]">
                  In the crisp air of a Finnish dawn, the founders stepped into their first Löyly sauna—a simple wooden room nestled by a quiet lakeside, warmed by smoldering stones and gentle steam.
                </p>
                <p className="text-[#2b2b2b]/80 leading-relaxed mb-4 text-[20px]">
                  As the heat enveloped them, their breath slowed, muscles eased, and everyday worries melted away.
                </p>
                <p className="text-[#2b2b2b]/80 leading-relaxed text-[20px]">
                  The sauna was more than heat. It was ritual, community, and a way of life.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-[500px]">
                <img
                  src={finnishSaunaImage}
                  alt="Finnish sauna by the lake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden">
                <img
                  src={saunaStonesImage}
                  alt="Traditional sauna stones and löyly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-6 text-[#004d40] text-4xl font-bold">
                  Why it matters
                </h2>
                <p className="text-[#2b2b2b]/80 leading-relaxed mb-4 text-[20px]">
                  Returning to Singapore, the founders noticed rising stress, burnout, and a growing need for balance in modern life.
                </p>
                <p className="text-[#2b2b2b]/80 leading-relaxed text-[20px]">
                  Finnish sauna rituals offer a rhythm of heat, cold, and stillness proven to improve circulation, reduce stress, and support longevity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-16 bg-gradient-to-b from-[#f5f9f8] to-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="mb-6 text-[#004d40] text-4xl font-bold">
                  Our Vision of a Sanctuary for Mind, Body and Community
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#2b2b2b] mb-2 text-[31px] font-bold">
                      Holistic Wellbeing
                    </h3>
                    <p className="text-[#2b2b2b]/80 leading-relaxed text-[20px]">
                      Sauna rituals reduce stress, support cardiovascular health, and sharpen focus.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#2b2b2b] mb-2 text-[31px] font-bold">
                      Intergenerational Appeal
                    </h3>
                    <p className="text-[#2b2b2b]/80 leading-relaxed text-[20px]">
                      From athletes to seniors, sauna benefits transcend age.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#2b2b2b] mb-2 text-[31px] font-bold">
                      Human Connection
                    </h3>
                    <p className="text-[#2b2b2b]/80 leading-relaxed text-[20px]">
                      Löyly Studio fosters connection, belonging, and shared ritual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src={saunaCommunityImage}
                  alt="Sauna community and wellness"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Finnish Legacy */}
        <FinnishLegacy />
      </div>
    </>
  );
}
