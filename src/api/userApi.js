import { cookieApi } from '@/api/axiosInstance';

//본인정보조회
export const getUserInfo = async () => {
  const url = '/me';
  const response = await cookieApi.get(url);
  return response;
};

//닉네임 수정
export const changeUserNickname = async (nickname) => {
  const url = '/me/nickname';
  const response = await cookieApi.patch(url, nickname);
  return response;
};

//비밀번호 수정
export const changeUserPassword = async (password) => {
  const url = '/me/password';
  const response = await cookieApi.patch(url, password);
  return response;
};

//본인 게시글 페이지 단위로 조회
export const getUserPosts = async (params) => {
  const url = '/me/posts';
  const response = await cookieApi.get(url, { params });
  return response;
};

//본인 댓글 페이지 단위로 조회
export const getUserComments = async (params) => {
  const url = '/me/comments';
  console.log('---' + params.sort + '---');
  const response = await cookieApi.get(url, { params });
  response.data.items.map((item) => {
    console.log(item.createdAt);
  });
  return response;
};

//본인 스크랩 페이지 단위로 조회
export const getUserScraps = async (params) => {
  const url = '/me/scraps';
  const response = await cookieApi.get(url, { params });
  return response;
};
