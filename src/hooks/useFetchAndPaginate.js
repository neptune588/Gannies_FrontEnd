import { useEffect, useState, useRef } from 'react';

export default function useFetchAndPaginate({
  defaultPageNumber,
  itemMaxLimit,
  pageViewLimit,
}) {
  const firstRunBlockToSetPageTotalEffect = useRef(true);

  const [items, setItems] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(defaultPageNumber);
  //전체 페이지 배열 [[][][][]...의 형태]
  const [pageTotalNumbers, setPageTotalNumbers] = useState([]);
  //현재 활성화 페이지 그룹 [1,2,3,4..의 형태]
  const [groupedPageNumbers, setGroupedPageNumbers] = useState([]);
  //전체 페이지 배열에서 몇번째 순서의 그룹을 가져올것인지
  const [currentGroupOrder, setCurrentGroupOrder] = useState(0);

  const getDataAndSetPageNumbers = async (getData) => {
    try {
      const res = await getData();
      const { items, totalItems } = res.data;

      setItems(items);

      // totalItems -> ex: 473
      // Math.ceil(473 / 10) -> 48page
      // Math.ceil(48 / 10) -> 이중배열 5개
      // count 1 -> 1 ~ 10
      // count 2 -> 11 ~ 20
      // count 3 -> 21 ~ 30
      // count 4 -> 31 ~ 40
      // count 5 -> 41 ~ 50

      //1 2 3 4 5 6 7 8 9 10 ...
      //10씩 구분해서 넣으려면? [[][][]...] 큰 배열의 인덱스를 이용해야할것 같다.
      //number가 10이되면 count증가가 되고 거기에 그다음숫자가 들어가게..
      //그러면 큰배열 a라고하면.. a[count]에 number가 차례대로 들어가면 되지않을까

      //console.log(groupedPageNumbers);
      setPageTotalNumbers(() => {
        //이중배열좌표(인덱스)
        let arrNumber = 0;

        const pageTotalLength = Math.ceil(totalItems / itemMaxLimit);
        const pageGroupLength = Math.ceil(pageTotalLength / pageViewLimit);

        //base arr
        const pageNumbers = Array.from(
          { length: pageTotalLength },
          (_, idx) => idx + 1
        );
        const pageGroups = Array.from({ length: pageGroupLength }, () => []);

        pageNumbers.forEach((pageNumber) => {
          pageGroups[arrNumber].push(pageNumber);
          if (pageNumber === (arrNumber + 1) * pageViewLimit) {
            arrNumber++;
          }
        });
        return pageGroups;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const isFirstPageInGroup = () => {
    //pageTotalNumbers[currentGroupOrder][0] -> 현재 활성화 그룹의 첫번째 요소
    return currentPageNumber === pageTotalNumbers[currentGroupOrder][0]
      ? true
      : false;
  };

  const isLastPageInGroup = () => {
    //pageTotalNumbers[currentGroupOrder].at(-1) -> 현재 활성화 그룹의 마지막 요소
    return currentPageNumber === pageTotalNumbers[currentGroupOrder].at(-1)
      ? true
      : false;
  };

  const handlePageNumberClick = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const handlePrevPageClick = ({ stepSize }) => {
    if (currentPageNumber === 1) {
      alert('첫번째 페이지 입니다!');
      return;
    }

    if (stepSize !== 1 && stepSize !== 10) {
      throw new Error('유효한 파라미터가 지정되지 않았습니다');
    }

    if (stepSize === 1) {
      setCurrentPageNumber((prev) => prev - 1);
      if (isFirstPageInGroup()) {
        //눌렀을때 11,12,13,14,15...
        //첫번째 요소 제외하곤 그룹 변경x 11,21...등등 첫번재 요소 일때만 그룹변경
        setCurrentGroupOrder((prev) => prev - 1);
      }
    } else if (stepSize === 10) {
      setCurrentPageNumber((prev) => {
        const condition = prev - 10;
        return condition <= 0 ? 1 : condition;
      });
      setCurrentGroupOrder((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };

  const handleNextPageClick = ({ stepSize }) => {
    const lastPageGroup = pageTotalNumbers.at(-1);
    //마지막 그룹의 마지막 번호인가?
    if (currentPageNumber === lastPageGroup.at(-1)) {
      alert('마지막 페이지 입니다!');
      return;
    }

    if (stepSize !== 1 && stepSize !== 10) {
      throw new Error('유효한 파라미터가 지정되지 않았습니다');
    }

    if (stepSize === 1) {
      setCurrentPageNumber((prev) => prev + 1);
      if (isLastPageInGroup()) {
        setCurrentGroupOrder((prev) => prev + 1);
      }
    } else if (stepSize === 10) {
      setCurrentPageNumber((prev) => {
        //next 10을 눌렀을때 마지막번호보다 높은가? 안높으면 +10 높으면 마지막번호
        const condition = prev + 10;
        return condition > lastPageGroup.at(-1)
          ? lastPageGroup.at(-1)
          : condition;
      });
      setCurrentGroupOrder((prev) =>
        prev === pageTotalNumbers.length - 1
          ? pageTotalNumbers.length - 1
          : prev + 1
      );
    }
  };

  const resetPageNumber = () => {
    setPageTotalNumbers([]);
    setGroupedPageNumbers([]);
    setCurrentGroupOrder(0);
    setCurrentPageNumber(1);
  };

  useEffect(() => {
    if (firstRunBlockToSetPageTotalEffect.current) {
      firstRunBlockToSetPageTotalEffect.current = false;
      return;
    }

    setGroupedPageNumbers(pageTotalNumbers[currentGroupOrder]);
    //console.log('pageGroupNumber change effect 실행');
  }, [pageTotalNumbers, currentGroupOrder]);

  return {
    items,
    currentPageNumber,
    groupedPageNumbers,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
    resetPageNumber,
  };
}
