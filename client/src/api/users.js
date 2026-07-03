import axios from 'axios';

// Create an axios instance pointing to our proxied API
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

/**
 * Fetch users from the backend Node.js API, with fallback to dummyjson.com if backend is unavailable.
 */
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return {
      users: response.data.users,
      // source: 'Local MySQL Backend API',
    };
  } catch (error) {
    console.warn('Failed to fetch from backend API, falling back to dummyjson.com:', error);
    // Fallback to dummyjson.com
    const fallbackResponse = await axios.get('https://dummyjson.com/users?limit=0'); // Fetch all users
    return {
      users: fallbackResponse.data.users,
      source: 'DummyJSON API (Fallback)',
    };
  }
};

/**
 * Add a new user to the backend Node.js API, with mock fallback if unavailable.
 */
export const createUserApi = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return {
      success: true,
      user: response.data,
      isFallback: false,
    };
  } catch (error) {
    console.warn('Failed to add user to backend API, mock adding locally:', error);
    return {
      success: true,
      user: userData,
      isFallback: true,
    };
  }
};

/**
 * Delete a user from the backend Node.js API, with mock fallback if unavailable.
 */
export const deleteUserApi = async (userId) => {
  try {
    await api.delete(`/users/${userId}`);
    return {
      success: true,
      isFallback: false,
    };
  } catch (error) {
    console.warn('Failed to delete user from backend API, mock deleting locally:', error);
    return {
      success: true,
      isFallback: true,
    };
  }
};
