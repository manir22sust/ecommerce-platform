import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart items from local storage
  useEffect(() => {
    const migrateLegacyCart = (oldCart) => {
      // Add migration logic here if needed
      return oldCart.items
        .map((item) => ({
          ...item,
          _id: item.id, // Move old numeric ID to _id
          id: undefined, // Remove numeric ID
        }))
        .filter((item) => item._id);
    };

    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      if (savedCart.items.some((item) => !item._id)) {
        // Migrate old cart format
        const migratedCart = migrateLegacyCart(savedCart);
        setCartItems(migratedCart);
        localStorage.setItem(
          "cart",
          JSON.stringify({
            items: migratedCart,
            tq: savedCart.tq,
            tp: savedCart.tp,
          })
        );
      } else {
        setCartItems(savedCart.items);
        setTotalQuantity(savedCart.tq);
        setTotalPrice(savedCart.tp);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    const cartData = {
      items: cartItems,
      tq: totalQuantity,
      tp: totalPrice,
    };
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartItems, totalQuantity, totalPrice]);

  // Calculate totals
  useEffect(() => {
    const { quantity, price } = cartItems.reduce(
      (acc, item) => ({
        quantity: acc.quantity + item.quantity,
        price: acc.price + item.price * item.quantity,
      }),
      { quantity: 0, price: 0 }
    );

    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [cartItems]);

  // Add item to cart
  const addItem = (newItem) => {
    if (!newItem._id) {
      console.error("Cannot add item without _id");
      console.error("Item missing _id:", newItem);
      return;
    }

    const cartId = `${newItem._id}-${newItem.selectedSize || ""}-${
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

      return [
        ...prevItems,
        {
          ...newItem,
          cartId,
          _id: newItem._id, // Ensure _id is stored
        },
      ];
    });
  };

  // Remove item from cart
  const removeItem = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId)
    );
  };

  // Update item quantity
  const updateQuantity = (cartId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  // Clear entire cart
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
