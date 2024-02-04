import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(function (config) {
    //console.log(config);
    return config;
}, function (error) {
    //console.error(error);
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    //console.log(response);
    return response;
}, function (error) {
    //console.error(error);
    return Promise.reject(error); 
});
  
export default api;