import { Editor } from '@tinymce/tinymce-react';
import uuid from 'react-uuid';

import EditorLoadingCircle from '@/components/Loading/EditorLoadingCircle';
import CommonLoadingCircle from '@/components/Loading/CommonLoadingCircle';
import UploadFileList from '@/pages/CreateCommunityPost/PostCreateEditor/UploadFileList';

import {
  EditorStylingBox,
  UploadInput,
  NoticeBox,
  SubTitle,
  UploadFilesBox,
} from '@/pages/CreateCommunityPost/PostCreateEditor/style';

export default function PostCreateEditor({
  editorRef,
  initialContent,
  imageButtonRef,
  fileUploadButtonRef,
  editorValue,
  totalWordsLength,
  isUpload,
  cumSize,
  uploadedFiles,
  totalWordsCalc,
  isEditorLoading,
  setIsEditorLoading,
  handleEditorValueChange,
  handleImageUploadClick,
  handleFileUploadClick,
  handleImageUpload,
  handlePaste,
  handleKeydown,
  handleFileUpload,
  handleUploadFileDelete,
}) {
  return (
    <>
      {isUpload && <CommonLoadingCircle />}
      <EditorStylingBox>
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_KEY}
          initialValue={initialContent}
          value={editorValue}
          onEditorChange={(value) => {
            totalWordsCalc();
            handleEditorValueChange(value);
          }}
          onInit={(_, editor) => {
            setIsEditorLoading(false);
            editorRef.current = editor;
          }}
          init={{
            menubar: false,
            placeholder: '내용을 입력하세요',
            language: 'ko_KR',
            plugins: [
              'image',
              'autolink',
              'wordcount',
              'charmap',
              'link',
              'lists',
              'preview',
              'searchreplace',
              'table',
              //'paste',
              'help',
            ],
            toolbar:
              'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | charmap | customFileUploadButton customImageButton | link | preview | searchreplace | help',

            setup: async (editor) => {
              editor.ui.registry.addIcon(
                'uploadIcon',
                '<svg height="45px" width="60px" version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><g><g><g><g><g><path fill="#231815" d="M23,16.5c-0.1,0-0.3,0-0.4-0.1L20,13.7l-2.6,2.6c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l3-3c0.2-0.2,0.5-0.2,0.7,0l3,3c0.2,0.2,0.2,0.5,0,0.7C23.3,16.5,23.1,16.5,23,16.5z"/></g><g><path fill="#231815" d="M20,22c-0.3,0-0.5-0.2-0.5-0.5v-8c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v8C20.5,21.8,20.3,22,20,22z"/></g></g><g><path fill="#231815" d="M25,27.5H15c-1.4,0-2.5-1.1-2.5-2.5v-2c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2c0,0.8,0.7,1.5,1.5,1.5h10c0.8,0,1.5-0.7,1.5-1.5v-2c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2C27.5,26.4,26.4,27.5,25,27.5z"/></g></g></g></g></g></svg>'
              );
              editor.ui.registry.addButton('customImageButton', {
                icon: 'image',
                tooltip: '이미지 업로드',
                onAction: handleImageUploadClick,
              });
              editor.ui.registry.addButton('customFileUploadButton', {
                icon: 'uploadIcon',
                tooltip: '파일 업로드',
                onAction: handleFileUploadClick,
              });
              //editor.on('keydown', (e) => handleKeydown(e));
            },
            //붙여넣기 했을 시 동작 지정
            paste_preprocess: (plugin, args) => {
              handlePaste(plugin, args);
            },
            image_file_types: 'gif,jpg,jpeg,png',
            //외부iframe이라 내부 css로 컨트롤불가능
            content_style: `
              html {
                font-size: 10px; 
              }
              body {
                font-family: Pretendard, Arial, sans-serif;
                font-size: 1.4rem;
                min-height: 415px;
              }
        `,
            valid_elements:
              'img[src|alt|title|width|height],p,strong,em,b,i,u,a[href|target=_blank],table[border|cellpadding|cellspacing|width|height],thead,tbody,tr,td[colspan|rowspan],th',
            statusbar: false,
          }}
        />
        {isEditorLoading && <EditorLoadingCircle />}
        <UploadInput
          ref={imageButtonRef}
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
        />
        <UploadInput
          ref={fileUploadButtonRef}
          type='file'
          onChange={handleFileUpload}
        />
        {!isEditorLoading && (
          <>
            <SubTitle>Notice</SubTitle>
            <NoticeBox>
              <div>
                <p>
                  업로드, 붙여넣기 가능한 이미지 최대 갯수: <span>50개</span>
                </p>
                <p>현재: {totalWordsLength}자/5000자</p>
              </div>
              <p>
                첨부 가능한 파일 최대 갯수: <span>10개</span>
              </p>
              <p>최대 업로드 가능한 용량: 350MB</p>
            </NoticeBox>
            {uploadedFiles.files.length > 0 && (
              <>
                <SubTitle>Uploaded Files</SubTitle>
                <UploadFilesBox>
                  {uploadedFiles.files.map((file, idx) => {
                    return (
                      <UploadFileList
                        key={uuid()}
                        fileName={file.fileName}
                        isLoading={file.isLoading}
                        isFailed={file.isFailed}
                        progress={file.progress}
                        handleUploadFileDelete={() => {
                          handleUploadFileDelete(idx);
                        }}
                      />
                    );
                  })}
                </UploadFilesBox>
              </>
            )}
          </>
        )}
      </EditorStylingBox>
    </>
  );
}
//플러그인 목록
/* 'advlist lists link charmap print preview anchor',
'searchreplace visualblocks code fullscreen',
'insertdatetime media table paste code help', */
