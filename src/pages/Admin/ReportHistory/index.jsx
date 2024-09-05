import { useState } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import TableBodyCell from '@/pages/Admin/TableDesign/TableBodyCell';
import InnerSelectModal from '@/pages/Admin/TableDesign/InnerSelectModal';
import ModalInnerList from '@/pages/Admin/TableDesign/InnerSelectModal/ModalInnerList';
import InnerModalOpenButton from '@/pages/Admin/TableDesign/InnerModalOpenButton';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import { TitleCategory } from '@/pages/Admin/ReportHistory/style';

import { reportedHeaderColumns, reportedData } from '@/pages/Admin/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function ReportHistory() {
  const [tableData, setTableData] = useState(reportedData);
  const [headerColumns, setHeaderColumns] = useState(reportedHeaderColumns);

  const { clickChangeState: currenntActiveCategory, handleClickChange } =
    useEventHandler({
      clickChangeDefaultValue: '게시글',
    });

  return (
    <>
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
                <TableBodyRow key={uuid()}>
                  <TableBodyCell currentActiveTab={'신고내역'}>
                    {String(data.order).padStart(2, '0')}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={'신고내역'}>
                    {data.contents}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={'신고내역'}>
                    {data.contributor}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={'신고내역'}>
                    {data.complainant}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={'신고내역'}>
                    {data.reportDate}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={'신고내역'}>
                    {data.reportDetail}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={'신고내역'}>
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
                      currentActiveTab={currentActiveTab}
                      currentValue={data.statusValue}
                      innerModalState={data.innerModalState}
                    />
                  </TableBodyCell>
                </TableBodyRow>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
    </>
  );
}
