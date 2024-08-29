import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColorBoxStyle } from '@/styles/commonStyle/box';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;

  > img {
    position: absolute;
    top: 226px;
    width: 600px;
    z-index: -1;
  }

  > h2 {
    margin-top: 343px;
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.typo.size.h3};
    font-weight: ${(props) => props.theme.typo.weight.bold};
    margin-bottom: 59px;
  }

  > h4 {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.typo.size.md};
    font-weight: ${(props) => props.theme.typo.weight.medium};
    line-height: 24px;
  }
`;

export const Button = styled(Link)`
  ${primaryColorBoxStyle};
  width: 171px;
  height: 48px;
  margin-top: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.md;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.regular;
  }};
`;
