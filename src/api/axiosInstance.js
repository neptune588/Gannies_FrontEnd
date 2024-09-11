import axios from 'axios';
import qs from 'qs';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const HOSPITAL_BASE_URL = import.meta.env.VITE_HOSITAL_API_BASE_URL;
const HOSPITAL_SERVICE_KEY = import.meta.env.VITE_HOSPITAL_FIND_API_KEY;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export const cookieApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export const hospitalApi = axios.create({
  baseURL: `${HOSPITAL_BASE_URL}?serviceKey=${HOSPITAL_SERVICE_KEY}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
