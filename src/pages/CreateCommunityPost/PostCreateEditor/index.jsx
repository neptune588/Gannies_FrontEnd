import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';

const EditorStylingBox = styled.div`
  .tox {
    margin: 30px 0 95px;
    min-height: 490px;
    .tox-edit-area {
      &::before {
        border: none !important;
      }
    }
    .tox-toolbar__group {
      user-select: none;
      button,
      span {
        cursor: pointer;
      }
    }
    .tox-edit-area__iframe {
      overflow: hidden;
    }
  }
`;

const ImageUploadInput = styled.input`
  display: none;
`;

export default function PostCreateEditor({
  editorRef,
  imageButtonRef,
  editorValue,
  handleValueChange,
  handleImageUploadClick,
  handleImageUpload,
}) {
  return (
    <EditorStylingBox>
      <Editor
        apiKey='jhptdx4ycuiptf3whpa2htycwg916lsei466lbf6p2jos9jh'
        initialValue=''
        value={editorValue}
        onEditorChange={(value) => {
          handleValueChange(value);
        }}
        onInit={(_, editor) => {
          editorRef.current = editor;
        }}
        init={{
          menubar: false,
          placeholder: '내용을 입력하세요',
          language: 'ko_KR',
          plugins: [
            'image',
            'wordcount',
            'autolink',
            'charmap',
            'link',
            'lists',
            'preview',
            'searchreplace',
            //'media',
            'table',
            //'paste',
            'help',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | charmap | link customImageButton | preview | wordcount | searchreplace | help',

          setup: (editor) => {
            editor.ui.registry.addButton('customImageButton', {
              icon: 'image',
              tooltip: '이미지 업로드',
              onAction: handleImageUploadClick,
            });
          },
          //붙여넣기 했을 시 동작 지정
          paste_preprocess: (editor, args) => {},

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
          statusbar: false,
        }}
      />
      <ImageUploadInput
        ref={imageButtonRef}
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
      />
    </EditorStylingBox>
  );
}
//플러그인 목록
/* 'advlist lists link charmap print preview anchor',
'searchreplace visualblocks code fullscreen',
'insertdatetime media table paste code help', */
