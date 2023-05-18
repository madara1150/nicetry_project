import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
})

instance.interceptors.request.use(

    function (config) {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    function (error) {
        return error.response.data;
    },
    function (response) {
        // Modify the response data
        return response.data;
    },
   
);

export default instance