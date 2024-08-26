import styled from 'styled-components';
import { defaultBorderBoxStyle } from '@/styles/commonStyle';

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
export { PasswordChangeWrapper, PasswordChgngeBox, InputBox };
