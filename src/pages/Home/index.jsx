import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Banner from '@/pages/Home/Banner';
import SearchBar from '@/pages/Home/SearchBar';
import Link from '@/pages/Home/Link';
import { setBoardType } from '@/store/navBarOptions';
import Posts from '@/pages/Home/Posts';
import Modal from '@/components/Modal';

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = location.pathname;
    if (url === '/') {
      dispatch(
        setBoardType({
          menuNumber: 0,
          boardType: '',
          bannerTitle: '',
          bannerDesc: '',
        })
      );
    }
  }, []);

  return (
    <>
      <Modal />
      <Banner />
      <SearchBar />
      <Posts />
      <Link />
    </>
  );
}

export default Home;
