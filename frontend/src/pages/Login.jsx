// Login.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      alert("Anmeldung fehlgeschlagen: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          SHOP
        </h1>
        <form onSubmit={handleLogin}>
          <h2 className="text-xl font-semibold mb-4 text-center">Anmeldung</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Passwort"
              className="w-full px-4 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Verbergen" : "Anzeigen"}
            </button>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">
              Angemeldet bleiben –{" "}
              <span className="text-gray-500">Was ist das?</span>
            </label>
          </div>
          <div className="mb-4">
            <Link to="/forgot-password" className="text-blue-600 text-sm">
              Passwort vergessen / Probleme bei der Anmeldung
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold"
          >
            Anmelden
          </button>
        </form>
        <Link
          to="/register"
          className="w-full mt-4 block text-center bg-gray-200 py-2 rounded-md text-sm font-medium"
        >
          Neu bei SHOP? Jetzt registrieren
        </Link>
      </div>
    </div>
  );
};

export default Login;
