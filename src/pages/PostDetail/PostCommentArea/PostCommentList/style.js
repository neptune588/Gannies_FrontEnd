import styled from 'styled-components';

import {
  small_400,
  small_600,
  xsmall_500,
} from '@/styles/commonStyle/localTextStyle';

const CommentListWrapper = styled.li`
  display: flex;
  margin: 0 20px;
  padding: 0 30px;
  border-top: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['40'];
    }};
  background-color: ${({ $isReplyComment, theme: { colors } }) => {
    return $isReplyComment && colors.secondary;
  }};
`;

const CommenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 16px;

  > p {
    ${small_600}
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
  }
`;

const CommentContent = styled.p`
  ${small_400}
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  line-height: 25px;
  margin-bottom: 30px;
`;

const CommentMetricBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CommentCreateDateView = styled.p`
  ${xsmall_500}
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  margin-left: 7px;
`;

const ReplyCommentCreateButton = styled.div`
  ${xsmall_500}
  color: ${({ $isReplyCreateOpen, theme: { colors } }) => {
    return $isReplyCreateOpen ? colors.gray['60'] : colors.primary;
  }};
  user-select: none;
  cursor: pointer;
  margin-left: 15px;
`;

const ReplyCommentBox = styled.div`
  margin: 0 20px;
  padding: 30px;
  background-color: ${({ $isReplyComment, theme: { colors } }) => {
    return $isReplyComment && colors.secondary;
  }};
`;

const ReplyIcon = styled.div`
  margin: 20px 27px 0 0;
`;

export {
  CommentListWrapper,
  CommenterBox,
  CommentContent,
  CommentMetricBox,
  CommentCreateDateView,
  ReplyCommentCreateButton,
  ReplyCommentBox,
  ReplyIcon,
};
