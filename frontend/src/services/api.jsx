export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// Helper to log API_URL status during development
if (import.meta.env.DEV) {
  console.log(`API Base URL: ${API_URL}`);
}

export const createOrder = async (orderData, token) => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
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

export const getMyOrders = async (token) => {
  try {
    const response = await fetch(`${API_URL}/orders/myorders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to fetch orders:", errorData);
      throw new Error(errorData.message || "Failed to fetch orders");
    }

    const responseData = await response.json();
    console.log("Orders fetched successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
