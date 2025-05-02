import { API_URL } from "./api";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    // Validate and store the token
    if (!data.token) {
      throw new Error("Authentication token missing in response");
    }
    localStorage.setItem("token", data.token);

    return data;
  } catch (error) {
    console.error("Login error:", error.message);
    throw new Error(error.message || "Unable to connect to server");
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userData.firstName.trim(),
        lastName: userData.lastName.trim(),
        email: userData.email.toLowerCase().trim(),
        password: userData.password,
        gender: userData.gender,
        newsletter: userData.newsletter || false,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle 409 Conflict (duplicate email) specifically
      if (response.status === 409) {
        throw new Error(data.error || "Email is already registered");
      }
      throw new Error(data.error || `Registration failed (${response.status})`);
    }

    // Verify the cookie was received
    if (!document.cookie.includes("jwt")) {
      console.warn("JWT cookie not set - check CORS configuration");
    }

    return data;
  } catch (error) {
    console.error("Registration Error Details:", {
      status: error.response?.status,
      message: error.message,
      userData: {
        ...userData,
        password: "** redacted **", 
      },
    });

    // Provide more specific error messages
    const friendlyError = error.message.includes("valid")
      ? "Please check your input values"
      : error.message;

    throw new Error(friendlyError);
  }
};
