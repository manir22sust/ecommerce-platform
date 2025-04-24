import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from "../utils/data/Categories";

const SingleProduct = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let foundProduct = null;
    let foundCategory = null;

    categories.forEach((cat) => {
      const prod = cat.products.find((p) => p.slug === productSlug);
      if (prod) {
        foundProduct = prod;
        foundCategory = cat;
      }
    });

    if (foundProduct) {
      setProduct(foundProduct);
      setCategory(foundCategory);
    }
  }, [productSlug]);

  if (!product || !category) {
    return <div>Produkt nicht gefunden</div>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of size ${selectedSize} to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Improved Breadcrumb with Links */}
      <nav className="text-sm mb-4">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        {" / "}
        <Link
          to={`/categories/${category.slug}`}
          className="text-gray-500 hover:text-shop-red"
        >
          {category.name}
        </Link>
        {" / "}
        <span className="text-gray-700">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          {/* Price Section */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-shop-red">
              {product.price.toFixed(2)} €
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Inkl. MwSt. zzgl. Versandkosten
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <div className="text-sm space-y-2">
              <p>Artikelnummer: {product.id}</p>
              <p>Kategorie: {category.name}</p>
              <p>Lieferzeit: 2-3 Werktage</p>
            </div>
          </div>

          {/* Size Selection (if applicable) */}
          {product.sizes && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Größe auswählen
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
          )}

          {/* Quantity & Add to Cart */}
          <div className="mb-6">
            <div className="flex gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                className="w-20 p-2 border rounded text-center"
              />
              <button
                onClick={handleAddToCart}
                className="bg-shop-red text-white px-8 py-2 rounded hover:bg-shop-red-dark flex-1 transition-colors"
              >
                In den Warenkorb
              </button>
            </div>
          </div>

          {/* Additional Product Info */}
          <div className="space-y-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Versandinformationen</h3>
              <p className="text-sm">Kostenloser Versand ab 50 € Bestellwert</p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Zahlungsmethoden</h3>
              <div className="flex gap-4">
                <span className="text-sm">Kreditkarte</span>
                <span className="text-sm">PayPal</span>
                <span className="text-sm">Klarna</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t pt-4 mt-6">
            <div className="flex gap-4 text-sm">
              <Link to="/agb" className="text-gray-600 hover:text-shop-red">
                AGB
              </Link>
              <Link
                to="/datenschutz"
                className="text-gray-600 hover:text-shop-red"
              >
                Datenschutz
              </Link>
              <Link
                to="/widerruf"
                className="text-gray-600 hover:text-shop-red"
              >
                Widerrufsrecht
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
