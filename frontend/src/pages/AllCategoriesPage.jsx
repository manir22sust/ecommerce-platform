import { Link } from "react-router-dom";
// import categories from "../utils/data/Categories";
import useCategories from "../hooks/useCategories";

const AllCategoriesPage = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Alle Kategorien</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Alle Kategorien</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link
              to={`/categories/${category.slug}`}
              className="block h-full"
              aria-label={`Zur Kategorie ${category.name}`}
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600 text-sm">
                  {category.products.length} Artikel verfügbar
                </p>
                <button className="mt-3 text-shop-red hover:text-shop-red-dark font-medium">
                  Jetzt shoppen →
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Optional Featured Products Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Unsere Bestseller</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add featured products logic here */}
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesPage;
