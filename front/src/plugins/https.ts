import axios, { AxiosInstance } from 'axios'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL! as string || "api/"

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://heuristica.herokuapp.com/",
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient