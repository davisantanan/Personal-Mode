import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3333',
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default api;