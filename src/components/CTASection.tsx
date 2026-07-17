import { CheckCircle, Lock } from "lucide-react";

const items = [
  "Persoonlijk Overzicht met indicatief maand- en jaarbedrag",
  "Erfenis-tijdlijn na 10, 15 en 20 jaar",
  "Eenmalig bedrag check (tot €30.000)",
  "Scenario Vergelijker",
  "Persoonlijke uitnodiging van Alex voor een gratis oriëntatiegesprek",
];

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1b3d 0%, #1a2a5e 100%)" }}
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "#99248F" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#c96bc3" }}>
          Start vandaag
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Bereken jouw maximale hypotheek
        </h2>
        <p className="text-blue-200 opacity-80 text-lg mb-10 max-w-2xl mx-auto">
          In 2 minuten weet je wat je kunt lenen, wat je maandelijks betaalt en of NHG voor jou geldt.
        </p>

        {/* Feature list */}
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#619C30" }} />
              <span className="text-blue-100 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <button
          className="px-12 py-5 rounded-2xl text-white font-bold text-xl transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-1 mb-4"
          style={{ backgroundColor: "#99248F" }}
        >
          Doe de gratis berekening →
        </button>

        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm opacity-70">
          <Lock size={14} />
          <span>100% gratis · Geen verborgen kosten · Geen adviseur nodig</span>
        </div>
      </div>
    </section>
  );
}
