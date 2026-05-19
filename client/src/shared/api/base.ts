import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://developer-portfolio-ai.onrender.com',
    timeout: 10000,
});