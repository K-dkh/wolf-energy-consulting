import { Handshake} from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";

export function Partners() {
  const partnerCategories = [
    
    {
      icon: Handshake,
      title: "Partenaires",
      description: "Collaboration avec les acteurs majeurs du secteur",
      partners: [
        { name: "YGC conseil", sector: "Ingénierie, études techniques" },
        { name: "Colas", sector: "Ingénierie et construction" },
        { name: "RC Groupe", sector: "Énergie et environnement" },
        { name: "B2ET thermique", sector: "Solutions thermiques industrielles" },
        { name: "ARCHIMED'CONCEPT", sector: "Architecture et ingénierie énergétique" },
      ],
    }, 
  ];

  const stats = [
    { value: "10+", label: "Clients accompagnés" },
    { value: "5 ans", label: "D'expérience partenariale" },
    { value: "3+", label: "Secteurs d’expertise" },
    { value: "98%", label: "Satisfaction client" },
  ];

  return (
    <div>
      {/* Hero Section */}
     <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0">
               <ImageWithFallback
                 src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Partnership"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-green-900/70"></div>
             </div>
      
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nos Partenaires</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Un réseau de partenaires de confiance pour des solutions énergétiques d'excellence
          </p>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Un écosystème de partenaires d'excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec les meilleurs acteurs du secteur énergétique
            </p>
          </div>

          <div className="space-y-16">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 border-b border-green-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-600">{partner.sector}</p>
                        </div>
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
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Intéressé par un partenariat ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et participez à la transition énergétique
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Devenir partenaire
          </a>
        </div>
      </section>
    </div>
  );
}
