import styled from 'styled-components';

import { xsmall_500, xsmall_600 } from '@/styles/commonStyle/localTextStyle';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

export const PostWrapper = styled.li`
  display: flex;
  height: ${({ $pageName }) => {
    return $pageName === 'home' ? '57px' : '75px';
  }};
  padding-left: ${({ $pageName }) => {
    return $pageName === 'home' && '8px';
  }};
  padding-right: ${({ $pageName }) => {
    return $pageName === 'home' && '8px';
  }};
  cursor: pointer;
`;

export const PostLeftBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PostRightBox = styled(PostLeftBox)``;
export const PostNumber = styled.p`
  width: 70px;
  text-align: center;
  color: ${({ theme: { colors } }) => {
    return colors.gray['80'];
  }};
  ${xsmall_600}
`;

export const Category = styled.div`
  ${centerAlignStyle};
  width: 67.5px;
  font-size: ${({ $pageName, theme: { typo } }) => {
    return $pageName === 'home' ? typo.size.xs : typo.size.tiny;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  padding: 5px 13px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => {
    return colors.secondary;
  }};
  margin: 0px 23px 0px 2px;
`;

export const PostTitle = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  font-size: ${({ $pageName, theme: { typo } }) => {
    return $pageName === 'home' ? typo.size.md : typo.size.xs;
  }};
  font-weight: ${({ $pageName, theme: { typo } }) => {
    return $pageName === 'home' ? typo.weight.regular : typo.weight.medium;
  }};
  margin-left: ${({ $pageName }) => {
    return $pageName === 'home' && '18px';
  }};
  width: ${({ $pageName }) => {
    return $pageName === 'home'
      ? '732px'
      : $pageName === 'myPosts'
        ? '331px'
        : '415px';
  }};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  ${xsmall_500}
  }};
`;

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  width: 85px;
  margin-right: '15px';
  margin-left: ${({ $pageName }) => {
    return $pageName === 'home' ? '15px' : '17px';
  }};
`;

export const IconBox = styled.div`
  width: 65px;
  margin-left: ${({ $pageName }) => {
    return $pageName === 'home' ? '20px' : '18px';
  }};
`;

export const ScrapBox = styled.div`
  margin-left: 34px;
`;
