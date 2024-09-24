import { useState } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import Title from '@/pages/Admin/Title';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import SearchInput from '@/pages/Admin/SearchInput';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';
import DeleteModal from '@/pages/Admin/DeleteModal';

import deleteDefault from '@/assets/icons/trush/trush_default.svg';
import deleteActive from '@/assets/icons/trush/trush_active.svg';
import deleteSelected from '@/assets/icons/trush/trush_selected.svg';
import checkThick from '@/assets/icons/check/check_thick.svg';

import {
  TableTopArea,
  PostDeleteButton,
  PostDeletetSelectButton,
  TableRowSelectWrapper,
} from '@/pages/Admin/PostManagement/style';

import {
  postManagementHeaderColumns,
  postManagementData,
} from '@/pages/Admin/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function PostManagement() {
  const [tableData, setTableData] = useState(postManagementData);
  const [headerColumns] = useState(postManagementHeaderColumns);
  const [tempPageData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  const {
    changeValue: currentPageNumber,
    handleChange: handlePageNumberClick,
  } = useEventHandler({
    changeDefaultValue: 0,
  });

  const { changeValue: deleteButtonActive, handleChange } = useEventHandler({
    changeDefaultValue: false,
  });

  const handleDeleteSelectStateChange = (listNumber) => {
    const changeFnc = (arr) => {
      return arr.map((list, idx) => {
        return {
          ...list,
          postDeleteSelectState:
            listNumber === idx
              ? !list.postDeleteSelectState
              : list.postDeleteSelectState,
        };
      });
    };
    setTableData((prev) => changeFnc(prev));
  };

  const handleDeleteSelectStateReset = () => {
    const resetFnc = (arr) => {
      return arr.map((list) => {
        return {
          ...list,
          postDeleteSelectState: false,
        };
      });
    };
    setTableData((prev) => resetFnc(prev));
  };

  const deleteSelectCalc = () => {
    return tableData.filter((list) => list.postDeleteSelectState).length;
  };

  return (
    <>
      {/* <DeleteModal deleteSelectCalc={deleteSelectCalc} /> */}
      <TitleSection>
        <Title>게시물 관리</Title>
      </TitleSection>
      <TableTopArea>
        <ArrLengthSection>
          <ArrLengthView length={tableData.length} />
          <SearchInput />
        </ArrLengthSection>
        <div>
          <PostDeleteButton
            onClick={() => {
              handleChange(true);
            }}
            $deleteButtonState={deleteButtonActive}
          >
            <img
              src={deleteButtonActive ? deleteSelected : deleteDefault}
              alt={'post-delete-button'}
            />
            삭제
          </PostDeleteButton>
          {deleteButtonActive && (
            <PostDeleteButton
              onClick={() => {
                handleChange(false);
                handleDeleteSelectStateReset();
              }}
            >
              취소
            </PostDeleteButton>
          )}
        </div>
      </TableTopArea>
      <TableWrapper>
        <table>
          <thead>
            <TableHeaderRow currentActiveTab={'게시물 관리'}>
              {headerColumns?.map((data) => {
                return <th key={uuid()}>{data.header}</th>;
              })}
            </TableHeaderRow>
          </thead>
          <tbody>
            {tableData?.map((data, idx) => {
              return (
                <TableBodyRow key={uuid()} currentActiveTab={'게시물 관리'}>
                  <td>{String(data.order).padStart(2, '0')}</td>
                  <td>{data.category}</td>
                  <td>{data.postTitle}</td>
                  <td>{data.contributor}</td>
                  <td>
                    {data.postCreatedDate}
                    {deleteButtonActive && (
                      <PostDeletetSelectButton
                        $isSelected={data.postDeleteSelectState}
                      >
                        <img src={checkThick} alt={'post-delete-check'} />
                      </PostDeletetSelectButton>
                    )}
                  </td>
                  {deleteButtonActive && (
                    <TableRowSelectWrapper
                      onClick={() => {
                        handleDeleteSelectStateChange(idx);
                      }}
                    />
                  )}
                </TableBodyRow>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
      <PaginationWrapper>
        <Pagination
          pageCountData={tempPageData}
          activePageNumber={currentPageNumber}
          handlePageNumberClick={handlePageNumberClick}
        />
      </PaginationWrapper>
    </>
  );
}
