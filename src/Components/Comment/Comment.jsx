import React from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';
import './Comment.css';

const Comment = ({ comment, onLike, onDislike }) => {
  const handleLike = () => {
    onLike(comment.id);
  };

  const handleDislike = () => {
    onDislike(comment.id);
  };

  let likeStatus = 'inactive';
  if (comment.like) {
    likeStatus = 'like';
  } else if (comment.dislike) {
    likeStatus = 'dislike';
  }

  return (
    <div className="comment-container">
      <div className="comment-name">{comment.name}</div>
      <div className="comment-comment">{comment.comment}</div>
      <div className="comment-date">{comment.dateTime.toLocaleString()}</div> {/* Display the date and time */}
      <div className="comment-actions">
        <LikeDislike
          likeStatus={likeStatus}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
};

export default Comment;