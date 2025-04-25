import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from "../utils/data/Categories";

const SingleProduct = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // Update the component state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add this function to handle image changes
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    let foundProduct = null;
    let foundCategory = null;

    // Simulate API call delay
    setTimeout(() => {
      categories.forEach((cat) => {
        const prod = cat.products.find((p) => p.slug === productSlug);
        if (prod) {
          foundProduct = { ...prod, category: cat.slug };
          foundCategory = cat;
        }
      });

      if (foundProduct && foundCategory) {
        setProduct(foundProduct);
        setCategory(foundCategory);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 500);
  }, [productSlug]);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize && !selectedColor) {
      alert("Bitte wählen Sie eine Größe aus");
      return;
    }
    console.log("Added to cart:", {
      product,
      quantity,
      selectedSize,
      selectedColor,
    });
  };

  const calculateDiscount = () => {
    if (!product.originalPrice) return 0;
    return Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-4 bg-gray-200 w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 w-3/4"></div>
              <div className="h-6 bg-gray-200 w-1/4"></div>
              <div className="h-32 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl mb-4">Produkt nicht gefunden</h2>
        <Link to="/" className="text-shop-red hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-4 flex items-center space-x-2">
        <Link
          to="/"
          className="text-gray-500 hover:text-shop-red transition-colors"
        >
          Startseite
        </Link>
        <span className="text-gray-300">/</span>
        <Link
          to={`/categories/${category.slug}`}
          className="text-gray-500 hover:text-shop-red transition-colors"
        >
          {category.name}
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}

        <div className="space-y-6">
          <div className="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={product.images?.[currentImageIndex] || product.image}
              alt={product.name}
              className="w-full h-96 object-contain rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {(product.images || [product.image]).map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageChange(index)}
                className={`group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-200
          ${
            currentImageIndex === index
              ? "ring-4 ring-shop-red ring-inset border-2 border-white"
              : "border-2 border-transparent hover:border-shop-red/50"
          }`}
              >
                {/* Thumbnail Image */}
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-28 object-cover transform group-hover:scale-110 transition-transform duration-200"
                />

                {/* Active State Indicator */}
                {currentImageIndex === index && (
                  <div className="absolute inset-0 bg-shop-red/10 pointer-events-none" />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Price Section */}
          <div className="space-y-2">
            {product.originalPrice && (
              <div className="flex items-center gap-4">
                <span className="text-gray-500 line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
                <span className="bg-shop-red text-white px-3 py-1 rounded-full text-sm">
                  -{calculateDiscount()}%
                </span>
              </div>
            )}
            <div className="text-4xl font-bold text-shop-red">
              €{product.price.toFixed(2)}
            </div>
          </div>

          {/* Product Meta */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Artikelnummer</dt>
              <dd>{product.id}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Verfügbarkeit</dt>
              <dd className="text-green-600">Auf Lager</dd>
            </div>
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div className="space-y-4">
              <h3 className="font-medium">Größe auswählen</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 text-sm border-2 rounded-lg transition-colors ${
                      selectedSize === size
                        ? "border-shop-red bg-shop-red/10"
                        : "border-gray-200 hover:border-shop-red"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Color Selection */}
          {product.colors && (
            <div className="space-y-4">
              <h3 className="font-medium">Farbe auswählen</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`p-3 text-sm border-2 rounded-lg transition-colors ${
                      selectedColor === color
                        ? "border-shop-red bg-shop-red/10"
                        : "border-gray-200 hover:border-shop-red"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border-r hover:bg-gray-50"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                  className="w-20 text-center px-4 py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border-l hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-shop-red hover:bg-shop-red-dark text-white py-3 rounded-lg transition-colors"
              >
                In den Warenkorb
              </button>
            </div>
          </div>

          {/* Product Details Accordion */}
          <div className="space-y-2">
            <div className="border rounded-lg">
              <details className="p-4" open>
                <summary className="font-medium cursor-pointer">
                  Produktbeschreibung
                </summary>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </details>
            </div>
            <div className="border rounded-lg">
              <details className="p-4">
                <summary className="font-medium cursor-pointer">
                  Versand & Rückgabe
                </summary>
                <div className="mt-2 space-y-2 text-gray-600">
                  <p>Kostenloser Versand ab 50 €</p>
                  <p>14-tägiges Rückgaberecht</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
