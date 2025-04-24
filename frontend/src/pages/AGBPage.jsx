import { Link } from "react-router-dom";
import getCurrentDateFormatted from "../utils/getCurrentDateFormatted ";
const AGBPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">AGB</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Letzte Aktualisierung: {getCurrentDateFormatted()}
      </p>

      <div className="prose">
        <h2 className="text-xl font-bold mb-4">§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen
          über unseren Online-Shop...
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">§ 2 Vertragspartner</h2>
        <p>
          Shop Fashion GmbH
          <br />
          Musterstraße 123
          <br />
          50667 Köln
          <br />
          Tel: +49 221 12345678
          <br />
          E-Mail: info@Shop-fashion.de
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">§ 3 Vertragsschluss</h2>
        <p>
          Die Darstellung der Produkte im Online-Shop stellt kein rechtlich
          bindendes Angebot dar...
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">
          § 4 Preise und Versandkosten
        </h2>
        <p>
          Alle Preise verstehen sich in Euro inklusive gesetzlicher
          Mehrwertsteuer...
        </p>

        <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Streitbeilegung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattrag zur
            Online-Streitbeilegung (OS) bereit:
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="text-shop-red hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/datenschutz" className="text-gray-600 hover:text-shop-red">
            Datenschutz
          </Link>
          <Link to="/widerruf" className="text-gray-600 hover:text-shop-red">
            Widerrufsrecht
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AGBPage;
