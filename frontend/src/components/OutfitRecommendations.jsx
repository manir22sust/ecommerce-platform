import outfit1 from "../assets/images/categories/Jackets.jpg";
import outfit2 from "../assets/images/categories/Beds-v1.jpg";
import outfit3 from "../assets/images/categories/Bedding-v1.jpg";
import outfit4 from "../assets/images/categories/Beds.jpg";
const OutfitRecommendations = () => {
  const outfits = [
    {
      image: outfit1,
      title: "Casual Day Look",
      description: "Perfekt für den Alltag",
    },
    {
      image: outfit2,
      title: "Office Style",
      description: "Elegante Bürokleidung",
    },
    {
      image: outfit3,
      title: "Evening Outfit",
      description: "Abendlicher Freizeitlook",
    },
    {
      image: outfit4,
      title: "Weekend Style",
      description: "Gemütliches Wochenend-Outfit",
    },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Outfits für dich</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {outfits.map((outfit, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={outfit.image}
              alt={`Outfit ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-medium">{outfit.title}</h3>
            <p className="text-gray-600 text-sm">{outfit.description}</p>
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
