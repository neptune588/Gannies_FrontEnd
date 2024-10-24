import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';

import EditorLoadingCircle from '@/components/Loading/EditorLoadingCircle';

import { isOnlyWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';

const EditorStylingBox = styled.div`
  .tox {
    margin: 30px 0 15px;
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

const NoticeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;

  > p {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    color: ${({ theme: { colors } }) => {
      return colors.gray['70'];
    }};

    > span {
      font-weight: ${({ theme: { typo } }) => {
        return typo.weight.semiBold;
      }};
      color: ${({ theme: { colors } }) => {
        return colors.gray['80'];
      }};
    }
  }
`;

export default function PostCreateEditor({
  editorRef,
  initialContent,
  imageButtonRef,
  editorValue,
  textContentLength,
  textContentLengthCalc,
  isEditorLoading,
  setIsEditorLoading,
  handleEditorValueChange,
  handleImageUploadClick,
  handleImageUploadRequest,
  handleImagePaste,
}) {
  return (
    <EditorStylingBox>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_KEY}
        initialValue={initialContent}
        value={editorValue}
        onEditorChange={(value) => {
          // wordcount 플러그인에 접근
          const wordcount = editorRef.current.plugins.wordcount;
          // 전체 단어 수
          const totalWordCount = wordcount.body.getCharacterCount();

          //console.log(totalWordCount);
          textContentLengthCalc(totalWordCount);
          handleEditorValueChange(value);
        }}
        onInit={(_, editor) => {
          setIsEditorLoading(false);
          editorRef.current = editor;

          //handleImagePaste(editor);
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
          paste_preprocess: (plugin, args) => {
            handleImagePaste(plugin, args);
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
      <ImageUploadInput
        ref={imageButtonRef}
        type='file'
        accept='image/*'
        onChange={handleImageUploadRequest}
      />
      {!isEditorLoading && (
        <NoticeBox>
          <p>
            이미지 업로드 밑 붙여넣기 가능 확장자:
            <span> gif, jpg, jpeg, png</span>
          </p>
          <p>현재 {textContentLength}/5000 자</p>
        </NoticeBox>
      )}
    </EditorStylingBox>
  );
}
//플러그인 목록
/* 'advlist lists link charmap print preview anchor',
'searchreplace visualblocks code fullscreen',
'insertdatetime media table paste code help', */
