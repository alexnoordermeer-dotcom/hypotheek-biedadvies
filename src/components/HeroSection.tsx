import { Shield, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1b3d 0%, #1a2a5e 55%, #0f1b3d 100%)" }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Purple glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#99248F" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-7">
        {/* Compliance badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium"
          style={{ borderColor: "rgba(153,36,143,0.5)", color: "#c96bc3", backgroundColor: "rgba(153,36,143,0.1)" }}
        >
          <Shield size={14} />
          Conform Nibud 2026 &amp; AFM richtlijnen
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
          Van hypotheekberekening
          <br />
          <span style={{ color: "#c96bc3" }}>tot biedadvies in één tool</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed" style={{ opacity: 0.8 }}>
          Bereken je maximale hypotheek én krijg direct een onderbouwd biedadvies voor jouw droomwoning — op basis van officiële Nibud 2026 normen. In 2 minuten, gratis, zonder adviseur.
        </p>

        {/* 4 key topics pills */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { emoji: "💰", label: "Maximaal lenen" },
            { emoji: "📊", label: "Maandlasten" },
            { emoji: "🏡", label: "Biedadvies" },
            { emoji: "🔄", label: "Eigen woning waarde" },
          ].map((t) => (
            <span
              key={t.label}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#e2d4f0", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {t.emoji} {t.label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-1">
          <button
            className="px-9 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#99248F" }}
          >
            Bereken & krijg biedadvies →
          </button>
          <button className="px-9 py-4 rounded-2xl text-white font-bold text-lg border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
            Al een account? Log in
          </button>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#c96bc3" }}>
          <span>✓ Gratis</span>
          <span>✓ Geen spam</span>
          <span>✓ Veilig opgeslagen</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 w-full max-w-2xl border-t border-white/10 pt-8">
          {[
            { value: "2 min", label: "Gemiddelde tijd" },
            { value: "Nibud", label: "2026 normen" },
            { value: "6", label: "Rentescenarios" },
            { value: "100%", label: "Gratis" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-sm text-blue-200 mt-1" style={{ opacity: 0.6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
