const OrderSummary = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Zwischensumme</span>
          <span className="font-medium">9,90 €</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Versandkosten – Zahida Fashion GmbH (Paket)</span>
          <span>5,90 €</span>
        </div>

        <div className="flex justify-between border-t pt-3">
          <span className="font-semibold">Gesamtsumme</span>
          <span className="font-semibold text-lg text-blue-600">15,80 €</span>
        </div>
      </div>

      {/* Legal Text */}
      <p className="text-xs text-gray-500 text-center mb-6">
        alle Angaben in Euro, inkl. Steuer
        <br />
        Es gelten die auch hinsichtlich des Widerrufsrechts
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Zurück zum Warenkorb
        </button>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Jetzt zum genannten Preis bestellen
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
