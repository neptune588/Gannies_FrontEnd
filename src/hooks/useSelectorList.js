import { useSelector } from 'react-redux';

export default function useSelectorList() {
  const boardType = useSelector((state) => state.boardType);

  const { currentBoardType, bannerTitle, bannerDesc } = boardType;

  return {
    currentBoardType,
    bannerTitle,
    bannerDesc,
  };
}
