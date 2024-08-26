import styled from 'styled-components';
import { primaryBorderBoxStyle } from '@/styles/commonStyle';

const PersonalInfoWrapper = styled.div`
  margin-top: 15px;
  padding: 35px 0 0 25px;
  border-top: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
`;

const PersonalInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  &:last-child {
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
export { PersonalInfoWrapper, PersonalInfoBox, NicknameEditBox };
