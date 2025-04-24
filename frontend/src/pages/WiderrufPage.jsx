import { Link } from "react-router-dom";

const WiderrufPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Widerrufsrecht</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Widerrufsbelehrung</h1>

      <div className="prose">
        <h2 className="text-xl font-bold mb-4">Widerrufsrecht</h2>
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen...
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">Widerrufsfrist</h2>
        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag...</p>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Muster-Widerrufsformular</h3>
          <p className="text-sm">
            An: Shop Fashion GmbH, Musterstraße 123, 50667 Köln, E-Mail:
            widerruf@shop-fashion.de
            <br />
            <br />
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über den Kauf der folgenden Waren (*)
            <br />
            Bestellt am (*)/erhalten am (*)
            <br />
            Name des/der Verbraucher(s)
            <br />
            Anschrift des/der Verbraucher(s)
            <br />
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
            <br />
            Datum
            <br />
            <br />
            (*) Unzutreffendes streichen
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/agb" className="text-gray-600 hover:text-shop-red">
            AGB
          </Link>
          <Link to="/datenschutz" className="text-gray-600 hover:text-shop-red">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WiderrufPage;
