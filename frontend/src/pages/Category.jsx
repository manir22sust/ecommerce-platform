import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
/* import categories from "../utils/data/Categories"; */
import { ImSpinner8 } from "react-icons/im";
import NotFound from "../components/NotFound";
const categories = [
  {
    name: "Ladies Fashion",
    slug: "ladies-fashion",
    subcategories: [
      { name: "Dresses", slug: "dresses" },
      { name: "Blouses", slug: "blouses" },
      { name: "Skirts", slug: "skirts" },
      { name: "Jackets", slug: "jackets" },
      { name: "Jeans", slug: "jeans" },
      { name: "Activewear", slug: "activewear" },
    ],
    products: [
      {
        id: 1,
        name: "Floral Summer Dress",
        slug: "floral-summer-dress",
        brand: "ZARA",
        price: 59.99,
        originalPrice: 79.99,
        image: "../assets/images/categories/Wardrobes.jpg",
        details: "Lightweight cotton with floral print",
      },
      {
        id: 2,
        name: "Slim Fit Jeans",
        slug: "slim-fit-jeans",
        brand: "Levi's",
        price: 89.95,
        image: "../assets/images/categories/Wardrobes.jpg",
      },
      {
        id: 3,
        name: "Cropped Leather Jacket",
        slug: "cropped-leather-jacket",
        brand: "Mango",
        price: 199.99,
        originalPrice: 299.99,
        image: "../assets/images/categories/Wardrobes.jpg",
        details: "Genuine leather, multiple colors available",
      },
    ],
    recommendations: [
      {
        tag: "Top Rated",
        brand: "H&M",
        name: "Striped Blouse",
        originalPrice: "€ 39.99",
        price: "€ 29.99",
        discount: "Limited Stock",
        image: "../assets/images/categories/Wardrobes.jpg",
        details: "Regular fit, 100% cotton",
      },
      {
        tag: "New Arrival",
        brand: "Nike",
        name: "Yoga Leggings",
        price: "€ 49.99",
        image: "../assets/images/categories/Wardrobes.jpg",
        details: "High-waisted, moisture-wicking fabric",
      },
      {
        tag: "Best Seller",
        brand: "Calvin Klein",
        name: "Bodycon Midi Dress",
        originalPrice: "€ 129.99",
        price: "€ 89.99",
        image: "../assets/images/categories/Wardrobes.jpg",
        details: "Stretch jersey fabric",
      },
      {
        tag: "Online Exclusive",
        brand: "ASOS DESIGN",
        name: "Oversized Denim Jacket",
        price: "€ 65.00",
        image: "../assets/images/categories/Wardrobes.jpg",
        details: "Washed blue denim",
      },
    ],
  },
  {
    name: "Men's Clothing",
    slug: "mens-clothing",
    subcategories: [
      { name: "Shirts", slug: "shirts" },
      { name: "T-Shirts", slug: "t-shirts" },
      { name: "Suits", slug: "suits" },
      { name: "Outerwear", slug: "outerwear" },
      { name: "Activewear", slug: "activewear" },
    ],
    products: [
      {
        id: 4,
        name: "Classic Oxford Shirt",
        slug: "classic-oxford-shirt",
        brand: "Uniqlo",
        price: 29.9,
        image: "../assets/images/categories/Wardrobes.jpg",
      },
      {
        id: 5,
        name: "Slim Fit Suit",
        slug: "slim-fit-suit",
        brand: "Hugo Boss",
        price: 399.0,
        image: "../assets/images/categories/Wardrobes.jpg",
      },
    ],
    recommendations: [
      {
        tag: "Special Offer",
        brand: "Adidas",
        name: "Training Joggers",
        originalPrice: "€ 59.99",
        price: "€ 39.99",
        image: "../assets/images/categories/Wardrobes.jpg",
      },
      {
        tag: "Premium Pick",
        brand: "Tom Ford",
        name: "Cashmere Overcoat",
        price: "€ 899.00",
        image: "../assets/images/categories/Wardrobes.jpg",
      },
    ],
  },
];

const Category = () => {
  const { categorySlug } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("categorySlug", categorySlug);

  useEffect(() => {
    setTimeout(() => {
      const foundCategory = categories.find((cat) => cat.slug === categorySlug);
      setCategoryData(foundCategory);
      setLoading(false);
    }, 500);
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner8 className="animate-spin text-4xl text-shop-red" />
      </div>
    );
  }

  if (!categoryData) {
    return (
      <NotFound
        title="Category Not Found"
        description="The category you're looking for doesn't exist or has been moved."
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
      {/* Sidebar for subcategories */}
      {categoryData.subcategories && (
        <aside className="hidden md:block w-64 flex-shrink-0">
          <nav className="sticky top-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Kategorien
            </h2>
            <ul className="space-y-2">
              {categoryData.subcategories.map((sub, index) => (
                <li key={index}>
                  <Link
                    to={`/category/${sub.slug}`}
                    className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors hover:text-gray-900 group"
                  >
                    <span className="truncate">{sub.name}</span>
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
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {categoryData.name}
        </h1>

        {/* Main Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categoryData.products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link
                    to={`/products/${product.slug}`}
                    className="hover:text-shop-red after:absolute after:inset-0"
                  >
                    {product.name}
                  </Link>
                </h3>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium text-gray-900">
                    €{product.price.toFixed(2)}
                  </p>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-shop-red hover:text-shop-red-dark font-medium flex items-center"
                  >
                    View Details
                    <span className="ml-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations Section */}
        {categoryData.recommendations && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">
              Empfehlungen für dich
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryData.recommendations.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.name}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {item.discount && (
                      <span className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">
                        {item.discount}
                      </span>
                    )}
                  </div>

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
        )}
      </div>
    </div>
  );
};

export default Category;
