import axios from "axios";
import { getStringLocal } from "./config";
import { DOMAIN_BE, USER_LOGIN } from "./constant";

export const http = axios.create({
    baseURL: DOMAIN_BE,
    timeout: 6000
})

// interceptor => can thiệp một hàm middleware vào request và response khi gọi api
http.interceptors.request.use((config) => {
    const token = getStringLocal(USER_LOGIN);
    
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
            // tokenCybersoft:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyOCIsIkhldEhhblN0cmluZyI6IjI1LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzI4MzIwMDAwMCIsIm5iZiI6MTY0Nzk2ODQwMCwiZXhwIjoxNjc3NDMwODAwfQ.wEdmkKpVZbDB4s4L_cmLwJ1O8le8Cc-VMgLZCI-HvLA"
        }
    }
}, err => { console.log(err) })