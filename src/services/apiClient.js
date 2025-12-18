import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://68.10.63.178:8002/api",
  timeout: 10000,
    headers: { 
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

export default apiClient;