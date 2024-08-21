import React from 'react';
import { PostWrapper, LowerWrapper, ShowMoreButton, ShowMoreButtonIcon, UpperTitle, UpperWrapper, Wrapper, CategoryButton, PostTitle, LowerIcon, LowerDescription, LowerDescriptionWrapper, Comment } from './style';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import eye from '@/assets/icons/eyes/eye.svg';
import like_inactive from '@/assets/icons/hearts/like_inactive.svg';

function Post() {
  const upperTitles = ["인기 게시글", "새 게시글"]

  const posts = [
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    }        
  ]

return (
  <>
    {upperTitles.map((upperTitle, index) => (
      <Wrapper key={index}>
        <UpperWrapper>
          <UpperTitle>{upperTitle}</UpperTitle>
          <ShowMoreButton>
            <span>더보기</span>
            <ShowMoreButtonIcon src={chevron_right} alt="chevron_right" />
          </ShowMoreButton>
        </UpperWrapper>
        <LowerWrapper>
          {posts.map((post, postIndex) => (
            <PostWrapper key={postIndex}>
              <CategoryButton>{post.category}</CategoryButton>
              <PostTitle>{post.title} <Comment>[{post.comment}]</Comment></PostTitle>
              <LowerDescriptionWrapper>
                <LowerIcon src={eye} alt="eye" />
                <LowerDescription>{post.views}</LowerDescription>
              </LowerDescriptionWrapper>
              <LowerDescriptionWrapper>
                <LowerIcon src={like_inactive} alt="like_inactive" />
                <LowerDescription>{post.likes}</LowerDescription>
              </LowerDescriptionWrapper>
              <LowerDescriptionWrapper>
                <LowerDescription>{post.date}</LowerDescription>
              </LowerDescriptionWrapper>
            </PostWrapper>
          ))}
        </LowerWrapper>
      </Wrapper>
    ))}
  </>
);

}

export default Post;