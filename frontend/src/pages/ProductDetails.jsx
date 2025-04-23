import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 15.8; // Price per item

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleRemove = () => {
    // Add  remove logic here
    alert("Remove item functionality");
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm relative">
      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors"
      >
        <TrashIcon className="w-5 h-5" />
      </button>

      {/* Product Details */}
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

      {/* Quantity Controls */}
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

        {/* Price Display */}
        <div className="text-right">
          <p className="text-gray-600 line-through">19,99 €</p>
          <p className="text-lg font-semibold">
            {(unitPrice * quantity).toFixed(2)} €
          </p>
        </div>
      </div>

      {/* Seller Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm border-t pt-3">
        <span className="text-gray-500 mb-2 sm:mb-0">
          Verkäufer: Zahida Fashion GmbH
        </span>
        <Link
          href="#datenschutz"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Datenschutz
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
