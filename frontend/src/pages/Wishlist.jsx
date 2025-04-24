import { useState } from "react";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/solid";

const Wishlist = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "RMK T-Shirt Damen Shirt Top Sommer Basic",
      price: 15.8,
      originalPrice: 19.99,
      size: "Weiß-Schwarz, 34",
      image: "../assets/images/categories/Jackets-v1.jpg",
      liked: true,
    },
    // Add more items as needed
  ]);

  const toggleLike = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <HeartIcon className="w-6 h-6 text-red-500" />
        Mein Merkzettel ({items.length})
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <HeartIcon className="w-12 h-12 mx-auto text-gray-300 mb-4" />
          <p>Ihr Merkzettel ist leer</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.size}</p>
                  <p className="text-green-600 text-sm mb-2">
                    ✓ lieferbar - in 7-9 Werktagen bei dir
                  </p>

                  {/* Price */}
                  <div className="mt-2">
                    <span className="text-lg font-semibold">
                      {item.price.toFixed(2)} €
                    </span>
                    {item.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {item.originalPrice.toFixed(2)} €
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => toggleLike(item.id)}
                  className="p-1 rounded-full hover:bg-red-50 transition-colors"
                >
                  <HeartIcon
                    className={`w-5 h-5 ${
                      item.liked ? "text-red-500 fill-current" : "text-gray-400"
                    }`}
                  />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <TrashIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {items.length > 0 && (
        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Gespeicherte Artikel bleiben 30 Tage in Ihrem Merkzettel</p>
          <p className="mt-2">Gesamtzahl der Artikel: {items.length}</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
