import { useState } from 'react';

import uploadFile from '@/assets/icons/etc/file.svg';

import OptionsList from '@/pages/CreateCommunityPost/PostCreateEditor/UploadFileList/OptionsList';

import {
  Container,
  Wrapper,
  ProgressBar,
  ProgressComplete,
  LoadFailed,
} from '@/pages/CreateCommunityPost/PostCreateEditor/UploadFileList/style';

export default function UploadFileList({
  fileName,
  isLoading,
  progress,
  isFailed,
  handleUploadFileDelete,
}) {
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  return (
    <Container>
      {isOptionListOpen && (
        <OptionsList
          isFailed={isFailed}
          handleUploadFileDelete={handleUploadFileDelete}
        />
      )}
      <Wrapper
        $isFailed={isFailed}
        $isLoading={isLoading}
        onClick={() => {
          if (!isFailed) {
            setIsOptionListOpen((prev) => !prev);
          }
        }}
      >
        <img src={uploadFile} alt='uploaded-file' />
        {isFailed ? <p>파일 업로드 실패</p> : <p>{fileName}</p>}
        {isFailed ? (
          <LoadFailed />
        ) : isLoading ? (
          <ProgressBar $progress={progress} $isLoading={isLoading} />
        ) : (
          <ProgressComplete />
        )}
      </Wrapper>
    </Container>
  );
}
