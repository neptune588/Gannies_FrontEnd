import styled from 'styled-components';
import { bannerTitleStyle, bannerTextStyle } from '@/styles/commonStyle';

const BannerTitle = styled.h2`
  ${bannerTitleStyle}
  margin-bottom: 10px;
`;

const BannerText = styled.h2`
  ${bannerTextStyle}
  letter-spacing: 0.3px
`;

export default function CommunityBannerText({ title, text }) {
  return (
    <>
      <BannerTitle>{title}</BannerTitle>
      <BannerText>{text}</BannerText>
    </>
  );
}
