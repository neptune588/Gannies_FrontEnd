import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import PostTitleSection from '@/pages/PostDetail/PostHeader/PostTitleSection';
import PostInfo from '@/pages/PostDetail/PostHeader/PostInfo';
import CommentCreate from '@/pages/PostDetail/CommentCreate';
import PostCommentArea from '@/pages/PostDetail/PostCommentArea';
import OtherPosts from '@/pages/PostDetail/OtherPosts';

import heartActive from '@/assets/icons/hearts/heart_active.svg';
import heartInActive from '@/assets/icons/hearts/heart_inactive.svg';

import {
  PageCategorySection,
  ContentsWrapper,
  PostHeaderBox,
  Nickname,
  PostContentBox,
  IconBox,
  CommentArea,
  CommentLengthView,
  CommentCreateBox,
} from '@/pages/PostDetail/style';

import useEventHandler from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';

import { getPost } from '@/api/postApi';
import { getPosts } from '@/api/postApi';
import { createComment } from '@/api/commentApi';
import { getComments } from '@/api/commentApi';
import { postScrap } from '@/api/scrapApi';
import { cancelPostScrap } from '@/api/scrapApi';
import { postLikeToggle } from '@/api/likeApi';

import { formatDateToPost } from '@/utils/dateFormatting';
import { commentMaxLimit } from '@/utils/itemLimit';
import { communityPostMaxLimit } from '@/utils/itemLimit';
import { pageViewLimit } from '@/utils/itemLimit';

