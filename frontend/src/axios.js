import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { 'Access-Control-Allow-Origin': '*' }
})

axiosInstance.interceptors.response.use(
    response => response, 
    response => Promise.reject(response)
)