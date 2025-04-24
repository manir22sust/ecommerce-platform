import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SearchComponent = ({ categories = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Flatten all products with category information
  const getAllProducts = () => {
    return categories.flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        categoryName: category.name,
        categorySlug: category.slug,
      }))
    );
  };

  // Search through both product names and category names
  const searchProducts = (query) => {
    const lowerQuery = query.toLowerCase();
    return getAllProducts().filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.categoryName.toLowerCase().includes(lowerQuery)
    );
  };

  const handleSearch = () => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const results = searchProducts(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const executeSearch = () => {
    handleSearch();
  };
  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Auto-search when typing (with slight delay)
  useEffect(() => {
    if (searchQuery.trim()) {
      const delaySearch = setTimeout(() => {
        handleSearch();
      }, 300);
      return () => clearTimeout(delaySearch);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
      <div className="relative w-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Wonach suchst du?"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-red disabled:opacity-75"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && executeSearch()}
            disabled={isLoading}
            aria-label="Search input"
          />

          <button
            onClick={searchQuery ? handleClearSearch : executeSearch}
            className="absolute right-3 top-3 hover:text-shop-red transition-colors"
            disabled={isLoading}
            aria-label={searchQuery ? "Clear search" : "Search"}
          >
            {isLoading ? (
              <span className="animate-spin">🌀</span>
            ) : searchQuery ? (
              <XMarkIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        {/* Search results dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute w-full mt-2 bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
            <ul className="py-2">
              {searchResults.map((product) => (
                <li key={product.id} className="list-none">
                  <Link
                    to={`/${product.categorySlug}/${product.slug}`}
                    onClick={() => {
                      setSearchResults([]);
                      setSearchQuery("");
                    }}
                    className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                    aria-label={`View ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span>{product.categoryName}</span>
                        <span className="mx-2">•</span>
                        <span>€{product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Empty state */}
        {searchQuery && !isLoading && searchResults.length === 0 && (
          <div className="absolute w-full mt-2 bg-white border rounded-md shadow-lg z-50 p-4 text-gray-500">
            Keine Ergebnisse gefunden für "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
