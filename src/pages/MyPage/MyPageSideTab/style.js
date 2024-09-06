import styled from 'styled-components';

import { xsmall_500, xsmall_600 } from '@/styles/commonStyle/localTextStyle';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';

const SideTabMenuWrapper = styled.div`
  ${defaultBorderBoxStyle}
  width: 160px;
  height: 405px;
  padding: 25px 15px 65px;
`;

const SideTabTitle = styled.h2`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  ${xsmall_600}
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['20'];
    }};
`;

const SideTabMenuBox = styled.ul`
  padding: 15px 15px 0 15px;
`;

const SideTabMenuList = styled.li`
  cursor: pointer;
  user-select: none;
  color: ${({ $currentActiveMenu, $ownMenu, theme: { colors } }) => {
    return $currentActiveMenu === $ownMenu ? colors.primary : colors.gray['50'];
  }};
  ${xsmall_500}
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 35px;
  }
`;

export { SideTabMenuWrapper, SideTabTitle, SideTabMenuBox, SideTabMenuList };
