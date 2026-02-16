import { Lightbulb, Leaf, Building, Ruler, Globe, ChartBar, Cpu, Thermometer, Cloud, Wrench, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Audit Énergétique",
      description: "Analyse complète de vos installations pour identifier les opportunités d'optimisation et de réduction des coûts énergétiques.",
      features: [
        "Diagnostic approfondi",
        "Recommandations personnalisées",
        "Plan d'action détaillé",
        "Suivi des performances",
      ],
    },

    {
      icon: Building,
      title: "RT Existant",
      description: "Solutions d’analyse et d’optimisation énergétique pour les bâtiments existants, afin d’améliorer leurs performances tout en respectant les exigences réglementaires.",
      features: [
        "Diagnostic énergétique complett",
        "Recommandations d’amélioration",
        "Identification des gisements d’économies d’énergie",
        "Accompagnement à la mise en conformité",
      ],
    },
    {
      icon: Ruler,
      title: "RT 2012",
      description: "Expertise dédiée à la conformité thermique des bâtiments neufs selon la réglementation RT 2012, garantissant performance, confort et maîtrise des consommations.",
      features: [
        "Études thermiques réglementaires",
        "Optimisation de l’enveloppe et des systèmes",
        "Simulation des consommations",
        "Dossier de conformité",
      ],
    },
    {
      icon: Globe,
      title: "RE 2020",
      description: "Accompagnement complet pour répondre aux exigences de la RE 2020, en intégrant performance énergétique, réduction carbone et confort d’été.",
      features: [
        "Analyse énergétique et environnementale",
        "Calculs carbone (ACV)",
        "Optimisation bioclimatique",
        "Suivi de conformité RE 2020",
      ],
    },

    {
      icon: ChartBar,
      title: "DPE (Diagnostic de Performance Énergétique)",
      description: "Évaluation précise de la performance énergétique d’un bâtiment pour informer, valoriser et orienter les travaux d’amélioration.",
      features: [
        "Diagnostic complet",
        "Étiquette énergétique",
        "Recommandations personnalisées",
        "Rapport certifié",
      ],
    },
    {
      icon: Cpu,
      title: "STD (Simulation Thermique Dynamique)",
      description: "Analyse avancée du comportement thermique d’un bâtiment pour anticiper les performances réelles et optimiser le confort.",
      features: [
        "Modélisation 3D",
        "Étude du confort d’été",
        "Analyse des consommations",
        "Optimisation des systèmes CVC",
      ],
    },
    {
      icon: Thermometer,
      title: "Bilan thermique",
      description: "Étude détaillée des besoins en chauffage, climatisation et ventilation pour dimensionner précisément les installations.",
      features: [
        "Calculs de déperditions",
        "Dimensionnement des équipements",
        "Optimisation énergétique",
        "Préconisations techniques",
      ],
    },
    {
      icon: Cloud,
      title: "Bilan carbone",
      description: "Évaluation de l’empreinte carbone d’un projet ou d’une organisation pour orienter les stratégies de réduction et de compensation.",
      features: [
        "Analyse des émissions directes et indirectes",
        "Identification des leviers de réduction",
        "Plan d’action bas carbone",
        "Suivi et reporting",
      ],
    },
    {
      icon: Wrench,
      title: "MOE CVC (Maîtrise d’Œuvre CVC)",
      description: "Pilotage complet des installations de Chauffage, Ventilation et Climatisation, de la conception à la réception.",
      features: [
        "Conception des systèmes",
        "Suivi de chantier",
        "Coordination technique",
        "Vérification des performances",
      ],
    },
    {
      icon: Leaf,
      title: "AMO Environnement",
      description: "Accompagnement stratégique pour intégrer les enjeux environnementaux dans vos projets et garantir leur durabilité.",
      features: [
        "Analyse environnementale",
        "Stratégie bas carbone",
        "Aide à la décision",
        "Suivi des engagements",
      ],
    },
    {
      icon: TrendingUp,
      title: "AMO Suivi d’exploitation",
      description: "Accompagnement pour optimiser l’exploitation des bâtiments et réduire les coûts énergétiques.",
      features: [
        "Analyse des consommations énergétiques",
        "Diagnostic de performance",
        "Recommandations d’optimisation",
        "Analyse des dérives",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769501378866-902a27e22718?q=80&w=1920"
            alt="Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-green-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nos Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins énergétiques
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Une expertise complète à votre service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous vous accompagnons à chaque étape de votre transition énergétique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour concevoir une solution adaptée à vos besoins spécifiques.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Discutons de votre projet
          </a>
        </div>
      </section>
    </div>
  );
}