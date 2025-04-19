const LadiesFashion = () => {
  const recommendations = [
    {
      tag: "Schr. beliebt",
      brand: "ONLY",
      name: "Jeansjacke ONLWO...",
      originalPrice: "€ 49,99",
      price: "€ 24,99",
      discount: "nur heute",
      image: "/images/jeansjacke.jpg",
    },
    {
      tag: "OTTO ÜZ",
      brand: "RWK",
      name: "T-Shirt Damen Shirt ...",
      originalPrice: "€ 29,90",
      price: "€ 9,90",
      image: "/images/tshirt.jpg",
    },
    {
      tag: "Schr. beliebt",
      brand: "VIVANCE",
      name: "T-Shirt mit Frontdru...",
      price: "€ 19,99",
      details: "(€ 19,99 / 18kl)",
      image: "/images/frontprint-tshirt.jpg",
    },
    {
      tag: "OTTO ÜZ",
      brand: "RWK",
      name: "T-Shirt Damen Shirt ...",
      originalPrice: "€ 29,90",
      price: "€ 9,90",
      image: "/images/tshirt.jpg",
    },
    // Add other products similarly
  ];

  const categories = [
    "Anzüge",
    "Bademode",
    "Blazer",
    "Bodies",
    "Blusen",
    "Hosen",
    "Jacken",
    "Jeans",
    "Kleider",
    "Mäntel",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <nav className="sticky top-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Kategorien
          </h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors hover:text-gray-900 group"
                >
                  <span className="truncate">{category}</span>
                  <svg
                    className="ml-auto w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1">
        {/* ... other elements */}

        {/* Updated Recommendations Section with Images */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Empfehlungen für dich</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow group"
              >
                {/* Image Container */}
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                  <img
                    src={item.image}
                    alt={`${item.brand} ${item.name}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {/* Discount Badge */}
                  {item.discount && (
                    <span className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">
                      {item.discount}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg">{item.brand}</h3>
                <p className="text-gray-600 mb-2">{item.name}</p>
                <div className="flex items-center gap-2">
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="text-red-600 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                {item.details && (
                  <p className="text-gray-500 text-sm mt-1">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LadiesFashion;
