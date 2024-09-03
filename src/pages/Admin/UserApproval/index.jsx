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

import { PrimaryColor } from '@/pages/Admin/UserApproval/style';

export default function UserApproval({
  currentActiveTab,
  headerColumns,
  tableData,
  handleInnerModalToggle,
  handleStatusValueChange,
}) {
  return (
    <>
      <TitleSection>
        <Title>회원 가입승인</Title>
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
                    {data.nickname}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.email}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.signUpDate}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.enrollmentStatus}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    <PrimaryColor>{data.attachedFile}</PrimaryColor>
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.innerModalState && (
                      <InnerSelectModal currentActiveTab={currentActiveTab}>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('승인대기', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          승인대기
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('승인완료', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          승인완료
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={currentActiveTab}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('승인거절', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          승인거절
                        </ModalInnerList>
                      </InnerSelectModal>
                    )}
                    {
                      <InnerModalOpenButton
                        currentActiveTab={currentActiveTab}
                        currentValue={data.statusValue}
                        handleInnerModalToggle={() => {
                          handleInnerModalToggle(idx);
                        }}
                        innerModalState={data.innerModalState}
                      />
                    }
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
