import { useEffect, useState } from 'react';

import AdminSideTab from '@/pages/Admin/AdminSideTab';
import Pagination from '@/components/Pagination';

import { Container, ContentsWrapper, PageWrapper } from '@/pages/Admin/style';

import {
  adminTabMenuData,
  reportedHeaderColumns,
  reportedData,
  memberManagementHeaderColumns,
  memberManagementData,
  userApprovalHeaderColumns,
  userApprovalData,
  postManagementHeaderColumns,
  postManagementData,
} from '@/pages/Admin/data';

export default function Admin() {
  //리팩토링떄 커스텀 훅 만들어서 분리
  const handleDeleteSelectStateChange = (listNumber) => {
    setTableData((prev) => {
      return prev.map((list, idx) => {
        return {
          ...list,
          postDeleteSelectState:
            listNumber === idx
              ? !list.postDeleteSelectState
              : list.postDeleteSelectState,
        };
      });
    });
  };
  const handleDeleteSelectStateReset = () => {
    setTableData((prev) => {
      return prev.map((list) => {
        return {
          ...list,
          postDeleteSelectState: false,
        };
      });
    });
  };
  const deleteSelectCalc = () => {
    return tableData.filter((list) => list.postDeleteSelectState).length;
  };

  return (
    <>
      {/* <ReportedReviewModal activeCategory={activeCategory} /> */}
      {/*       {<UserBanModal />} */}
      {/*       <DeleteModal deleteSelectCalc={deleteSelectCalc} /> */}
    </>
  );
}
