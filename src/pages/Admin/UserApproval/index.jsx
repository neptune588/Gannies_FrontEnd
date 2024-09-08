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

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import { PrimaryColor } from '@/pages/Admin/UserApproval/style';

import {
  userApprovalHeaderColumns,
  userApprovalData,
} from '@/pages/Admin/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function UserApproval() {
  const [tableData, setTableData] = useState(userApprovalData);
  const [headerColumns] = useState(userApprovalHeaderColumns);
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
            <TableHeaderRow currentActiveTab={'회원 가입승인'}>
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
                <TableBodyRow key={uuid()} currentActiveTab={'회원 가입승인'}>
                  <td>{data.nickname}</td>
                  <td>{data.email}</td>
                  <td>{data.signUpDate}</td>
                  <td>{data.enrollmentStatus}</td>
                  <td>
                    <PrimaryColor>{data.attachedFile}</PrimaryColor>
                  </td>
                  <td>
                    {data.innerModalState && (
                      <InnerSelectModal currentActiveTab={'회원 가입승인'}>
                        <ModalInnerList
                          currentActiveTab={'회원 가입승인'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('승인대기', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          승인대기
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'회원 가입승인'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('승인완료', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          승인완료
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'회원 가입승인'}
                          handleStatusValueChange={() => {
                            handleStatusValueChange('승인거절', idx);
                            handleInnerModalToggle(idx);
                          }}
                        >
                          승인거절
                        </ModalInnerList>
                      </InnerSelectModal>
                    )}
                    <InnerModalOpenButton
                      currentActiveTab={'회원 가입승인'}
                      currentValue={data.statusValue}
                      handleInnerModalToggle={() => {
                        handleInnerModalToggle(idx);
                      }}
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
