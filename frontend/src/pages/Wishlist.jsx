// components/Wishlist.jsx
import { HeartIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useWishlist } from "../hooks/useWishlist";

const Wishlist = () => {
  const { items, removeItem, toggleLike, totalItems, totalSavings } =
    useWishlist();

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <HeartIcon className="w-8 h-8 text-red-500" />
          My Wishlist ({totalItems})
        </h1>
        {totalItems > 0 && (
          <p className="mt-2 text-green-600">
            Total Savings: €{totalSavings.toFixed(2)}
          </p>
        )}
      </header>

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <HeartIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <p className="text-xl">Your wishlist is empty</p>
          <p className="mt-2">Start adding items you love!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-4">
                <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.size}</p>
                  <p
                    className={`text-sm mb-2 ${
                      item.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.inStock
                      ? "✓ Available - Delivery in 3-5 days"
                      : "⚠ Currently out of stock"}
                  </p>

                  <div className="mt-2">
                    <span className="text-xl font-bold text-gray-900">
                      €{item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="ml-3 text-sm text-gray-500 line-through">
                        €{item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => toggleLike(item.id)}
                  className="p-2 rounded-full hover:bg-red-50 transition-colors"
                  aria-label={
                    item.liked ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  <HeartIcon
                    className={`w-6 h-6 ${
                      item.liked ? "text-red-500 fill-current" : "text-gray-400"
                    }`}
                  />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Remove item"
                >
                  <TrashIcon className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Saved items remain in your wishlist for 30 days</p>
          <p className="mt-2">
            Total items: {totalItems} | Total savings: €
            {totalSavings.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
