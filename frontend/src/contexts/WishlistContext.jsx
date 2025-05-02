import { createContext, useMemo, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    // Load from localStorage on initial load
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === newItem.id);
      return exists ? prev : [...prev, { ...newItem, liked: true }];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleLike = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const value = useMemo(
    () => ({
      items,
      wishlistAddItem: addItem,
      removeItem,
      toggleLike,
      totalItems: items.length,
      totalSavings: items.reduce(
        (acc, item) =>
          acc + (item.originalPrice ? item.originalPrice - item.price : 0),
        0
      ),
    }),
    [items]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
