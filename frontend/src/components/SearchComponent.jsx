import { useState, useEffect, useMemo, useCallback } from "react";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import categories from "../utils/data/Categories";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  // Memoize flattened products
  const allProducts = useMemo(
    () =>
      categories.flatMap((category) =>
        category.products.map((product) => ({
          ...product,
          categoryName: category.name,
          categorySlug: category.slug,
        }))
      ),
    [categories]
  );

  const searchProducts = useCallback(
    (query) => {
      const lowerQuery = query.toLowerCase().trim();
      if (!lowerQuery) return [];

      return allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.categoryName.toLowerCase().includes(lowerQuery) ||
          product.description?.toLowerCase().includes(lowerQuery)
      );
    },
    [allProducts]
  );

  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const results = searchProducts(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, searchProducts]);

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Debounced search
  useEffect(() => {
    const delaySearch = setTimeout(handleSearch, 300);
    return () => clearTimeout(delaySearch);
  }, [searchQuery, handleSearch]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClearSearch();
    }
  };

  return (
    <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
      <div
        className="relative w-full"
        role="search"
        aria-label="Website search"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Wonach suchst du?"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-red pr-10 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setTimeout(() => setHasFocus(false), 200)}
            aria-label="Search products"
            aria-controls="search-results"
            aria-expanded={searchResults.length > 0}
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            {isLoading ? (
              <ArrowPathIcon className="h-5 w-5 text-gray-400 animate-spin" />
            ) : searchQuery ? (
              <button
                onClick={handleClearSearch}
                className="hover:text-shop-red transition-colors"
                aria-label="Clear search"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>

        {/* Search results dropdown */}
        {hasFocus && searchResults.length > 0 && (
          <div
            id="search-results"
            className="absolute w-full mt-2 bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
            role="listbox"
          >
            <ul className="py-2">
              {searchResults.map((product) => (
                <li
                  key={`${product.categorySlug}-${product.id}`}
                  role="option"
                  aria-selected="false"
                >
                  <Link
                    to={`/products/${product.slug}`}
                    onClick={handleClearSearch}
                    className="flex items-center px-4 py-3 hover:bg-gray-50 gap-4 transition-colors group"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="w-12 h-12 object-cover rounded-md"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {highlightMatches(product.name, searchQuery)}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <span>{product.categoryName}</span>
                        <span className="text-shop-red font-bold">
                          €{product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Empty state */}
        {hasFocus &&
          searchQuery &&
          !isLoading &&
          searchResults.length === 0 && (
            <div
              className="absolute w-full mt-2 bg-white border rounded-md shadow-lg z-50 p-4 text-gray-500"
              role="status"
            >
              Keine Ergebnisse für "{searchQuery}"
              <Link
                to="/kontakt"
                className="block mt-2 text-shop-red hover:underline"
              >
                Kontaktieren Sie uns
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

// Helper function to highlight matches
const highlightMatches = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    i % 2 === 0 ? (
      part
    ) : (
      <span key={i} className="bg-yellow-100">
        {part}
      </span>
    )
  );
};

export default SearchComponent;
