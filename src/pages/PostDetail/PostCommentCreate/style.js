import styled from 'styled-components';

import {
  xsmall_500,
  medium_600,
  body,
} from '@/styles/commonStyle/localTextStyle';
import { primaryColorBoxStyle } from '@/styles/commonStyle/box';

const Wrapper = styled.div`
  margin: 25px 0 60px;
`;

const CommentLength = styled.p`
  ${medium_600}
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  margin-bottom: 25px;
`;

const CommentCreateBox = styled.div`
  padding: 30px 25px;
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['20'];
    }};
  border-radius: 8px;

  > textarea,
  > div {
    ${body}
    width: 100%;
    height: 100px;
    padding: 22px 18px;
    margin-bottom: 15px;
  }

  > textarea {
    background-color: ${({ theme: { colors } }) => {
      return colors.gray['10'];
    }};
  }

  > div {
    cursor: pointer;
    user-select: none;
    color: ${({ theme: { colors } }) => {
      return colors.gray['60'];
    }};
    background-color: ${({ theme: { colors } }) => {
      return colors.gray['20'];
    }};
  }
`;

const ConfirmButton = styled.button`
  ${primaryColorBoxStyle}
  ${xsmall_500}
  display: block;
  width: 110px;
  height: 50px;
  margin-left: auto;
`;

export { Wrapper, CommentLength, CommentCreateBox, ConfirmButton };
