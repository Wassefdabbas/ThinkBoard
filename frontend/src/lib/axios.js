import axios from "axios";

const backend_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
    baseURL : `${backend_URL}/api`
})

export default api