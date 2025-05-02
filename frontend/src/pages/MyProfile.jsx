import { useState, useEffect } from "react";
import { PencilIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUser } from "../hooks/useUser";

const MyProfile = () => {
  const { user, updateUser, updateAddress } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      postalCode: "",
      city: "",
      country: "Germany",
    },
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: {
          street: user.address?.street || "",
          postalCode: user.address?.postalCode || "",
          city: user.address?.city || "",
          country: user.address?.country || "Germany",
        },
      });
      setIsLoading(false);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update user info
      await updateUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      });

      // Update address
      await updateAddress(formData.address);

      setSuccess("Profil erfolgreich aktualisiert");
      setIsEditing(false);
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message || "Fehler beim Speichern der Änderungen");
    }
  };

  if (isLoading) {
    return <div className="animate-pulse space-y-6 p-6">Loading...</div>;
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
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
          {success}
        </div>
      )}

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-6">
            Persönliche Informationen
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vorname
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-900">
                    {formData.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nachname
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-900">{formData.lastName}</p>
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

              <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Straße und Hausnummer
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                    />
                  ) : (
                    <p className="px-4 py-2 text-gray-900">
                      {formData.address.street}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postleitzahl
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.postalCode"
                      value={formData.address.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                      pattern="\d{5}"
                    />
                  ) : (
                    <p className="px-4 py-2 text-gray-900">
                      {formData.address.postalCode}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stadt
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                    />
                  ) : (
                    <p className="px-4 py-2 text-gray-900">
                      {formData.address.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Land
                  </label>
                  {isEditing ? (
                    <select
                      name="address.country"
                      value={formData.address.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-shop-red focus:border-shop-red"
                    >
                      <option value="Germany">Deutschland</option>
                      <option value="Austria">Österreich</option>
                      <option value="Switzerland">Schweiz</option>
                    </select>
                  ) : (
                    <p className="px-4 py-2 text-gray-900">
                      {formData.address.country}
                    </p>
                  )}
                </div>
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
