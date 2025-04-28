import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(3);
  const [totalPrice, setTotalPrice] = useState(0);

  // load cart items from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      const { items, totalQuantity, totalPrice } = savedCart;
      setCartItems(items);
      setTotalQuantity(totalQuantity);
      setTotalPrice(totalPrice);
    }
  }, []);
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const cartData = {
      items: cartItems,
      tq: totalQuantity,
      tp: totalPrice,
    };
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartItems, totalQuantity, totalPrice]);

  // Add item to cart

  const addItem = (newItem) => {};
  const removeItem = (itemId) => {};
  const updateQuantity = (cartId, newQuantity) => {};
  const clearCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        totalQuantity,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
