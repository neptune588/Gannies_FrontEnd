import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
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
      min-height: 100%;
      overflow: hidden;
    }
  }
`;
export default function PostCreateEditor({ value }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <EditorStylingBox>
      <Editor
        apiKey='jhptdx4ycuiptf3whpa2htycwg916lsei466lbf6p2jos9jh'
        //초기화 이후 실행될 콜백
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=''
        init={{
          menubar: false,
          language: 'ko',
          plugins: [
            'image',
            'wordcount',
            'autolink',
            'charmap',
            'link',
            'lists',
            'preview',
            'searchreplace',
            'media',
            'table',
            'paste',
            'help',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | charmap | link image media | preview | wordcount | searchreplace | help',
          //iframe이라 내부 css로 컨트롤불가능
          content_style: `
          html {
            font-size: 10px; 
          }
          body {
            font-family: Pretendard, Arial, sans-serif;
            font-size: 1.4rem;
            min-height: 439px;
          }
          `,
          statusbar: true,
        }}
      />
    </EditorStylingBox>
  );
}
//플러그인 목록
/* 'advlist lists link charmap print preview anchor',
'searchreplace visualblocks code fullscreen',
'insertdatetime media table paste code help', */
