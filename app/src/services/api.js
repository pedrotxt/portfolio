import axios from 'axios';

const api = axios.create({
 baseURL: 'https://my-json-server.typicode.com/pedrotxt/backendPortfolio'
});

export default api;