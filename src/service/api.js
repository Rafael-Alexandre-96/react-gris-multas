import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(function (config) {
    //console.log(config);
    return config;
}, function (error) {
    //return Promise.reject(error);
    console.error(error);
});

api.interceptors.response.use(function (response) {
    //console.log(response);
    return response;
}, function (error) {
    //return Promise.reject(error);
    console.error(error);
});
  
export default api;