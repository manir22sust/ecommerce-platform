import { Link } from "react-router-dom";

const Footer = () => {
  const features = [
    { text: "Sicherer Kauf auf Rechnung", sup: "*" },
    { text: "Kostenlose Rücksendung" },
    { text: "Einfache Ratenzahlung", sup: "**" },
    { text: "Ratenschutz-Versicherung", sup: "**" },
  ];

  const legalLinks = [
    { text: "Cookie-Einstellungen", path: "/cookies" },
    { text: "AGB", path: "/agb" },
    { text: "Datenschutz", path: "/datenschutz" },
    { text: "Widerrufsrecht", path: "/widerruf" },
    { text: "Produktsicherheitsrückrufe", path: "/rueckrufe" },
    { text: "Lob & Kritik", path: "/feedback" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 group cursor-default"
              aria-label={item.text}
            >
              <div className="flex-1">
                <p className="text-gray-700 font-medium transition-colors group-hover:text-gray-900">
                  {item.text}
                  {item.sup && <sup className="ml-1 text-xs">{item.sup}</sup>}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          {legalLinks.map((link, index) => (
            <span key={link.text} className="flex items-center">
              <Link
                to={link.path}
                className="text-gray-500 hover:text-gray-700 text-sm transition-colors px-2 py-1 rounded hover:bg-gray-50"
                aria-label={link.text}
              >
                {link.text}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="text-gray-300 last:hidden">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Price Info */}
        <p className="text-center text-gray-500 text-sm mb-4">
          Preisangaben inkl. Steuer und zzgl. Service- und Versandkosten
        </p>

        {/* Footnotes */}
        <div className="text-center text-xs text-gray-400 space-y-1">
          <p>
            <sup aria-hidden="true">*</sup>
            <span className="sr-only">Hinweis 1:</span>
            Bonität vorausgesetzt
          </p>
          <p>
            <sup aria-hidden="true">**</sup>
            <span className="sr-only">Hinweis 2:</span>
            Bonität vorausgesetzt, gegen Aufpreis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
