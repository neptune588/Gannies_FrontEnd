import styled from 'styled-components';
import { primaryColorBoxStyle } from '@/styles/commonStyle';
import { InputBox } from '@/components/Input/style';

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  margin-top: 17px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray[10]};
  height: 87px;
  width: 1128px;
`;

export const SearchBarWrapper = styled.form`
  width: 744px;
  height: 50px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #C3C3C3;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  background-color: white;
  border-right: none;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Input = styled(InputBox)`
  width: 744px;
  height: 46px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-left: 23px;
`;


export const Button = styled.button`
  ${primaryColorBoxStyle};
  font-size: ${props => props.theme.typo.size.md};
  width: 90px;
  height: 50px;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;
`;