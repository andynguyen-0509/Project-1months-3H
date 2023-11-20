import axios from 'axios';

const token =
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyNDI5NzYxLCJleHAiOjE2OTI0NjU3NjF9.et7gMYA62lVllNwGTKVyb3zlFa3YweKwjIOrIA8POR8'
const api = axios.create({
    baseURL: 'http://139.59.103.50:5000',
    header: { Authorization: `Bearer ${token}` },
});

export default api;