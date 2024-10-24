import styled from 'styled-components';

import {
  inactiveColorBoxStyle,
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import {
  xsmall_500,
  small_600,
  medium_400,
  h4_600,
} from '@/styles/commonStyle/localTextStyle';

const Container = styled.div`
  position: relative;
`;

const Title = styled.h2`
  ${h4_600}
  padding: 0 10px;
`;

const PersonalInfoWrapper = styled.div`
  margin-top: 15px;
  padding: 35px 25px 0 25px;
  border-top: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
`;

const PersonalInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  &:nth-child(2) {
    margin-top: 35px;
  }

  > p:first-child {
    width: 100px;
    color: ${({ theme: { colors } }) => {
      return colors.gray['80'];
    }};
    ${xsmall_500}
  }

  > p:last-child {
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    ${small_600}
  }
`;

const NicknameEditBox = styled(PersonalInfoBox)`
  margin-bottom: 0;

  > div {
    display: flex;
    align-items: center;
    > input {
      width: 200px;
      padding: 0 5px 8px 5px;
      margin-right: 15px;
      ${small_600}
      border-bottom: 1px solid
        ${({ theme: { colors } }) => {
        return colors.gray['40'];
      }};
      &:disabled {
        background-color: ${({ theme: { colors } }) => {
          return colors.white;
        }};
      }
    }
    > button {
      ${primaryBorderBoxStyle}
      padding: 5px 12px;
      font-size: ${({ theme: { typo } }) => {
        return typo.size.tiny;
      }};
      font-weight: ${({ theme: { typo } }) => {
        return typo.weight.regular;
      }};
      border-radius: 8px;
    }
  }
`;

const EditSaveAndAccountDeleteBox = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;

  >button: last-child {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.gray['90'];
      }};
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    ${xsmall_500}
    margin-top: auto;
  }
`;

const InactiveButton = styled.button`
  ${inactiveColorBoxStyle}
  padding: 10px 70px;
  ${medium_400}
  cursor: default;
`;

const ActiveButton = styled.button`
  ${primaryColorBoxStyle}
  padding: 10px 70px;
  ${medium_400}
`;

const InstructionBox = styled.div`
  margin-left: 100px;
  margin-bottom: 35px;
`;

export {
  Container,
  Title,
  PersonalInfoWrapper,
  PersonalInfoBox,
  NicknameEditBox,
  EditSaveAndAccountDeleteBox,
  InstructionBox,
  InactiveButton,
  ActiveButton,
};
