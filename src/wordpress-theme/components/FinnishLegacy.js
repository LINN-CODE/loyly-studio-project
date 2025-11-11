import { Home, Users, Smartphone, Trophy, Thermometer, TrendingUp } from "lucide-react";

export function FinnishLegacy() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Finnish Sauna Legacy */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 text-5xl font-bold">The Finnish Sauna Legacy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4 text-lg">
              The sauna is Finland's living room.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4 text-lg">
              With about 3.3 million saunas for 5.5 million people, it's woven into daily life—at home, work, and community centres.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              In 2020, Finnish sauna culture was inscribed on UNESCO's Intangible Cultural Heritage list for its role in family life, social bonding, and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <TrendingUp className="w-10 h-10 text-gray-800 stroke-1" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                It's a weekly ritual, not a splurge. Most Finns go at least once a week.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-gray-800 stroke-1" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                It's egalitarian. Families, friends, and coworkers share benches—status stays at the door.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Smartphone className="w-10 h-10 text-gray-800 stroke-1" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                It's phone-free. The sauna is one of the last places where attention is undivided.
              </p>
            </div>
          </div>
        </div>

        {/* Myths vs Reality */}
        <div className="bg-gray-50 p-12 border border-gray-200">
          <h2 className="mb-12 text-gray-900 text-center text-5xl font-bold">Myths vs Reality</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                <Thermometer className="w-8 h-8 text-gray-800 stroke-1" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">"Singapore is already hot."</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tropical humidity ≠ controlled sauna heat. The difference is dose and rhythm—brief high heat, defined cool-down, and rest.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                <Trophy className="w-8 h-8 text-gray-800 stroke-1" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">"It's only for athletes."</h3>
                <p className="text-gray-600 leading-relaxed">
                  Finns of all ages go; the point is balance, not bravado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                <Home className="w-8 h-8 text-gray-800 stroke-1" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">"More heat is better."</h3>
                <p className="text-gray-600 leading-relaxed">
                  Not here. We favor gentle löyly, good etiquette, and your pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
