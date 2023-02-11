import styled from 'styled-components';

export const CommentsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 100px;
`;

export const CommentItem = styled.li`
  display: flex;
  gap: 12px;

  .authorThumb {
    contain: strict;
    height: 40px;
    width: 40px;
    border-radius: 8px;
  }

  .authorAvatar {
    width: 100%;
    height: auto;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    background-color: white;
  }

  .authorName {
    font-weight: 600;
    font-size: 1rem;
  }

  .created {
    font-size: 0.9rem;
    color: #919191;
  }

  .text {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .replyBtn {
    padding: 4px 8px;
    font-size: 0.9rem;
    color: #919191;
    background: none;
    border: none;

    &:hover {
      background-color: #e7e7e7;
      color: #212121;
    }
  }

  .ml {
    margin-left: 20px;
  }
`;
