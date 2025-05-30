import axios from "axios"

const BASE_API = import.meta.env.BASE_API

const service = axios.create({
    baseURL: BASE_API,
})

/* Настройка всех запросов */
service.interceptors.request.use(config => {
    const conf = config

    conf.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

    return config
}, error => Promise.reject(error))

/* Настройка всех ответов */

service.interceptors.response.use(response => {
    const { data } = response

    return data
    /* 401, 403, 500 и т.д.*/
}, error => Promise.reject(new Error(error)))

export default service