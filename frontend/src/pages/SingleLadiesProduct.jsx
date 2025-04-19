import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleLadiesProduct = () => {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Mock data - replace with API call
  const product = {
    title: "RMIK T-Shirt Damen Shirt Top Sommer Basic Be Happy Glücklich",
    material: "Baumwolle",
    rating: { stars: 4, reviews: 86 },
    price: { original: 99.96, discounted: 9.9 },
    color: "Weiß-Schwarz",
    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44-46",
      "48",
      "50-52",
      "54-56",
      "58-60",
    ],
    delivery: "lieferbar - in 7-9 Werktagen bei dir",
    seller: "Zahida Fashion GmbH",
    installment: { monthly: 0.9, months: 12 },
    paymentPause: { days: 100, fee: 0.35 },
  };

  const handleAddToCart = () => {
    // Add cart logic here
    console.log(`Added ${quantity} of size ${selectedSize} to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4">
        <span className="text-gray-500">
          Startseite / Damen-Mode / Bekleidung / Shirts / T-Shirts
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <img
            src="/placeholder-tshirt.jpg"
            alt={product.title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.material}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {"★".repeat(product.rating.stars)}
              {"☆".repeat(5 - product.rating.stars)}
            </div>
            <span className="ml-2 text-sm">
              ({product.rating.reviews} Bewertungen)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-red-600">
              {product.price.discounted.toFixed(2)} €
            </div>
            <div className="text-gray-500 line-through">
              UVP {product.price.original.toFixed(2)} €
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Inkl. MwSt. zzgl. Versandkosten
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Farbe: {product.color}
            </label>
            <div className="w-12 h-12 border-2 border-gray-300 rounded"></div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Größe wählen
            </label>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 border rounded ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mb-6">
            <div className="flex gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                className="w-20 p-2 border rounded"
              />
              <button
                onClick={handleAddToCart}
                className="bg-shop-red text-white px-8 py-2 rounded hover:bg-gray-800 flex-1"
              >
                In den Warenkorb
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mb-6 text-sm text-green-600">
            ✓ {product.delivery}
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <div className="text-sm mb-2">
              Oder {product.installment.monthly.toFixed(2)} € mtl. in{" "}
              {product.installment.months} Raten
            </div>
            <div className="text-sm">
              {product.paymentPause.days} Tage Zahlpause für{" "}
              {product.paymentPause.fee.toFixed(2)} €
            </div>
          </div>

          {/* Seller Info */}
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">Verkäufer: {product.seller}</p>
            <div className="mt-2 text-sm">
              <a href="/agb" className="text-gray-600 hover:underline mr-4">
                AGB
              </a>
              <a href="/datenschutz" className="text-gray-600 hover:underline">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLadiesProduct;
