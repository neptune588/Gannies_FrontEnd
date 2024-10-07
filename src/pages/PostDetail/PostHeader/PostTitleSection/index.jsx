import { useState } from 'react';

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
  postTitle,
  currentPosterId,
  isScraped,
  handleScrapClick,
}) {
  const { userId } = useSelectorList();
  const [isMorePopup, setIsMorePopup] = useState(false);

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
            <MorePopup ownPost={currentPosterId === userId ? true : false} />
          )}
        </More>
      </IconBox>
    </TitleSection>
  );
}
