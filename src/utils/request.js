import axios from "axios";
// import { Message } from 'element-ui'
const service = axios.create({
    timeout: 5000,
    BASE_URL: '/api'
}) 
//TODO根据需求配置网络请求
// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
    error => {
        return Promise.reject(error)
    }
)
export default service