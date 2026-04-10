import axios from "axios";

// Use the hosted backend
const api = axios.create({
  baseURL: "https://auth-system-lytp.onrender.com", // your deployed backend
});

export default api;