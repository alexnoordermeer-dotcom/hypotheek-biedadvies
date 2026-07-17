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
            <p className="text-blue-200 text-sm leading-relaxed" style={{ opacity: 0.6 }}>
              Indicatieve berekening op basis van Nibud 2026 — geen financieel advies. Raadpleeg altijd een erkend hypotheekadviseur voor bindende uitspraken.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest" style={{ opacity: 0.6 }}>Menu</h4>
            <ul className="space-y-2">
              {[
                { label: "Hoe het werkt", href: "#hoe-het-werkt" },
                { label: "Tools", href: "#tools" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-blue-200 text-sm transition-opacity hover:opacity-100" style={{ opacity: 0.7 }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest" style={{ opacity: 0.6 }}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#99248F", opacity: 0.8 }} />
                <span className="text-blue-200 text-sm" style={{ opacity: 0.7 }}>Warmoezenierstraat 24, 3231 BR Brielle</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} style={{ color: "#3094C6", opacity: 0.8 }} />
                <a href="tel:+31181356255" className="text-blue-200 text-sm hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>0181-356255</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} style={{ color: "#3094C6", opacity: 0.8 }} />
                <a href="tel:+31612826368" className="text-blue-200 text-sm hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>06-12826368</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} style={{ color: "#619C30", opacity: 0.8 }} />
                <a href="mailto:alex@consumentenzaken.com" className="text-blue-200 text-sm hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>alex@consumentenzaken.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={15} style={{ color: "#99248F", opacity: 0.8 }} />
                <a href="https://www.consumentenzaken.com" className="text-blue-200 text-sm hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>www.consumentenzaken.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200 text-xs" style={{ opacity: 0.5 }}>
            © 2026 Consumentenzaken · KVK 59255838 · AFM 12019426 · Kifid 300.013701
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-200 text-xs hover:opacity-80 transition-opacity" style={{ opacity: 0.5 }}>Privacyverklaring</a>
            <a href="#" className="text-blue-200 text-xs hover:opacity-80 transition-opacity" style={{ opacity: 0.5 }}>Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
