import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL,
  timeout: 10_000,
});