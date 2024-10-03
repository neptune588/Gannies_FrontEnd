import { useEffect, useState } from 'react';
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
import { getComments } from '@/api/commentApi';
import { postScrap } from '@/api/scrapApi';
import { cancelPostScrap } from '@/api/scrapApi';
import { postLikeToggle } from '@/api/likeApi';

import { formatDateToPost } from '@/utils/dateFormatting';
import { commentMaxLimit } from '@/utils/itemLimit';
import { pageViewLimit } from '@/utils/itemLimit';

export default function PostDetail() {
  const { postId } = useParams();

  const { currentBoardType } = useSelectorList();

  const [post, setPost] = useState({});
  const {
    items: comments,
    setItems: setComments,
    currentPageNumber: currentCommentPageNumber,
    groupedPageNumbers: commentPageNumbers,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: commentMaxLimit,
    pageViewLimit: pageViewLimit,
  });
  const [commentReplies, setCommentReplies] = useState([]);

  const getItems = async () => {
    const res = await axios.all([
      getPost(currentBoardType, postId),
      getDataAndSetPageNumbers(() => {
        return getComments(currentBoardType, postId, {
          page: currentCommentPageNumber,
          limit: pageViewLimit,
          withReplies: true,
        });
      }),
    ]);

    const { data } = res[0];

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

    setComments((prev) => {
      return prev.map((comment) => {
        return {
          ...comment,
          isMoreButtonState: false,
          isReplyCreateOpen: false,
          replies:
            comment.replies.length > 0
              ? comment.replies.map((replyComment) => {
                  return {
                    ...replyComment,
                    isReplyCommentMoreButtonState: false,
                  };
                })
              : [],
        };
      });
    });
  };

  const handleScrapClick = async () => {
    try {
      post.isScraped
        ? await cancelPostScrap(post.postId)
        : await postScrap(post.postId);

      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLikeClick = async () => {
    try {
      postLikeToggle(post.postId);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReplyCreateButtonClick = (clickCommentIdx) => {
    setComments(() => {
      return comments.map((comment, idx) => {
        return {
          ...comment,
          isReplyCreateOpen:
            clickCommentIdx === idx
              ? !comment.isReplyCreateOpen
              : comment.isReplyCreateOpen,
        };
      });
    });
  };

  useEffect(() => {
    (() => {
      try {
        getItems();
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
            handleScrapClick={handleScrapClick}
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
        <IconBox onClick={handleLikeClick}>
          <img
            src={post.isLiked ? heartActive : heartInActive}
            alt='like-button'
          />
          <p>공감해요</p>
        </IconBox>
        <CommentArea>
          <CommentLengthView>{post.numberOfComments}</CommentLengthView>
          <CommentCreateBox>
            <CommentCreate />
          </CommentCreateBox>
        </CommentArea>
        <PostCommentArea
          comments={comments}
          currentPageNumber={currentCommentPageNumber}
          handleReplyCreateButtonClick={handleReplyCreateButtonClick}
          pageNumbres={commentPageNumbers}
          handlePageNumberClick={handlePageNumberClick}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
        />
        {/*         <OtherPosts
          pageCountData={otherPostPageData}
          currentPageNumber={currentOtherPostPageNumber}
          handlePageNumberChange={handleOtherPostPageNumberChange}
        /> */}
      </ContentsWrapper>
    </>
  );
}

//isMoreListOpen
