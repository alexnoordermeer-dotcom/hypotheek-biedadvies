import { Calendar, Users, Coins, BarChart2, CheckSquare, MessageCircle } from "lucide-react";

const items = [
  {
    icon: <Coins size={22} />,
    title: "Maandbedrag Berekening",
    description: "Berekent indicatief uw maandelijkse uitkering op basis van uw overwaarde, leeftijd en gewenste looptijd (85/90/95/100 jaar).",
    color: "#99248F",
  },
  {
    icon: <Calendar size={22} />,
    title: "Erfenis Tijdlijn",
    description: "Toont hoeveel beschikbaar blijft voor uw kinderen na 10, 15 en 20 jaar, met en zonder doorbetaling.",
    color: "#3094C6",
  },
  {
    icon: <Coins size={22} />,
    title: "Eenmalig Bedrag Check",
    description: "Berekent of u vooraf tot €30.000 kunt ontvangen voor een directe wens (camper, schenking, verbouwing).",
    color: "#619C30",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Scenario Vergelijker",
    description: "Vergelijkt twee looptijdkeuzes naast elkaar zodat u het verschil in maandbedrag direct ziet.",
    color: "#99248F",
  },
  {
    icon: <CheckSquare size={22} />,
    title: "Geschiktheidscheck",
    description: "Controleert eerlijk of u voldoet aan de minimale criteria van het Welvarend Wonen product (68+, min. €125.000 overwaarde).",
    color: "#3094C6",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Gepersonaliseerde CTA",
    description: "Genereert een op maat gemaakt Persoonlijk Overzicht dat u kunt doorsturen naar uw partner of kinderen.",
    color: "#619C30",
  },
];

export default function WhatYouGetSection() {
  return (
    <section className="py-24 bg-white" id="wat-u-krijgt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99248F" }}>
            Wat u krijgt
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Wat u vanaf de eerste minuut in handen heeft
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Alles kosteloos. Geen abonnement. Geen verplichtingen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-7 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
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
