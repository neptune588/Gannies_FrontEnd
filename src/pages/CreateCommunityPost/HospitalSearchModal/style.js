import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 1440px;
  height: 775px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 45px 45px 60px 75px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
`;

const ModalInnerLeftBox = styled.div`
  width: 620px;
  > h2 {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.h3;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.semiBold;
    }};
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
    font-size: ${({ theme: { typo } }) => {
      return typo.size.h4;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.regular;
    }};
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
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
  margin-bottom: 20px;
`;

const HospitalLocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
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
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;

const ModalInnerRightBox = styled.div`
  height: 670px;
`;

const ModalCloseArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export {
  ModalContainer,
  ModalWrapper,
  ModalInnerLeftBox,
  SearchInputArea,
  SearchListBox,
  SearchList,
  HospitalName,
  HospitalLocationInfo,
  HospitalContact,
  ModalInnerRightBox,
  ModalCloseArea,
};
