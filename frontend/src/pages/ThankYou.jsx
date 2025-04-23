import {
  CheckCircleIcon,
  TruckIcon,
  ShoppingBagIcon,
  HomeIcon,
  ArrowPathIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const ThankYou = () => {
  const orderDetails = {
    orderNumber: "2359884",
    items: [
      { name: "RMK T-Shirt Damen", quantity: 1, price: 15.8 },
      { name: "Sommerhut Baumwolle", quantity: 2, price: 24.99 },
    ],
    shippingAddress: {
      name: "Max Mustermann",
      street: "Musterstraße 123",
      city: "12345 Musterstadt",
    },
    paymentMethod: "Kreditkarte",
    totalAmount: 65.78,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 relative">
          <div className="animate-bounce-slow">
            <CheckCircleIcon className="w-24 h-24 text-emerald-500 mx-auto mb-6 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎉 Vielen Dank für Ihre Bestellung!
          </h1>
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-gray-600 mb-4">
              Ihre Bestellung{" "}
              <span className="font-semibold text-emerald-600">
                #{orderDetails.orderNumber}
              </span>{" "}
              ist erfolgreich eingegangen!
            </p>
            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm">
              <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin-slow" />
              Wir bearbeiten Ihre Bestellung
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Order Summary Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <ShoppingBagIcon className="w-6 h-6 mr-2 text-blue-600" />
              Bestellübersicht
            </h2>

            {/* Items List */}
            <div className="space-y-4 mb-8">
              {orderDetails.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
                >
                  <div>
                    <span className="font-medium text-gray-900">
                      {item.quantity}x{" "}
                    </span>
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {(item.price * item.quantity).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>

            {/* Order Details */}
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-medium mb-2 text-gray-900">
                  📬 Lieferadresse
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {orderDetails.shippingAddress.name}
                  <br />
                  {orderDetails.shippingAddress.street}
                  <br />
                  {orderDetails.shippingAddress.city}
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-medium mb-2 text-gray-900">
                  💳 Zahlungsmethode
                </h3>
                <p className="text-gray-600">{orderDetails.paymentMethod}</p>
                <div className="mt-4 pt-4 border-t border-blue-100">
                  <h3 className="font-medium mb-2 text-gray-900">
                    Gesamtbetrag
                  </h3>
                  <p className="text-2xl font-bold text-emerald-600">
                    {orderDetails.totalAmount.toFixed(2)} €
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <TruckIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Ihr Bestellverlauf</h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-blue-100 space-y-8">
              {[
                {
                  status: "Bestellung erhalten",
                  time: "Heute, 14:32 Uhr",
                  active: true,
                },
                { status: "In Bearbeitung", time: "Voraussichtlich morgen" },
                { status: "Versandt", time: "In 1-2 Werktagen" },
                { status: "Zugestellt", time: "Bis 25. Oktober" },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute w-3 h-3 rounded-full -left-[9px] ${
                      step.active ? "bg-emerald-500" : "bg-blue-200"
                    }`}
                  />
                  <div className="ml-4">
                    <h3
                      className={`font-medium ${
                        step.active ? "text-emerald-600" : "text-gray-500"
                      }`}
                    >
                      {step.status}
                    </h3>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Section */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-4">
                💬 Brauchen Sie Hilfe?
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:service@beispielshop.de"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="mr-2">✉️</span>
                  service@beispielshop.de
                </a>
                <a
                  href="tel:0800123456789"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="mr-2">📞</span>
                  0800 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Zur Startseite
            </a>
            <button className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <ShareIcon className="w-5 h-5 mr-2" />
              Bestellung teilen
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 opacity-75">
            <div className="flex items-center">🔒 SSL Verschlüsselung</div>
            <div className="flex items-center">🌱 Klimaneutraler Versand</div>
            <div className="flex items-center">⭐ 4.9/5 Bewertungen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
