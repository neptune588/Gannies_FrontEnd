import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '@/pages/Home/Banner';
import SearchBar from '@/pages/Home/SearchBar';
import Link from '@/pages/Home/Link';
import { setBoardType } from '@/store/navBarOptions';
import IsApproval from '@/components/Modal/IsApproval';
import IsTempPassword from '@/components/Modal/IsTempPassword';
import Posts from '@/pages/Home/Posts';

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalState);

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
      {modalState.isApproval && <IsApproval />}
      {modalState.isTempPassword && <IsTempPassword />}
      <Banner />
      <SearchBar />
      <Posts />
      <Link />
    </>
  );
}

export default Home;
