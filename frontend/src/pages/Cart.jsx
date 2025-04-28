import React from "react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
      {/* Step Progress - Animated */}
      <div className="mb-10 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 transform -translate-y-1/2 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-300 transition-all duration-500"
            style={{ width: "33%" }}
          ></div>
        </div>
        <div className="flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                ${
                  step === 1 ? "bg-red-600 scale-125 shadow-lg" : "bg-gray-100"
                } 
                ${step < 1 ? "hover:bg-gray-200" : ""}`}
              >
                <span
                  className={`font-medium ${
                    step === 1 ? "text-white" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
              <div
                className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm 
                ${step === 1 ? "font-bold text-red-600" : "text-gray-500"}`}
              >
                {["Warenkorb", "Anmelden", "Absenden", "Bestätigt"][step - 1]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Item - Enhanced */}
      <div className="border p-6 rounded-2xl mb-8 transition-all hover:shadow-lg group">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative">
            <img
              src="../assets/images/categories/Jackets-v1.jpg"
              alt="RMK T-Shirt"
              className="w-48 h-48 object-contain bg-gray-50 p-4 rounded-xl"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              🔥 Popular
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">
              RMK T-Shirt Damen Shirt Top Sommer Basic
              <span className="block text-lg text-gray-500 mt-1">
                Be Happy Glücklich aus Baumwolle
              </span>
            </h2>

            <div className="flex flex-wrap gap-3 items-center">
              <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Weiß-Schwarz
              </div>
              <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Größe 34
              </div>
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

            <div className="flex items-center gap-4 text-sm">
              <button className="text-red-600 hover:text-red-700 flex items-center font-medium">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Merkzettel
              </button>
              <div className="text-gray-500">
                Verkäufer:{" "}
                <span className="font-medium">Zahida Fashion GmbH</span>
              </div>
            </div>
          </div>

          {/* Price Section - Interactive */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-full">
              <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md">
                −
              </button>
              <span className="w-8 text-center">1</span>
              <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md">
                +
              </button>
            </div>

            <div className="text-right space-y-1">
              <div className="text-2xl font-bold text-red-600">9,90 €</div>
              <div className="line-through text-gray-400">29,90 €</div>
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
                Sie sparen 20,00 €
              </div>
            </div>

            <button className="text-gray-400 hover:text-red-600 transition-colors p-2 -m-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Section - Glassmorphism Effect */}
      <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl mb-8 backdrop-blur-lg bg-opacity-50">
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Zwischensumme</span>
            <span className="font-medium">9,90 €</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Versandkosten</span>
            <span>5,90 €</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">
              Gesamtsumme
            </span>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-600">15,80 €</div>
              <span className="text-sm text-gray-500">
                inkl. MwSt. · Kostenloser Rückversand
              </span>
            </div>
          </div>
        </div>

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
            <span className="font-medium">Gespart:</span> 20,00 € ·
            <span className="ml-2">💰 30 Tage Geld-zurück-Garantie</span>
          </div>
        </div>
      </div>

      {/* Action Buttons - Modern Gradient */}
      <div className="flex flex-col-reverse  md:flex-row gap-4 mt-12 justify-between">
        <button className="flex items-center justify-center gap-3 px-8 py-4 text-gray-600 hover:text-gray-800 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all font-medium">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          Weiter einkaufen
        </button>

        <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-bold">
          Zur Kasse gehen
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-6 items-center justify-center text-gray-500 text-sm">
        <div className="flex items-center gap-2">
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
          Sichere Bezahlung
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          SSL verschlüsselt
        </div>
        <div className="flex items-center gap-2">
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
          Klimaneutraler Versand
        </div>
      </div>
    </div>
  );
};

export default Cart;
