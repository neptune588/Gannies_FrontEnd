import bottomArrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  ListHeader,
  ReportList,
  ProcessBox,
  ProcessModal,
  ProcessList,
} from '@/pages/Admin/ReportHistory/style';

export default function ReeportHistory({
  reportData,
  handleProcessingModalControl,
  handleProcessingChange,
}) {
  const tempformatting = (arr) => {
    arr[1] = String(arr[1]).padStart(2, '0');
    arr[2] = String(arr[2]).padStart(2, '0');

    return arr.join('-');
  };
  return (
    <>
      <ListHeader>
        <p>순서</p>
        <p>제목</p>
        <p>작성자</p>
        <p>신고일자</p>
        <p>신고자</p>
        <p>신고사유</p>
        <p>
          상태
          <img src={bottomArrow} alt='bottom-arrow' />
        </p>
      </ListHeader>
      <ul>
        {reportData?.map((list, idx) => {
          return (
            <ReportList key={list.key}>
              <p>{String(list.order).padStart(2, '0')}</p>
              <p>{list.contents}</p>
              <p>{list.contributor}</p>
              <p>{tempformatting(list.reportDate)}</p>
              <p>{list.complainant}</p>
              <p>{list.reportDetail}</p>
              <ProcessBox
                $processingStatus={list.processingStatus}
                $modalState={list.processingModalState}
                onClick={() => {
                  handleProcessingModalControl(idx);
                }}
              >
                {list.processingStatus}
                <img src={bottomArrow} alt='bottom-arrow' />
                {list.processingModalState && (
                  <ProcessModal>
                    <ProcessList
                      onClick={() => {
                        handleProcessingChange('처리 중', idx);
                      }}
                    >
                      처리 중
                    </ProcessList>
                    <ProcessList
                      onClick={() => {
                        handleProcessingChange('처리완료', idx);
                      }}
                    >
                      처리완료
                    </ProcessList>
                    <ProcessList
                      onClick={() => {
                        handleProcessingChange('신고반려', idx);
                      }}
                    >
                      신고반려
                    </ProcessList>
                  </ProcessModal>
                )}
              </ProcessBox>
            </ReportList>
          );
        })}
      </ul>
    </>
  );
}
