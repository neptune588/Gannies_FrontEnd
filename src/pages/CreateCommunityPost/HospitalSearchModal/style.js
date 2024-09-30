import styled from 'styled-components';

import {
  h3_600,
  h4_400,
  medium_600,
  small_400,
} from '@/styles/commonStyle/localTextStyle';
import { modalCloseButtonStyle } from '@/styles/commonStyle/etc';

const ModalWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 1440px;
  height: 775px;
  z-index: 10;
  padding: 45px 45px 60px 75px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 16px;
`;

const ModalInnerLeftBox = styled.div`
  width: 620px;
  > h2 {
    ${h3_600}
    margin-bottom: 35px;
  }
`;

const SearchInputArea = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px 10px;
  border-bottom: 3px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};

  > input {
    width: 90%;
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    ${h4_400}
  }
  > img {
    width: 36px;
    height: 36px;
  }
`;

const SearchListBox = styled.ul`
  overflow-y: scroll;
  height: 530px;
  padding: 30px 15px;
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
`;

const SearchList = styled.li`
  width: 100%;
  height: 140px;
  padding: 25px 35px;
  margin-bottom: 15px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  &:last-child {
    margin-bottom: 0;
  }
  > p:nth-child(3) {
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
  }
`;

const HospitalName = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  ${medium_600}
  margin-bottom: 20px;
`;

const HospitalLocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  ${small_400}
  margin-bottom: 20px;
  > p:first-child {
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
  }
  > p:last-child {
    color: ${({ theme: { colors } }) => {
      return colors.primary;
    }};
  }
`;

const HospitalContact = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  ${small_400}
`;

const ModalInnerRightBox = styled.div`
  height: 670px;
`;

const ModalCloseButton = styled.button`
  ${modalCloseButtonStyle}
  width: 18px;
  height: 18px;
  top: 25px;
  right: 35px;
`;

export {
  ModalWrapper,
  ModalInnerLeftBox,
  SearchInputArea,
  SearchListBox,
  SearchList,
  HospitalName,
  HospitalLocationInfo,
  HospitalContact,
  ModalInnerRightBox,
  ModalCloseButton,
};
