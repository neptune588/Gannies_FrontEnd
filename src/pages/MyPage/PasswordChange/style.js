import styled from 'styled-components';

import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import {
  xsmall_500,
  xsmall_600,
  medium_400,
  h4_600,
} from '@/styles/commonStyle/localTextStyle';
import { inputBorderStyle } from '@/styles/commonStyle/input';

const Title = styled.h2`
  ${h4_600}
  padding: 0 10px;
`;

const PasswordChangeWrapper = styled.div`
  margin-top: 15px;
  padding: 35px 25px 0 25px;
  border-top: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
`;

const PasswordChangeBox = styled.section`
  display: flex;
  align-items: center;
  margin-top: 35px;

  &:first-of-type {
    margin-top: 0;
  }

  > p {
    width: 120px;
    color: ${({ theme: { colors } }) => {
      return colors.gray['80'];
    }};
    ${xsmall_500}
  }
`;

const InputBox = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 3px 25px;
  width: 455px;
  height: 50px;
  border: ${(props) => inputBorderStyle(props)};
  border-radius: 4px;

  > input {
    width: 90%;
    ${xsmall_600}
  }
  > div {
    display: flex;
    align-items: center;
    user-select: none;

    > div {
      cursor: pointer;
    }
  }
`;

const NoticeMent = styled.p`
  margin: 10px 0 0 120px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  ${xsmall_500}
`;

const EditSaveBox = styled.section`
  padding-top: 70px;
  > button {
    ${primaryColorBoxStyle}
    height: 50px;
    padding: 10px 35px;
    ${medium_400}
  }
`;

export {
  Title,
  PasswordChangeWrapper,
  PasswordChangeBox,
  InputBox,
  NoticeMent,
  EditSaveBox,
};
