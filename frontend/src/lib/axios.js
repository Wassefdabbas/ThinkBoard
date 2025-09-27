import axios from "axios";

const backend_URL = import.meta.env.VITE_BACKEND_URL;

const BASE_URL = import.meta.env.MODE === 'development' ? `${backend_URL}/api` : '/api'

const api = axios.create({
    baseURL : BASE_URL
})

export default api