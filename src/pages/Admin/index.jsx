import { useState } from 'react';

import AdminSideTab from '@/pages/Admin/AdminSideTab';
import PageControlArrow from '@/components/PageControlArrow';
import PageNumber from '@/components/PageNumber';
import ReeportHistory from '@/pages/Admin/ReportHistory';

import prevArrow from '@/assets/icons/arrows/chevron_left.svg';
import nextArrow from '@/assets/icons/arrows/chevron_right.svg';
import prev10PagesArrow from '@/assets/icons/arrows/double_chevron_lef.svg';
import next10PagesArrow from '@/assets/icons/arrows/double_chevron_right.svg';

import {
  Container,
  ContentsWrapper,
  TitleCategorySection,
  TitleCategory,
  ListCount,
  ListWrapper,
  PageWrapper,
  ArrowBox,
  PageNumberBox,
} from '@/pages/Admin/style';

import { adminTabMenuData, reportListTempData } from '@/pages/Admin/data';

export default function Admin() {
  const [tabData] = useState(adminTabMenuData);

  const [activeMenu, setActiveMenu] = useState(adminTabMenuData[0].content);
  const handleTabMenuClick = (content) => {
    setActiveMenu(content);
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
    <Container>
      <AdminSideTab
        activeMenu={activeMenu}
        handleTabMenuClick={handleTabMenuClick}
        tabMenuList={tabData}
      />
      <ContentsWrapper>
        <TitleCategorySection>
          {activeMenu === '신고내역' && (
            <>
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
            </>
          )}
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
          <ArrowBox>
            <PageControlArrow arrowImg={prevArrow} alt={'prev-button'} />
            <PageControlArrow
              arrowImg={prev10PagesArrow}
              alt={'prev-10pages-button'}
            />
          </ArrowBox>
          <PageNumberBox>
            {tempData.map((item, idx) => {
              return (
                <PageNumber
                  key={item + 'pageNumber'}
                  myNumber={idx}
                  activeNumber={tempPageNumber}
                  onClick={handlePageClick(idx)}
                />
              );
            })}
          </PageNumberBox>
          <ArrowBox>
            <PageControlArrow arrowImg={nextArrow} alt={'next-button'} />
            <PageControlArrow
              arrowImg={next10PagesArrow}
              alt={'next-10pages-button'}
            />
          </ArrowBox>
        </PageWrapper>
      </ContentsWrapper>
    </Container>
  );
}
