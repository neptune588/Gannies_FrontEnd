import { Outlet } from 'react-router-dom';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import MyPageSideTab from '@/pages/MyPage/MyPageSideTab';
import AdminSideTab from '@/pages/Admin/AdminSideTab';

import {
  Container,
  CenterdWrapper,
  MyPageCenterdWrapper,
  MyPageTitle,
  MyPageFlexWrapper,
  MyPageContentsBox,
  EmptyFooterBox,
  AdminContainer,
  AdminContentsWrapper,
} from '@/layouts/style';

import useModalsControl from '@/hooks/useModalsControl';

export function MainLayout() {
  const { isHospitalSearchModal, isPostDeleteModal } = useModalsControl();

  return (
    <Container
      $isHospitalSearchModal={isHospitalSearchModal}
      $isPostDeleteModal={isPostDeleteModal}
    >
      <Header />
      <Navbar />
      <CenterdWrapper>
        <Outlet />
      </CenterdWrapper>
      <Footer />
    </Container>
  );
}

export function MypageLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <MyPageCenterdWrapper>
        <MyPageTitle>마이페이지</MyPageTitle>
        <MyPageFlexWrapper>
          <MyPageSideTab />
          <MyPageContentsBox>
            <Outlet />
          </MyPageContentsBox>
        </MyPageFlexWrapper>
      </MyPageCenterdWrapper>
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
      <CenterdWrapper>
        <Outlet />
      </CenterdWrapper>
      <EmptyFooterBox />
    </>
  );
}
