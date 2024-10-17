import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import Title from '@/pages/Admin/Title';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  PrimaryColor,
  OptionListBox,
  OptionList,
  OptionListOpenButton,
} from '@/pages/Admin/UserApproval/style';

import { userApprovalHeaderColumns } from '@/pages/Admin/data';

import useEventHandler from '@/hooks/useEventHandler';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';

import { getPendingUsers, signUpApprove, signUpReject } from '@/api/adminApi';

import { communityPostMaxLimit, pageViewLimit } from '@/utils/itemLimit';
import { formatDateToPost } from '@/utils/dateFormatting';
import { questionAlert, confirmAlert } from '@/utils/sweetAlert';

export default function UserApproval() {
  const [headerColumns] = useState(userApprovalHeaderColumns);

  const {
    items: approvalPendingUsers,
    totalItems,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    setItems: setApprovalPendingUsers,
    getDataAndSetPageNumbers: getApprovalPendingUsersAndSetPageNumbers,
    setCurrentPageNumber,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit,
  });

  const [query, setQuery] = useState({});

  const handleOptionListToggle = (listNumber) => {
    const toggleFnc = (arr) => {
      return arr.map((list, idx) => {
        return {
          ...list,
          isOptionListOpen: idx === listNumber ? !list.isOptionListOpen : false,
        };
      });
    };
    setApprovalPendingUsers((prev) => toggleFnc(prev));
  };

  const handleUserApprove = async (userId) => {
    const question = await questionAlert({
      title: '회원 승인',
      text: '해당 회원의 가입을 승인 하시겠습니까?',
    });

    try {
      if (question) {
        await signUpApprove({ userId });
        confirmAlert('해당 회원의 가입을 승인 했습니다!');
        setQuery({ page: currentPageNumber, limit: communityPostMaxLimit });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserReject = async (userId) => {
    const question = await questionAlert({
      title: '회원 거절',
      text: '해당 회원의 가입을 거절 하시겠습니까?',
    });

    try {
      if (question) {
        await signUpReject({
          userId,
          rejectedReason:
            '업로드한 인증서류 파일이 졸업증명서 혹은 재학증명서가 아닙니다. 확인 부탁드립니다.',
        });
        confirmAlert('해당 회원의 가입을 거절 했습니다!');
        setQuery({ page: currentPageNumber, limit: communityPostMaxLimit });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    setQuery({
      page: currentPageNumber,
      limit: communityPostMaxLimit,
    });
  }, [currentPageNumber]);

  useEffect(() => {
    (async () => {
      await getApprovalPendingUsersAndSetPageNumbers(() => {
        return getPendingUsers(query);
      });
    })();
  }, [query]);

  return (
    <>
      <TitleSection>
        <Title>회원 가입승인</Title>
      </TitleSection>
      <ArrLengthSection>
        <ArrLengthView length={totalItems} />
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
            {approvalPendingUsers?.length > 0
              ? approvalPendingUsers?.map((user, idx) => {
                  return (
                    <TableBodyRow
                      key={uuid()}
                      currentActiveTab={'회원 가입승인'}
                    >
                      <td>{String(idx + 1).padStart(2, '0')}</td>
                      <td>{user.nickname}</td>
                      <td>{user.email}</td>
                      <td>{formatDateToPost(user.createdAt)}</td>
                      <td>
                        {user.studentStatus === 'current_student'
                          ? '재학생'
                          : '졸업생'}
                      </td>
                      <td>
                        <PrimaryColor
                          href={user.certificationDocumentUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {user.certificationDocumentUrl}
                        </PrimaryColor>
                      </td>
                      <td>
                        {user.isOptionListOpen && (
                          <OptionListBox>
                            <OptionList
                              $order='승인완료'
                              onClick={() => {
                                handleUserApprove(user.userId);
                                handleOptionListToggle(idx);
                              }}
                            >
                              승인완료
                            </OptionList>
                            <OptionList
                              $order='승인거절'
                              onClick={() => {
                                handleUserReject(user.userId);
                                handleOptionListToggle(idx);
                              }}
                            >
                              승인거절
                            </OptionList>
                          </OptionListBox>
                        )}
                        <OptionListOpenButton
                          $modalState={user.isOptionListOpen}
                          onClick={() => {
                            handleOptionListToggle(idx);
                          }}
                        >
                          승인대기
                          <img src={arrow} alt='bottom-arrow' />
                        </OptionListOpenButton>
                      </td>
                    </TableBodyRow>
                  );
                })
              : ''}
          </tbody>
        </table>
      </TableWrapper>
      <PaginationWrapper>
        {pageNumbers?.length > 0 && (
          <Pagination
            pageNumbers={pageNumbers}
            currentPageNumber={currentPageNumber}
            handlePageNumberClick={handlePageNumberClick}
            handlePrevPageClick={handlePrevPageClick}
            handleNextPageClick={handleNextPageClick}
          />
        )}
      </PaginationWrapper>
    </>
  );
}
