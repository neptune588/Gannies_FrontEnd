import { useSelector } from 'react-redux';

export default function useSelectorList() {
  const navBarOptions = useSelector((state) => state.navBarOptions);

  const { currentActiveMenuNumber, currentBoardType, bannerTitle, bannerDesc } =
    navBarOptions;

  return {
    currentActiveMenuNumber,
    currentBoardType,
    bannerTitle,
    bannerDesc,
  };
}
