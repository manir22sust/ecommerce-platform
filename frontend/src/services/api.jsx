export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// Helper to log API_URL status during development
if (import.meta.env.DEV) {
  console.log(`API Base URL: ${API_URL}`);
}
/* 
export const createOrder = async (orderData, token) => {
  try {
    // 1. Get JWT token from storage
    // const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("User not authenticated. Please login first.");
    }

    // 2. Add Authorization header
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });

    const contentType = response.headers.get("content-type");

    // 3. Handle 401 Unauthorized specifically
    if (response.status === 401) {
      // localStorage.removeItem("token");
      throw new Error("Session expired. Please login again.");
    }

    if (!response.ok) {
      // Handle HTML error responses
      if (contentType?.includes("text/html")) {
        const text = await response.text();
        throw new Error(
          `Server error (${response.status}): ${text.substring(0, 100)}...`
        );
      }

      // Parse JSON error
      const error = contentType?.includes("application/json")
        ? await response.json()
        : { message: `HTTP Error ${response.status}` };

      throw new Error(
        error.message || `Request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Order creation error:", {
      message: error.message,
      endpoint: `${API_URL}/orders`,
      payload: orderData,
      tokenExists: !!token,
    });

    throw new Error(
      error.message || "Failed to create order. Please check your connection."
    );
  }
}; */

export const createOrder = async (orderData, token) => {
  try {
    const response = await fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
      body: JSON.stringify(orderData), // Order data sent in the request body
    });

    // Handle response based on HTTP status code
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Order creation failed:", errorData);
      throw new Error(errorData.message || "Unknown error");
    }

    const responseData = await response.json();
    console.log("Order created successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error during order creation:", error);
    throw error;
  }
};
