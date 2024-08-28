import styled from 'styled-components';

import {
  defaultBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';

const PasswordChangeWrapper = styled.div`
  margin-top: 15px;
  padding: 35px 25px 0 25px;
  border-top: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
`;

const PasswordChgngeBox = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  &:nth-child(2n),
  &:nth-child(3n) {
    margin-bottom: 0;
  }
  > p {
    width: 120px;
    color: ${({ theme: { colors } }) => {
      return colors.gray['80'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
  }
`;

const InputBox = styled.label`
  ${defaultBorderBoxStyle}
  display: flex;
  justify-content: space-between;
  padding: 3px 25px;
  width: 455px;
  height: 50px;
  > input {
    width: 90%;
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.semiBold;
    }};
  }
  > div {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
`;

const NoticeMent = styled.p`
  margin: 10px 0 0 120px;
  &:nth-child(2n) {
    margin-bottom: 35px;
  }
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

const EditSaveBox = styled.section`
  padding-top: 70px;
  > button {
    ${primaryColorBoxStyle}
    height: 50px;
    padding: 10px 35px;
    font-size: ${({ theme: { typo } }) => {
      return typo.size.md;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
  }
`;

export {
  PasswordChangeWrapper,
  PasswordChgngeBox,
  InputBox,
  NoticeMent,
  EditSaveBox,
};
