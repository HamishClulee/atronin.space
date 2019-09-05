import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4888'
    : window.location.origin

export const NODE = axios.create({
    baseURL: baseURL,
    withCredentials: true
})
