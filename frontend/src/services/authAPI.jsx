export const loginUser = async (email, password) => {
  try {
    const response = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Use server-sent error message if available
      throw new Error(data.error || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login error:", error.message);
    throw new Error(error.message || "Unable to connect to server");
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:8000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Use server-sent error message if available
      throw new Error(data.error || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Registration error:", error.message);
    throw new Error(error.message || "Unable to connect to server");
  }
};
