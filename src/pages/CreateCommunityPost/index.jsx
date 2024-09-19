import { useState, useRef, useEffect } from 'react';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import CategoryTitle from '@/pages/CreateCommunityPost/CategoryTitle';
import Buttons from '@/pages/CreateCommunityPost/Buttons';
import PostCreateEditor from '@/pages/CreateCommunityPost/PostCreateEditor';
import HospitalSearchModal from '@/pages/CreateCommunityPost/HospitalSearchModal';

import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';
import searchIcon from '@/assets/icons/search/search_default.svg';

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

import useSelectorList from '@/hooks/useSelectorList';
import { useEventHandler } from '@/hooks/useEventHandler';

export default function CreateCommunityPost() {
  //전역 변수 사용해서 text 넣어야할것같은
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하

  //temp -> 후에 customHooks로 옮길예정
  const editorRef = useRef(null);
  const imageButtonRef = useRef(null);

  const [selectCategory] = useState(categoryData);
  const [editorValue, setEditorValue] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [totalImageType, setTotalImageType] = useState([]);
  const [modalState, setModalState] = useState(false);

  const { currentBoardType } = useSelectorList();

  const handleChange = (value) => {
    setEditorValue(value);

    //form 제출 로직에서 적용할것들
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, 'text/html');
    const htmlTags = doc.body.querySelectorAll('img');
    const imageExtensions = [
      'jpg',
      'jpeg',
      'png',
      'gif',
      'bmp',
      'tiff',
      'webp',
      'heif',
      'svg',
    ];

    htmlTags.forEach((tag) => {
      imageExtensions.forEach((imageExtension) => {
        const a = tag.src.includes(`.${imageExtension}`);
        const b = tag.src.includes(`/${imageExtension}`);

        if (a || b) {
          setTotalImageType([...totalImageType, `image/${imageExtension}`]);
        }
      });
    });

    console.log(totalImageType);
  };

  const handleImageUploadClick = () => {
    imageButtonRef.current.value = '';
    imageButtonRef.current && imageButtonRef.current.click();
  };

  const handleImageUpload = (e) => {
    //console.log('업로드 발동');
    const uploadFile = e.target.files[0];

    if (!uploadFile.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다!');
    } else {
      //console.log('이미지 변환')
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
    }
  };

  useEffect(() => {
    if (editorRef.current && previewImage !== '') {
      editorRef.current.insertContent(`<img src="${previewImage}" />`);
      setPreviewImage('');
    }
  }, [previewImage]);

  return (
    <>
      {modalState && <HospitalSearchModal />}
      <CommunityBanner>
        <CommunityBannerText />
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
              <input
                name='title'
                type='text'
                placeholder='*제목입력'
                maxLength={50}
              />
            </InputBox>
            <DataInputWrapper>
              <div>
                <DataInputBox>
                  <p>*카테고리</p>
                  <div>
                    <p>{selectCategory[0].content}</p>
                    <img src={bottomArrow} alt={'select-arrow'} />
                  </div>
                </DataInputBox>
              </div>
              {currentBoardType === 'practice' ||
                (currentBoardType === 'job' && (
                  <div>
                    <DataInputBox>
                      <p>*병원정보</p>
                      <label>
                        <input placeholder='병원찾기' maxLength={30} />
                        <img src={searchIcon} alt='search-icon' />
                      </label>
                    </DataInputBox>
                  </div>
                ))}
            </DataInputWrapper>
            <PostCreateEditor
              editorRef={editorRef}
              imageButtonRef={imageButtonRef}
              editorValue={editorValue}
              handleImageUploadClick={handleImageUploadClick}
              handleValueChange={handleChange}
              handleImageUpload={handleImageUpload}
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
