import { createContext, useContext, useState, useEffect } from "react";
import { loginUser as apiLogin } from "../services/authAPI";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && typeof parsedUser === "object") {
          setUser(parsedUser);
        } else {
          throw new Error("Invalid user format");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);
  // Updated login function
  const login = async (email, password) => {
    try {
      const userData = await apiLogin(email, password); // Call backend API
      const completeUser = {
        ...userData,
        address: userData.address || {
          street: "",
          postalCode: "",
          city: "",
          country: "Germany",
        },
      };
      setUser(completeUser);
      localStorage.setItem("user", JSON.stringify(completeUser));
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Propagate error to UI
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (updatedData) => {
    if (!user) {
      console.error("Cannot update user: no user logged in");
      return;
    }

    const updatedUser = {
      ...user,
      ...updatedData,
      address: user.address,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const updateAddress = (newAddress) => {
    if (!user) {
      console.error("Cannot update address: no user logged in");
      return;
    }

    const updatedUser = {
      ...user,
      address: {
        ...user.address,
        ...newAddress,
      },
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        updateUser,
        updateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
