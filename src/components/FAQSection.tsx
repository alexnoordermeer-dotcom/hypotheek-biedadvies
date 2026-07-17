import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wat is het verschil tussen een starter en een doorstromer?",
    answer: "Een starter koopt voor het eerste een woning en heeft geen eigen woning om te verkopen. Een doorstromer heeft al een koopwoning en verkoopt die om een nieuwe te kopen. Doorstromers kunnen hun overwaarde inzetten als eigen geld voor de volgende woning.",
  },
  {
    question: "Hoe wordt mijn maximale hypotheek berekend?",
    answer: "Je maximale hypotheek wordt berekend op basis van je bruto jaarinkomen (en dat van een eventuele partner), de actuele toetsrente conform AFM-regeling en de Nibud 2026 normtabel. Lopende schulden (zoals een studieschuld of autolening) verlagen je maximale hypotheek.",
  },
  {
    question: "Wat is NHG en kom ik er voor in aanmerking?",
    answer: "NHG staat voor Nationale Hypotheek Garantie. Het is een vangnet als je door onvoorziene omstandigheden je hypotheek niet meer kunt betalen. De NHG-grens in 2026 is €470.000. Als je woning onder deze grens valt, kom je mogelijk in aanmerking. NHG geeft je ook recht op een lagere rente.",
  },
  {
    question: "Wat is de startersvrijstelling?",
    answer: "Starters tussen 18 en 35 jaar die een woning kopen onder €510.000 betalen geen overdrachtsbelasting (2%). Dit scheelt duizenden euro's aan kosten koper. De berekening houdt hier automatisch rekening mee.",
  },
  {
    question: "Hoe werkt het biedadvies?",
    answer: "Je plakt een Funda-link in het systeem. Op basis van de WOZ-waarde, verkoophistorie in de buurt en jouw maximale hypotheek krijg je een concreet biedadvies. Dit is indicatief — een aankoopmakelaar kan aanvullend advies geven.",
  },
  {
    question: "Hoe bereken ik de waarde van mijn huidige woning als doorstromer?",
    answer: "Op basis van de WOZ-waarde, recente verkoopprijzen in jouw buurt en de staat van je woning geeft het systeem een indicatieve woningwaarde. De overwaarde (woningwaarde minus resterende hypotheek) kun je inzetten als eigen geld voor je volgende woning.",
  },
  {
    question: "Is dit een financieel advies?",
    answer: "Nee. Alle berekeningen zijn indicatief op basis van Nibud 2026 normen. Het is geen financieel advies. Voor een bindende hypotheekofferte heb je altijd een erkend hypotheekadviseur nodig. Alex Noordermeer staat klaar voor een gratis oriëntatiegesprek.",
  },
  {
    question: "Kost dit iets?",
    answer: "Nee, het gebruik van dit hulpmiddel is volledig gratis. Je betaalt niets en je zit nergens aan vast.",
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
          <p className="text-gray-500">Staat je vraag er niet tussen? Neem gerust contact op met Alex.</p>
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
