import { api, cookieApi } from '@/api/axiosInstance';

//게시물 페이지 단위로 조회 (10개)
export const getPosts = async (boardType, query) => {
  const url = `/posts/${boardType}`;
  const response = await api.get(url, { params: query });
  return response;
};

//특정 게시물 조회(1개)
export const getPost = async (boardType, postId) => {
  const url = `/posts/${boardType}/${postId}`;
  const response = await cookieApi.get(url);
  return response;
};

//게시물 생성
export const createPost = async (boardType, postData) => {
  const url = `/posts/${boardType}`;
  const response = await cookieApi.post(url, postData);
  return response;
};

//게시물 수정
export const editPost = async (boardType, postId, postData) => {
  const url = `/posts/${boardType}/${postId}`;
  const response = await cookieApi.patch(url, postData);
  return response;
};

//게시물 삭제
export const deletePost = async (boardType, postId) => {
  const url = `/posts/${boardType}/${postId}`;
  const response = await cookieApi.delete(url);
  return response;
};

//게시물 신고
export const reportPost = async (boardType, postId, reportData) => {
  const url = `/posts/${boardType}/${postId}/reports`;
  const response = await cookieApi.post(url, reportData);
  return response;
};
