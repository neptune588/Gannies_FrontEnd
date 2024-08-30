import styled from 'styled-components';

import {
  small_400,
  small_600,
  h4_600,
  xsmall_500,
  medium_400,
} from '@/styles/commonStyle/localTextStyle';
export const Wrapper = styled.div`
  margin: auto;
  margin-top: 52px;
  width: 1128px;
`;

export const UpperWrapper = styled.div`
  width: 1128px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 6px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[60]};
`;

export const UpperTitle = styled.span`
  color: ${(props) => props.theme.colors.gray[90]};
  ${h4_600}
`;

export const ShowMoreButton = styled.button`
  height: 28px;
  color: ${(props) => props.theme.colors.gray[60]};
  ${small_600}
  cursor: pointer;
  border: none;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const ShowMoreButtonIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 6px;
`;

export const LowerWrapper = styled.div`
  width: 1128px;
  height: 330px;
  border-top: 1px solid ${(props) => props.theme.colors.gray[60]};
`;

export const PostWrapper = styled.div`
  display: flex;
  width: 1128px;
  height: 55px;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
`;

export const CategoryButton = styled.button`
  height: 27px;
  color: ${(props) => props.theme.colors.primary};
  ${xsmall_500}
  border: none;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const PostTitle = styled.span`
  color: ${(props) => props.theme.colors.gray[100]};
  ${medium_400}
  margin-left: 18px;
  margin-right: auto;
`;

export const Comment = styled.span`
  color: ${(props) => props.theme.colors.highlight};
  font-weight: ${(props) => props.theme.typo.weight.semiBold};
`;

export const LowerIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const LowerDescription = styled.span`
  color: ${(props) => props.theme.colors.gray[60]};
  ${small_400}
`;

export const LowerDescriptionWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
