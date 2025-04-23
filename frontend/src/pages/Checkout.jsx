const Checkout = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      {/* Delivery Address Section */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold">Lieferanschrift</h1>
          <button className="text-blue-600 hover:underline text-sm">
            Lieferanschrift ändern
          </button>
        </div>
        <div className="text-gray-600 space-y-1">
          <p>Md.Manir Uddin</p>
          <p>Bahnstr. 94</p>
          <p>42327 Wuppertal</p>
        </div>
      </div>

      {/* Payment Section */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Zahlungsart</h2>
          <button className="text-blue-600 hover:underline text-sm">
            Zahlungsart ändern
          </button>
        </div>
        <div className="text-gray-600">
          <p>über OTTO Payments</p>
          <p className="mt-1">Auf Rechnung</p>
        </div>
        <div className="mt-2 p-2 bg-gray-50 rounded">
          <div className="flex justify-between items-center">
            <span>100 Tage Zahlpause</span>
            <span className="font-medium">0,55 €</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="border-b pb-4 mb-4">
        <div className="mb-2">
          <h3 className="font-semibold">
            1 x RMK T-Shirt Damen Shirt Top Sommer Basic Be Happy Glücklich aus
            Baumwolle
          </h3>
          <p className="text-gray-600">Weiß-Schwarz, 34</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-600 text-sm">
            lieferbar - in 7-9 Werktagen bei dir
          </span>
          <div className="text-sm text-gray-500">
            <p>Verkäufer: Zahida Fashion GmbH</p>
            <button className="text-blue-600 hover:underline">
              Datenschutz
            </button>
          </div>
        </div>
      </div>

      {/* Vouchers & Pricing */}
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Gutscheine</h3>
          <div className="bg-gray-50 p-2 rounded">
            <h4 className="text-sm text-gray-600">Rabatte</h4>
          </div>
        </div>

        {/* Price Table */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Zwischensumme</span>
            <span>9,90 €</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Versandkosten – Zahida Fashion GmbH (Paket)</span>
            <span>5,90 €</span>
          </div>
        </div>
      </div>

      {/* Total & Legal */}
      <div className="border-t pt-4">
        <div className="flex justify-between font-semibold text-lg mb-2">
          <span>Gesamtsumme</span>
          <span>15,80 €</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          alle Angaben in Euro, inkl. Steuer
        </p>
        <p className="text-sm text-gray-500">
          Es gelten die AGB von OTTO auch hinsichtlich des Widerrufsrechts
        </p>
      </div>

      {/* Order Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors">
          Jetzt zum genannten Preis bestellen
        </button>
      </div>
    </div>
  );
};

export default Checkout;
