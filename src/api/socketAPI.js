import { cookieApi } from '@/api/axiosInstance';
import { io } from 'socket.io-client';

const SOCKET_CONFIG = {
  withCredentials: true,
  transports: ['websocket'],
};

export const monitorSession = async () => {
  const url = `/session/monitor`;
  const response = await cookieApi.post(url);
  return response;
};

export const createSocket = () => {
  return io(import.meta.env.VITE_API_BASE_URL, SOCKET_CONFIG);
};

export const extendSession = async () => {
  const url = `/session/extend`;
  const response = await cookieApi.post(url);
  return response;
};
