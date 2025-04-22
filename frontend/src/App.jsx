import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryNavigation from "./components/CategoryNavigation";
// Pages
import Home from "./pages/Home";
import LadiesFashion from "./pages/LadiesFashion";
import SingleLadiesProduct from "./pages/SingleLadiesProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CategoryNavigation />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<Home />} />

              {/* Ladies Fashion Page */}
              <Route path="/ladies-fashion" element={<LadiesFashion />} />

              {/* Single Ladies Product Page */}
              <Route
                path="/ladies-fashion/slug"
                element={<SingleLadiesProduct />}
              />
              {/* <Route path="/ladies-fashion/:slug" element={<SingleLadiesProduct />} /> */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
