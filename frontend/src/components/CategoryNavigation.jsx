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

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inspiration Row */}
        <div className="py-3 border-b border-gray-200">
          <nav className="flex items-center space-x-2 text-sm">
            <span className="font-semibold text-gray-900">Inspiration</span>
            {inspirationCategories.map((category, index) => (
              <div key={category} className="flex items-center">
                <span className="text-gray-300">·</span>
                <a href="#" className="ml-2 text-gray-600 hover:text-otto-red">
                  {category}
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Multimedia Row */}
        <div className="py-3">
          <nav className="flex items-center flex-wrap space-x-2 text-sm">
            <span className="font-semibold text-gray-900">Multimedia</span>
            {multimediaCategories.map((category) => (
              <div key={category} className="flex items-center">
                <span className="text-gray-300">·</span>
                <a href="#" className="ml-2 text-gray-600 hover:text-otto-red">
                  {category}
                </a>
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-gray-300">·</span>
              <a
                href="#"
                className="ml-2 font-semibold text-otto-red hover:text-otto-red-dark"
              >
                %Sale%
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
