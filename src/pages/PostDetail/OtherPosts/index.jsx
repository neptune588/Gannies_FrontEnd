import { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

import Pagination from '@/components/Pagination';
import OtherPostList from '@/pages/PostDetail/OtherPostList';

import {
  PostsWrapper,
  PageWrapper,
  Title,
} from '@/pages/PostDetail/OtherPosts/style';

import { formatDateToPost } from '@/utils/dateFormatting';

export default memo(function OtherPosts({
  currentPostId,
  currentBoardType,
  posts,
  pageNumbers,
  currentPageNumber,
  handlePrevPageClick,
  handleNextPageClick,
  handlePageNumberClick,
}) {
  const navigate = useNavigate();

  return (
    <>
      <PostsWrapper>
        <Title>게시글 목록</Title>
        <table>
          <tbody>
            {posts.length > 0 &&
              posts.map((post) => (
                <OtherPostList
                  key={uuid()}
                  handlePostClick={
                    currentPostId === post.postId
                      ? null
                      : () => {
                          navigate(
                            `/community/${currentBoardType}/post/${post.postId}`
                          );
                        }
                  }
                  number={String(post.postId).padStart(2, '0')}
                  title={post.title}
                  nickname={post.user.nickname}
                  createDate={formatDateToPost({ date: post.createdAt })}
                  postViewCount={parseInt(post.viewCounts, 10)}
                  likeCount={parseInt(post.likeCounts, 10)}
                  numberOfCommentsAndReplies={parseInt(
                    post.numberOfCommentsAndReplies,
                    10
                  )}
                  ownPostId={parseInt(post.postId, 10)}
                  currentPostId={parseInt(currentPostId, 10)}
                />
              ))}
          </tbody>
        </table>
      </PostsWrapper>
      <PageWrapper>
        <Pagination
          pageNumbers={pageNumbers}
          currentPageNumber={currentPageNumber}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
          handlePageNumberClick={handlePageNumberClick}
        />
      </PageWrapper>
    </>
  );
});
