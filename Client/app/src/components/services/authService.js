import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const login = async (name, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { name, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      return true;
    }
  } catch (error) {
    console.error('Login error', error);
  }
  return false;
};

export const logout = async () => {
  try {
    await axios.post(`${API_URL}logout`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Logout error', error);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Get user error', error);
  }
  return null;
};
