// src/api/auth.ts
import axiosInstance from './axios';
// Login Function
export const login = async (credentials) => {
    const { data } = await axiosInstance.post('/auth/login', credentials);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
};
// Signup Function
export const signup = async (newUser) => {
    const { data } = await axiosInstance.post('/auth/signup', newUser);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
};
// Logout Function
export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login'; // Redirect to login
};
