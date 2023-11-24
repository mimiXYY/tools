import axios from "axios";
const service = axios.create({
    timeout: 5000,
    BASE_URL: '/api'
})
export default service