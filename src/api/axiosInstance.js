import axios from 'axios';
import qs from 'qs';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export const cookieApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
