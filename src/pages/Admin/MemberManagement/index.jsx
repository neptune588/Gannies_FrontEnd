import { useState } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import Title from '@/pages/Admin/Title';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import SearchInput from '@/pages/Admin/SearchInput';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import InnerModalOpenButton from '@/pages/Admin/TableDesign/InnerModalOpenButton';
import InnerSelectModal from '@/pages/Admin/TableDesign/InnerSelectModal';
import ModalInnerList from '@/pages/Admin/TableDesign/InnerSelectModal/ModalInnerList';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';
import UserBanModal from '@/pages/Admin/UserBanModal';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  memberManagementHeaderColumns,
  memberManagementData,
} from '@/pages/Admin/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function MemberManagement() {
  const [tableData, setTableData] = useState(memberManagementData);
  const [headerColumns] = useState(memberManagementHeaderColumns);
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
      {/* <UserBanModal /> */}
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
            <TableHeaderRow currentActiveTab={'회원관리'}>
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
                <TableBodyRow key={uuid()} currentActiveTab={'회원관리'}>
                  <td>{data.nickname}</td>
                  <td>{data.email}</td>
                  <td>{data.postLength}</td>
                  <td>{data.commentLength}</td>
                  <td>{data.signUpDate}</td>
                  <td>
                    {data.innerModalState && (
                      <InnerSelectModal currentActiveTab={'회원관리'}>
                        <ModalInnerList
                          currentActiveTab={'회원관리'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('해당없음', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          해당없음
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'회원관리'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('정지', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          정지
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'회원관리'}
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
                      currentActiveTab={'회원관리'}
                      currentValue={data.statusValue}
                      innerModalState={data.innerModalState}
                      handleInnerModalToggle={() => {
                        handleInnerModalToggle(idx);
                      }}
                    />
                  </td>
                  <td>{data.managementReason}</td>
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
