import { hospitalApi } from '@/api/axiosInstance';

//병원 찾기
export const getHospitals = async (params) => {
  const url = '';
  const response = await hospitalApi.get(url, params);
  return response;
};
