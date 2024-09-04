import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import Title from '@/pages/Admin/Title';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import SearchInput from '@/pages/Admin/SearchInput';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import TableBodyCell from '@/pages/Admin/TableDesign/TableBodyCell';
import InnerModalOpenButton from '@/pages/Admin/TableDesign/InnerModalOpenButton';
import InnerSelectModal from '@/pages/Admin/TableDesign/InnerSelectModal';
import ModalInnerList from '@/pages/Admin/TableDesign/InnerSelectModal/ModalInnerList';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

export default function MemberManagement({
  currentActiveTab = '회원 관리',
  headerColumns,
  tableData,
  handleInnerModalToggle,
  handleStatusValueChange,
}) {
  return (
    <>
      <TitleSection>
        <Title>회원관리</Title>
      </TitleSection>
      <ArrLengthSection>
        <ArrLengthView length={tableData.length} />
        <SearchInput />
      </ArrLengthSection>
      <TableWrapper>
        <table>
          <thead>
            <TableHeaderRow currentActiveTab={currentActiveTab}>
              {headerColumns?.map((data, idx) => {
                return (
                  <th key={uuid()}>
                    {data.header}
                    {idx === 5 && <img src={arrow} alt='bottom-arrow' />}
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
                    {data.nickname}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.email}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.postLength}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.commentLength}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.signUpDate}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.innerModalState && (
                      <InnerSelectModal currentActiveTab={currentActiveTab}>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('해당없음', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          해당없음
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('정지', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          정지
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('탈퇴', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          탈퇴
                        </ModalInnerList>
                      </InnerSelectModal>
                    )}
                    <InnerModalOpenButton
                      currentActiveTab={currentActiveTab}
                      currentValue={data.statusValue}
                      innerModalState={data.innerModalState}
                      handleInnerModalToggle={() => {
                        handleInnerModalToggle(idx);
                      }}
                    />
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.managementReason}
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
