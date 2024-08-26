import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 52px;
  width: 1128px;
`;

export const UpperWrapper = styled.div`
  width: 1128px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 6px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[60]};
`;

export const UpperTitle = styled.span`
  color: ${props => props.theme.colors.gray[90]};  
  font-size: ${props => props.theme.typo.size.h4};
  font-weight: ${props => props.theme.typo.weight.semiBold};
`;

export const ShowMoreButton = styled.button`
  font-size: ${props => props.theme.typo.size.sm};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  height: 28px;
  color: ${props => props.theme.colors.gray[60]};
  cursor: pointer;
  border: none;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const ShowMoreButtonIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 6px;
`;

export const LowerWrapper = styled.div`
  width: 1128px;
  height: 330px;
  border-top: 1px solid ${props => props.theme.colors.gray[60]};
`;

export const PostWrapper = styled.div`
  display: flex;
  width: 1128px;
  height: 55px;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
`;

export const CategoryButton = styled.button`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};
  height: 27px;
  color: ${props => props.theme.colors.primary};
  border: none;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const PostTitle = styled.span`
  color: ${props => props.theme.colors.gray[100]};  
  font-size: ${props => props.theme.typo.size.md};
  font-weight: ${props => props.theme.typo.weight.regular};
  margin-left: 18px;
  margin-right: auto;  
`;

export const Comment = styled.span`
  color: ${props => props.theme.colors.highlight};  
  font-weight: ${props => props.theme.typo.weight.semiBold};
`;

export const LowerIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const LowerDescription = styled.span`
  color: ${props => props.theme.colors.gray[60]};  
  font-size: ${props => props.theme.typo.size.sm};
  font-weight: ${props => props.theme.typo.weight.regular};
`

export const LowerDescriptionWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`