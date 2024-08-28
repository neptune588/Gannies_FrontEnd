import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { createPostPageInputBoxStyle } from '@/styles/commonStyle/box';
import { createPostPageInputStyle } from '@/styles/commonStyle/input';

const CategoryBox = styled.section`
  margin: 60px 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
`;
const CenterdContainer = styled.div`
  width: 1008px;
  margin: 0 auto;
`;

const TitleBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const ContentsWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const InputBox = styled.section`
  ${createPostPageInputBoxStyle}

  > input {
    ${createPostPageInputStyle}
  }
`;

const DataInputWrapper = styled.div`
  padding: 30px 0 30px 25px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['60'];
    }};
  > div:first-child {
    margin-bottom: 45px;
  }
`;

const DataInputBox = styled.div`
  display: flex;
  align-items: center;

  > p {
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
    margin-right: 45px;
  }

  > div,
  > label {
    ${defaultBorderBoxStyle}
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 340px;
    height: 45px;
    padding: 10px 20px 10px 30px;
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    cursor: pointer;
  }

  > div {
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
    > img {
      width: 24px;
      height: 24px;
    }
  }

  > label {
    > input {
      width: 90%;
      font-size: inherit;
      cursor: pointer;
    }
    > img {
      width: 18px;
      height: 18px;
    }
  }
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: space-between;
  width: 510px;
  margin: 0 auto 175px;
`;
export {
  CategoryBox,
  CenterdContainer,
  TitleBox,
  ContentsWrapper,
  InputBox,
  DataInputWrapper,
  DataInputBox,
  ButtonBox,
};
