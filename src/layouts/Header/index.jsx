import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import search from '@/assets/icons/search/search_default.svg';
import logo from '@/assets/images/logo.png';

import {
  Wrapper,
  Logo,
  LoginButton,
  SignUpButton,
  SearchBox,
  Input,
  LogoutButton,
  MypageButton,
} from '@/layouts/Header/style';

import usePostSearch from '@/hooks/usePostSearch';
import useSelectorList from '@/hooks/useSelectorList';

import { setBoardType } from '@/store/navBarOptions';

import { getSessionStatus, userSignOut } from '@/api/authApi';
import useUserState from '@/hooks/useUserState';
import useLoginCheck from '@/hooks/useLoginCheck';

function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const { isLogin } = useSelectorList();
  const { searchValue, searchBarRef, handleSearchValueChange, handleSearch } =
    usePostSearch();
  const { navigateBasedOnState } = useUserState();
  const { logout } = useLoginCheck();

  const handleMyPage = () => {
    navigateBasedOnState('/mypage/profile/edit', 'email_verified');
  };

  const handleLogout = async () => {
    try {
      const resSessionStatus = await getSessionStatus();
      const { expires } = resSessionStatus.data;
      if (expires) {
        logout();
        return;
      }
      const response = await userSignOut();
      if (response.status === 200) {
        logout();
      } else {
        alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('로그아웃 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    if (
      location.startsWith('/community') ||
      location.startsWith('/mypage') ||
      location.startsWith('/post')
    ) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [location]);

  return (
    <Wrapper>
      <Logo
        onClick={() => {
          navigate('/');
          dispatch(
            setBoardType({
              menuNumber: 0,
              boardType: 'all',
              bannerTitle: '',
              bannerText: '',
            })
          );
        }}
      >
        <img src={logo} alt='logo' />
      </Logo>
      {showSearchBar && (
        <SearchBox>
          <img src={search} alt='searchIcon' />
          <Input
            ref={searchBarRef}
            placeholder='관심있는 이야기를 검색해보세요'
            value={searchValue}
            onChange={(e) => {
              handleSearchValueChange(e.target.value);
            }}
            onKeyUp={handleSearch}
          />
        </SearchBox>
      )}
      {isLogin ? (
        <>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          <span>|</span>
          <MypageButton onClick={handleMyPage}>마이페이지</MypageButton>
        </>
      ) : (
        <>
          <LoginButton to='/sign-in'>로그인</LoginButton>
          <SignUpButton to='/sign-up/identity'>회원가입</SignUpButton>
        </>
      )}
    </Wrapper>
  );
}

export default Header;
