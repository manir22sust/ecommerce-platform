import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryNavigation from "./components/CategoryNavigation";
/* import OrderSummary from "./components/OrderSummary"; */

// Pages
import Home from "./pages/Home";
import LadiesFashion from "./pages/LadiesFashion";
import SingleLadiesProduct from "./pages/SingleLadiesProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderSummary from "./pages/OrderSummary";
import CheckoutComponent from "./pages/Test";
import Wishlist from "./pages/Wishlist";
import Service from "./pages/Service";
import ThankYou from "./pages/ThankYou";
import AccountSidebar from "./components/AccountSidebar";
import MyProfile from "./pages/MyProfile";
import CategoryPage from "./pages/CategoryPage";
import SalePage from "./pages/SalePage";
import NotFound from "./components/NotFound";
import SingleProduct from "./pages/SingleProduct";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import ContactPage from "./pages/ContactPage";
import AGBPage from "./pages/AGBPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import WiderrufPage from "./pages/WiderrufPage";
import CookieSettingsPage from "./pages/CookieSettingsPage";

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
              <Route path="/product-details" element={<ProductDetails />} />
              <Route path="/categories" element={<AllCategoriesPage />} />
              <Route
                path="/categories/:categorySlug"
                element={<CategoryPage />}
              />
              <Route
                path="/products/:productSlug"
                element={<SingleProduct />}
              />
              <Route path="/sale" element={<SalePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<OrderSummary />} />
              {/*       <Route path="/order" element={<OrderSummary />} /> */}
              <Route path="/checkout-cart" element={<CheckoutComponent />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/account" element={<AccountSidebar />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/service" element={<Service />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/agb" element={<AGBPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="/widerruf" element={<WiderrufPage />} />
              <Route path="/cookies" element={<CookieSettingsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
