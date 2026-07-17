import { X, Check } from "lucide-react";

const rows = [
  {
    old: "Weken wachten op een afspraak bij de bank voordat je weet wat je kunt lenen",
    new: "In 2 minuten je maximale hypotheek berekenen — zonder afspraak",
  },
  {
    old: "Onduidelijk wat je maandelijks betaalt bij verschillende rentes",
    new: "6 rentescenarios naast elkaar, inclusief netto maandlast",
  },
  {
    old: "Blind bieden op een woning zonder te weten of je het kunt betalen",
    new: "Concreet biedadvies op basis van jouw budget én de WOZ-waarde",
  },
  {
    old: "Als doorstromer niet weten hoeveel overwaarde je hebt voor je volgende woning",
    new: "Indicatieve woningwaarde en overwaarde direct inzichtelijk",
  },
  {
    old: "Adviseur betalen voor een eerste oriëntatie",
    new: "Volledig gratis inzicht — dán pas het gesprek met een adviseur",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#3094C6" }}>
            Vergelijk
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            De oude manier vs.{" "}
            <span style={{ color: "#99248F" }}>Consumentenzaken</span>
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid grid-cols-2">
            <div className="p-5 text-center font-bold text-gray-700 bg-gray-50 border-b border-r border-gray-200">
              ❌ De Oude Manier
            </div>
            <div className="p-5 text-center font-bold text-white border-b" style={{ backgroundColor: "#99248F" }}>
              ✅ Met Consumentenzaken
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="p-5 flex items-start gap-3 bg-gray-50 border-r border-gray-100">
                <X size={18} className="flex-shrink-0 mt-0.5 text-red-400" />
                <span className="text-gray-600 text-sm leading-relaxed">{row.old}</span>
              </div>
              <div className="p-5 flex items-start gap-3" style={{ backgroundColor: "#fdf5fd" }}>
                <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#619C30" }} />
                <span className="text-gray-700 text-sm leading-relaxed font-medium">{row.new}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
