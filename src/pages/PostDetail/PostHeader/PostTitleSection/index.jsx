import styled from 'styled-components';

import Scrap from '@/components/Icons/Scrap';
import More from '@/components/Icons/More';

import { h3_600 } from '@/styles/commonStyle/localTextStyle';

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 40px;
`;

const PostTitle = styled.h2`
  ${h3_600}
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
`;

const IconBox = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

export default function PostTitleSection({
  title = '',
  pageName = '',
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
        <More handleMoreButtonClick={handleMoreButtonClick} />
      </IconBox>
    </TitleSection>
  );
}
