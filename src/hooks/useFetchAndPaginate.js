import { useEffect, useState, useRef, useCallback } from 'react';

export default function useFetchAndPaginate({
  defaultPageNumber,
  itemMaxLimit,
  pageViewLimit,
}) {
  const firstRunBlockToSetPageTotalEffect = useRef(true);

  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  //결과물 0과 초기상태에서 FETCH할떄를 구분하기 위한 상태.
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(defaultPageNumber);
  //전체 페이지 배열 [[][][][]...의 형태]
  const [pageTotalNumbers, setPageTotalNumbers] = useState([]);
  //현재 활성화 페이지 그룹 [1,2,3,4..의 형태]
  const [groupedPageNumbers, setGroupedPageNumbers] = useState([]);
  //전체 페이지 배열에서 몇번째 순서의 그룹을 가져올것인지
  const [currentGroupOrder, setCurrentGroupOrder] = useState(0);

  const getDataAndSetPageNumbers = async (getData) => {
    setIsLoading(true);
    try {
      const res = await getData();
      const { items, totalItems } = res.data;

      setItems(items);
      setTotalItems(totalItems);

      setPageTotalNumbers(() => {
        let arrNumber = 0;
        const pageTotalLength = Math.ceil(totalItems / itemMaxLimit);
        const pageGroupLength = Math.ceil(pageTotalLength / pageViewLimit);

        const pageNumbers = Array.from(
          { length: pageTotalLength },
          (_, idx) => idx + 1
        );
        const pageGroups = Array.from({ length: pageGroupLength }, () => []);

        // 페이지 분배
        pageNumbers.forEach((pageNumber) => {
          pageGroups[arrNumber].push(pageNumber);
          if (pageNumber === (arrNumber + 1) * pageViewLimit) {
            arrNumber++;
          }
        });
        return pageGroups;
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // 현재 활성화 그룹의 첫번째 페이지인지 확인
  const isFirstPageInGroup = useCallback(() => {
    return currentPageNumber === pageTotalNumbers[currentGroupOrder][0];
  }, [currentPageNumber, pageTotalNumbers, currentGroupOrder]);

  // 현재 활성화 그룹의 마지막 페이지인지 확인
  const isLastPageInGroup = useCallback(() => {
    return currentPageNumber === pageTotalNumbers[currentGroupOrder].at(-1);
  }, [currentPageNumber, pageTotalNumbers, currentGroupOrder]);

  // 페이지 번호 클릭 핸들러
  const handlePageNumberClick = useCallback((pageNumber) => {
    //console.log(`handlePageNumberClick 실행, curpage: ${pageNumber}`);
    setCurrentPageNumber(pageNumber);
  }, []);

  // 이전 페이지 클릭 핸들러
  const handlePrevPageClick = useCallback(
    ({ stepSize }) => {
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
          setCurrentGroupOrder((prev) => prev - 1);
        }
      } else if (stepSize === 10) {
        setCurrentPageNumber((prev) => {
          const condition = prev - 10;
          return condition <= 0 ? 1 : condition;
        });
        setCurrentGroupOrder((prev) => (prev === 0 ? 0 : prev - 1));
      }
    },
    [currentPageNumber, isFirstPageInGroup]
  );

  // 다음 페이지 클릭 핸들러
  const handleNextPageClick = useCallback(
    ({ stepSize }) => {
      const lastPageGroup = pageTotalNumbers.at(-1);
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
    },
    [currentPageNumber, isLastPageInGroup, pageTotalNumbers]
  );

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

    /*     console.log(
      `그룹 넘버: ${currentGroupOrder}, 렌더링 될 페이지 그룹: ${pageTotalNumbers[currentGroupOrder]}`
    ); */
    setGroupedPageNumbers(pageTotalNumbers[currentGroupOrder]);
    //console.log('pageGroupNumber change effect 실행');
  }, [pageTotalNumbers, currentGroupOrder]);

  return {
    items,
    isLoading,
    totalItems,
    itemMaxLimit,
    pageTotalNumbers,
    currentPageNumber,
    currentGroupOrder,
    groupedPageNumbers,
    setItems,
    setIsLoading,
    setCurrentPageNumber,
    setCurrentGroupOrder,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
    resetPageNumber,
  };
}
