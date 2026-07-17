import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is dit een opeethypotheek?",
    answer: "Nee. Het Welvarend Wonen Overwaardeplan is geen opeethypotheek. U verkoopt een deel van de toekomstige waardestijging van uw woning, maar u blijft eigenaar en u blijft wonen in uw eigen huis. Er is geen rente die oploopt.",
  },
  {
    question: "Wat blijft er over voor mijn kinderen?",
    answer: "Dat hangt af van de gekozen looptijd en het uitkeringspercentage. In uw Persoonlijk Overzicht ziet u een erfenis-tijdlijn die precies laat zien wat er na 10, 15 en 20 jaar beschikbaar blijft voor uw erfgenamen.",
  },
  {
    question: "Wat is het addertje?",
    answer: "Er is geen verborgen addertje. Welvarend Wonen ontvangt bij verkoop of overlijden een deel van de woningwaarde. U ontvangt maandelijks een uitkering zolang u leeft. Alle voorwaarden worden transparant uitgelegd.",
  },
  {
    question: "Wie betaalt al die kosten?",
    answer: "Welvarend Wonen financiert het volledige traject, inclusief taxatie (€600), notariskosten (€2.750) en advieskosten. U betaalt €0 uit eigen zak.",
  },
  {
    question: "Wat als ik 100 jaar word?",
    answer: "U ontvangt uw maandelijkse uitkering levenslang — ook als u 100 jaar of ouder wordt. De looptijd in de berekening is een rekenkundige grens, niet een einddatum van uw uitkering.",
  },
  {
    question: "Wat als Welvarend Wonen failliet gaat?",
    answer: "Uw rechten zijn notarieel vastgelegd en beschermd. Bij een eventueel faillissement van Welvarend Wonen blijven uw rechten op de uitkering juridisch afdwingbaar.",
  },
  {
    question: "Zijn de bedragen gegarandeerd?",
    answer: "De bedragen in dit hulpmiddel zijn indicatief. Het definitieve bedrag wordt vastgesteld door Welvarend Wonen na taxatie en bouwkundige keuring. De indicatie geeft een betrouwbare schatting op basis van het officiële rekenmodel.",
  },
  {
    question: "Moet ik meteen iets beslissen?",
    answer: "Absoluut niet. Dit hulpmiddel is volledig vrijblijvend. U tekent niets en beslist zelf of en wanneer u een vervolgstap zet. Alex zet nooit druk.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#3094C6" }}>
            Vragen?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-gray-500">Staat uw vraag er niet tussen? Neem gerust contact op.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all"
              style={{ borderColor: openIndex === i ? "#99248F" : "#e5e7eb" }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform"
                  style={{
                    color: "#99248F",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
