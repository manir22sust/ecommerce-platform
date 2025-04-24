import { Link } from "react-router-dom";
import categories from "../utils/data/Categories";
// Import images
import BedImage from "../assets/images/categories/Beds.jpg";
import JacketImage from "../assets/images/categories/Jackets-v1.jpg";
import WardrobeImage from "../assets/images/categories/Wardrobes.jpg";
import BeddingImage from "../assets/images/categories/Bedding.jpg";
import SweaterImage from "../assets/images/categories/Sweaters.jpg";

const CategoryPromotion = () => {
  // Map images to categories
  const categoryImages = {
    moebel: BedImage,
    "damen-mode": JacketImage,
    kleiderschranke: WardrobeImage,
    heimtextilien: BeddingImage,
    "herren-mode": SweaterImage,
  };

  // Get featured categories from main categories data
  const featuredCategories = categories
    .filter((cat) => Object.keys(categoryImages).includes(cat.slug))
    .map((cat) => ({
      ...cat,
      image: categoryImages[cat.slug],
    }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Beliebte Kategorien
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {featuredCategories.map((category) => (
          <Link
            to={`/categories/${category.slug}`}
            key={category.slug}
            className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={`Zur Kategorie ${category.name}`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white text-lg font-semibold">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/categories"
          className="inline-block bg-shop-red text-white px-8 py-3 rounded-lg hover:bg-shop-red-dark transition-colors duration-300 text-lg font-medium"
        >
          Alle Kategorien entdecken
        </Link>
      </div>
    </div>
  );
};

export default CategoryPromotion;
