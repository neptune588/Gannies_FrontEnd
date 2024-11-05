import { useState } from 'react';
import uuid from 'react-uuid';

import {
  Wrapper,
  AttachmentsOpenButton,
  AttachmentsBox,
  Attachment,
} from '@/pages/PostDetail/PostHeader/Attachments/style';

export default function Attachments({ attachments }) {
  const [listOpen, setListOpen] = useState(false);

  const urlConvertToBlobUrl = async (fileUrl) => {
    try {
      const res = await fetch(fileUrl);
      const blob = await res.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      return;
    }
  };

  const handleDownloadButtonClick = async (
    fileUrl,
    fileName = 'download file'
  ) => {
    const blobUrl = await urlConvertToBlobUrl(fileUrl);
    const link = document.createElement('a');

    link.href = blobUrl || fileUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    blobUrl && URL.revokeObjectURL(blobUrl);
  };

  return (
    <Wrapper>
      <AttachmentsOpenButton
        type='button'
        onClick={() => {
          setListOpen((prev) => !prev);
        }}
      >
        첨부파일
      </AttachmentsOpenButton>
      {listOpen && (
        <AttachmentsBox>
          {attachments.map((attachment) => {
            return (
              <Attachment key={uuid()}>
                <button
                  type='button'
                  onClick={() => {
                    handleDownloadButtonClick(
                      attachment.fileUrl,
                      attachment.fileName
                    );
                  }}
                >
                  {attachment.fileName}
                </button>
                <button
                  type='button'
                  onClick={() => {
                    handleDownloadButtonClick(
                      attachment.fileUrl,
                      attachment.fileName
                    );
                  }}
                >
                  다운로드
                </button>
              </Attachment>
            );
          })}
        </AttachmentsBox>
      )}
    </Wrapper>
  );
}
