const OutfitRecommendations = () => {
  const outfits = new Array(4).fill(null); // Replace with actual data

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Outfits für dich</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {outfits.map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="font-medium">Outfit {index + 1}</h3>
            <p className="text-gray-600 text-sm">Beschreibung des Outfits</p>
            <button className="text-otto-red hover:underline mt-2">
              Zum Angebot →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OutfitRecommendations;
