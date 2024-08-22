import styled from 'styled-components';
import { ellipsisStyle } from '@/styles/commonStyle';

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
`;
const PostNumberBox = styled.p`
  width: 110px;
  padding: 45px 0 45px;
  text-align: center;
  margin-right: 15px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;
const PostBodyBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 730px;
  ${ellipsisStyle}
  p {
    color: ${({ theme: { colors } }) => {
      return colors.black;
    }};
  }
  p:first-child {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
    margin-bottom: 24px;
  }
  p:last-child {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
  }
`;

const PostInfoBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-right: 40px;
  > div:first-child {
    display: flex;
    margin-bottom: 10px;
  }
  > p:last-child {
    text-align: right;
    color: ${({ theme: { colors } }) => {
      return colors.gray['70'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
  }
`;

export {
  PostContainer,
  PostContentsWrapper,
  PostNumberBox,
  PostBodyBox,
  PostInfoBox,
};
