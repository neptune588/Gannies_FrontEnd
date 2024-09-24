import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { large_400 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  height: 48px;
  width: 1128px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[40]};
`;

export const Button = styled(Link)`
  margin-top: 13.5px;
  ${large_400}
  cursor: pointer;
  margin-left: 7px;
  margin-right: 31px;
  color: ${({ $currentActiveMenuNumber, $myMenuNumber, theme: { colors } }) => {
    return $currentActiveMenuNumber === $myMenuNumber
      ? colors.primary
      : colors.gray[70];
  }};
  font-weight: ${({
    $currentActiveMenuNumber,
    $myMenuNumber,
    theme: { typo },
  }) => {
    return $currentActiveMenuNumber === $myMenuNumber && typo.weight.medium;
  }};
  display: flex;
  justify-content: center;
`;
