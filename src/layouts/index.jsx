import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

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
import useLoginCheck from '@/hooks/useLoginCheck';

import { setBoardType } from '@/store/navBarOptions';
import { setLogout } from '@/store/auth';

import { navBarMenuData } from '@/layouts/Navbar/data';

import { checkAdminStatus } from '@/api/authApi';

export function MainLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { boardType } = useParams();

  useEffect(() => {
    const url = location.pathname;

    console.log(boardType);
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { checkIsLogin } = useLoginCheck();

  const { isReportedCotentModal } = useModalsControl();

  /* 
  관리자 로그인을 하면 

isAdmin을 true로 한다.. (오로지 ui 용도)
isLogin을 true로한다.

sidetab에서 isAdmin과 isLogin이 true면 nickname을 띄운다 


관리자 목록에 들어오면 

일단 admin 체크부터한다. 체크가 됐으면
로그인 만료 체크를 한다. */
  useEffect(() => {
    (async () => {
      try {
        const res = await checkAdminStatus();
        const { isAdmin } = res.data;
        if (!isAdmin) {
          alert('관리자만 이용 가능합니다.');
          navigate('/');
        }
      } catch (error) {
        //통신에러라던지 기타 에러
        console.error(error);
        dispatch(setLogout());
        navigate('/');
      }
    })();

    checkIsLogin({ isAdminPage: true });
  }, []);

  return (
    <Container $isReportedCotentModal={isReportedCotentModal}>
      <AdminSideTab />
      <AdminContainer>
        <AdminContentsWrapper>
          <Outlet />
        </AdminContentsWrapper>
      </AdminContainer>
    </Container>
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
