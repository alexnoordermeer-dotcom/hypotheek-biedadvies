import { X, Check } from "lucide-react";

const rows = [
  {
    old: "Banken afbellen en afgewezen worden vanwege een te laag pensioeninkomen",
    new: "Geen inkomensnorm — rekent met uw overwaarde, niet met uw inkomen",
  },
  {
    old: "Weken van zoeken, wachten en teleurstelling",
    new: "In 5 minuten uw persoonlijke overzicht",
  },
  {
    old: "Taxatiekosten (€600), notariskosten (€2.750) en advieskosten — oplopend tot €3.700+",
    new: "€0 uit eigen zak — Welvarend Wonen financiert het volledige traject",
  },
  {
    old: "Jargon als 'opeethypotheek' en 'verzilverhypotheek' — onduidelijk en intimiderend",
    new: "Zeven eenvoudige vragen, direct een concreet getal",
  },
  {
    old: "Eerst een adviseur betalen voordat u weet of u überhaupt in aanmerking komt",
    new: "Kosteloos uw situatie doorrekenen — dán pas het gesprek",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            De oude manier vs.{" "}
            <span style={{ color: "#99248F" }}>Uw Huis Werkt Voor U</span>
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="p-5 text-center font-bold text-gray-700 bg-gray-50 border-b border-r border-gray-200">
              ❌ De Oude Manier
            </div>
            <div className="p-5 text-center font-bold text-white border-b" style={{ backgroundColor: "#99248F" }}>
              ✅ Met Uw Huis Werkt Voor U
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
