const stats = [
  { value: "€375.000+", label: "Gemiddelde overwaarde van een 65-plusser in Nederland", color: "#99248F" },
  { value: "58%", label: "Van alle 65-plussers woont in een koopwoning", color: "#3094C6" },
  { value: "290.000", label: "Tekort aan seniorenwoningen — wie nu wacht, heeft straks nog minder keuze", color: "#619C30" },
];

export default function StatsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1b3d 0%, #1a2a5e 100%)" }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#99248F" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c96bc3" }}>
            Nu is het moment
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            De cijfers spreken voor zich
          </h2>
          <p className="text-blue-200 opacity-70 max-w-2xl mx-auto">
            Intussen staat die overwaarde stil en levert niets op. Het Welvarend Wonen Overwaardeplan is er juist voor deze situatie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-3xl p-8 text-center border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="text-5xl font-extrabold mb-4" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-blue-200 opacity-80 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200 opacity-70 mb-6">
            Geen inkomensnorm, geen verhuisplicht, geen kosten uit eigen zak.
          </p>
          <button
            className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#99248F" }}
          >
            Doe de gratis berekening →
          </button>
        </div>
      </div>
    </section>
  );
}
