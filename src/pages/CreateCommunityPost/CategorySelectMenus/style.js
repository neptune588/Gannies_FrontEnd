import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { xsmall_500 } from '@/styles/commonStyle/localTextStyle';

const Wrapper = styled.div`
  position: relative;
`;

const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  > p {
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    ${xsmall_500}
    margin-right: 45px;
  }

  > div {
    ${defaultBorderBoxStyle}
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 340px;
    height: 45px;
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
    padding: 10px 20px 10px 30px;
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
    cursor: pointer;

    > img {
      width: 24px;
      height: 24px;
      transform: ${({ $isOpen }) => {
        return $isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }};
    }
`;

const SelectOptionBox = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 340px;
  top: 50px;
  left: 100px;
  padding: 4px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  z-index: 100;
`;

const SelectOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
  padding: 10px 20px 10px 30px;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.secondary;
    }};
    color: ${({ theme: { colors } }) => {
      return colors.primary;
    }};
  }

  > img {
    width: 24px;
    height: 24px;
  }
`;

export { Wrapper, SelectedBox, SelectOptionBox, SelectOption };
