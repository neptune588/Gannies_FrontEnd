import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';

import {
  CategoryBox,
  CenterdContainer,
  TitleBox,
  ContentsWrapper,
  InputBox,
  DataInputWrapper,
  DataInputBox,
} from '@/pages/CreateCommunityPost/style';
export default function CreateCommunityPost() {
  //전역 변수 사용해서 text 넣어야할것같은
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하
  return (
    <>
      <CommunityBanner>
        <CommunityBannerText
          title='실습정보'
          text='실습에 관련된 유용한 정보를 제공합니다.'
        />
      </CommunityBanner>

      <CenterdContainer>
        <CategoryBox>
          <PageCategory />
        </CategoryBox>
        <TitleBox>
          <h2>게시글작성</h2>
          <p>*필수항목</p>
        </TitleBox>
        <ContentsWrapper>
          <form>
            <InputBox>
              <input placeholder='*제목입력' maxLength={50} />
            </InputBox>
            <DataInputWrapper>
              <div>
                <DataInputBox>
                  <p>*카테고리</p>
                  <div></div>
                </DataInputBox>
              </div>
              <div>
                <DataInputBox>
                  <p>*병원정보</p>
                  <input placeholder='병원찾기'></input>
                </DataInputBox>
              </div>
            </DataInputWrapper>
          </form>
        </ContentsWrapper>
      </CenterdContainer>
    </>
  );
}
