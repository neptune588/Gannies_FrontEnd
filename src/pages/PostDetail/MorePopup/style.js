import styled from 'styled-components';

import { xsmall_400 } from '@/styles/commonStyle/localTextStyle';

const PopupBox = styled.ul`
  width: 70px;
  position: absolute;
  top: 40px;
  left: -40px;
  padding: 3px 3px 0 3px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  &::after {
    content: "";
    position: absolute;
    top: -7px;
    left: 65%;
    width: 15px;
    height: 15px;
    background-color: #FFFF;
    border-radius: 4px;
    box-shadow: -2px 1px 1px rgba(178, 178, 178, 0.1);
    transform: rotate(135deg);
    z-index: 2;
`;

const PopupList = styled.li`
  ${xsmall_400}
  position: relative;
  color: ${({ theme: { colors } }) => {
    return colors.gray['80'];
  }};
  text-align: center;
  cursor: pointer;
  padding: 7px 0;
  border-radius: 4px;
  transition: all 0.05s;
  z-index: 10;
  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.secondary;
    }};
  }
  &:nth-child(1n) {
    margin-bottom: 3px;
  }
`;

export { PopupBox, PopupList };
