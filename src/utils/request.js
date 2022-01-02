import axios from "axios";

const service = axios.create({
    baseURL: "http://api.tianapi.com",
    timeout: 20000
})


export default service