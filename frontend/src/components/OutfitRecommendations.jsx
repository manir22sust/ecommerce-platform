import { Link } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import { formatPrice } from "../utils/formatPrice";

const OutfitRecommendations = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  // Safely get random products with fallbacks
  const getRandomProducts = () => {
    const allProducts =
      categories?.flatMap(
        (category) => category.products?.filter((p) => p) ?? []
      ) ?? [];

    return allProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .filter((p) => p); // Remove any undefined products
  };

  const outfitProducts = getRandomProducts().map((product) => ({
    ...product,
    title: product?.name || "Unnamed Product",
    description: `Style mit ${product?.name || "diesem Artikel"}`,
  }));

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Outfits für dich</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {outfitProducts.map((product) => (
          <div
            key={product?.id || Math.random()}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link to={`/products/${product?.slug || ""}`}>
              {product?.image && (
                <img
                  src={product.image}
                  alt={product?.name || "Product image"}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="font-medium">{product?.title}</h3>
              <p className="text-gray-600 text-sm">{product?.description}</p>
              <div className="mt-2">
                <span className="text-otto-red font-bold">
                  {formatPrice(product?.price)}
                </span>
                <button className="text-otto-red hover:underline ml-2">
                  Zum Angebot →
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutfitRecommendations;