export default function PostDetail() {
  const { postId } = useParams();

  const firstRunBlockToSetPageEffect = useRef(true);
  const firstRunBlockToSetOtherPostsPageEffect = useRef(true);

  const { currentBoardType } = useSelectorList();
  const [post, setPost] = useState({});
  const {
    items: comments,
    setItems: setComments,
    pageTotalNumbers: totalCommentPageNumbers,
    currentPageNumber: currentCommentPageNumber,
    groupedPageNumbers: commentPageNumbers,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
    setCurrentPageNumber: resetCommentCurrentPage,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: commentMaxLimit,
    pageViewLimit: pageViewLimit,
  });
  const {
    items: otherPosts,
    currentPageNumber: otherPostsCurrentPageNumber,
    groupedPageNumbers: otherPostsPageNumbers,
    getDataAndSetPageNumbers: getOtherPostsAndSetPageNumbers,
    handlePageNumberClick: handleOtherPostsPageNumberClick,
    handlePrevPageClick: handleOtherPostsPrevPageClick,
    handleNextPageClick: handleOtherPostsNextPageClick,
    setCurrentPageNumber: resetOtherPostsCurrentPage,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit,
  });
  const { changeValue, handleChange } = useEventHandler({
    changeDefaultValue: '',
  });

  const [currentMoveLocation, setCurrentMoveLocation] = useState(null);

  //포스트 갱신
  const postReqeust = () => {
    try {
      return getPost(currentBoardType, postId);
    } catch (error) {
      console.error(error);
    }
  };

  //댓글 갱신 (모달 상태 초기화)
  const commentReqeust = () => {
    try {
      return getDataAndSetPageNumbers(() => {
        return getComments(currentBoardType, postId, {
          page: currentCommentPageNumber,
          limit: pageViewLimit,
          withReplies: true,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  //다른 게시물 + 페이지 갱신
  const otherPostsRequest = () => {
    try {
      return getOtherPostsAndSetPageNumbers(() =>
        getPosts(currentBoardType, {
          page: otherPostsCurrentPageNumber,
          limit: communityPostMaxLimit,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const itemChangeToPost = (data) => {
    setPost({
      title: data.title,
      content: data.content,
      category: data.category,
      hospitalNames: data.hospitalNames, //default null
      numberOfComments: data.numberOfComments,
      postId: data.postId,
      posterId: data.user.userId,
      nickname: data.user.nickname,
      createDate: formatDateToPost(data.createdAt),
      updateDate: formatDateToPost(data.updatedAt),
      likeCounts: data.likeCounts,
      viewCounts: data.viewCounts,
      isLiked: data.isLiked,
      isScraped: data.isScraped,
    });
  };

  const handleScrapOrLikeClick = async (buttonType) => {
    try {
      if (buttonType === 'scrap') {
        post.isScraped
          ? await cancelPostScrap(post.postId)
          : await postScrap(post.postId);

        const { data } = await postReqeust();
        itemChangeToPost(data);
      } else if (buttonType === 'like') {
        await postLikeToggle(post.postId);
        const { data } = await postReqeust();
        itemChangeToPost(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const requestAll = async () => {
    const res = await axios.all([
      postReqeust(),
      commentReqeust(),
      otherPostsRequest(),
    ]);

    itemChangeToPost(res[0].data);
  };

  const dataReset = useCallback(() => {
    resetCommentCurrentPage(1);
    resetOtherPostsCurrentPage(1);
    requestAll();
    handleChange('');
  }, [postId]);

  useEffect(() => {
    requestAll();
  }, []);

  useEffect(() => {
    if (firstRunBlockToSetPageEffect.current) {
      firstRunBlockToSetPageEffect.current = false;
      return;
    }

    commentReqeust();
    window.scroll({
      top: currentMoveLocation,
      left: 0,
    });
  }, [currentCommentPageNumber]);

  useEffect(() => {
    if (firstRunBlockToSetOtherPostsPageEffect.current) {
      firstRunBlockToSetOtherPostsPageEffect.current = false;
      return;
    }

    otherPostsRequest();
  }, [otherPostsCurrentPageNumber]);

  useEffect(() => {
    dataReset();
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 20);
  }, [postId]);

  return (
    <>
      <CommunityBanner>
        <CommunityBannerText />
      </CommunityBanner>
      <PageCategorySection>
        <PageCategory />
      </PageCategorySection>
      <ContentsWrapper>
        <PostHeaderBox>
          <PostTitleSection
            postTitle={post.title}
            isScraped={post.isScraped}
            handleScrapClick={() => {
              handleScrapOrLikeClick('scrap');
            }}
          />
          <Nickname>{post.nickname}</Nickname>
          <PostInfo
            postViewCount={post.viewCounts}
            likeCount={post.likeCounts}
            commentCount={post.numberOfComments}
            postCreateDate={post.createDate}
            postUpdateDate={post.updateDate}
          />
        </PostHeaderBox>
        <PostContentBox>
          <p>{post.content}</p>
        </PostContentBox>
        <IconBox
          onClick={() => {
            handleScrapOrLikeClick('like');
          }}
        >
          <img
            src={post.isLiked ? heartActive : heartInActive}
            alt='like-button'
          />
          <p>공감해요</p>
        </IconBox>
        <CommentArea>
          <CommentLengthView>댓글 {post.numberOfComments}개</CommentLengthView>
          <CommentCreateBox>
            <CommentCreate
              requestType={'create'}
              postId={post.postId}
              value={changeValue}
              dataReset={dataReset}
              handleChange={handleChange}
            />
          </CommentCreateBox>
        </CommentArea>
        <PostCommentArea
          comments={comments}
          currentPageNumber={currentCommentPageNumber}
          pageNumbers={commentPageNumbers}
          totalCommentPageNumbers={totalCommentPageNumbers}
          dataReset={dataReset}
          setCurrentMoveLocation={setCurrentMoveLocation}
          handlePageNumberClick={handlePageNumberClick}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
        />
        <OtherPosts
          currentPostId={postId}
          posts={otherPosts}
          pageNumbers={otherPostsPageNumbers}
          currentPageNumber={otherPostsCurrentPageNumber}
          handlePrevPageClick={handleOtherPostsPrevPageClick}
          handleNextPageClick={handleOtherPostsNextPageClick}
          handlePageNumberClick={handleOtherPostsPageNumberClick}
        />
      </ContentsWrapper>
    </>
  );
}
