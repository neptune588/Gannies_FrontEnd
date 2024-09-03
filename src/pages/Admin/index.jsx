import { useEffect, useState } from 'react';

import AdminSideTab from '@/pages/Admin/AdminSideTab';
import ReeportHistory from '@/pages/Admin/ReportHistory';
import MemberManagement from '@/pages/Admin/MemberManagement';
import Pagination from '@/components/Pagination';
import ReportedReviewModal from '@/pages/Admin/ReportedReviewModal';
import UserBanModal from '@/pages/Admin/UserBanModal';

import { Container, ContentsWrapper, PageWrapper } from '@/pages/Admin/style';

import {
  adminTabMenuData,
  reportedHeaderColumns,
  reportedData,
  memberManagementHeaderColumns,
  memberManagementData,
} from '@/pages/Admin/data';

export default function Admin() {
  const [tabData] = useState(adminTabMenuData);

  const [currentActiveTabMenu, setCurrentActiveTabMenu] = useState(
    adminTabMenuData[0].content
  );
  const handleTabMenuClick = (content) => {
    setCurrentActiveTabMenu(content);
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

  useEffect(() => {
    //본격적으로 데이터 받으면 redux에 저장해서 편하게 구현
    if (currentActiveTabMenu === '신고내역') {
      setTableData(reportedData);
      setHeaderData(reportedHeaderColumns);
    } else if (currentActiveTabMenu === '회원관리') {
      setTableData(memberManagementData);
      setHeaderData(memberManagementHeaderColumns);
    }
  }, [currentActiveTabMenu]);

  return (
    <>
      {/* <ReportedReviewModal activeCategory={activeCategory} /> */}
      {/*       {<UserBanModal />} */}
      <Container>
        <AdminSideTab
          activeMenu={currentActiveTabMenu}
          handleTabMenuClick={handleTabMenuClick}
          tabMenuList={tabData}
        />
        <ContentsWrapper>
          {currentActiveTabMenu === '신고내역' && (
            <ReeportHistory
              currentActiveTab={currentActiveTabMenu}
              currenntActiveCategory={currentActiveCategory}
              headerColumns={headerData}
              tableData={tableData}
              handleCategoryChange={handleCategoryChange}
              handleInnerModalToggle={handleInnerModalToggle}
              handleStatusValueChange={handleStatusValueChange}
            />
          )}
          {currentActiveTabMenu === '회원관리' && (
            <MemberManagement
              currentActiveTab={currentActiveTabMenu}
              headerColumns={headerData}
              tableData={tableData}
              handleInnerModalToggle={handleInnerModalToggle}
              handleStatusValueChange={handleStatusValueChange}
            />
          )}

          <PageWrapper>
            <Pagination
              pageNumberData={tempData}
              activePageNumber={tempPageNumber}
              handlePageNumberClick={handlePageClick}
            />
          </PageWrapper>
        </ContentsWrapper>
      </Container>
    </>
  );
}
