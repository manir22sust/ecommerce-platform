import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
    newsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form validation and submit logic
    console.log("Form submitted:", form);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Jetzt Kundenkonto anlegen
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4 justify-center">
            <label>
              <input
                type="radio"
                name="gender"
                value="Frau"
                onChange={handleChange}
              />
              <span className="ml-1">Frau</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Herr"
                onChange={handleChange}
              />
              <span className="ml-1">Herr</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Keine Angabe"
                onChange={handleChange}
              />
              <span className="ml-1">Keine Angabe</span>
            </label>
          </div>

          <input
            type="text"
            name="firstName"
            placeholder="Vorname"
            className="w-full border px-4 py-2 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nachname"
            className="w-full border px-4 py-2 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail-Adresse"
            className="w-full border px-4 py-2 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="emailRepeat"
            placeholder="E-Mail-Adresse wiederholen"
            className="w-full border px-4 py-2 rounded-md"
            onChange={handleChange}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Passwort"
              className="w-full border px-4 py-2 rounded-md"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Verbergen" : "Anzeigen"}
            </button>
            <p className="text-sm text-gray-500 mt-1">Mindestens 8 Zeichen</p>
          </div>

          <div className="relative">
            <input
              type={showPasswordRepeat ? "text" : "password"}
              name="passwordRepeat"
              placeholder="Passwort wiederholen"
              className="w-full border px-4 py-2 rounded-md"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-600"
              onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
            >
              {showPasswordRepeat ? "Verbergen" : "Anzeigen"}
            </button>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm">
              Ich möchte den Newsletter der Plattform otto.de, betrieben von der
              SHOP GmbH , erhalten ...
              <br />
              <span className="text-gray-500 text-xs">
                Diese Einwilligung kann jederzeit mit Wirkung für die Zukunft
                widerrufen werden.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold"
          >
            Weiter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
