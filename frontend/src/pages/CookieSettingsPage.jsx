import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CookieSettingsPage = () => {
  const [settings, setSettings] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("cookieSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleToggle = (type) => {
    setSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    // Implement cookie setting logic here
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Cookie-Einstellungen</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Cookie-Einstellungen</h1>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          {/* Necessary Cookies */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notwendige Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Grundfunktionen der Website (können nicht deaktiviert werden)
                </p>
              </div>
              <div
                className={`w-12 h-6 rounded-full p-1 cursor-not-allowed bg-gray-200`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-sm transform translate-x-6" />
              </div>
            </div>
          </div>

          {/* Preferences Cookies */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Präferenzen</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Merken Ihre bevorzugten Einstellungen
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("preferences")}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  settings.preferences ? "bg-shop-red" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    settings.preferences ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Statistics Cookies */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Statistiken</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Hilfe uns die Website zu verbessern
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("statistics")}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  settings.statistics ? "bg-shop-red" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    settings.statistics ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Marketing</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Personalisierte Werbung und Inhalte
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle("marketing")}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  settings.marketing ? "bg-shop-red" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    settings.marketing ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-shop-red text-white rounded-md hover:bg-shop-red-dark transition-colors"
          >
            Einstellungen speichern
          </button>
          <Link
            to="/"
            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-center transition-colors"
          >
            Abbrechen
          </Link>
        </div>
      </form>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/agb" className="text-gray-600 hover:text-shop-red">
            AGB
          </Link>
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

export default CookieSettingsPage;
