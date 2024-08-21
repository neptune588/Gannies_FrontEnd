import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: #efefef;
  height: 208px;
  width: 1128px;
  margin-top: 58px;
`;

export const ButtonWrapper = styled.div`
  width: 1078px;
  height: 84px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  margin-top: 46px;
  font-size: ${(props) => props.theme.typo.size.md};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px solid #d5d5d5;
  color: black;

  &:last-of-type {
    border-right: none;
  }

  &:focus {
    outline: none;
  }
`;

export const DetailsWrapper = styled.div`
  width: 1078px;
  margin-top: 34px;
  margin-bottom: 19px;
`;

export const Detail = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  border-right: 1px solid black;
  color: black;

  &:last-of-type {
    border-right: none;
  }
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

export const Copyright = styled.div`
  margin-top: 14px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
`;
