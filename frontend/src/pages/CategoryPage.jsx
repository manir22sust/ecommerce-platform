import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import categories from "../utils/data/Categories";
import { ImSpinner8 } from "react-icons/im";
import NotFound from "../components/NotFound";
import useCategories from "../hooks/useCategories";
import { formatPrice } from "../utils/formatPrice";

const CategoryPage = () => {
  const { categories, error } = useCategories();

  if (error) return <div>Error: {error}</div>;

  const { categorySlug } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundCategory = categories.find((cat) => cat.slug === categorySlug);
      setCategoryData(foundCategory);
      setLoading(false);
    }, 500);
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner8 className="animate-spin text-4xl text-shop-red" />
      </div>
    );
  }

  if (!categoryData) {
    return (
      <NotFound
        title="Category Not Found"
        description="The category you're looking for doesn't exist or has been moved."
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        {categoryData.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryData.products.map((product, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link
                  to={`/products/${product.slug}`}
                  className="hover:text-shop-red after:absolute after:inset-0"
                >
                  {product.name}
                </Link>
              </h3>

              <div className="flex justify-between items-center">
                <p className="text-xl font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>
                <Link
                  to={`/products/${product.slug}`}
                  className="text-shop-red hover:text-shop-red-dark font-medium flex items-center"
                >
                  View Details
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
