import { Link } from "react-router-dom";
import categories from "../utils/data/Categories"; // Import your categories data

const OutfitRecommendations = () => {
  // Get actual products from categories
  const getRandomProducts = () => {
    const allProducts = categories.flatMap((category) => category.products);
    return allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  const outfitProducts = getRandomProducts().map((product) => ({
    ...product,
    title: product.name,
    description: `Style mit ${product.name}`,
  }));

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Outfits für dich</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {outfitProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link to={`/products/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-medium">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <div className="mt-2">
                <span className="text-otto-red font-bold">
                  {product.price.toFixed(2)} €
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
