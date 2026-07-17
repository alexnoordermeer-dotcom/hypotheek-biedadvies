const stats = [
  { value: "€ 450.000", label: "Gemiddelde woningprijs in Nederland in 2025", color: "#99248F" },
  { value: "74%", label: "Van de starters vindt het hypotheekproces onduidelijk en stressvol", color: "#3094C6" },
  { value: "2 min", label: "Is alles wat je nodig hebt om volledig inzicht te krijgen in jouw situatie", color: "#619C30" },
];

export default function StatsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1b3d 0%, #1a2a5e 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#99248F" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c96bc3" }}>
            De woningmarkt in cijfers
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Waarom voorbereiding telt
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto" style={{ opacity: 0.7 }}>
            De woningmarkt is competitief. Wie goed voorbereid is, wint.
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
              <p className="text-blue-200 leading-relaxed" style={{ opacity: 0.8 }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#99248F" }}
          >
            Bereken mijn hypotheek →
          </button>
        </div>
      </div>
    </section>
  );
}
