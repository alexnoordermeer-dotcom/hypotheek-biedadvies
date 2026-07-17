const steps = [
  {
    number: "1",
    title: "Vul je situatie in",
    description: "Inkomen, leeftijd, eventueel partner en lopende schulden",
    color: "#99248F",
  },
  {
    number: "2",
    title: "Resultaat in seconden",
    description: "Max hypotheek, maandlast, NHG-check, energiebonus",
    color: "#3094C6",
  },
  {
    number: "3",
    title: "Kies je woning",
    description: "Sla woningen op, vergelijk met je budget en volg je bod",
    color: "#619C30",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f8f4f8" }} id="hoe-het-werkt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Klaar in 3 stappen
          </h2>
          <p className="text-xl text-gray-500">
            Van niets tot volledig inzicht in 2 minuten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Step number circle */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-extrabold mb-6 shadow-lg relative z-10"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            className="px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#99248F" }}
          >
            Bereken mijn hypotheek →
          </button>
          <p className="text-gray-400 text-sm mt-4">Gratis · Geen spam · Direct resultaat</p>
        </div>
      </div>
    </section>
  );
}
