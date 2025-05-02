import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CategoriesProvider } from "./contexts/CategoriesContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { WishlistProvider } from "./contexts/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoriesProvider>
      <CartProvider>
        <UserProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </UserProvider>
      </CartProvider>
    </CategoriesProvider>
  </StrictMode>
);
