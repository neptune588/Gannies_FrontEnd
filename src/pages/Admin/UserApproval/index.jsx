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
import UserRejectReasonModal from '@/pages/Admin/Modals/UserRejectReasonModal';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  PrimaryColor,
  OptionListBox,
  OptionList,
  OptionListOpenButton,
} from '@/pages/Admin/UserApproval/style';

import { userApprovalHeaderColumns } from '@/pages/Admin/data';

import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import useModalsControl from '@/hooks/useModalsControl';
import useEventHandler from '@/hooks/useEventHandler';

import { setIsUserRejectReasonModal } from '@/store/modalsControl';

import { getPendingUsers, signUpApprove, signUpReject } from '@/api/adminApi';

import { communityPostMaxLimit, pageViewLimit } from '@/utils/itemLimit';
import { formatDateToPost } from '@/utils/dateFormatting';
import { questionAlert, confirmAlert, errorAlert } from '@/utils/sweetAlert';
import { isOnlyWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';

export default function UserApproval() {
  const [headerColumns] = useState(userApprovalHeaderColumns);

  const {
    items: approvalPendingUsers,
    totalItems,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    setItems: setApprovalPendingUsers,
    getDataAndSetPageNumbers: getApprovalPendingUsersAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit,
  });
  const { handleModalOpen, handleModalClose, isUserRejectReasonModal } =
    useModalsControl();
  const { changeValue: rejectReason, handleChange: handleRejectReasonChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const [query, setQuery] = useState({
    page: currentPageNumber,
    limit: communityPostMaxLimit,
  });
  const [userRejectReasonModalProps, setUserRejectReasonModalProps] = useState(
    {}
  );
  const [isSubmit, setIsSubmit] = useState(false);

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

  const handleRejectModalClose = () => {
    handleRejectReasonChange('');
    handleModalClose({ modalDispatch: setIsUserRejectReasonModal });
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

  const handleUserReject = async (e, userId) => {
    e.preventDefault();

    if (isSubmit) {
      return;
    }

    if (isOnlyWhiteSpaceCheck(rejectReason)) {
      errorAlert('거절 사유를 입력 해주세요!');
      return;
    }

    try {
      setIsSubmit(true);
      await signUpReject({
        userId,
        rejectedReason: rejectReason,
      });
      confirmAlert('해당 회원의 가입을 거절 했습니다!');
      handleRejectModalClose();
      setQuery({ page: currentPageNumber, limit: communityPostMaxLimit });
      setIsSubmit(false);
      //isSumbit자체는 부모 쪽에서 정의됐으므로 submit 초기화 해줘야함.
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
      {isUserRejectReasonModal && (
        <UserRejectReasonModal
          userRejectReasonModalProps={userRejectReasonModalProps}
          rejectReason={rejectReason}
          handleRejectReasonChange={handleRejectReasonChange}
          handleModalClose={handleRejectModalClose}
          handleUserReject={handleUserReject}
        />
      )}
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
                                //handleUserReject(user.userId);
                                setUserRejectReasonModalProps({
                                  userId: user.userId,
                                  userNickname: user.nickname,
                                  userEmail: user.email,
                                  userStudentStatus:
                                    user.studentStatus === 'current_student'
                                      ? '재학생'
                                      : '졸업생',
                                  userSignUpDate: formatDateToPost(
                                    user.createdAt
                                  ),
                                });
                                handleModalOpen({
                                  modalDispatch: setIsUserRejectReasonModal,
                                });
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
