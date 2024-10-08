import axios from 'axios';
import qs from 'qs';
import { setupCache } from 'axios-cache-interceptor';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_KAKAO_PLACE_SEARCH_API_BASE_URL = import.meta.env
  .VITE_KAKAO_API_BASE_URL;
const VITE_KAKAO_PlACE_SEARCH_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

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
  baseURL: `${VITE_KAKAO_PLACE_SEARCH_API_BASE_URL}`,
  timeout: 5000,
  headers: {
    Authorization: `KakaoAK ${VITE_KAKAO_PlACE_SEARCH_API_KEY}`,
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export const cacheApi = setupCache(
  axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: 'repeat' }),
  }),
  {
    ttl: 1000,
    interpretHeader: true,
    cachePredicate: {
      statusCheck: (status) => status >= 200 && status < 300,
    },
  }
);
