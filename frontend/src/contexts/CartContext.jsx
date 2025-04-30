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
  // Calculate totals whenever cart items change
  useEffect(() => {
    let newTotalQuantity = 0;
    let newTotalPrice = 0;

    cartItems.forEach((item) => {
      newTotalQuantity += item.quantity;
      newTotalPrice += item.price * item.quantity;
    });

    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  // Add item to cart

  const addItem = (newItem) => {
    const cartId = `${newItem.id}-${newItem.selectedSize || ""}-${
      newItem.selectedColor || ""
    }`;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.cartId === cartId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...prevItems, { ...newItem, cartId }];
    });
  };
  const removeItem = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId)
    );
  };
  const updateQuantity = (cartId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };
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
