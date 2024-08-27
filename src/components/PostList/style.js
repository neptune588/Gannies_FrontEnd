import styled from 'styled-components';

export const PostWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  height: ${({ $pageName }) => {
    return $pageName === 'home' ? '55px' : '75px';
  }};
  padding-left: ${({ $pageName }) => {
    return $pageName === 'home' && '8px';
  }};
  padding-right: ${({ $pageName }) => {
    return $pageName === 'home' && '8px';
  }};
`;

export const PostLeftBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PostRightBox = styled(PostLeftBox)``;
export const PostNumber = styled.p`
  width: 70px;
  text-align: center;
  color: ${({ theme: { colors } }) => {
    return colors.gray['80'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ $pageName, theme: { typo } }) => {
    return $pageName === 'home' ? typo.size.xs : typo.size.tiny;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
  padding: 5px 13px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => {
    return colors.secondary;
  }};
  margin: 0px 20px 0px 2px;
`;

export const PostTitle = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  font-size: ${({ $pageName, theme: { typo } }) => {
    return $pageName === 'home' ? typo.size.md : typo.size.xs;
  }};
  font-weight: ${({ $pageName, theme: { typo } }) => {
    return $pageName === 'home' ? typo.weight.regular : typo.weight.medium;
  }};
  margin-left: ${({ $pageName }) => {
    return $pageName === 'home' && '18px';
  }};
`;

export const Date = styled.p`
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};
`;

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ $pageName }) => {
    return $pageName === 'home' ? '15px' : '15px';
  }};
`;

export const IconBox = styled.div`
  margin-right: ${({ $pageName }) => {
    return $pageName === 'my-page' && '20px';
  }};
`;

export const ScrapBox = styled.div`
  margin: ${({ $scrapClickState }) => {
    return $scrapClickState && '0 45px 0 15px';
  }};
`;
