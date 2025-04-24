import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-shop-red">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Kontakt</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Kontaktieren Sie uns</h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-shop-red focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-shop-red focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Betreff *
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-shop-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Nachricht *
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-shop-red focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-shop-red text-white px-8 py-3 rounded-md hover:bg-shop-red-dark transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Kontaktinformationen</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-shop-red mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium">Shop Fashion GmbH</p>
                  <p className="text-gray-600">Musterstraße 123</p>
                  <p className="text-gray-600">50667 Köln</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-shop-red mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+4922123456789"
                  className="text-gray-600 hover:text-shop-red"
                >
                  +49 221 23456789
                </a>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-shop-red mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@Shop-fashion.de"
                  className="text-gray-600 hover:text-shop-red"
                >
                  info@shop-fashion.de
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.356831898482!2d6.958460215747672!3d50.94067917953083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25af10a5c0b9%3A0x3dae84b6d8db1d0!2sOtto%20(Germany)!5e0!3m2!1sen!2sde!4v1657822348565!5m2!1sen!2sde"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/agb" className="text-gray-600 hover:text-shop-red">
            AGB
          </Link>
          <Link to="/datenschutz" className="text-gray-600 hover:text-shop-red">
            Datenschutz
          </Link>
          <Link to="/widerruf" className="text-gray-600 hover:text-shop-red">
            Widerrufsrecht
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
