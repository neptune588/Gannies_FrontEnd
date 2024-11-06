import styled from 'styled-components';

const Wrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  top: 10px;
  right: 10px;
  padding: 5px;
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['30'];
    }};
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  z-index: 10;
`;

const OptionList = styled.li`
  padding: 5px 15px;
  text-align: center;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.sm;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.secondary;
    }};
  }
`;

export default function OptionsList({ handleUploadFileDelete }) {
  return (
    <Wrapper>
      <OptionList onClick={handleUploadFileDelete}>파일삭제</OptionList>
    </Wrapper>
  );
}
