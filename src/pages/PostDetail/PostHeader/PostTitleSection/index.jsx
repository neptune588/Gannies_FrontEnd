import { useState, useEffect } from 'react';

import MorePopup from '@/pages/PostDetail/MorePopup';

import Scrap from '@/components/Icons/Scrap';
import More from '@/components/Icons/More';

import {
  TitleSection,
  PostTitle,
  IconBox,
} from '@/pages/PostDetail/PostHeader/PostTitleSection/style';

import useSelectorList from '@/hooks/useSelectorList';

export default function PostTitleSection({
  postId,
  postTitle,
  currentPosterId,
  isScraped,
  isMorePopup,
  setContentType,
  setReportedContent,
  setCurrentReportData,
  setIsMorePopup,
  handleScrapClick,
}) {
  const { userId } = useSelectorList();

  return (
    <TitleSection>
      <PostTitle>{postTitle}</PostTitle>
      <IconBox>
        <Scrap
          pageName={'post-detail-view'}
          handleScrapClick={handleScrapClick}
          scrapClickState={isScraped}
        />
        <More
          onClick={() => {
            setIsMorePopup((prev) => !prev);
          }}
        >
          {isMorePopup && (
            <MorePopup
              ownPost={currentPosterId === userId ? true : false}
              contentType={'post'}
              reportedContent={postTitle}
              postId={postId}
              setContentType={setContentType}
              setReportedContent={setReportedContent}
              setCurrentReportData={setCurrentReportData}
              setIsMorePopup={setIsMorePopup}
            />
          )}
        </More>
      </IconBox>
    </TitleSection>
  );
}
