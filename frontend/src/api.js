import axios from "axios";

export default axios.create({
  baseURL: "https://auth-system-lytp.onrender.com/api/auth"
});