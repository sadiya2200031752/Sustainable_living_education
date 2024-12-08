import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'http://localhost:8081/api/users';

// Function to register a new user
export const registerUser = async (email, password, role) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
            email,
            password,
            role,
        });
        return response.data; // Returns the response data
    } catch (error) {
        console.error('Error during registration:', error.response?.data || error.message);
        throw error.response?.data || 'Registration failed!';
    }
};

// Function to login a user
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password,
        });
        return response.data; // Returns the response data
    } catch (error) {
        console.error('Error during login:', error.response?.data || error.message);
        throw error.response?.data || 'Login failed!';
    }
};

// Example: Add more API functions as needed
