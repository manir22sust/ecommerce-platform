import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/categories"
  );

  const value = {
    categories: data || [],
    loading,
    error,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
