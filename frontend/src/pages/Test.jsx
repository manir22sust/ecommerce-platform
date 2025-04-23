import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const CheckoutComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 15.8;
  const shippingCost = 5.9;
  const subtotal = unitPrice * quantity;
  const total = subtotal + shippingCost;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleRemove = () => alert("Remove item functionality");

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Product Section */}
      <div className="p-4 border rounded-lg bg-white shadow-sm relative">
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors"
        >
          <TrashIcon className="w-5 h-5" />
        </button>

        <div className="pr-6">
          <h3 className="text-lg font-semibold mb-2">
            RMK T-Shirt Damen Shirt Top Sommer Basic Be Happy Glücklich aus
            Baumwolle
          </h3>
          <p className="text-gray-600 mb-2">Weiß-Schwarz, 34</p>
          <p className="text-green-600 text-sm mb-4">
            ✓ lieferbar - in 7-9 Werktagen bei dir
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={handleDecrement}
              disabled={quantity === 1}
              className={`px-3 py-1 ${
                quantity === 1 ? "opacity-50" : "hover:bg-gray-50"
              }`}
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 hover:bg-gray-50"
            >
              +
            </button>
          </div>

          <div className="text-right">
            <p className="text-gray-600 line-through">19,99 €</p>
            <p className="text-lg font-semibold">
              {(unitPrice * quantity).toFixed(2)} €
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm border-t pt-3">
          <span className="text-gray-500 mb-2 sm:mb-0">
            Verkäufer: Zahida Fashion GmbH
          </span>
          <a
            href="#datenschutz"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Datenschutz
          </a>
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Zwischensumme</span>
            <span className="font-medium">{subtotal.toFixed(2)} €</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Versandkosten – Zahida Fashion GmbH (Paket)</span>
            <span>{shippingCost.toFixed(2)} €</span>
          </div>

          <div className="flex justify-between border-t pt-3">
            <span className="font-semibold">Gesamtsumme</span>
            <span className="font-semibold text-lg text-blue-600">
              {total.toFixed(2)} €
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mb-6">
          alle Angaben in Euro, inkl. Steuer
          <br />
          Es gelten die AGB von auch hinsichtlich des Widerrufsrechts
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Zurück zum Warenkorb
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
            Jetzt zum genannten Preis bestellen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
