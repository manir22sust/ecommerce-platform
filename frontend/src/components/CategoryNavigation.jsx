import { Link } from "react-router-dom";
const CategoryNavigation = () => {
  const inspirationCategories = [
    "Damen-Mode",
    "Herren-Mode",
    "Baby & Kind",
    "Sport",
    "Beauty & Drogerie",
  ];

  const multimediaCategories = [
    "Haushalt",
    "Küche",
    "Heimtextilien",
    "Möbel",
    "Baumarkt",
    "Marken",
  ];
  // Helper function to generate URL-friendly slugs
  const createSlug = (category) => {
    return category
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .replace(/&/g, "und")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
      .trim();
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inspiration Row */}
        <div className="py-3 border-b border-gray-200">
          <nav className="flex items-center space-x-2 text-sm">
            <span className="font-semibold text-gray-900">Inspiration</span>
            {inspirationCategories.map((category, index) => (
              <div key={category} className="flex items-center">
                <Link
                  to={`/categories/${createSlug(category)}`}
                  className="ml-2 text-gray-600 hover:text-shop-red"
                >
                  {category}
                </Link>
                {index !== inspirationCategories.length - 1 && (
                  <span className="mx-2 text-gray-300">·</span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Multimedia Row */}
        <div className="py-3">
          <nav className="flex items-center flex-wrap space-x-2 text-sm">
            <span className="font-semibold text-gray-900">Multimedia</span>
            {multimediaCategories.map((category, index) => (
              <div key={category} className="flex items-center">
                <Link
                  to={`/categories/${createSlug(category)}`}
                  className="ml-2 text-gray-600 hover:text-shop-red"
                >
                  {category}
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
              >
                %Sale%
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
