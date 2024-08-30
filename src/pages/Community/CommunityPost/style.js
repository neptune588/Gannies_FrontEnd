import styled from 'styled-components';

import { ellipsisStyle } from '@/styles/commonStyle/etc';
import {
  xsmall_400,
  small_400,
  small_500,
} from '@/styles/commonStyle/localTextStyle';

const PostContainer = styled.li`
  display: flex;
  height: 110px;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
  margin: 0 43px;
`;

const PostContentsWrapper = styled.div`
  display: flex;
  width: 830px;
`;
const PostNumberBox = styled.p`
  width: 110px;
  padding: 45px 0 45px;
  text-align: center;
  margin-right: 15px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  ${small_500}
`;
const PostBodyBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 720px;
  ${ellipsisStyle}
  p {
    color: ${({ theme: { colors } }) => {
      return colors.black;
    }};
  }
  p:first-child {
    ${xsmall_400}
    margin-bottom: 24px;
  }
  p:last-child {
    ${small_400}
  }
`;

const PostInfoBox = styled.div`
  display: flex;
  width: calc(100% - 830px);
  flex-flow: column;
  justify-content: center;
  margin-right: 40px;
`;

const PostIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PostDateBox = styled.p`
  text-align: right;
  color: ${({ theme: { colors } }) => {
    return colors.gray['70'];
  }};
  ${small_500}
`;

export {
  PostContainer,
  PostContentsWrapper,
  PostNumberBox,
  PostBodyBox,
  PostInfoBox,
  PostIconBox,
  PostDateBox,
};
