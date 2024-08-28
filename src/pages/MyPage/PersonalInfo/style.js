import styled from 'styled-components';
import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle';

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
  &:nth-child(4n) {
    margin-bottom: 0;
  }
  >p: first-child {
    width: 100px;
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
  >p: last-child {
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.semiBold;
    }};
  }
`;

const NicknameEditBox = styled(PersonalInfoBox)`
  > div {
    display: flex;
    align-items: center;
    > input {
      width: 200px;
      padding: 0 5px 8px 5px;
      margin-right: 15px;
      font-size: ${({ theme: { typo } }) => {
        return typo.size.sm;
      }};
      font-weight: ${({ theme: { typo } }) => {
        return typo.weight.semiBold;
      }};
      border-bottom: 1px solid
        ${({ theme: { colors } }) => {
          return colors.gray['40'];
        }};
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
  align-items: baseline;

  >button: first-child {
    ${primaryColorBoxStyle}
    padding: 10px 70px;
    font-size: ${({ theme: { typo } }) => {
      return typo.size.md;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
  }
  >button: last-child {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.gray['90'];
      }};
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
  }
`;
export {
  PersonalInfoWrapper,
  PersonalInfoBox,
  NicknameEditBox,
  EditSaveAndAccountDeleteBox,
};
