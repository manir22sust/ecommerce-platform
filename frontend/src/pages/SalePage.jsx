import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SalePage = () => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call
  useEffect(() => {
    setTimeout(() => {
      setSaleProducts([
        {
          id: 5,
          slug: 'wintermantel',
          name: 'Wintermantel',
          price: 99.99,
          originalPrice: 149.99,
        },
        {
          id: 6,
          slug: 'sportschuhe',
          name: 'Sportschuhe',
          price: 59.99,
          originalPrice: 89.99,
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="py-8">
      <div className="bg-shop-red text-white p-6 rounded-lg mb-8">
        <h1 className="text-4xl font-bold">SALE</h1>
        <p className="text-xl mt-2">Bis zu 50% Rabatt auf ausgewählte Artikel</p>
      </div>

      {loading ? (
        <div className="text-center">Loading sale items...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg">
              <Link
                to={`/products/${product.slug}`}
                className="block hover:text-shop-red"
              >
                <div className="relative">
                  <span className="bg-shop-red text-white px-2 py-1 rounded absolute top-0 right-0">
                    Sale
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex gap-4">
                    <p className="text-gray-400 line-through">
                      €{product.originalPrice.toFixed(2)}
                    </p>
                    <p className="text-shop-red font-bold">
                      €{product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SalePage;