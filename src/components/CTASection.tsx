import { CheckCircle, Lock, ExternalLink, ArrowRight } from "lucide-react";

const items = [
  "Maximale hypotheek op basis van Nibud 2026",
  "Maandlasten voor 6 rentescenarios",
  "NHG-check en startersvrijstelling",
  "Biedadvies op Funda-woningen",
  "Woningwaarde & overwaarde (doorstromers)",
  "Persoonlijk overzicht om te delen",
];

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1b3d 0%, #1a2a5e 100%)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "#99248F" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#c96bc3" }}>
          Start vandaag
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Bereken jouw hypotheek & krijg direct biedadvies
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto" style={{ opacity: 0.8 }}>
          In 2 minuten weet je wat je kunt lenen én wat je kunt bieden. Combineer je financiële situatie met jouw droomwoning voor direct inzicht.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#619C30" }} />
              <span className="text-blue-100 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <button
          className="px-12 py-5 rounded-2xl text-white font-bold text-xl transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-1 mb-6"
          style={{ backgroundColor: "#99248F" }}
        >
          Bereken mijn hypotheek →
        </button>

        {/* Saldo.biz referral */}
        <div
          className="max-w-lg mx-auto rounded-2xl p-6 border"
          style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(201,107,195,0.3)" }}
        >
          <p className="text-white font-bold text-lg mb-2">Meer weten of persoonlijk advies?</p>
          <p className="text-blue-200 text-sm mb-4" style={{ opacity: 0.7 }}>
            Voor een volledig hypotheekadvies op maat — helemaal afgestemd op jouw situatie — kun je terecht bij Saldo. Zij helpen je van A tot Z met je hypotheek.
          </p>
          <a
            href="https://saldo.biz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#3094C6" }}
          >
            <ExternalLink size={16} />
            Ga naar Saldo.biz
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm mt-6" style={{ opacity: 0.7 }}>
          <Lock size={14} />
          <span>100% gratis · Geen verborgen kosten · Indicatieve berekening</span>
        </div>
      </div>
    </section>
  );
}
