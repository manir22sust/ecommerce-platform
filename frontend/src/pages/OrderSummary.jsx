import { useEffect, useState } from "react";
import { getMyOrders } from "../services/api";

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders(token);
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return <div className="text-center p-8">Lade Bestellungen...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Fehler: {error}</div>;
  }

  if (!orders.length) {
    return <div className="text-center p-8">Keine Bestellungen gefunden</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Bestellübersicht</h1>

      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-semibold">Bestellnummer: {order.id}</h2>
              <p className="text-gray-500 text-sm">{order.formattedDate}</p>
            </div>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {order.status}
            </span>
          </div>

          <div className="border-b mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order Items */}
            <div>
              <h3 className="font-medium mb-3">Artikel</h3>
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-gray-500 text-sm">
                      {item.quantity} × €{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Details */}
            <div>
              <div className="mb-6">
                <h3 className="font-medium mb-3">Versandadresse</h3>
                <p className="text-sm">
                  {order.shippingAddress.street}
                  <br />
                  {order.shippingAddress.postalCode}{" "}
                  {order.shippingAddress.city}
                  <br />
                  {order.shippingAddress.country}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Zahlungsmethode</h3>
                <p className="text-sm capitalize">{order.payment.method}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Zwischensumme</span>
                  <span>€{order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Steuern</span>
                  <span>€{order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Gesamtsumme</span>
                  <span>€{(order.subtotal + order.tax).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
