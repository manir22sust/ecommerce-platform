import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBagIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const order = state;
  // Add loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [state]);

  if (loading) return <div>Loading...</div>;

  // Fallback for missing order data
  if (!order) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Keine Bestellung gefunden</h2>
          <Link
            to="/"
            className="text-red-600 hover:text-red-700 flex items-center justify-center gap-2"
          >
            Zurück zur Startseite
            <CheckCircleIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  // Safely calculate total and items
  const itemsTotal =
    order.items?.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
      0
    ) || 0;
  const formattedTotal = (order.total || itemsTotal).toFixed(2);
  const deliveryDate =
    order.estimatedDelivery ||
    new Date(Date.now() + 3 * 86400000).toLocaleDateString("de-DE");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <CheckCircleIcon className="w-20 h-20 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">
            Vielen Dank für Ihre Bestellung!
          </h1>
          {order.orderId && (
            <p className="text-gray-600">Bestellnummer: #{order.orderId}</p>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Bestellübersicht</h2>
          <div className="space-y-4">
            {(order.items || []).map((item) => (
              <div
                key={item.cartId || Math.random().toString(36).substr(2, 9)}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">
                    {item.name || "Unbekannter Artikel"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Menge: {item.quantity || 1}
                  </p>
                </div>
                <span>
                  €{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Gesamtsumme:</span>
            <span className="text-xl font-bold">€{formattedTotal}</span>
          </div>
          <p className="text-sm text-gray-600">
            Voraussichtliche Lieferung bis {deliveryDate}
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            Weiter einkaufen
            <ShoppingBagIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
