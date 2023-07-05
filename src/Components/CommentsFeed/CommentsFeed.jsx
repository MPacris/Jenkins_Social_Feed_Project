import React from 'react';
import Comment from '../Comment/Comment';

const CommentsFeed = ({ parentComments, onLike, onDislike }) => {
  return (
    <div>
      {parentComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onLike={onLike}
          onDislike={onDislike}
        />
      ))}
    </div>
  );
};

export default CommentsFeed;