import styled from 'styled-components';

import { h4_600 } from '@/styles/commonStyle/localTextStyle';

const Container = styled.div`
  overflow: ${({ $isHospitalSearchModal }) => {
    return $isHospitalSearchModal ? 'hidden' : null;
  }};
  height: ${({ $isHospitalSearchModal }) => {
    return $isHospitalSearchModal ? '100vh' : null;
  }};
`;

const CenterdWrapper = styled.div`
  width: 1128px;
  margin: 0 auto;
`;

const MyPageCenterdWrapper = styled.div`
  width: 975px;
  margin: 0 auto;
`;

const MyPageTitle = styled.h2`
  ${h4_600}
  margin: 70px 0 30px;
  padding-left: 10px;
`;

const MyPageFlexWrapper = styled.div`
  display: flex;
`;

const MyPageContentsBox = styled.div`
  width: 795px;
  margin-left: 30px;
`;

const EmptyFooterBox = styled.div`
  height: 167px;
`;

const AdminContainer = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
`;

const AdminContentsWrapper = styled.div`
  position: relative;
  width: 1385px;
  top: 0;
  left: 465px;
`;

export {
  Container,
  CenterdWrapper,
  MyPageCenterdWrapper,
  MyPageTitle,
  MyPageFlexWrapper,
  MyPageContentsBox,
  EmptyFooterBox,
  AdminContainer,
  AdminContentsWrapper,
};
