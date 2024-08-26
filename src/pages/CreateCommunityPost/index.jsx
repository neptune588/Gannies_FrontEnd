import { useState, useRef } from 'react';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import CategoryTitle from '@/pages/CreateCommunityPost/CategoryTitle';
import Buttons from '@/pages/CreateCommunityPost/Buttons';
import PostCreateEditor from '@/pages/CreateCommunityPost/PostCreateEditor';

import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';
import searchIcon from '@/assets/icons/etc/search.svg';

import {
  CategoryBox,
  CenterdContainer,
  TitleBox,
  ContentsWrapper,
  InputBox,
  DataInputWrapper,
  DataInputBox,
  ButtonBox,
} from '@/pages/CreateCommunityPost/style';

import { categoryData } from '@/pages/CreateCommunityPost/data';

export default function CreateCommunityPost() {
  //전역 변수 사용해서 text 넣어야할것같은
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하

  const [selectCategory] = useState(categoryData);
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState('');

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
          <CategoryTitle />
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
                  <div>
                    <p>{selectCategory[0].label}</p>
                    <img src={bottomArrow} alt={'select-arrow'} />
                  </div>
                </DataInputBox>
              </div>
              <div>
                <DataInputBox>
                  <p>*병원정보</p>
                  <label>
                    <input placeholder='병원찾기' maxLength={30} />
                    <img src={searchIcon} alt='search-icon' />
                  </label>
                </DataInputBox>
              </div>
            </DataInputWrapper>
            <PostCreateEditor
              editorRef={editorRef}
              editorValue={editorContent}
              setEditorValue={setEditorContent}
            />
          </form>
        </ContentsWrapper>
        <ButtonBox>
          <Buttons />
        </ButtonBox>
      </CenterdContainer>
    </>
  );
}
