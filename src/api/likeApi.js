import { api, cookieApi } from '@/api/axiosInstance';

//게시물 좋아요
export const postLike = async (postId) => {
  const url = `/posts/${postId}/like`;
  const response = await cookieApi.post(url);
  return response;
};
