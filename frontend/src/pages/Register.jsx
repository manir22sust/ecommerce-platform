import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {  register } = useUser();
  const navigate = useNavigate();
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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Required fields
    if (!form.gender) newErrors.gender = "Bitte wählen Sie eine Anrede aus";
    if (!form.firstName.trim())
      newErrors.firstName = "Vorname ist erforderlich";
    if (!form.lastName.trim()) newErrors.lastName = "Nachname ist erforderlich";

    // Email validation
    if (!form.email) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Ungültige E-Mail-Adresse";
    }

    // Email match
    if (form.email !== form.emailRepeat) {
      newErrors.emailRepeat = "E-Mail-Adressen stimmen nicht überein";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Passwort ist erforderlich";
    } else if (form.password.length < 8) {
      newErrors.password = "Mindestens 8 Zeichen erforderlich";
    }

    // Password match
    if (form.password !== form.passwordRepeat) {
      newErrors.passwordRepeat = "Passwörter stimmen nicht überein";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await register({
        email: form.email,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        gender: form.gender,
        newsletter: form.newsletter,
      });
      navigate("/login");
    } catch (error) {
      setErrors({
        general: error.message.includes("400")
          ? "Invalid registration data"
          : error.message,
      });
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Jetzt Kundenkonto anlegen
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="flex space-x-4 justify-center">
            {["Frau", "Herr", "Keine Angabe"].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={form.gender === gender}
                  onChange={handleChange}
                  className="mr-1"
                />
                <span>{gender}</span>
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm text-center">{errors.gender}</p>
          )}

          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Vorname"
              className={`w-full border px-4 py-2 rounded-md ${
                errors.firstName ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              className={`w-full border px-4 py-2 rounded-md ${
                errors.lastName ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail-Adresse"
              className={`w-full border px-4 py-2 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="emailRepeat"
              placeholder="E-Mail-Adresse wiederholen"
              className={`w-full border px-4 py-2 rounded-md ${
                errors.emailRepeat ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            {errors.emailRepeat && (
              <p className="text-red-500 text-sm">{errors.emailRepeat}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Passwort"
              className={`w-full border px-4 py-2 rounded-md ${
                errors.password ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Verbergen" : "Anzeigen"}
            </button>
            <p
              className={`text-sm mt-1 ${
                errors.password ? "text-red-500" : "text-gray-500"
              }`}
            >
              Mindestens 8 Zeichen
            </p>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPasswordRepeat ? "text" : "password"}
              name="passwordRepeat"
              placeholder="Passwort wiederholen"
              className={`w-full border px-4 py-2 rounded-md ${
                errors.passwordRepeat ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-600"
              onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
            >
              {showPasswordRepeat ? "Verbergen" : "Anzeigen"}
            </button>
            {errors.passwordRepeat && (
              <p className="text-red-500 text-sm">{errors.passwordRepeat}</p>
            )}
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
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            Weiter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
