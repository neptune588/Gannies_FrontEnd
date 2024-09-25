import { api } from '@/api/axiosInstance';

//전체 데이터 카운트
export const getDataCount = async () => {
  const url = `/posts/count-by-category`;
  const response = await api.get(url);
  return response;
};
