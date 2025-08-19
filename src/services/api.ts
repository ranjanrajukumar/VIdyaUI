import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://ranjanrajukumar-001-site1.stempurl.com/api',
  headers: {
    'Content-Type': 'application/json',
    
  },
});

export default api;
