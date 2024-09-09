import uuid from 'react-uuid';

import PageNumber from '@/components/PageNumber';

import prevArrow from '@/assets/icons/arrows/chevron_left.svg';
import nextArrow from '@/assets/icons/arrows/chevron_right.svg';
import prev10PagesArrow from '@/assets/icons/arrows/double_chevron_lef.svg';
import next10PagesArrow from '@/assets/icons/arrows/double_chevron_right.svg';

import {
  ArrowBox,
  ArrowButton,
  PageNumberBox,
} from '@/components/Pagination/style';

export default function Pagination({
  pageCountData,
  activePageNumber = 0,
  handlePrevPageButtonClick = null,
  handlePrev10PageButtonClick = null,
  handleNextPageButtonClick = null,
  handleNext10PageButtonClick = null,
  handlePageNumberClick = null,
}) {
  return (
    <>
      <ArrowBox>
        <ArrowButton onClick={handlePrevPageButtonClick || null}>
          <img src={prevArrow} alt={'prev-page-button'} />
        </ArrowButton>
        <ArrowButton onClick={handlePrev10PageButtonClick || null}>
          <img src={prev10PagesArrow} alt={'prev-10pages-button'} />
        </ArrowButton>
      </ArrowBox>
      <PageNumberBox>
        {pageCountData?.map((_, idx) => {
          return (
            <PageNumber
              key={uuid()}
              myPageNumber={idx}
              activePageNumber={activePageNumber}
              handlePageNumberClick={() => {
                handlePageNumberClick(idx);
              }}
            />
          );
        })}
      </PageNumberBox>
      <ArrowBox>
        <ArrowButton onClick={handleNextPageButtonClick || null}>
          <img src={nextArrow} alt={'next-page-button'} />
        </ArrowButton>
        <ArrowButton onClick={handleNext10PageButtonClick || null}>
          <img src={next10PagesArrow} alt={'next-10pages-button'} />
        </ArrowButton>
      </ArrowBox>
    </>
  );
}
