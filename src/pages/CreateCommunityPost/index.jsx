import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import PageCategory from '@/components/PageCategory';
import CategoryTitle from '@/pages/CreateCommunityPost/CategoryTitle';
import CategorySelectMenus from '@/pages/CreateCommunityPost/CategorySelectMenus';
import Buttons from '@/pages/CreateCommunityPost/Buttons';
import PostCreateEditor from '@/pages/CreateCommunityPost/PostCreateEditor';
import HospitalSearchModal from '@/pages/CreateCommunityPost/HospitalSearchModal';

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

import { defaultCategorySelectOptions } from '@/pages/CreateCommunityPost/CategorySelectMenus/data';
import { adminCategorySelectOptions } from '@/pages/CreateCommunityPost/CategorySelectMenus/data';

import useLoginCheck from '@/hooks/useLoginCheck';
import useSelectorList from '@/hooks/useSelectorList';
import useEventHandler from '@/hooks/useEventHandler';
import useModalsControl from '@/hooks/useModalsControl';

import { setIsHospitalModal } from '@/store/modalsControl';

import { getPresignedUrl } from '@/api/authApi';
import { createPost } from '@/api/postApi';
import { checkAdminStatus } from '@/api/authApi';

export default function CreateCommunityPost() {
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editorRef = useRef(null);
  const imageButtonRef = useRef(null);
  const firstRunBlockToSetSelectOptionEffect = useRef(true);

  const { isHospitalSearchModal, handleModalOpen, handleModalClose } =
    useModalsControl();
  const { changeValue: titleValue, handleChange: handleTitleValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });
  const { changeValue: editorValue, handleChange: handleEditorValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const {
    changeValue: hospitalSearchValue,
    handleChange: handlehospitalSearchValueChange,
  } = useEventHandler({
    changeDefaultValue: '',
  });

  const [selectOptions, setSelectOptions] = useState(
    defaultCategorySelectOptions
  );

  const { bannerTitle } = useSelectorList();
  const [selectedOption, setSelectedOption] = useState(bannerTitle);
  const { changeValue: currentPath, handleChange: handleSelectedOption } =
    useEventHandler({
      changeDefaultValue: selectOptions[0].path,
    });

  const [previewImage, setPreviewImage] = useState('');
  const [totalImageType, setTotalImageType] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [hospitalName, setHospitalName] = useState('병원찾기');

  const { checkIsLogin } = useLoginCheck();

  const handleImageUploadClick = () => {
    imageButtonRef.current.value = '';
    imageButtonRef.current && imageButtonRef.current.click();
  };

  const handleImageUpload = (e) => {
    //console.log('업로드 발동');
    const uploadFile = e.target.files[0];

    if (!uploadFile.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다!');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
  };

  const urlRequest = async (fileType) => {
    const res = await getPresignedUrl({ fileType });
    console.log(res, '호출');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(isSubmit);
    if (isSubmit) {
      return;
    }

    setIsSubmit(true);

    const condition01 =
      titleValue === '' || titleValue === undefined || titleValue === null;
    const condition02 =
      editorValue === '' || editorValue === undefined || editorValue === null;

    if (condition01 || condition02) {
      alert('제목 혹은 내용을 입력 해주세요!');
      setIsSubmit(false);
      return;
    }
    //form 제출 로직에서 적용할것들
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorValue, 'text/html');
    const htmlEl = doc.body.querySelectorAll('img');
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

    htmlEl.forEach((el) => {
      imageExtensions.forEach((imageExtension) => {
        const a = el.src.includes(`.${imageExtension}`);
        const b = el.src.includes(`/${imageExtension}`);

        if (a || b) {
          urlRequest(`image/${imageExtension}`);
        }
      });
    });

    const splitByWhitespace = titleValue.trim().split(' ');
    const title = splitByWhitespace.filter((str) => str !== '').join(' ');

    const postData = {
      title,
      content: editorValue,
    };

    /*     try {
      const res = await createPost(currentPath, JSON.stringify(postData));

      console.log(res);
    } catch (err) {
      console.error(err);
    } */
    setIsSubmit(false);
  };

  useEffect(() => {
    (async () => {
      if (checkIsLogin()) {
        try {
          const res = await checkAdminStatus();
          const { isAdmin } = res.data;

          isAdmin && setSelectOptions(adminCategorySelectOptions);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (firstRunBlockToSetSelectOptionEffect.current) {
      firstRunBlockToSetSelectOptionEffect.current = false;
      return;
    }

    setSelectedOption(selectOptions[0].content);
  }, [selectOptions]);

  useEffect(() => {
    if (editorRef.current && previewImage !== '') {
      editorRef.current.insertContent(`<img src="${previewImage}" />`);
      setPreviewImage('');
    }
  }, [previewImage]);

  return (
    <>
      {isHospitalSearchModal && (
        <HospitalSearchModal
          handleModalClose={handleModalClose}
          hospitalSearchValue={hospitalSearchValue}
          handlehospitalSearchValueChange={handlehospitalSearchValueChange}
          setHospitalName={setHospitalName}
        />
      )}
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
        <form onSubmit={handleSubmit}>
          <ContentsWrapper>
            <InputBox>
              <input
                type='text'
                placeholder='*제목입력'
                onChange={(e) => {
                  handleTitleValueChange(e.target.value);
                }}
                value={titleValue}
                minLength={1}
                maxLength={50}
              />
            </InputBox>
            <DataInputWrapper>
              <div>
                <CategorySelectMenus
                  optionList={selectOptions}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  setHospitalName={setHospitalName}
                  handleSelectedOption={handleSelectedOption}
                />
              </div>
              {(selectedOption === '취업정보' ||
                selectedOption === '실습정보') && (
                <div>
                  <DataInputBox>
                    <p>*병원정보</p>
                    <button
                      type='button'
                      onClick={() => {
                        handleModalOpen({
                          modalDispatch: setIsHospitalModal,
                        });
                      }}
                    >
                      {hospitalName}
                      <img src={searchIcon} alt='search-icon' />
                    </button>
                  </DataInputBox>
                </div>
              )}
            </DataInputWrapper>
            <PostCreateEditor
              editorRef={editorRef}
              imageButtonRef={imageButtonRef}
              editorValue={editorValue}
              handleImageUploadClick={handleImageUploadClick}
              handleEditorValueChange={handleEditorValueChange}
              handleImageUpload={handleImageUpload}
            />
          </ContentsWrapper>
          <ButtonBox>
            <Buttons />
          </ButtonBox>
        </form>
      </CenterdContainer>
    </>
  );
}
