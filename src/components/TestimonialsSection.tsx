const testimonials = [
  {
    quote: "We waren 68 en 70 en hadden veel vragen over onze overwaarde, en eerlijk gezegd ook flink wat twijfels. Alex nam de tijd om alles rustig uit te leggen, zonder druk en zonder haast. We begrijpen nu precies wat er kan, we hoeven ons huis niet te verlaten, en we voelen ons eindelijk gerust. Aanrader voor iedereen in dezelfde situatie.",
    name: "Myra (68) & Bram (70)",
    role: "klanten van Alex Noordermeer",
    color: "#99248F",
  },
  {
    quote: "Mijn pensioen zit in mijn huis. Ik werkte jarenlang als zzp'er en bouwde nauwelijks pensioen op. Bij Welvarend Wonen vond ik transparante communicatie en betrouwbaarheid. Nu ontvang ik maandelijks een bedrag en kan ik genieten van mijn vrije tijd. Het is financieel heel rustig. Ik kan naar mijn broer in Valencia en genieten van mijn leven.",
    name: "Paul Pelsser",
    role: "klant via Welvarend Wonen",
    color: "#3094C6",
  },
  {
    quote: "We wilden meer uit het leven halen zonder ons geliefde appartement te verlaten. Samen met onze kinderen namen we de tijd om alles te begrijpen. De persoonlijke benadering en openheid gaf vertrouwen. Nu hebben we de financiële ruimte om te genieten. Je wordt nergens in gepusht. Het proces gaat in jouw tempo. Dat gaf vertrouwen.",
    name: "Anny & Berry van Gool",
    role: "klanten via Welvarend Wonen",
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
            Wat klanten zeggen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl font-serif leading-none mb-4" style={{ color: t.color, opacity: 0.3 }}>
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
