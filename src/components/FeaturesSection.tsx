import { Home, Brain, BarChart3, Shield, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: <Home size={24} />,
    title: "Weet in 2 minuten wat je kunt lenen",
    description: "Inclusief NHG-check, startersvrijstelling en energielabelbonussen — identiek aan wat een adviseur berekent.",
    color: "#99248F",
  },
  {
    icon: <Brain size={24} />,
    title: "Analyseer elke Funda-woning met AI",
    description: "Plak een Funda-link en krijg direct: WOZ-waarde, biedadvies, pluspunten, aandachtspunten en verkoophistorie.",
    color: "#3094C6",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Vergelijk 6 rentevaste periodes naast elkaar",
    description: "1, 5, 10, 15, 20 of 30 jaar vast — zie per periode je maandlast, nettolast én wat je totaal aan rente betaalt.",
    color: "#619C30",
  },
];

const badges = [
  { icon: "🏛️", text: "Nibud 2026 normtabel" },
  { icon: "📋", text: "AFM toetsrente conform regeling" },
  { icon: "🏠", text: "NHG grens €470.000" },
  { icon: "⚡", text: "Energielabel bonussen TRHK 2026" },
  { icon: "🔒", text: "Veilig via Supabase Auth" },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="wat-u-krijgt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Alles wat je nodig hebt
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Van berekening tot biedadvies — in één platform.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
              style={{ background: "linear-gradient(135deg, #fafafa, #f5f5f5)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
              style={{ borderColor: "#e5d5e5", backgroundColor: "#fdf5fd", color: "#99248F" }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
