import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import PostTitleSection from '@/pages/PostDetail/PostHeader/PostTitleSection';
import PostInfo from '@/pages/PostDetail/PostHeader/PostInfo';
import CommentCreate from '@/pages/PostDetail/CommentCreate';
import PostCommentArea from '@/pages/PostDetail/PostCommentArea';
import OtherPosts from '@/pages/PostDetail/OtherPosts';

import heartActive from '@/assets/icons/hearts/heart_active.svg';

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

import { getPost } from '@/api/postApi';
import { postScrap } from '@/api/scrapApi';
import { cancelPostScrap } from '@/api/scrapApi';

export default function PostDetail() {
  const { postId } = useParams();

  const { currentBoardType } = useSelectorList();

  const [post, setPost] = useState({});

  const getItems = async () => {
    const res = await getPost(currentBoardType, postId);
    const { data } = res;
    setPost({
      title: data.title,
      content: data.content,
      category: data.category,
      hospitalNames: data.hospitalNames, //default null
      numberOfComments: data.numberOfComments,
      postId: data.postId,
      posterId: data.user.userId,
      nickname: data.user.nickname,
      createDate: data.createdAt,
      updateDate: data.updatedAt,
      likeCounts: data.likeCounts,
      viewCounts: data.viewCounts,
      isLiked: data.isLiked,
      isScraped: data.isScraped,
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
          <PostInfo />
        </PostHeaderBox>
        <PostContentBox>
          <p>{post.content}</p>
        </PostContentBox>
        <IconBox>
          <img src={heartActive} alt='like-button' />
          <p>공감해요</p>
        </IconBox>
        <CommentArea>
          <CommentLengthView>{post.numberOfComments}</CommentLengthView>
          <CommentCreateBox>
            <CommentCreate />
          </CommentCreateBox>
        </CommentArea>
        {/*         <PostCommentArea
          pageCountData={commentPageData}
          currentPageNumber={currentCommentPageNumber}
          handlePageNumberChange={handleCommentPageNumberChange}
        />
        <OtherPosts
          pageCountData={otherPostPageData}
          currentPageNumber={currentOtherPostPageNumber}
          handlePageNumberChange={handleOtherPostPageNumberChange}
        /> */}
      </ContentsWrapper>
    </>
  );
}

//isMoreListOpen
