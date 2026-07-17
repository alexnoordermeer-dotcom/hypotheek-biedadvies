import { Shield, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1b3d 0%, #1a2a5e 50%, #0f1b3d 100%)" }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#99248F" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#3094C6" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium" style={{ borderColor: "#99248F", color: "#c96bc3", backgroundColor: "rgba(153,36,143,0.1)" }}>
          <Shield size={14} />
          Conform Nibud 2026 & AFM richtlijnen
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Hoeveel hypotheek
          <br />
          <span style={{ color: "#c96bc3" }}>kun jij krijgen?</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed opacity-80">
          Bereken je maximale hypotheek op basis van officiële Nibud 2026 normen — in 2 minuten, gratis, zonder adviseur.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button
            className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#99248F" }}
          >
            Bereken mijn hypotheek →
          </button>
          <button className="px-8 py-4 rounded-2xl text-white font-bold text-lg border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
            Al een account? Log in
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mt-2" style={{ color: "#c96bc3" }}>
          <span>✓ Gratis</span>
          <span>✓ Geen spam</span>
          <span>✓ Veilig opgeslagen</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full max-w-2xl">
          {[
            { value: "2 min", label: "Gemiddelde tijd" },
            { value: "Nibud", label: "2026 normen" },
            { value: "6", label: "Rentescenarios" },
            { value: "100%", label: "Gratis" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-blue-200 opacity-70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
