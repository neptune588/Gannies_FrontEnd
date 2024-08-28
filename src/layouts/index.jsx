import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';

import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const CenterdContainer = styled.div`
  width: 1128px;
  margin: 0 auto;
`;

const MypageCenterdContainer = styled.div`
  width: 975px;
  margin: 0 auto;
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
