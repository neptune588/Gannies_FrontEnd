import styled from 'styled-components';
import { ellipsisStyle } from '@/styles/commonStyle/etc';

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
  width: 720px;
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
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
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
