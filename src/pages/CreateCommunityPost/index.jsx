import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

import { setBoardType } from '@/store/navBarOptions';

import { navBarMenuData } from '@/layouts/Navbar/data';

import { createPost } from '@/api/postApi';
import { checkAdminStatus } from '@/api/authApi';

import { isOnlyWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';
import { errorAlert } from '@/utils/sweetAlert';

export default function CreateCommunityPost({
  title,
  content,
  propsBoardType,
  propsBoardTypeTitle,
  postId,
  hospitalNames,
  editRequest,
  handleEditCancel,
}) {
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { boardType } = useParams();

  const firstRunBlockToSetSelectOptionEffect = useRef(true);

  const [isSubmit, setIsSubmit] = useState(false);
  const [hospitalName, setHospitalName] = useState(hospitalNames || '병원찾기');
  const [categorySelectOptions, setCategorySelectOptions] = useState(
    defaultCategorySelectOptions
  );

  const { bannerTitle } = useSelectorList();
  //select box에 띄워주는 용도로만 사용
  const [selectedBoardTitle, setSelectedBoardTitle] = useState(
    propsBoardTypeTitle || bannerTitle
  );

  const {
    changeValue: selectedBoardType,
    handleChange: handleBoardTypeChange,
  } = useEventHandler({
    changeDefaultValue: propsBoardType || boardType,
  });

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
    urlExtraction,
    handleImageUploadClick,
    handleImageUploadRequest,
    handleImagePaste,
    handleTitleValueChange,
    handleEditorValueChange,
  } = useTinyMceImageUpload({
    initialTitle: title || '',
    initialContent: content || '',
  });

  const [isEditorLoading, setIsEditorLoading] = useState(true);

  const { checkIsLogin } = useLoginCheck();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) {
      return;
    }

    try {
      const condition01 = isOnlyWhiteSpaceCheck(titleValue);
      const condition02 = isOnlyWhiteSpaceCheck(editorValue);

      if (condition01 || condition02) {
        errorAlert('제목 혹은 내용을 입력 해주세요!');
        return;
      }

      setIsSubmit(true);

      const splitByWhitespace = titleValue.trim().split(' ');
      const title = splitByWhitespace.filter((str) => str !== '').join(' ');

      const postData = {
        title,
        content: editorValue,
      };

      if (
        selectedBoardTitle === '취업정보' ||
        selectedBoardTitle === '실습정보'
      ) {
        postData.hospitalNames =
          hospitalName === '병원찾기' ? null : [hospitalName];
      }

      const imageSrc = urlExtraction();
      if (imageSrc.length > 0) {
        postData.fileUrls = imageSrc;
      }

      const res = editRequest
        ? await editRequest(selectedBoardType, postId, postData)
        : await createPost(selectedBoardType, postData);

      const { postId: newPostId } = res.data;

      window.scroll({ top: 0, left: 0 });
      navigate(`/community/${selectedBoardType}/post/${newPostId}`);
    } catch (error) {
      errorAlert('작성 실패');
    } finally {
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (checkIsLogin()) {
        try {
          const res = await checkAdminStatus();
          const { isAdmin } = res.data;

          isAdmin && setCategorySelectOptions(adminCategorySelectOptions);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);

  /*   useEffect(() => {
    if (firstRunBlockToSetSelectOptionEffect.current) {
      firstRunBlockToSetSelectOptionEffect.current = false;
      return;
    }

    setSelectedOption(setCategorySelectOptions[0].content);
  }, [categorySelectOptions]); */

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
          <PageCategory currentBoardType={boardType} />
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
                  optionList={categorySelectOptions}
                  selectedBoardTitle={selectedBoardTitle}
                  setSelectedBoardTitle={setSelectedBoardTitle}
                  setHospitalName={setHospitalName}
                  handleBoardTypeChange={handleBoardTypeChange}
                />
              </div>
              {(selectedBoardTitle === '취업정보' ||
                selectedBoardTitle === '실습정보') && (
                <div>
                  <DataInputBox>
                    <p>*병원정보</p>
                    <button
                      type='button'
                      onClick={() => {
                        handleModalOpen({
                          modalName: 'isHospitalSearchModal',
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
              initialContent={content}
              imageButtonRef={imageButtonRef}
              editorValue={editorValue}
              isEditorLoading={isEditorLoading}
              setIsEditorLoading={setIsEditorLoading}
              handleImageUploadClick={handleImageUploadClick}
              handleEditorValueChange={handleEditorValueChange}
              handleImageUploadRequest={handleImageUploadRequest}
              handleImagePaste={handleImagePaste}
            />
          </ContentsWrapper>
          {!isEditorLoading && (
            <ButtonBox>
              <Buttons
                currentBoardType={boardType}
                handleEditCancel={handleEditCancel}
              />
            </ButtonBox>
          )}
        </form>
      </CenterdContainer>
    </>
  );
}
