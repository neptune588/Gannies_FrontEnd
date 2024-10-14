import styled from 'styled-components';

import { ellipsisStyle } from '@/styles/commonStyle/etc';
import {
  xsmall_400,
  small_400,
  small_500,
} from '@/styles/commonStyle/localTextStyle';

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  padding: 24px 20px;
  text-align: left;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
  transition: all 0.1s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.gray['10'];
    }};
  }
`;

const PostNumberBox = styled.td`
  flex: 0 0 8.5rem;
  color: ${({ theme: { colors } }) => {
    return colors.gray['80'];
  }};
  ${small_500}
`;

const PostTitleBox = styled.td`
  display: flex;
  flex: 0 0 50rem;
  ${ellipsisStyle}
  ${small_400}
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};

  > p {
    > span {
      color: ${({ theme: { colors } }) => {
        return colors.primary;
      }};
    }
  }
`;

const PostNicknameBox = styled.td`
  ${xsmall_400}
  flex: 0 0 10rem;
`;

const PostDateBox = styled.td`
  ${small_500}
  flex: 0 0 14.5rem;
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
`;

const PostIconBox = styled.td`
  display: flex;
  width: 100%;
  padding-right: 20px;
  > div {
    width: 50%;
  }
`;

export {
  TableRow,
  PostNumberBox,
  PostTitleBox,
  PostNicknameBox,
  PostIconBox,
  PostDateBox,
};
