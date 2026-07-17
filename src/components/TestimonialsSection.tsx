const testimonials = [
  {
    quote: "Als starter had ik geen idee wat ik kon lenen. Via dit hulpmiddel wist ik in 2 minuten mijn maximale hypotheek én wat ik maandelijks zou betalen. Daarna heb ik pas een afspraak gemaakt met Alex. Zo goed voorbereid het gesprek in gaan was echt fijn.",
    name: "Sanne (28)",
    role: "Starter, Rotterdam",
    color: "#99248F",
  },
  {
    quote: "We wilden doorstromen maar wisten niet hoeveel onze huidige woning waard was en of we de volgende stap konden zetten. De berekening gaf ons direct inzicht in onze overwaarde en wat we konden lenen. Binnen een week hadden we een bod uitgebracht.",
    name: "Mark & Lisa (36 & 34)",
    role: "Doorstromers, Den Haag",
    color: "#3094C6",
  },
  {
    quote: "Het biedadvies op basis van de Funda-analyse was goud waard. We wisten precies wat de woning waard was en wat een realistisch bod was. We hebben de woning gekregen zonder overbieden.",
    name: "Thomas (31)",
    role: "Starter, Dordrecht",
    color: "#619C30",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f8f4f8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#619C30" }}>
            Ervaringen
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Wat kopers zeggen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="text-5xl font-serif leading-none mb-4" style={{ color: t.color, opacity: 0.25 }}>
                "
              </div>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
