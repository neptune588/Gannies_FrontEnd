import { useState } from 'react';

import AdminSideTab from '@/pages/Admin/AdminSideTab';
import ReeportHistory from '@/pages/Admin/ReportHistory';
import Pagination from '@/components/Pagination';
import ReportedReviewModal from '@/pages/Admin/ReportedReviewModal';

import { Container, ContentsWrapper, PageWrapper } from '@/pages/Admin/style';

import {
  adminTabMenuData,
  reportedHeaderColumns,
  reportedData,
} from '@/pages/Admin/data';

export default function Admin() {
  const [tabData] = useState(adminTabMenuData);

  const [activeTabMenu, setActiveTabMenu] = useState(
    adminTabMenuData[0].content
  );
  const handleTabMenuClick = (content) => {
    setActiveTabMenu(content);
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

  const handleProcessingModalControl = (listNumber) => {
    setTableData((prev) => {
      return prev.map((list, idx) => {
        return {
          ...list,
          processingModalState:
            idx === listNumber ? !list.processingModalState : false,
        };
      });
    });
  };
  const handleProcessingChange = (status, listNumber) => {
    setTableData((prev) => {
      return prev.map((list, idx) => {
        return {
          ...list,
          processingStatus: listNumber === idx ? status : list.processingStatus,
        };
      });
    });
  };

  const [headerColumns, setHeaderColumns] = useState(reportedHeaderColumns);
  const [tableData, setTableData] = useState(reportedData);

  return (
    <>
      {/* <ReportedReviewModal activeCategory={activeCategory} /> */}
      <Container>
        <AdminSideTab
          activeMenu={activeTabMenu}
          handleTabMenuClick={handleTabMenuClick}
          tabMenuList={tabData}
        />
        <ContentsWrapper>
          <ReeportHistory
            currentActiveTab={activeTabMenu}
            currenntActiveCategory={currentActiveCategory}
            headerColumns={headerColumns}
            tableData={tableData}
            handleCategoryChange={handleCategoryChange}
            handleProcessingModalControl={handleProcessingModalControl}
            handleProcessingChange={handleProcessingChange}
          />
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
