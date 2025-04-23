import { useState, useEffect } from "react";
import { PencilIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Max Mustermann",
    email: "max@example.com",
    phone: "+49 123 456789",
    address: "Musterstraße 1, 12345 Berlin",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Profil erfolgreich aktualisiert");
      setIsEditing(false);
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Fehler beim Speichern der Änderungen");
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6 p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-1/2"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mein Profil</h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center text-shop-red hover:text-shop-red-dark"
          >
            <PencilIcon className="h-5 w-5 mr-2" />
            Bearbeiten
          </button>
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg"
        >
          {error}
        </div>
      )}

      {success && (
        <div
          role="alert"
          className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg"
        >
          {success}
        </div>
      )}

      <div className="space-y-12">
        {/* Personal Information Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6">
            Persönliche Informationen
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vollständiger Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-900">{formData.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail-Adresse
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-900">{formData.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefonnummer
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-900">{formData.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-900">{formData.address}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 flex space-x-4">
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-shop-red text-white rounded-md hover:bg-shop-red-dark"
                >
                  <CheckIcon className="h-5 w-5 mr-2" />
                  Speichern
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setError("");
                  }}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <XMarkIcon className="h-5 w-5 mr-2" />
                  Abbrechen
                </button>
              </div>
            )}
          </form>
        </section>

        {/* Security Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Sicherheit</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Passwort ändern
              </h3>
              <form className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aktuelles Passwort
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Neues Passwort
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passwort bestätigen
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-shop-red text-white rounded-md hover:bg-shop-red-dark"
                >
                  Passwort aktualisieren
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProfile;
