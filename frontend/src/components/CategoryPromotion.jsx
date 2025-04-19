const CategoryPromotion = () => {
  const categories = [
    { name: "Betten", image: "/images/betten.jpg" },
    { name: "Jacken", image: "/images/jacken.jpg" },
    { name: "Kleiderschränke", image: "/images/kleiderschranke.jpg" },
    { name: "Bettwäsche", image: "/images/bettwaesche.jpg" },
    { name: "Herren Pullover", image: "/images/pullover.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Kategorie Empfehlungen
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg">
          Zum Online-Shop
        </button>
      </div>
    </div>
  );
};

export default CategoryPromotion;
