import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Accompagner les entreprises dans leur transition énergétique en proposant des solutions innovantes et durables.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Devenir le partenaire de référence en conseil énergétique, reconnu pour notre expertise et notre engagement.",
    },
    {
      icon: Heart,
      title: "Valeurs",
      description: "Excellence, innovation, durabilité et transparence guident chacune de nos actions et décisions.",
    },
  ];

  const achievements = [
    "Une équipe d'experts certifiés",
    "Des solutions adaptées à tous les secteurs",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?q=80&w=1920"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-green-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">À propos de nous</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Une équipe passionnée au service de votre transition énergétique
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Fondé en 2019, Wolf Energy Consulting est un bureau d’études thermiques engagé au service de
                  la performance énergétique des bâtiments. Animés par la conviction que la transition énergétique 
                  est un enjeu majeur pour l’avenir, nous accompagnons les entreprises,
                  collectivités et acteurs du bâtiment dans l’optimisation durable de leurs projets.
                </p>
                <p>
                  Au fil des années, nous avons développé une expertise solide et reconnue dans la réalisation de
                  missions d’audit énergétique, simulations thermiques dynamiques (STD),
                  Diagnostics de Performance Énergétique (DPE), audits techniques, ainsi que 
                  dans l’assistance à maîtrise d’ouvrage (AMO), 
                  la maîtrise d’œuvre (MOE) et le suivi d’exploitation.
                </p>
                <p>Nous intervenons également sur les calculs de bilan carbone et les démarches de décarbonation, 
                  permettant à nos clients d’intégrer pleinement les enjeux environnementaux à leur stratégie.</p>
                <p>
                  Aujourd’hui, Wolf Energy Consulting s’impose comme un acteur fiable et innovant de la transition énergétique,
                  en proposant des solutions techniques complètes, concrètes et mesurables, adaptées aux besoins réels de chaque projet.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760611656007-f767a8082758?q=80&w=1920"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos piliers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les valeurs qui nous animent au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Nos réalisations en chiffres
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-green-200" />
                  </div>
                  <p className="text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}