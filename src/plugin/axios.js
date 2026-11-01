import axios from 'axios'

const addToken = (config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
}

// Most views import axios directly, so the default instance needs the token too
axios.interceptors.request.use(addToken)

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
})

instance.interceptors.request.use(

    addToken,
    function (error) {
        return error.response.data;
    },
    function (response) {
        // Modify the response data
        return response.data;
    },
   
);

export default instance