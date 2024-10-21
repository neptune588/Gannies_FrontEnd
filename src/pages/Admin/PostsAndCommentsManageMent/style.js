import styled from 'styled-components';

import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { small_600 } from '@/styles/commonStyle/localTextStyle';

const TableTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  > div {
    display: flex;
  }
`;

const PostDeleteButton = styled.button`
  ${centerAlignStyle}
  ${small_600}
  width: 95px;
  height: 50px;
  color: ${({ $isDeleteButtonActive, theme: { colors } }) => {
    return $isDeleteButtonActive ? colors.negative : colors.gray['50'];
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 8px;
  margin-right: 15px;
  > img {
    margin-right: 10px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const PostDeletetSelectButton = styled.button`
  ${centerAlignStyle}
  width: 30.5px;
  height: 30.5px;
  border-radius: 50%;
  margin: 0 14.5px 0 auto;
  background-color: ${({ $isSelected, theme: { colors } }) => {
    return $isSelected ? colors.primary : colors.gray['20'];
  }};

  > img {
    width: 16px;
    height: 12px;
  }
`;

const TableRowSelectWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  user-select: none;
  cursor: pointer;
  z-index: 10;
`;

const CommentLength = styled.span`
  color: ${({ theme: { colors } }) => {
    return colors.highlight;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semibold;
  }};
  margin-left: 3px;
`;

export {
  TableTopArea,
  PostDeleteButton,
  PostDeletetSelectButton,
  TableRowSelectWrapper,
  CommentLength,
};
