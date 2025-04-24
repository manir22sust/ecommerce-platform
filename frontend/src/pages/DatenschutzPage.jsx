import { Link } from "react-router-dom";
import getCurrentDateFormatted from "../utils/getCurrentDateFormatted ";
const DatenschutzPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Datenschutz</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      <p className="text-sm text-gray-500 mb-8">
        Letzte Aktualisierung: {getCurrentDateFormatted()}
      </p>

      <div className="prose">
        <h2 className="text-xl font-bold mb-4">1. Verantwortlicher</h2>
        <p>
          Shop Fashion GmbH
          <br />
          Musterstraße 123
          <br />
          50667 Köln
          <br />
          Datenschutzbeauftragter: Max Mustermann
          <br />
          E-Mail: datenschutz@Shop-fashion.de
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">2. Erhobene Daten</h2>
        <p>
          Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies
          für die Begründung...
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">3. Cookies</h2>
        <p>
          Wir setzen folgende Cookie-Arten ein:
          <br />
          - Notwendige Cookies
          <br />
          - Performance-Cookies
          <br />- Marketing-Cookies
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">4. Ihre Rechte</h2>
        <p>
          Sie haben gemäß DSGVO das Recht auf:
          <br />
          • Auskunft
          <br />
          • Berichtigung
          <br />
          • Löschung
          <br />
          • Einschränkung der Verarbeitung
          <br />
          • Datenübertragbarkeit
          <br />• Widerspruch
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/agb" className="text-gray-600 hover:text-shop-red">
            AGB
          </Link>
          <Link to="/widerruf" className="text-gray-600 hover:text-shop-red">
            Widerrufsrecht
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
