import search from '@/assets/icons/search/search_default.svg';
import logo from '@/assets/images/logo.png';

import {
  Wrapper,
  Logo,
  LoginButton,
  SignUpButton,
  Input,
  // LogoutButton,
  // MypageButton,
} from '@/layouts/Header/style';
import { resetSignUpData } from '@/store/signUpSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Header() {
  const [text, setText] = useState('');
  const location = useLocation().pathname;
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dispatch = useDispatch();

  const handleSearchBar = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (location.startsWith('/community') || location.startsWith('/mypage')) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [location]);

  const resetState = () => {
    dispatch(resetSignUpData());
  };

  return (
    <Wrapper>
      <Logo to='/' onClick={resetState}>
        <img src={logo} alt='logo' />
      </Logo>
      {showSearchBar && (
        <form>
          <img src={search} alt='searchIcon' />
          <Input
            placeholder='관심있는 이야기를 검색해보세요'
            value={text}
            onChange={handleSearchBar}
          />
        </form>
      )}
      <LoginButton to='/sign-in' onClick={resetState}>
        로그인
      </LoginButton>
      <SignUpButton to='/sign-up/identity' onClick={resetState}>
        회원가입
      </SignUpButton>
      {/* <LogoutButton>로그아웃</LogoutButton>
      <span>|</span>
      <MypageButton>마이페이지</MypageButton> */}
    </Wrapper>
  );
}

export default Header;
