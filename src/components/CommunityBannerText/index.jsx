import styled from 'styled-components';

import { bannerTitleStyle, bannerTextStyle } from '@/styles/commonStyle/text';

import useSelectorList from '@/hooks/useSelectorList';

const BannerTitle = styled.h2`
  ${bannerTitleStyle}
  margin-bottom: 10px;
`;

const BannerText = styled.h2`
  ${bannerTextStyle}
  letter-spacing: 0.3px
`;

export default function CommunityBannerText() {
  const { bannerTitle, bannerDesc } = useSelectorList();
  return (
    <>
      <BannerTitle>{bannerTitle}</BannerTitle>
      <BannerText>{bannerDesc}</BannerText>
    </>
  );
}
