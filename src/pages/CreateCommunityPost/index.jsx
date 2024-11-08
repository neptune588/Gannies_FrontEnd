import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
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
import useTinyMceUpload from '@/hooks/useTinyMceUpload';

import { createPost, editPost } from '@/api/postApi';
import { checkAdminStatus } from '@/api/authApi';

import { isOnlyWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';
import { errorAlert } from '@/utils/sweetAlert';

export default function CreateCommunityPost() {
  //제목 - 한글 1글자 이상은 최소로 있어야 한다. 최대는 50자 이하
  const navigate = useNavigate();
  const location = useLocation();

  const { boardType } = useParams();

  const [editData] = useState(location.state ? location.state : null);

  const [isSubmit, setIsSubmit] = useState(false);
  const [hospitalName, setHospitalName] = useState('병원찾기');
  const [categorySelectOptions, setCategorySelectOptions] = useState(
    defaultCategorySelectOptions
  );

  const { bannerTitle } = useSelectorList();
  //select box에 띄워주는 용도로만 사용
  const [selectedBoardTitle, setSelectedBoardTitle] = useState(bannerTitle);

  const {
    changeValue: selectedBoardType,
    handleChange: handleBoardTypeChange,
  } = useEventHandler({
    changeDefaultValue: editData ? editData.boardType : boardType,
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
    fileUploadButtonRef,
    totalWordsLength,
    isUpload,
    cumSize,
    uploadedFiles,
    urlExtraction,
    imageFileUrlsUpdated,
    handleEditorChangeWithValidation,
    handleImageUploadClick,
    handleFileUploadClick,
    handleImageUpload,
    handlePaste,
    handleTitleValueChange,
    handleKeydown,
    handleFileUpload,
    handleUploadFileDelete,
  } = useTinyMceUpload({
    initialTitle: editData ? editData.title : '',
    initialContent: editData ? editData.content : '',
    initialFiles: editData ? editData.fileUrls : '',
  });

  const [isEditorLoading, setIsEditorLoading] = useState(true);

  const { checkIsLogin } = useLoginCheck();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) {
      return;
    }

    const condition01 = isOnlyWhiteSpaceCheck(titleValue);
    const condition02 = isOnlyWhiteSpaceCheck(editorValue);

    if (condition01 || condition02) {
      alert('제목 혹은 내용을 입력 해주세요!');
      return;
    }

    if (totalWordsLength > 5000) {
      alert('입력 가능한 최대 글자 수는 5000자입니다!');
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

    try {
      await imageFileUrlsUpdated();
    } catch (error) {
      errorAlert('이미지 갱신에 실패하였습니다.');
      return;
    }

    const fileUrls = urlExtraction();
    if (fileUrls) {
      postData.fileUrls = fileUrls;
    }

    if (editData && editData.boardType !== selectedBoardType) {
      postData.afterBoardType = selectedBoardType;
    }

    try {
      const res =
        editData && editData.type === 'isEdit'
          ? await editPost(
              editData && editData.boardType,
              editData.postId,
              postData
            )
          : await createPost(selectedBoardType, postData);
      const { postId: newPostId } = res.data;

      console.log(postData);
      window.scroll({ top: 0, left: 0 });
      navigate(`/community/${selectedBoardType}/post/${newPostId}`);
    } catch (error) {
      console.error(error.message);
      errorAlert('게시글 작성 실패');
    }

    setIsSubmit(false);
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
              initialContent={editData ? editData.content : ''}
              imageButtonRef={imageButtonRef}
              fileUploadButtonRef={fileUploadButtonRef}
              editorValue={editorValue}
              totalWordsLength={totalWordsLength}
              isUpload={isUpload}
              cumSize={cumSize}
              uploadedFiles={uploadedFiles}
              isEditorLoading={isEditorLoading}
              setIsEditorLoading={setIsEditorLoading}
              handleImageUploadClick={handleImageUploadClick}
              handleFileUploadClick={handleFileUploadClick}
              handleEditorChangeWithValidation={
                handleEditorChangeWithValidation
              }
              handleImageUpload={handleImageUpload}
              handlePaste={handlePaste}
              handleKeydown={handleKeydown}
              handleFileUpload={handleFileUpload}
              handleUploadFileDelete={handleUploadFileDelete}
            />
          </ContentsWrapper>
          {!isEditorLoading && (
            <ButtonBox>
              <Buttons
                type={editData && editData.type}
                prevPostId={editData && editData.postId}
                currentBoardType={
                  editData && editData.type === 'isEdit'
                    ? editData.boardType
                    : boardType
                }
              />
            </ButtonBox>
          )}
        </form>
      </CenterdContainer>
    </>
  );
}
