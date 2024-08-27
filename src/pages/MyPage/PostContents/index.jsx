import { useState } from 'react';

import PostList from '@/components/PostList';

import {
  PostsWrapper,
  PostsHeader,
  PostsHeaderLeftBox,
  PostsHeaderRightBox,
  PostListBox,
} from '@/pages/MyPage/PostContents/style';

import { posts } from '@/pages/Home/data';
export default function PostContents() {
  const [data] = useState(posts);

  return (
    <PostsWrapper>
      <PostsHeader>
        <PostsHeaderLeftBox>
          <p>순서</p>
          <p>카테고리</p>
          <p>제목</p>
        </PostsHeaderLeftBox>
        <PostsHeaderRightBox>
          <p>조회수</p>
          <p>공감수</p>
          <p>작성일</p>
        </PostsHeaderRightBox>
      </PostsHeader>
      <PostListBox>
        <PostList />
      </PostListBox>
    </PostsWrapper>
  );
}
