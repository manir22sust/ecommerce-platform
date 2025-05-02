import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../services/api";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const { data, loading, error } = useFetch(`${API_URL}/categories`);

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
