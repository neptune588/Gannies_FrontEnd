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

export default function ReeportHistory({
  currentActiveTab = '신고내역',
  currenntActiveCategory = '게시글',
  headerColumns,
  tableData,
  handleCategoryChange,
  handleInnerModalToggle,
  handleStatusValueChange,
}) {
  return (
    <>
      <TitleSection>
        <TitleCategory
          $currenntActiveCategory={currenntActiveCategory}
          $ownCategory={'게시글'}
          onClick={() => {
            handleCategoryChange('게시글');
          }}
        >
          게시글
        </TitleCategory>
        <TitleCategory
          $currenntActiveCategory={currenntActiveCategory}
          $ownCategory={'댓글'}
          onClick={() => {
            handleCategoryChange('댓글');
          }}
        >
          댓글
        </TitleCategory>
      </TitleSection>
      <ArrLengthSection>
        <ArrLengthView length={10} />
      </ArrLengthSection>
      <TableWrapper>
        <table>
          <thead>
            <TableHeaderRow currentActiveTab={currentActiveTab}>
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
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {String(data.order).padStart(2, '0')}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.contents}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.contributor}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.complainant}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.reportDate}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.reportDetail}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.innerModalState && (
                      <InnerSelectModal currentActiveTab={currentActiveTab}>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('처리 중', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          처리 중
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('처리완료', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          처리완료
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
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
