import styled from 'styled-components';

import { small_600 } from '@/styles/commonStyle/localTextStyle';
import { ellipsisStyle } from '@/styles/commonStyle/etc';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const AttachmentsOpenButton = styled.button`
  ${small_600}
  display: block;
  margin-left: auto;
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  user-select: none;
  &:hover {
    color: #2d6ab7;
  }
`;

const AttachmentsBox = styled.ul`
  position: absolute;
  display: flex;
  width: 400px;
  flex-flow: column nowrap;
  justify-content: space-between;
  top: 30px;
  right: -40px;
  padding: 5px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 85%;
    width: 15px;
    height: 15px;
    background-color: #ffff;
    border-radius: 4px;
    box-shadow: -2px 1px 1px rgba(178, 178, 178, 0.1);
    transform: rotate(135deg);
  }
`;

const Attachment = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 5px 15px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  user-select: none;
  z-index: 1;
  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.secondary;
    }};
  }

  > button {
    text-align: left !important;
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
    cursor: pointer;
    &:first-child {
      width: 80%;
      ${ellipsisStyle}
      font-size: ${({ theme: { typo } }) => {
        return typo.size.sm;
      }};
      color: ${({ theme: { colors } }) => {
        return colors.gray['70'];
      }};
      &:hover {
        color: ${({ theme: { colors } }) => {
          return colors.gray['90'];
        }};
      }
    }
    &:last-child {
      font-size: ${({ theme: { typo } }) => {
        return typo.size.xs;
      }};
      color: ${({ theme: { colors } }) => {
        return colors.primary;
      }};

      &:hover {
        color: #2d6ab7;
      }
    }
  }
`;

export { Wrapper, AttachmentsOpenButton, AttachmentsBox, Attachment };
