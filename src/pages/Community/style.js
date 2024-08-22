import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  bannerTitleStyle,
  bannerTextStyle,
  primaryColorBoxStyle,
  defaultBorderBoxStyle,
  ellipsisStyle,
} from '@/styles/commonStyle';

const BannerTitle = styled.h2`
  ${bannerTitleStyle}
  margin-bottom: 10px;
`;

const BannerText = styled.h2`
  ${bannerTextStyle}
  letter-spacing: 0.3px
`;

const ContentsAlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 15px;
`;

const PostCreateButton = styled(Link)`
  ${primaryColorBoxStyle}
  display: flex;
  align-items: center;
  width: 135px;
  height: 40px;
  padding: 5px 12px;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
`;

const SelectBox = styled.select`
  ${defaultBorderBoxStyle}
  width: 95px;
  height: 35px;
  padding: 0 10px;
  appearance: none;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
`;

const PostWrapper = styled.div`
  padding: 0 43px;
`;
const PostHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 15px;
  border-top: 2px solid
    ${({ theme: { colors } }) => {
      return colors.gray['50'];
    }};
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['50'];
    }};
  > div:first-child {
    display: flex;
    align-items: center;
    > p:first-child {
      width: 110px;
      text-align: center;
      margin-right: 15px;
    }
    > p:last-child {
      width: 720px;
      ${ellipsisStyle}
    }
  }
  > div:last-child {
    margin-right: 20px;
  }
  p {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
  }
`;

export {
  BannerTitle,
  BannerText,
  ContentsAlignBox,
  PostCreateButton,
  SelectBox,
  PostWrapper,
  PostHeaderBox,
};
