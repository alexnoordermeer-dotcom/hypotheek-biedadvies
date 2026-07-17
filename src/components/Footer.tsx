import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f1b3d" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "linear-gradient(135deg, #99248F, #3094C6)" }}
              >
                C
              </div>
              <div>
                <span className="font-bold text-white text-lg block leading-tight">Consumentenzaken</span>
                <span className="text-xs italic opacity-60">Zonder stress, meer cash!</span>
              </div>
            </div>
            <p className="text-blue-200 opacity-60 text-sm leading-relaxed">
              Indicatieve berekening op basis van Nibud 2026 — geen financieel advies. Raadpleeg altijd een erkend hypotheekadviseur voor bindende uitspraken.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest opacity-60">Menu</h4>
            <ul className="space-y-2">
              {["Hoe het werkt", "Wat u krijgt", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-blue-200 opacity-70 hover:opacity-100 text-sm transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest opacity-60">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 opacity-60" style={{ color: "#99248F" }} />
                <span className="text-blue-200 opacity-70 text-sm">Warmoezenierstraat 24, 3231 BR Brielle</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0 opacity-60" style={{ color: "#3094C6" }} />
                <a href="tel:+31181356255" className="text-blue-200 opacity-70 hover:opacity-100 text-sm transition-opacity">0181-356255</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0 opacity-60" style={{ color: "#3094C6" }} />
                <a href="tel:+31612826368" className="text-blue-200 opacity-70 hover:opacity-100 text-sm transition-opacity">06-12826368</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0 opacity-60" style={{ color: "#619C30" }} />
                <a href="mailto:alex@consumentenzaken.com" className="text-blue-200 opacity-70 hover:opacity-100 text-sm transition-opacity">alex@consumentenzaken.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={15} className="flex-shrink-0 opacity-60" style={{ color: "#99248F" }} />
                <a href="https://www.consumentenzaken.com" className="text-blue-200 opacity-70 hover:opacity-100 text-sm transition-opacity">www.consumentenzaken.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200 opacity-50 text-xs">
            © 2026 Consumentenzaken · KVK 59255838 · BTW NL002015763B19 · AFM 12019426 · Kifid 300.013701
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-200 opacity-50 hover:opacity-80 text-xs transition-opacity">Privacyverklaring</a>
            <a href="#" className="text-blue-200 opacity-50 hover:opacity-80 text-xs transition-opacity">Algemene voorwaarden</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-blue-200 opacity-40 text-xs leading-relaxed">
            Disclaimer: Alle indicatieve bedragen in dit hulpmiddel zijn schattingen op basis van het Welvarend Wonen rekenmodel. Het definitieve bedrag wordt vastgesteld door Welvarend Wonen na taxatie en bouwkundige keuring. Dit hulpmiddel is geen financieel advies. Alex Noordermeer is SEH-geregistreerd financieel adviseur en werkzaam onder AFM-vergunning van VP Wonen Spijkenisse (AFM 12019426).
          </p>
        </div>
      </div>
    </footer>
  );
}
