const CategoryRecommendations = () => {
  const categories = [
    "Sofas",
    "Betten",
    "Jacken",
    "Kleiderschränke",
    "Bettwäsche",
    "Herren Pullover",
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Kategorie Empfehlungen</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="font-medium text-gray-800">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryRecommendations;
