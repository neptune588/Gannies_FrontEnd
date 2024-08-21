import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const CenterdContainer = styled.div`
  width: 1128px;
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <>
      <Header />
      <CenterdContainer>
        <Outlet />
      </CenterdContainer>
      <Footer />
    </>
  );
}
