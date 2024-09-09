import MorePopup from '@/pages/PostDetail/MorePopup';

import Scrap from '@/components/Icons/Scrap';
import More from '@/components/Icons/More';

import {
  TitleSection,
  PostTitle,
  IconBox,
} from '@/pages/PostDetail/PostHeader/PostTitleSection/style';

export default function PostTitleSection({
  title = '',
  pageName = '',
  isMoreButtonClick = false,
  isLogin = true,
  handlePutClick = null,
  handleDeleteClick = null,
  handleReportClick = null,
  scrapClickState = null,
  handleScrapClick = null,
  handleMoreButtonClick = null,
}) {
  return (
    <TitleSection>
      <PostTitle>자연 친화적인 라이프 스타일을 위한 환경 보호 방법</PostTitle>
      <IconBox>
        <Scrap
          pageName={'post-detail-view'}
          handleScrapClick={handleScrapClick}
          scrapClickState={scrapClickState}
        />
        <More onClick={handleMoreButtonClick} />
        {isMoreButtonClick && <MorePopup />}
      </IconBox>
    </TitleSection>
  );
}
