import { api, cookieApi } from '@/api/axiosInstance';

//특정 게시물 댓글 페이지 단위로 조회 (10개) (후에 수정)
export const getComments = async (boardType, postId, query) => {
  const url = `/posts/${boardType}/${postId}/comments`;
  const response = await cookieApi.get(url, { params: query });
  return response;
};

//특정 게시물 댓글 작성
export const createComment = async (boardType, postId) => {
  const url = `/posts/${boardType}/${postId}/comments`;
  const response = await cookieApi.post(url);
  return response;
};

//댓글 수정
export const editComment = async (commentId, editCommentData) => {
  const url = `/${commentId}`;
  const response = await cookieApi.patch(url, editCommentData);
  return response;
};

//댓글 삭제
export const deleteComment = async (commentId) => {
  const url = `/${commentId}`;
  const response = await cookieApi.delete(url);
  return response;
};

//댓글 신고
export const reportComment = async (commentId, reportData) => {
  const url = `/${commentId}/reports`;
  const response = await cookieApi.post(url, reportData);
  return response;
};

//대댓글 조회
export const getReplyComments = async (commentId) => {
  const url = `/${commentId}/replies`;
  const response = await api.get(url);
  return response;
};

//대댓글 작성
export const createReplyComment = async (commentId, commentData) => {
  const url = `/${commentId}/replies`;
  const response = await cookieApi.post(url, commentData);
  return response;
};

//대댓글 수정
export const editReplyComment = async (replyId, commentData) => {
  const url = `/replies/${replyId}`;
  const response = await cookieApi.patch(url, commentData);
  return response;
};

//대댓글 삭제
export const deleteReplyComment = async (replyId) => {
  const url = `/replies/${replyId}`;
  const response = await cookieApi.delete(url);
  return response;
};
