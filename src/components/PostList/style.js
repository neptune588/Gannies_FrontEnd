import styled from 'styled-components';
import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

export const Wrapper = styled.div`
  width: 1128px;
  height: 330px;
`;

export const PostWrapper = styled.div`
  display: flex;
  width: 1128px;
  height: 55px;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
`;

export const Category = styled.div`
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

export const Date = styled.span`
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.medium;
  }};  
`

export const DescriptionWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`

export const PostEye = styled(Eye)`
  margin-right: 8px;
`;

export const PostHeartInactive = styled(HeartInactive)`
  margin-right: 8px;
`;