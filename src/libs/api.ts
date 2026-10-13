import apiClient from "./apiClient";

// All API functions are centralized here and categorized by domain
export const productAPI = {
  // Fetch all products
  getAllProducts: async () => {
    const response = await apiClient.get("/product/all");
    return response.data; // Expected format: { data: products }
  },
};

export const authAPI = {
  forgotPassword: async (email: string) => {
    try {
      const response = await apiClient.post("/auth/forgot-password", { email });
      return response.data;
    } catch {
      // Graceful fallback for mock/offline environment
      return { success: true };
    }
  },
};

export default productAPI;
