import { useState } from "react";
import { Link } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import { formatPrice } from "../utils/formatPrice";

const CategoryNavigation = () => {
  const [hoveredSlug, setHoveredSlug] = useState(null);
  const { categories } = useCategories();

  // Split categories into groups
  const inspirationCategories = categories.slice(0, 5);
  const multimediaCategories = categories.slice(5);

  const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug);

  const handleLinkClick = () => setHoveredSlug(null);

  return (
    <div
      className="bg-white shadow-sm relative"
      onMouseLeave={() => setHoveredSlug(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inspiration Row */}
        <div className="py-3 border-b border-gray-200">
          <nav className="flex items-center space-x-2 text-sm">
            <span className="font-semibold text-gray-900">Inspiration</span>
            {inspirationCategories.map((category, index) => (
              <div
                key={category._id}
                className="flex items-center relative"
                onMouseEnter={() => setHoveredSlug(category.slug)}
              >
                <Link
                  to={`/categories/${category.slug}`}
                  className="ml-2 text-gray-600 hover:text-shop-red"
                  onClick={handleLinkClick}
                >
                  {category.name}
                </Link>
                {index !== inspirationCategories.length - 1 && (
                  <span className="mx-2 text-gray-300">·</span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Multimedia Row - Remaining categories */}
        <div className="py-3">
          <nav className="flex items-center flex-wrap space-x-2 text-sm">
            <span className="font-semibold text-gray-900">Multimedia</span>
            {multimediaCategories.map((category, index) => (
              <div
                key={category._id}
                className="flex items-center relative"
                onMouseEnter={() => setHoveredSlug(category.slug)}
              >
                <Link
                  to={`/categories/${category.slug}`}
                  className="ml-2 text-gray-600 hover:text-shop-red"
                  onClick={handleLinkClick}
                >
                  {category.name}
                </Link>
                {index !== multimediaCategories.length - 1 && (
                  <span className="mx-2 text-gray-300">·</span>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-gray-300">·</span>
              <Link
                to="/sale"
                className="ml-2 font-semibold text-shop-red hover:text-shop-red-dark"
                onClick={handleLinkClick}
              >
                %Sale%
              </Link>
            </div>
          </nav>
        </div>

        {/* Products Dropdown */}
        {hoveredSlug && (
          <div className="absolute left-0 right-0 bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <h3 className="text-xl font-bold mb-4">
                {getCategoryBySlug(hoveredSlug)?.name}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
                {getCategoryBySlug(hoveredSlug)?.products?.map((product) => (
                  <Link
                    key={product._id}
                    to={`/products/${product.slug}`}
                    className="group relative block"
                    onClick={handleLinkClick}
                  >
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 max-w-[100px] mx-auto p-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2 space-y-1">
                      <h4 className="text-xs font-medium text-gray-900 line-clamp-2 leading-tight">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-1.5 ml-6">
                        <span className="text-xs text-shop-red font-semibold">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[0.65rem] text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryNavigation;
