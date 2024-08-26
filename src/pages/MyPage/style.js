import styled from 'styled-components';
import { defaultBorderBoxStyle } from '@/styles/commonStyle';

const Title = styled.h2`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
  margin: 70px 0 30px;
  padding-left: 10px;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

const SideTabMenuWrapper = styled.div`
  ${defaultBorderBoxStyle}
  width: 160px;
  height: 405px;
  padding: 25px 15px 65px;

  > h2 {
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.semiBold;
    }};
    padding-bottom: 10px;
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.gray['20'];
      }};
  }
`;

const MainContentsWrapper = styled.div`
  width: 795px;
  margin-left: 30px;

  h2 {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.h4;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.semiBold;
    }};
    padding-left: 10px;
    margin-bottom: 15px;
  }
`;

export { Title, ContentsContainer, SideTabMenuWrapper, MainContentsWrapper };
