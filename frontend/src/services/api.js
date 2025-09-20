const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Debug logging
console.log('🔍 Environment Variables Debug:');
console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('API_BASE_URL:', API_BASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

export const searchAPI = {
  // Get all products
  getAllProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/search/all-products`);
    return response.json();
  },

  // Search products
  smartSearch: async (query) => {
    const response = await fetch(`${API_BASE_URL}/search/smart-search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    return response.json();
  },
};
