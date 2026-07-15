import apiClient from "./apiClient";

// All API functions are centralized here and categorized by domain
export const productAPI = {
  // Fetch all products
  getAllProducts: async () => {
    const response = await apiClient.get("/product/all");
    return response.data; // Expected format: { data: products }
  },
};

export default productAPI;
