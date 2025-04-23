import { Link } from "react-router-dom";
import {
  PencilIcon,
  ShoppingBagIcon,
  TagIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const OrderSummary = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-center mb-6 gap-2 text-blue-600">
        <ShoppingBagIcon className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Bestellübersicht</h1>
      </div>

      {/* Delivery Address Section */}
      <div className="mb-8 group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Lieferung
            </span>
            Lieferanschrift
          </h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
            <PencilIcon className="w-4 h-4" />
            Ändern
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            Md.Manir Uddin
            <br />
            Bahnstr. 94
            <br />
            42327 Wuppertal
          </p>
        </div>
      </div>

      {/* Payment Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Zahlung
            </span>
            Zahlungsmethode
          </h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
            <PencilIcon className="w-4 h-4" />
            Ändern
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-2">
          <p className="font-medium">über SHOP Payments</p>
          <p className="text-sm text-gray-600">Auf Rechnung</p>
          <div className="mt-3 p-3 bg-white rounded-md border border-blue-200">
            <div className="flex justify-between items-center">
              <span className="text-sm">100 Tage Zahlpause</span>
              <span className="font-medium text-blue-600">0,55 €</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex gap-4 mb-4">
          <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">
              RMK T-Shirt Damen Shirt Top Sommer Basic Be Happy
            </h3>
            <p className="text-sm text-gray-600">Weiß-Schwarz, 34</p>
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <span>✓</span> Lieferbar in 7-9 Werktagen
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 border-t pt-3">
          Verkäufer: Zahida Fashion GmbH
        </p>
      </div>

      {/* Vouchers */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <TagIcon className="w-5 h-5 text-purple-600" />
          Gutscheine & Rabatte
        </h3>
        <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer hover:bg-purple-100 transition-colors">
          <span className="text-purple-600">+ Gutschein hinzufügen</span>
        </div>
      </div>

      {/* Totals */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between">
          <span>Zwischensumme</span>
          <span>5,90 €</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Versandkosten</span>
          <span>5,90 €</span>
        </div>
        <div className="border-t pt-4 flex justify-between text-xl font-bold">
          <span>Gesamtsumme</span>
          <span className="text-blue-600">15,80 €</span>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Alle Preise inkl. gesetzl. MwSt.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t pt-6 space-y-6">
        <p className="text-sm text-gray-500 text-center">
          Mit Klick auf "Jetzt kaufen" akzeptierst du unsere
          <Link href="#" className="text-blue-600 hover:underline ml-1">
            AGB
          </Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full">
            <ChevronLeftIcon className="w-5 h-5" />
            Zurück zum Warenkorb
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-shadow w-full font-medium">
            Jetzt sicher kaufen
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
