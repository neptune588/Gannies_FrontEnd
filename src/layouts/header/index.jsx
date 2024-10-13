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
  Input,
  LogoutButton,
  MypageButton,
} from '@/layouts/Header/style';

import useSelectorList from '@/hooks/useSelectorList';
import useEventHandler from '@/hooks/useEventHandler';

import { setBoardType } from '@/store/navBarOptions';
import { handleModal } from '@/store/modalState';
import { setLogout } from '@/store/auth';

import { userSignOut } from '@/api/authApi';

function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const [showSearchBar, setShowSearchBar] = useState(false);

  const { isLogin } = useSelectorList();

  const { changeValue: searchValue, handleChange: handleSearchValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const handleLogout = async () => {
    try {
      const response = await userSignOut();
      if (response.status === 200) {
        dispatch(handleModal({ field: 'isApproval', value: false }));
        dispatch(setLogout());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/post/serach/${searchValue}`);
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
        <>
          <img src={search} alt='searchIcon' />
          <Input
            placeholder='관심있는 이야기를 검색해보세요'
            value={searchValue}
            onChange={handleSearchValueChange}
            onKeyUp={handleSearch}
          />
        </>
      )}
      {isLogin ? (
        <>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          <span>|</span>
          <MypageButton to='/mypage/profile/edit'>마이페이지</MypageButton>
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
