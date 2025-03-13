import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const login = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const register = async (data: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/auth/register`, data);
  return response.data;
}; 