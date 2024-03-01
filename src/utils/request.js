import axios from "axios";
import { Message } from 'element-ui'
const service = axios.create({
    timeout: 5000,
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
    response => {

        return response
    },
    error => {
        Message({
            message: `输入有误或网络错误,请重新尝试${error.response.status}`,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
//并发添加到service上
service.all = axios.all
//配合all使用,接受all的结果
service.spread = axios.spread

export default service