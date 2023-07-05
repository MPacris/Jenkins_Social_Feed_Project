import React from 'react';
import './LikeDislike.css';

const LikeDislike = ({ likeStatus, onLike, onDislike }) => {
  const handleLikeClick = () => {
    onLike();
  };

  const handleDislikeClick = () => {
    onDislike();
  };

  let likeButtonClass = 'like-button';
  let dislikeButtonClass = 'dislike-button';

  if (likeStatus === 'like') {
    likeButtonClass += ' like-active';
  } else if (likeStatus === 'dislike') {
    dislikeButtonClass += ' dislike-active';
  }

  return (
    <div className="button-container">
      <div className="button-img">
        <button className={likeButtonClass} onClick={handleLikeClick}>
          <i className="fas fa-thumbs-up"></i> Like
        </button>
      </div>
      <div>
        <button className={dislikeButtonClass} onClick={handleDislikeClick}>
          <i className="fas fa-thumbs-down"></i> Dislike
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;