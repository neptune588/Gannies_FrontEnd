import Banner from '@/pages/Community/Banner';

import {
  BannerTitle,
  BannerText,
  ContentsAlignBox,
  PostCreateButton,
  SelectBox,
  PostWrapper,
  PostHeaderBox,
} from '@/pages/Community/style';

//커밋순 -> 1) 페이지컴포넌트 완성 + 공통 스타일 등록 2) 공용 컴포넌트 완성 3) svg관련 커밋
export default function Community() {
  return (
    <>
      <Banner>
        <BannerTitle>실습정보</BannerTitle>
        <BannerText>실습에 관련한 유용한 정보를 제공합니다.</BannerText>
      </Banner>
      <ContentsAlignBox>
        <PostCreateButton to='/community/create-post'>
          게시글 작성
        </PostCreateButton>
        <SelectBox>
          <option defaultValue='최신순'>최신순</option>
        </SelectBox>
      </ContentsAlignBox>
      <PostWrapper>
        <PostHeaderBox>
          <div>
            <p>번호</p>
            <p>제목</p>
          </div>
          <div>
            <p>날짜/조회수/좋아요 수</p>
          </div>
        </PostHeaderBox>
      </PostWrapper>
      <ul></ul>
    </>
  );
}
