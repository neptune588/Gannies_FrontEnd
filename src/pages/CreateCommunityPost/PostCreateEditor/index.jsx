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
export default function PostCreateEditor({
  editorRef,
  editorValue,
  setEditorValue,
}) {
  return (
    <EditorStylingBox>
      <Editor
        apiKey='jhptdx4ycuiptf3whpa2htycwg916lsei466lbf6p2jos9jh'
        //초기화 이후 실행될 콜백
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=''
        value={editorValue}
        onEditorChange={(_, editor) => {
          setEditorValue(editor.getContent({ format: 'text' }));
          console.log(editorValue);
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
            'media',
            'table',
            //'paste',
            'help',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | charmap | link image media | preview | wordcount | searchreplace | help',
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
    </EditorStylingBox>
  );
}
//플러그인 목록
/* 'advlist lists link charmap print preview anchor',
'searchreplace visualblocks code fullscreen',
'insertdatetime media table paste code help', */
