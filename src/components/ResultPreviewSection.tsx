import { CheckCircle } from "lucide-react";

const resultItems = [
  { label: "Geschat maandbedrag", value: "€ 1.684", sub: "indicatief · levenslang tot 100 jaar", color: "#99248F" },
  { label: "Per jaar", value: "€ 20.208", sub: "indicatief", color: "#3094C6" },
  { label: "Totaal maandtermijnen tot 100 jaar", value: "€ 500.148", sub: "indicatief · exclusief eenmalig bedrag & hypotheekaflossing", color: "#619C30" },
  { label: "Totaal uitgekeerd (incl. eenmalig + hypotheek)", value: "€ 550.148", sub: "indicatief · 100% van de taxatiewaarde", color: "#99248F" },
];

export default function ResultPreviewSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f0f7ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99248F" }}>
              Uw resultaat
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ontdek in 5 minuten of uw woning u{" "}
              <span style={{ color: "#99248F" }}>€1.000+ per maand</span>{" "}
              extra oplevert
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Zonder te verhuizen, zonder inkomensnorm, zonder één euro uit eigen zak. Het persoonlijke hulpmiddel dat uw overwaarde indicatief doorrekent en u een concreet Persoonlijk Overzicht geeft — volledig kosteloos.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Persoonlijk Overzicht met indicatief maand- en jaarbedrag",
                "Erfenis-tijdlijn na 10, 15 en 20 jaar",
                "Eenmalig bedrag check (tot €30.000)",
                "Scenario Vergelijker",
                "Persoonlijke uitnodiging van Alex",
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
              Doe de gratis berekening →
            </button>
            <p className="text-gray-400 text-sm mt-3">Volledig kosteloos · Geen verplichtingen · Resultaat in 5 minuten</p>
          </div>

          {/* Right: Result card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: "#f0fdf4" }}>
                    ✅
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Uw Persoonlijk Overzicht</h3>
                    <p className="text-xs text-gray-400">Indicatieve berekening op basis van het Welvarend Wonen Overwaardeplan</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#99248F" }}>
                  Indicatief
                </span>
              </div>

              {/* Eligibility check */}
              <div className="rounded-xl p-4 mb-6 border" style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}>
                <p className="text-sm font-medium" style={{ color: "#166534" }}>
                  ✅ U voldoet aan de minimale criteria voor het Welvarend Wonen Overwaardeplan (68+ jaar, min. €125.000 overwaarde).
                </p>
              </div>

              {/* Details */}
              <div className="space-y-1 mb-6 text-sm text-gray-600">
                <p><span className="font-semibold">Leeftijd op passeerdatum:</span> 75 jaar</p>
                <p><span className="font-semibold">Uitkeringspercentage:</span> 100% van de taxatiewaarde</p>
                <p><span className="font-semibold" style={{ color: "#99248F" }}>Effectief percentage</span> (incl. looptijdtoeslag): <span className="font-bold">100%</span></p>
              </div>

              {/* Result grid */}
              <div className="grid grid-cols-2 gap-3">
                {resultItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: "#fdf5fd", border: `1px solid #e8d5e8` }}
                  >
                    <div className="text-2xl font-extrabold mb-1" style={{ color: item.color }}>
                      {item.value}
                    </div>
                    <div className="text-xs font-medium text-gray-700">{item.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
