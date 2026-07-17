import { TrendingUp, Calculator, Gavel, Home } from "lucide-react";

const features = [
  {
    icon: <TrendingUp size={26} />,
    number: "01",
    title: "Wat kan ik maximaal lenen?",
    description:
      "Bereken je maximale hypotheek op basis van je bruto inkomen, eventueel partnerinkomen en lopende schulden. Inclusief NHG-check, startersvrijstelling en energielabelbonussen — identiek aan wat een adviseur berekent.",
    color: "#99248F",
    bg: "#fdf5fd",
    border: "#e8d5e8",
  },
  {
    icon: <Calculator size={26} />,
    number: "02",
    title: "Wat zijn mijn maandlasten?",
    description:
      "Vergelijk 6 rentevaste periodes naast elkaar: 1, 5, 10, 15, 20 of 30 jaar vast. Zie per periode je bruto maandlast, netto maandlast én het totaal aan rente over de hele looptijd.",
    color: "#3094C6",
    bg: "#f0f7ff",
    border: "#c3dff5",
  },
  {
    icon: <Gavel size={26} />,
    number: "03",
    title: "Welk bod kan ik doen?",
    description:
      "Plak een Funda-link en krijg direct een concreet biedadvies op basis van WOZ-waarde, verkoophistorie en jouw maximale hypotheek. Zo ga je goed voorbereid naar de bezichtiging.",
    color: "#619C30",
    bg: "#f3faf0",
    border: "#c6e0b0",
  },
  {
    icon: <Home size={26} />,
    number: "04",
    title: "Wat is mijn eigen woning waard?",
    description:
      "Ben je doorstromer? Bereken de indicatieve waarde van je huidige woning, je verwachte overwaarde en hoeveel eigen geld je meeneemt naar je volgende aankoop.",
    color: "#99248F",
    bg: "#fdf5fd",
    border: "#e8d5e8",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="wat-u-krijgt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99248F" }}>
            Alles in één platform
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            De 4 vragen die elke koper heeft
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Of je nu starter bent of doorstromer — wij geven je direct antwoord.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.number}
              className="rounded-3xl p-8 border hover:shadow-xl transition-all hover:-translate-y-1 group flex gap-6"
              style={{ backgroundColor: f.bg, borderColor: f.border }}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: f.color }}
                >
                  {f.icon}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: f.color }}>
                  Vraag {f.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { icon: "🏛️", text: "Nibud 2026 normtabel" },
            { icon: "📋", text: "AFM toetsrente conform regeling" },
            { icon: "🏠", text: "NHG grens €470.000" },
            { icon: "⚡", text: "Energielabel bonussen TRHK 2026" },
            { icon: "🔒", text: "Veilig & privacyvriendelijk" },
          ].map((b) => (
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
