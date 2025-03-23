// src/api/axiosInstance.ts
import axios from 'axios'

// API Base URL
const API_BASE_URL = 'http://localhost:5000/api' // Change this to your backend URL

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

// Attach Access Token to Requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Refresh Token Logic
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       try {
//         const refreshToken = localStorage.getItem('refreshToken')
//         if (!refreshToken) throw new Error('No refresh token available')

//         const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
//           refreshToken
//         })

//         localStorage.setItem('accessToken', data.accessToken)
//         localStorage.setItem('refreshToken', data.refreshToken)

//         // Retry the failed request with the new token
//         axiosInstance.defaults.headers.Authorization = `Bearer ${data.accessToken}`
//         return axiosInstance(originalRequest)
//       } catch (refreshError) {
//         console.error('Refresh token failed, logging out...')
//         localStorage.removeItem('accessToken')
//         localStorage.removeItem('refreshToken')
//         window.location.href = '/login' // Redirect to login on failure
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
