import styled from 'styled-components';

import checkIcon from '@/assets/icons/check/check_thick.svg?react';
import closeIcon from '@/assets/icons/etc/close.svg?react';

import { ellipsisStyle } from '@/styles/commonStyle/etc';

const Container = styled.div`
  position: relative;
  width: 48%;
  margin-right: 2%;
  margin-bottom: 2%;
`;

const Wrapper = styled.li`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 15px;
  border: 2px solid
    ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
  user-select: none;
  transition: all 0.05s;
  cursor: ${({ $isFailed, $isLoading }) => {
    return !$isFailed && !$isLoading && 'pointer';
  }};
  &:hover {
    border: ${({ $isFailed, theme: { colors } }) => {
      return !$isFailed && `2px solid ${colors.primary}`;
    }};
  }
  > img {
    width: 20px;
    margin-right: 10px;
  }

  > p {
    ${ellipsisStyle}
    width: calc(100% - 20px - 10px - 40px);
    color: ${({ $isFailed, theme: { colors } }) => {
      return $isFailed ? colors.negative : colors.gray['90'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.sm;
    }};
  }

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const ProgressBar = styled.span`
  position: relative;
  width: 40px;
  height: 4px;
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['30'];
  }};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $progress, $isLoading }) => {
      if (!$isLoading) {
        return '40px';
      }
      return `${$progress * 0.4}px`;
    }};
    height: 4px;
    background-color: ${({ theme: { colors } }) => {
      return colors.primary;
    }};
  }
`;

const ProgressComplete = styled(checkIcon)`
  margin-left: auto;
  width: 20px;
  height: 20px;
  path {
    fill: ${({ theme: { colors } }) => {
      return colors.primary;
    }};
  }
`;

const LoadFailed = styled(closeIcon)`
  margin-left: auto;
  width: 20px;
  height: 20px;
  path {
    stroke: ${({ theme: { colors } }) => {
      return colors.negative;
    }};
    stroke-width: 3px;
  }
`;

export { Container, Wrapper, ProgressBar, ProgressComplete, LoadFailed };
