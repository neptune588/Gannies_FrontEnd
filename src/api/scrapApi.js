import { api, cookieApi } from '@/api/axiosInstance';

//게시물 스크랩
export const postScrap = async (postId) => {
  const url = `/scraps/${postId}`;
  const response = await cookieApi.post(url);
  return response;
};

//내가 스크랩한 게시물 조회 (all)
export const getMyScrapPosts = async () => {
  const url = `/scraps`;
  const response = await cookieApi.get(url);
  return response;
};

//스크랩 취소
export const cancelPostScrap = async (scrapId) => {
  const url = `/scraps/${scrapId}`;
  const response = await cookieApi.delete(url);
  return response;
};
