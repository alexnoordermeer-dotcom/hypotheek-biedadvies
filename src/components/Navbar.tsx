import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ background: "linear-gradient(135deg, #99248F, #3094C6)" }}
            >
              C
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-tight block">Consumentenzaken</span>
              <span className="text-xs italic leading-tight block" style={{ color: "#99248F" }}>Zonder stress, meer cash!</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#calculator" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Bereken</a>
            <a href="#hoe-het-werkt" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Hoe het werkt</a>
            <a href="#tools" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Tools</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">FAQ</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Inloggen</button>
            <button
              className="px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#99248F" }}
            >
              Gratis starten
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 rounded-lg text-gray-600" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a href="#calculator" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Bereken</a>
          <a href="#hoe-het-werkt" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Hoe het werkt</a>
          <a href="#tools" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Tools</a>
          <a href="#faq" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>FAQ</a>
          <button
            className="w-full py-3 rounded-full text-white font-semibold text-sm"
            style={{ backgroundColor: "#99248F" }}
          >
            Gratis starten
          </button>
        </div>
      )}
    </nav>
  );
}
