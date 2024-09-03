import styled from 'styled-components';

import {
  adminPageModalTitleStyle,
  adminPageModalInnerDataTitleStyle,
} from '@/styles/commonStyle/text';
import { adminPageModalInnerDataBoxStyle } from '@/styles/commonStyle/box';
import { small_400, medium_400 } from '@/styles/commonStyle/localTextStyle';
import { modalCloseButtonStyle } from '@/styles/commonStyle/etc';
import { primaryColorBoxStyle } from '@/styles/commonStyle/box';

const ModalWrapper = styled.div`
  position: relative;
  width: 527px;
  padding: 75px 46.5px 65px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  z-index: 10;
  border-radius: 24px;
`;

const ModalTitle = styled.h2`
  ${adminPageModalTitleStyle}
  text-align: center;
  margin-bottom: 35px;
`;

const InputTitle = styled.p`
  ${adminPageModalInnerDataTitleStyle}
`;

const InputBox = styled.label`
  display: block;
  margin-bottom: 20px;

  > input,
  > textarea {
    width: 100%;
    ${adminPageModalInnerDataBoxStyle}
  }

  &:nth-child(4n) {
    margin-bottom: 50px;
    > textarea {
      height: 150px;
      overflow-y: scroll;
    }
  }
`;

const RadioSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 55px;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;

  > input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  > label {
    ${small_400}
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    user-select: none;
    margin-left: 13px;
    cursor: pointer;
  }
`;

const ModalCloseButton = styled.div`
  ${modalCloseButtonStyle}
  width: 18px;
  height: 18px;
  top: 25px;
  right: 35px;
`;

const ConfirmButton = styled.button`
  display: block;
  ${primaryColorBoxStyle}
  ${medium_400}
  width: 205px;
  height: 50px;
  margin: 0 auto;
`;

export {
  ModalWrapper,
  ModalTitle,
  InputBox,
  InputTitle,
  RadioSection,
  RadioBox,
  ModalCloseButton,
  ConfirmButton,
};
