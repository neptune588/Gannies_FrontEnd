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
  const [tabData] = useState(adminTabMenuData);

  const [currentActiveTabMenu, setCurrentActiveTabMenu] = useState(
    adminTabMenuData[0].label
  );
  const handleTabMenuClick = (label) => {
    setCurrentActiveTabMenu(label);
  };

  const [currentActiveCategory, setCurrentActiveCategory] = useState('게시글');
  const handleCategoryChange = (content) => {
    setCurrentActiveCategory(content);
  };

  const [tempData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );
  const [tempPageNumber, setTempPageNumber] = useState(0);
  const handlePageClick = (idx) => {
    setTempPageNumber(idx);
  };

  const [headerData, setHeaderData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleInnerModalToggle = (listNumber) => {
    setTableData((prev) => {
      return prev.map((list, idx) => {
        return {
          ...list,
          innerModalState: idx === listNumber ? !list.innerModalState : false,
        };
      });
    });
  };
  const handleStatusValueChange = (status, listNumber) => {
    setTableData((prev) => {
      return prev.map((list, idx) => {
        return {
          ...list,
          statusValue: listNumber === idx ? status : list.statusValue,
        };
      });
    });
  };
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
