import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';

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

import { setBoardType } from '@/store/navBarOptions';

import { navBarMenuData } from '@/layouts/Navbar/data';

export function MainLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { boardType } = useParams();

  useEffect(() => {
    const url = location.pathname;
    if (url.startsWith('/community')) {
      const nav = navBarMenuData.find(
        (navMenu) => boardType === navMenu.boardType
      );

      nav &&
        dispatch(
          setBoardType({
            menuNumber: nav.number,
            boardType: nav.boardType,
            bannerTitle: nav.bannerTitle,
            bannerDesc: nav.bannerDesc,
          })
        );
    }
  }, [boardType]);

  const {
    isHospitalSearchModal,
    isPostDeleteModal,
    isPostOrCommentReportModal,
  } = useModalsControl();

  return (
    <Container
      $isHospitalSearchModal={isHospitalSearchModal}
      $isPostDeleteModal={isPostDeleteModal}
      $isPostOrCommentReportModal={isPostOrCommentReportModal}
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
