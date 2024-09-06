import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import PostTitleSection from '@/pages/PostDetail/PostHeader/PostTitleSection';
import PostInfo from '@/pages/PostDetail/PostHeader/PostInfo';
import PostCommentCreate from '@/pages/PostDetail/PostCommentCreate';

import heartActive from '@/assets/icons/hearts/heart_active.svg';

import {
  PageCategorySection,
  ContentsWrapper,
  PostHeaderBox,
  Nickname,
  PostContentBox,
  IconBox,
  CommentArea,
} from '@/pages/PostDetail/style';

export default function PostDetail() {
  return (
    <>
      <CommunityBanner>
        <CommunityBannerText
          title='실습정보'
          text='실습에 관련된 유용한 정보를 제공합니다.'
        />
      </CommunityBanner>
      <PageCategorySection>
        <PageCategory />
      </PageCategorySection>
      <ContentsWrapper>
        <PostHeaderBox>
          <PostTitleSection />
          <Nickname>한마유지로</Nickname>
          <PostInfo />
        </PostHeaderBox>
        <PostContentBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            praesentium, tempora eius tempore sapiente quis non nostrum ddddd
            similique architecto, debitis ipsum dicta repellat consectetur
            doloremque aliquam porro eveniet, iusto qui. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Eos nemo minus doloribus aut
            inventore. Aspernatur harum tempora in corporis rerum ipsam tempore,
            qui obcaecati ducimus, dolorem eum exercitationem possimus nobis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            perferendis laudantium explicabo a quis voluptas, enim autem,
            laboriosam adipisci ab facere? Dolorum quidem sed totam aut nihil
            eum adipisci reprehenderit! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Similique dignissimos ad iste animi optio harum
            atque dolor. Quisquam, veritatis. Perferendis atque a optio earum
            molestias sequi et, quam quisquam libero.
          </p>
        </PostContentBox>
        <IconBox>
          <img src={heartActive} alt='like-button' />
          <p>공감해요</p>
        </IconBox>
        <CommentArea>
          <PostCommentCreate />
        </CommentArea>
      </ContentsWrapper>
    </>
  );
}

//isMoreListOpen
