import uuid from 'react-uuid';

import HeaderRow from '@/components/HeaderRow';

import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  TitleCategorySection,
  TitleCategory,
  ListWrapper,
  DataList,
  DataCell,
  ProcessBox,
  Arrow,
  ProcessModal,
  ProcessList,
  ListLength,
} from '@/pages/Admin/ReportHistory/style';

export default function ReeportHistory({
  currentActiveTab = '신고내역',
  currenntActiveCategory = '게시글',
  headerColumns,
  tableData,
  handleCategoryChange,
  handleProcessingModalControl,
  handleProcessingChange,
}) {
  return (
    <>
      {currentActiveTab === '신고내역' && (
        <TitleCategorySection>
          <TitleCategory
            $currenntActiveCategory={currenntActiveCategory}
            $ownCategory={'게시글'}
            onClick={() => {
              handleCategoryChange('게시글');
            }}
          >
            게시글
          </TitleCategory>
          <TitleCategory
            $currenntActiveCategory={currenntActiveCategory}
            $ownCategory={'댓글'}
            onClick={() => {
              handleCategoryChange('댓글');
            }}
          >
            댓글
          </TitleCategory>
        </TitleCategorySection>
      )}
      <ListLength>총 n개</ListLength>
      <ListWrapper>
        <table>
          <thead>
            <HeaderRow currentActiveTab={currentActiveTab}>
              {headerColumns.map((data, idx) => {
                return (
                  <th key={uuid()}>
                    {data.header}
                    {idx === headerColumns.length - 1 && (
                      <img src={bottomArrow} alt='bottom-arrow' />
                    )}
                  </th>
                );
              })}
            </HeaderRow>
          </thead>
          <tbody>
            {tableData?.map((data, idx) => {
              return (
                <DataList key={uuid()}>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {String(data.order).padStart(2, '0')}
                  </DataCell>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {data.contents}
                  </DataCell>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {data.contributor}
                  </DataCell>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {data.reportDate}
                  </DataCell>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {data.complainant}
                  </DataCell>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {data.reportDetail}
                  </DataCell>
                  <DataCell $currentActiveTab={currentActiveTab}>
                    {data.processingModalState && (
                      <ProcessModal>
                        <ProcessList
                          onClick={() => {
                            handleProcessingChange('처리 중', idx);
                            handleProcessingModalControl(idx);
                          }}
                        >
                          처리 중
                        </ProcessList>
                        <ProcessList
                          onClick={() => {
                            handleProcessingChange('처리완료', idx);
                            handleProcessingModalControl(idx);
                          }}
                        >
                          처리완료
                        </ProcessList>
                        <ProcessList
                          onClick={() => {
                            handleProcessingChange('신고반려', idx);
                            handleProcessingModalControl(idx);
                          }}
                        >
                          신고반려
                        </ProcessList>
                      </ProcessModal>
                    )}
                    <ProcessBox
                      $processingStatus={data.processingStatus}
                      $modalState={data.processingModalState}
                      onClick={() => {
                        handleProcessingModalControl(idx);
                      }}
                    >
                      {data.processingStatus}
                      <Arrow
                        $modalState={data.processingModalState}
                        src={bottomArrow}
                        alt='bottom-arrow'
                      />
                    </ProcessBox>
                  </DataCell>
                </DataList>
              );
            })}
          </tbody>
        </table>
      </ListWrapper>
    </>
  );
}
