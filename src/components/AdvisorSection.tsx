import { MapPin, Phone, Mail, Globe, Award } from "lucide-react";

export default function AdvisorSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/assets/placeholder.svg" alt="placeholder" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl text-white"
              style={{ backgroundColor: "#99248F" }}
            >
              <div className="flex items-center gap-3">
                <Award size={28} />
                <div>
                  <div className="font-bold text-lg">27 jaar</div>
                  <div className="text-sm opacity-80">Ervaring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#619C30" }}>
              Hallo, ik ben
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Alex Noordermeer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Mijn naam is Alex Noordermeer. Ik ben financieel adviseur met 27 jaar ervaring en heb al meer dan 3.000 mensen geholpen met de grootste financiële beslissingen van hun leven. Ik werk door heel Zuid-Holland en omstreken — van Rotterdam en Dordrecht tot Den Haag en de eilanden.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ik heb dit hulpmiddel gemaakt omdat ik elke week mensen spreek die al jarenlang met onzekerheid rondlopen over hun overwaarde. Met dit hulpmiddel kunt u in 5 minuten zien wat er in uw specifieke situatie indicatief mogelijk is — zonder kosten, zonder verplichtingen.
            </p>

            {/* Contact info */}
            <div className="rounded-2xl p-6 space-y-3" style={{ backgroundColor: "#f8f4f8" }}>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={16} style={{ color: "#99248F" }} />
                <span className="text-sm">Warmoezenierstraat 24, 3231 BR Brielle</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={16} style={{ color: "#3094C6" }} />
                <a href="tel:+31181356255" className="text-sm hover:underline">0181-356255</a>
                <span className="text-gray-400 text-xs">·</span>
                <a href="tel:+31612826368" className="text-sm hover:underline">06-12826368</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={16} style={{ color: "#619C30" }} />
                <a href="mailto:alex@consumentenzaken.com" className="text-sm hover:underline">alex@consumentenzaken.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Globe size={16} style={{ color: "#99248F" }} />
                <a href="https://www.consumentenzaken.com" className="text-sm hover:underline">www.consumentenzaken.com</a>
              </div>
              <div className="pt-2 border-t border-purple-100">
                <p className="text-xs text-gray-400">SEH-geregistreerd · WFT-gediplomeerd · AFM-nummer 12019426 · Kifid 300.013701</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
