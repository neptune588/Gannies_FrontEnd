import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import AdminSideTab from '@/pages/Admin/AdminSideTab';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';

const CenterdContainer = styled.div`
  width: 1128px;
  margin: 0 auto;
`;

const MypageCenterdContainer = styled.div`
  width: 975px;
  margin: 0 auto;
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

export function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <CenterdContainer>
        <Outlet />
      </CenterdContainer>
      <Footer />
    </>
  );
}

export function MypageLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <MypageCenterdContainer>
        <Outlet />
      </MypageCenterdContainer>
      <Footer />
    </>
  );
}

export function AdminLayout() {
  return (
    <>
      <AdminSideTab />
      <AdminContainer>
        <AdminContentsWrapper>
          <Outlet />
        </AdminContentsWrapper>
      </AdminContainer>
    </>
  );
}

export function HeaderLayout() {
  return (
    <>
      <Header />
      <CenterdContainer>
        <Outlet />
      </CenterdContainer>
      <EmptyFooterBox />
    </>
  );
}
