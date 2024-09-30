import { useSelector } from 'react-redux';

export default function useSelectorList() {
  const navBarOptions = useSelector((state) => state.navBarOptions);
  const auth = useSelector((state) => state.auth);

  const { currentActiveMenuNumber, currentBoardType, bannerTitle, bannerDesc } =
    navBarOptions;
  const { isLogin, userId } = auth;

  return {
    currentActiveMenuNumber,
    currentBoardType,
    bannerTitle,
    bannerDesc,
    isLogin,
    userId,
  };
}
