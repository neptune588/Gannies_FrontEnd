import { useState } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import InnerSelectModal from '@/pages/Admin/TableDesign/InnerSelectModal';
import ModalInnerList from '@/pages/Admin/TableDesign/InnerSelectModal/ModalInnerList';
import InnerModalOpenButton from '@/pages/Admin/TableDesign/InnerModalOpenButton';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';
import ReportedReviewModal from '@/pages/Admin/ReportedReviewModal';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import { TitleCategory } from '@/pages/Admin/ReportHistory/style';

import { reportedHeaderColumns, reportedData } from '@/pages/Admin/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function ReportHistory() {
  const [tableData, setTableData] = useState(reportedData);
  const [headerColumns] = useState(reportedHeaderColumns);
  const [tempPageData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  const {
    clickChangeState: currentPageNumber,
    handleClickChange: handlePageNumberClick,
  } = useEventHandler({
    clickChangeDefaultValue: 0,
  });

  const { clickChangeState: currenntActiveCategory, handleClickChange } =
    useEventHandler({
      clickChangeDefaultValue: '게시글',
    });

  const handleStatusValueChange = (status, listNumber) => {
    const statusChangefnc = (arr) => {
      return arr.map((list, idx) => {
        return {
          ...list,
          statusValue: idx === listNumber ? status : list.statusValue,
        };
      });
    };
    setTableData((prev) => statusChangefnc(prev));
  };

  const handleInnerModalToggle = (listNumber) => {
    const toggleFnc = (arr) => {
      return arr.map((list, idx) => {
        return {
          ...list,
          innerModalState: idx === listNumber ? !list.innerModalState : false,
        };
      });
    };
    setTableData((prev) => toggleFnc(prev));
  };

  return (
    <>
      <ReportedReviewModal activeCategory={currenntActiveCategory} />
      <TitleSection>
        <TitleCategory
          $currenntActiveCategory={currenntActiveCategory}
          $ownCategory={'게시글'}
          onClick={() => {
            handleClickChange('게시글');
          }}
        >
          게시글
        </TitleCategory>
        <TitleCategory
          $currenntActiveCategory={currenntActiveCategory}
          $ownCategory={'댓글'}
          onClick={() => {
            handleClickChange('댓글');
          }}
        >
          댓글
        </TitleCategory>
      </TitleSection>
      <ArrLengthSection>
        <ArrLengthView length={tableData.length} />
      </ArrLengthSection>
      <TableWrapper>
        <table>
          <thead>
            <TableHeaderRow currentActiveTab={'신고내역'}>
              {headerColumns.map((data, idx) => {
                return (
                  <th key={uuid()}>
                    {data.header}
                    {idx === headerColumns.length - 1 && (
                      <img src={arrow} alt='bottom-arrow' />
                    )}
                  </th>
                );
              })}
            </TableHeaderRow>
          </thead>
          <tbody>
            {tableData?.map((data, idx) => {
              return (
                <TableBodyRow key={uuid()} currentActiveTab={'신고내역'}>
                  <td>{String(data.order).padStart(2, '0')}</td>
                  <td>{data.contents}</td>
                  <td>{data.contributor}</td>
                  <td>{data.complainant}</td>
                  <td>{data.reportDate}</td>
                  <td>{data.reportDetail}</td>
                  <td>
                    {data.innerModalState && (
                      <InnerSelectModal currentActiveTab={'신고내역'}>
                        <ModalInnerList
                          currentActiveTab={'신고내역'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('처리 중', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          처리 중
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'신고내역'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('처리완료', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          처리완료
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'신고내역'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('신고반려', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          신고반려
                        </ModalInnerList>
                      </InnerSelectModal>
                    )}
                    <InnerModalOpenButton
                      handleInnerModalToggle={() => {
                        handleInnerModalToggle(idx);
                      }}
                      currentActiveTab={'신고내역'}
                      currentValue={data.statusValue}
                      innerModalState={data.innerModalState}
                    />
                  </td>
                </TableBodyRow>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
      <PaginationWrapper>
        <Pagination
          pageCountData={tempPageData}
          activePageNumber={currentPageNumber}
          handlePageNumberClick={handlePageNumberClick}
        />
      </PaginationWrapper>
    </>
  );
}
