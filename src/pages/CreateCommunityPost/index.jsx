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
import useTinyMceImageUpload from '@/hooks/useTinyMceImageUpload';

import { setIsHospitalModal } from '@/store/modalsControl';

import { createPost } from '@/api/postApi';
import { checkAdminStatus } from '@/api/authApi';

export default function CreateCommunityPost() {
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const firstRunBlockToSetSelectOptionEffect = useRef(true);

  const [isSubmit, setIsSubmit] = useState(false);
  const [hospitalName, setHospitalName] = useState('병원찾기');
  const [selectOptions, setSelectOptions] = useState(
    defaultCategorySelectOptions
  );

  const { bannerTitle, currentBoardType } = useSelectorList();
  const [selectedOption, setSelectedOption] = useState(bannerTitle);

  const { isHospitalSearchModal, handleModalOpen, handleModalClose } =
    useModalsControl();

  const {
    changeValue: hospitalSearchValue,
    handleChange: handlehospitalSearchValueChange,
  } = useEventHandler({
    changeDefaultValue: '',
  });

  const {
    titleValue,
    editorValue,
    editorRef,
    imageButtonRef,
    imageExtensionCheck,
    handleImageUploadClick,
    handleImageUploadRequest,
    handleImagePaste,
    handleTitleValueChange,
    handleEditorValueChange,
  } = useTinyMceImageUpload();

  const { changeValue: currentPath, handleChange: handleSelectedOption } =
    useEventHandler({
      changeDefaultValue: selectOptions[0].path,
    });

  const [isLoading, setIsLoading] = useState(false);

  const { checkIsLogin } = useLoginCheck();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) {
      return;
    }

    try {
      const condition01 =
        titleValue.trim() === '' ||
        titleValue.trim() === undefined ||
        titleValue.trim() === null;
      const condition02 =
        editorValue.trim() === '' ||
        editorValue.trim() === undefined ||
        editorValue.trim() === null;

      if (condition01 || condition02) {
        alert('제목 혹은 내용을 입력 해주세요!');
        return;
      }

      setIsSubmit(true);

      const splitByWhitespace = titleValue.trim().split(' ');
      const title = splitByWhitespace.filter((str) => str !== '').join(' ');

      const postData = {
        title,
        content: editorValue,
        hospitalNames: hospitalName === '병원찾기' ? null : hospitalName,
      };

      const imageExtension = imageExtensionCheck();
      if (imageExtension.length > 0) {
        postData.imageTypes = imageExtension;
      }

      const res = await createPost(currentBoardType, postData);
      const { postId } = res.data;
      window.scroll({ top: 0, left: 0 });
      navigate(`/community/post/${postId}`);

      setIsSubmit(false);
    } catch (error) {
      console.error('작성 실패', error);
    }
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
              handleImageUploadRequest={handleImageUploadRequest}
              handleImagePaste={handleImagePaste}
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
