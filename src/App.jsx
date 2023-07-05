import React, { useState } from "react";
import CommentsForm from "./Components/CommentsForm/CommentsForm";
import CommentsFeed from "./Components/CommentsFeed/CommentsFeed";
import './App.css';

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Meynard Pacris',
      comment: 'This is my attempt at updating the code and pushing it through!',
      dateTime: '7/05/2023, 3:48:12 PM',
      like: false,
      dislike: false,
    },

  ]);

  const addNewComment = (newComment) => {
    const newId = comments.length + 1;
    newComment.id = newId;
    newComment.dateTime = new Date(); 
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            like: !comment.like, 
            dislike: false, 
          };
        }
        return comment;
      })
    );
  };
  
  const handleDislike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            like: false, 
            dislike: !comment.dislike, 
          };
        }
        return comment;
      })
    );
  };

  return (
    <div className="container-all">
      <div className="container-top">
        <CommentsForm addNewComment={addNewComment} />
      </div>
      <div className="container-comments">
        <CommentsFeed
          parentComments={comments}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
}

export default App;