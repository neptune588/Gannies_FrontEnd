import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
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
