import styled from 'styled-components';
import { defaultBorderBoxStyle } from '@/styles/commonStyle';

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
  > h2 {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.h4;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
    margin-left: 30px;
  }

  > p {
    color: ${({ theme: { colors } }) => {
      return colors.black;
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
    margin-right: 70px;
  }
`;

const ContentsWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const InputBox = styled.section`
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
  > input {
    width: 100%;
    padding: 0 15px 15px 15px;
    color: ${({ theme: { colors } }) => {
      return colors.black;
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.h4;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
  }
`;

const DataInputWrapper = styled.div`
  padding: 30px 0 30px 25px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
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
  input {
    ${defaultBorderBoxStyle}
    width: 340px;
    height: 45px;
    padding: 10px 20px 10px 30px;
  }
`;
export {
  CategoryBox,
  CenterdContainer,
  TitleBox,
  ContentsWrapper,
  InputBox,
  DataInputWrapper,
  DataInputBox,
};
