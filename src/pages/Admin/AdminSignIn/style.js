import styled from 'styled-components';

import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { small_400, medium_500 } from '@/styles/commonStyle/localTextStyle';

const Container = styled.div`
  ${centerAlignStyle}
  height: 100vh;
  background-color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
`;

const Wrapper = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      ${small_400}
      margin-top: 10px;
      text-align: center;
      color: red;
    }
  }
`;

const ImageLogo = styled.div`
  display: block;
  width: 223px;
  flex: 0 0 auto;
  margin: 0 auto 30px;
`;

const InputBox = styled.div`
  width: 400px;
  &:first-child {
    margin-bottom: 15px;
  }
  > div {
    display: flex;
    height: 48px;
    background-color: ${({ theme: { colors } }) => {
      return colors.white;
    }};
    border-radius: 4px;
    padding: 10px 15px;

    > input {
      ${small_400}
      width: 95%;
      &:placeholder {
        ${placeholderTextStyle};
      }
    }

    > div {
      > img {
        cursor: pointer;
      }
    }
  }
`;

const SubmitButton = styled.button`
  ${medium_500}
  width: 360px;
  height: 48px;
  margin-top: 50px;
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.secondary;
  }};
  border-radius: 4px;

  &:disabled {
    color: ${({ theme: { colors } }) => {
      return colors.gray['70'];
    }};
    background-color: ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
  }
`;

export { Container, Wrapper, ImageLogo, InputBox, SubmitButton };
