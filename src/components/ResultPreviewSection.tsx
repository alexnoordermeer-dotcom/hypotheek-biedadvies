import { CheckCircle } from "lucide-react";

const scenarios = [
  { period: "10 jaar vast", rate: "3,85%", gross: "€ 1.284", net: "€ 1.041", color: "#99248F" },
  { period: "20 jaar vast", rate: "4,10%", gross: "€ 1.367", net: "€ 1.098", color: "#3094C6" },
  { period: "30 jaar vast", rate: "4,35%", gross: "€ 1.452", net: "€ 1.163", color: "#619C30" },
];

export default function ResultPreviewSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f0f7ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99248F" }}>
              Uw resultaat
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Weet precies wat je kunt lenen{" "}
              <span style={{ color: "#99248F" }}>én wat je maandelijks betaalt</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Geen vage schattingen. Je ziet direct je maximale hypotheek, je bruto en netto maandlast per rentescenario, of je in aanmerking komt voor NHG en welk energielabelbonus je kunt krijgen.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Maximale hypotheek op basis van Nibud 2026",
                "Bruto én netto maandlast per rentescenario",
                "NHG-check (grens €470.000)",
                "Startersvrijstelling overdrachtsbelasting",
                "Energielabelbonus berekening",
                "Biedadvies op basis van Funda-analyse",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "#619C30" }} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "#99248F" }}
            >
              Bereken mijn hypotheek →
            </button>
            <p className="text-gray-400 text-sm mt-3">100% gratis · Geen verplichtingen · Resultaat in 2 minuten</p>
          </div>

          {/* Right: result card */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Jouw hypotheekresultaat</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Indicatief · Nibud 2026 normen</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#619C30" }}>
                  ✓ NHG mogelijk
                </span>
              </div>

              {/* Max mortgage */}
              <div className="rounded-2xl p-5 mb-5 text-center" style={{ backgroundColor: "#fdf5fd", border: "1px solid #e8d5e8" }}>
                <p className="text-sm text-gray-500 mb-1">Maximale hypotheek</p>
                <p className="text-5xl font-extrabold" style={{ color: "#99248F" }}>€ 385.000</p>
                <p className="text-xs text-gray-400 mt-1">op basis van €65.000 bruto jaarsalaris</p>
              </div>

              {/* Scenario table */}
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Maandlasten per scenario</p>
              <div className="space-y-3">
                {scenarios.map((s) => (
                  <div
                    key={s.period}
                    className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ backgroundColor: "#f8f8f8", border: "1px solid #efefef" }}
                  >
                    <div>
                      <span className="font-semibold text-gray-800 text-sm">{s.period}</span>
                      <span className="text-xs text-gray-400 ml-2">{s.rate}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm" style={{ color: s.color }}>{s.gross} bruto</div>
                      <div className="text-xs text-gray-400">{s.net} netto</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Doorstromer note */}
              <div className="mt-5 rounded-xl p-4 border" style={{ backgroundColor: "#f0f7ff", borderColor: "#c3dff5" }}>
                <p className="text-sm font-medium" style={{ color: "#1a5a8a" }}>
                  🔄 <strong>Doorstromer?</strong> Je overwaarde van je huidige woning wordt automatisch meegenomen in je berekening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
