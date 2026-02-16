import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Zap,
      title: "Expertise Énergétique",
      description: "Solutions innovantes et durables pour optimiser votre consommation énergétique.",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Une équipe dédiée pour répondre à vos besoins spécifiques en énergie.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimale",
      description: "Maximisez vos performances énergétiques et réduisez vos coûts.",
    },
    {
      icon: Award,
      title: "Excellence & Qualité",
      description: "Des solutions certifiées et reconnues dans le secteur de l'énergie.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?q=80&w=1920"
            alt="Renewable Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-green-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            L'avenir de l'énergie
            <span className="block text-green-400 mt-2">commence ici</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Wolf Energy Consulting vous accompagne dans la transition énergétique avec des solutions durables et innovantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Contactez-nous
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm border border-white/20 transition-colors"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Wolf Energy ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre expertise et notre engagement pour un avenir énergétique durable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1732559207172-570f74930b07?q=80&w=1920"
            alt="Wind Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à transformer votre avenir énergétique ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons ensemble les meilleures solutions pour votre entreprise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Demander un devis gratuit
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}