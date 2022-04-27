import axios, { AxiosInstance } from 'axios'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL! as string

const apiClient: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient