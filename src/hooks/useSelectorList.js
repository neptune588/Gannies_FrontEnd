import { useSelector } from 'react-redux';

export default function useSelectorList() {
  const navBarOptions = useSelector((state) => state.navBarOptions);

  const { currentBoardType, bannerTitle, bannerDesc } = navBarOptions;

  return {
    currentBoardType,
    bannerTitle,
    bannerDesc,
  };
}
