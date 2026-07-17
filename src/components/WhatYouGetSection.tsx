import { TrendingUp, Calculator, Gavel, Home, BarChart2, Shield } from "lucide-react";

const items = [
  {
    icon: <TrendingUp size={22} />,
    title: "Maximale hypotheek berekening",
    description: "Op basis van Nibud 2026 normen, inclusief NHG-check, startersvrijstelling en energielabelbonus.",
    color: "#99248F",
  },
  {
    icon: <Calculator size={22} />,
    title: "Maandlasten vergelijker",
    description: "Vergelijk 6 rentevaste periodes naast elkaar. Zie bruto én netto maandlast per scenario.",
    color: "#3094C6",
  },
  {
    icon: <Gavel size={22} />,
    title: "Biedadvies op Funda-woningen",
    description: "Plak een Funda-link en krijg direct WOZ-waarde, biedadvies, pluspunten en verkoophistorie.",
    color: "#619C30",
  },
  {
    icon: <Home size={22} />,
    title: "Woningwaarde doorstromer",
    description: "Bereken de indicatieve waarde van je huidige woning en hoeveel overwaarde je meeneemt.",
    color: "#99248F",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Scenario vergelijker",
    description: "Vergelijk twee situaties naast elkaar — bijv. met of zonder NHG, of met en zonder partner.",
    color: "#3094C6",
  },
  {
    icon: <Shield size={22} />,
    title: "Persoonlijk overzicht",
    description: "Sla je berekening op en deel hem met je partner, ouders of adviseur als PDF.",
    color: "#619C30",
  },
];

export default function WhatYouGetSection() {
  return (
    <section className="py-24 bg-white" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99248F" }}>
            Wat je krijgt
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Alles wat je nodig hebt
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Van berekening tot biedadvies — in één platform. Gratis, zonder abonnement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-7 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group bg-white"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
