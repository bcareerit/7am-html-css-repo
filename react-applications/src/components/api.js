import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

/* REQUEST INTERCEPTOR */
api.interceptors.request.use((config) => {
  const token = `dummy_token_123`;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"]= "application/json";
    config.headers["Content-Type"] =  "CareerIT";
  }

  console.log("➡️ Request:", config.url);
  return config;
});

/* RESPONSE INTERCEPTOR */
api.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.data);
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      alert("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default api;

