import { useState } from 'react';

import AdminSideTab from '@/pages/Admin/AdminSideTab';
import ReeportHistory from '@/pages/Admin/ReportHistory';
import Pagination from '@/components/Pagination';
import ReportedReviewModal from '@/pages/Admin/ReportedReviewModal';

import {
  Container,
  ContentsWrapper,
  TitleCategorySection,
  TitleCategory,
  ListCount,
  ListWrapper,
  PageWrapper,
} from '@/pages/Admin/style';

import { adminTabMenuData, reportListTempData } from '@/pages/Admin/data';

export default function Admin() {
  const [tabData] = useState(adminTabMenuData);

  const [activeTabMenu, setActiveTabMenu] = useState(
    adminTabMenuData[0].content
  );
  const handleTabMenuClick = (content) => {
    setActiveTabMenu(content);
  };

  const [activeCategory, setActiveCategory] = useState('게시글');
  const handleCategoryClick = (content) => {
    setActiveCategory(content);
  };

  const [tempData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );
  const [tempPageNumber, setTempPageNumber] = useState(0);
  const handlePageClick = (idx) => {
    return () => {
      setTempPageNumber(idx);
    };
  };

  const [reportData, setReportData] = useState(reportListTempData);
  const handleProcessingModalControl = (listNumber) => {
    setReportData((prev) => {
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
    setReportData((prev) => {
      return prev.map((list, idx) => {
        return {
          ...list,
          processingStatus: listNumber === idx ? status : list.processingStatus,
        };
      });
    });
  };

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
          {activeTabMenu === '신고내역' && (
            <>
              <TitleCategorySection>
                <TitleCategory
                  $activeCategory={activeCategory}
                  $ownCategory={'게시글'}
                  onClick={() => {
                    handleCategoryClick('게시글');
                  }}
                >
                  게시글
                </TitleCategory>
                <TitleCategory
                  $activeCategory={activeCategory}
                  $ownCategory={'댓글'}
                  onClick={() => {
                    handleCategoryClick('댓글');
                  }}
                >
                  댓글
                </TitleCategory>
              </TitleCategorySection>
              <ListCount>총 n개</ListCount>
              <ListWrapper>
                <ReeportHistory
                  reportData={reportData}
                  handleProcessingModalControl={handleProcessingModalControl}
                  handleProcessingChange={handleProcessingChange}
                />
              </ListWrapper>
              <PageWrapper>
                <Pagination
                  pageNumberData={tempData}
                  activePageNumber={tempPageNumber}
                  handlePageNumberClick={handlePageClick}
                />
              </PageWrapper>
            </>
          )}
          {activeTabMenu === '신고내역' && (
            <>
              <ListCount>총 n개</ListCount>
              <ListWrapper>
                <ReeportHistory
                  reportData={reportData}
                  handleProcessingModalControl={handleProcessingModalControl}
                  handleProcessingChange={handleProcessingChange}
                />
              </ListWrapper>
              <PageWrapper>
                <Pagination
                  pageNumberData={tempData}
                  activePageNumber={tempPageNumber}
                  handlePageNumberClick={handlePageClick}
                />
              </PageWrapper>
            </>
          )}
        </ContentsWrapper>
      </Container>
    </>
  );
}
