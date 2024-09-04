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
import TableBodyCell from '@/pages/Admin/TableDesign/TableBodyCell';

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

export default function PostManagement({
  currentActiveTab,
  headerColumns,
  tableData,
  handleDeleteSelectStateChange,
  handleDeleteSelectStateReset,
}) {
  const [deleteButtonActive, setDeleteButtonActive] = useState(false);

  const handleDeleteButtonActive = () => {
    setDeleteButtonActive(true);
  };

  const handleDeleteButtonInActive = () => {
    setDeleteButtonActive(false);
  };

  return (
    <>
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
            onClick={handleDeleteButtonActive}
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
                handleDeleteButtonInActive();
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
            <TableHeaderRow currentActiveTab={currentActiveTab}>
              {headerColumns?.map((data) => {
                return <th key={uuid()}>{data.header}</th>;
              })}
            </TableHeaderRow>
          </thead>
          <tbody>
            {tableData?.map((data, idx) => {
              return (
                <TableBodyRow key={uuid()}>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {String(data.order).padStart(2, '0')}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.category}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.postTitle}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.contributor}
                  </TableBodyCell>
                  <TableBodyCell currentActiveTab={currentActiveTab}>
                    {data.postCreatedDate}
                    {deleteButtonActive && (
                      <PostDeletetSelectButton
                        $isSelected={data.postDeleteSelectState}
                      >
                        <img src={checkThick} alt={'post-delete-check'} />
                      </PostDeletetSelectButton>
                    )}
                  </TableBodyCell>
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
    </>
  );
}
