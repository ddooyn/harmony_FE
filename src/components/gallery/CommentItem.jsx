import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import CommentMoreVert from './CommentMoreVert';

const CommentItem = ({ comment }) => {
  return (
    <Item>
      <div>
        <p>{comment.commenter}</p>
      </div>
      <p>{comment.content}</p>
      <small>{dayjs(comment.createdAt).format('YYYY년 M월 D일')}</small>
      <CommentMoreVert commentId={comment.id} />
    </Item>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentItem;

const Item = styled.li`
  position: relative;
  padding: 0 5px;
  font-size: 14px;
  word-break: break-all;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    p {
      font-weight: 600;
    }
  }
  small {
    display: block;
    margin-top: 8px;
    color: #797979;
    font-size: 10px;
  }
  .MuiIconButton-sizeMedium {
    top: 0;
    right: -10px !important;
  }
`;
