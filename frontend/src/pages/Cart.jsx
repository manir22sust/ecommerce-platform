import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import {
  XMarkIcon,
  HeartIcon,
  ArrowRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "../hooks/useUser";

const Cart = () => {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } =
    useCart();
  const { user } = useUser();
  console.log("user", user);

  // Calculate total savings
  const totalSavings = items.reduce(
    (acc, item) =>
      acc + ((item.originalPrice || item.price) - item.price) * item.quantity,
    0
  );

  // Shipping cost calculation
  const shippingCost = totalPrice > 50 ? 0 : 5.9;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
      {/* Step Indicator */}
      <div className="mb-10 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 transform -translate-y-1/2 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-300 transition-all duration-500"
            style={{ width: "33%" }}
          ></div>
        </div>
        <div className="flex justify-between">
          {["Warenkorb", "Anmelden", "Absenden", "Bestätigt"].map(
            (label, index) => (
              <div key={label} className="relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                ${
                  index === 0 ? "bg-red-600 scale-125 shadow-lg" : "bg-gray-100"
                }`}
                >
                  <span
                    className={`font-medium ${
                      index === 0 ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div
                  className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm 
                ${index === 0 ? "font-bold text-red-600" : "text-gray-500"}`}
                >
                  {label}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Cart Items */}
      {items.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBagIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">Ihr Warenkorb ist leer</p>
          <Link
            to="/"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            Weiter einkaufen
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.cartId}
              className="border p-6 rounded-2xl mb-8 transition-all hover:shadow-lg group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-48 h-48 object-contain bg-gray-50 p-4 rounded-xl"
                  />
                  {item.popular && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      🔥 Popular
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-3">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.name}
                    {item.variant && (
                      <span className="block text-lg text-gray-500 mt-1">
                        {item.variant}
                      </span>
                    )}
                  </h2>

                  {/* Variant Badges */}
                  <div className="flex flex-wrap gap-3 items-center">
                    {item.selectedColor && (
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {item.selectedColor}
                      </div>
                    )}
                    {item.selectedSize && (
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        Größe {item.selectedSize}
                      </div>
                    )}
                    <div className="text-green-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Lieferbar in 7-9 Tagen
                    </div>
                  </div>

                  {/* Product Actions */}
                  <div className="flex items-center gap-4 text-sm">
                    <button className="text-red-600 hover:text-red-700 flex items-center font-medium">
                      <HeartIcon className="w-5 h-5 mr-2" />
                      Merkzettel
                    </button>
                    <div className="text-gray-500">
                      Verkäufer:{" "}
                      <span className="font-medium">{item.seller}</span>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-full">
                    <button
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="text-2xl font-bold text-red-600">
                      €{(item.price * item.quantity).toFixed(2)}
                    </div>
                    {item.originalPrice && (
                      <div className="line-through text-gray-400">
                        €{(item.originalPrice * item.quantity).toFixed(2)}
                      </div>
                    )}
                    {item.originalPrice && (
                      <div className="text-green-700 text-sm font-medium flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 2a2 2 0 012-2h2a2 2 0 012 2v1h3a1 1 0 011 1v7a1 1 0 01-1 1h-1v3a3 3 0 01-3 3H6a3 3 0 01-3-3v-3H2a1 1 0 01-1-1V4a1 1 0 011-1h3V2zm10 6V5h2v3h-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Sie sparen €
                        {(item.originalPrice - item.price).toFixed(2)}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="text-gray-400 hover:text-red-600 transition-colors p-2 -m-2"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl mb-8">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Zwischensumme</span>
                <span className="font-medium">€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Versandkosten</span>
                <span>€{shippingCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">
                  Gesamtsumme
                </span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600">
                    €{grandTotal.toFixed(2)}
                  </div>
                  <span className="text-sm text-gray-500">
                    inkl. MwSt. · Kostenloser Rückversand
                  </span>
                </div>
              </div>
            </div>

            {totalSavings > 0 && (
              <div className="bg-green-50 p-4 rounded-xl flex items-center gap-3 border border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-green-700">
                  <span className="font-medium">Gespart:</span> €
                  {totalSavings.toFixed(2)}
                  <span className="ml-2">💰 30 Tage Geld-zurück-Garantie</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse md:flex-row gap-4 mt-12 justify-between">
            <Link
              to="/"
              className="flex items-center justify-center gap-3 px-8 py-4 text-gray-600 hover:text-gray-800 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all font-medium"
            >
              <ArrowRightIcon className="w-6 h-6 rotate-180" />
              Weiter einkaufen
            </Link>

            <Link
              to="/checkout"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-bold"
            >
              Zur Kasse gehen
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-6 items-center justify-center text-gray-500 text-sm">
            {[
              "Sichere Bezahlung",
              "SSL verschlüsselt",
              "Klimaneutraler Versand",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                {badge === "Sichere Bezahlung" && (
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {badge === "SSL verschlüsselt" && (
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                )}
                {badge === "Klimaneutraler Versand" && (
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {badge}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
