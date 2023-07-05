import React, {useState} from 'react';
import './CommentsForm.css'


const CommentsForm = ({ addNewComment }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const newComment = {
        name: name,
        comment: comment,
        like: false,
        dislike: false,
      };
  
      addNewComment(newComment);
      setName('');
      setComment('');
    };
  
    return (
      <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-top-container'>
            <label className='name-label'>Name</label>
            <input
              className='name-box'
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}/>
          </div>

          <div className='form-bottom-container'>

            <label className='comment-label'>Comment</label>
            <input
              className='comment-box'
              type="text"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

   
            <button type="submit" className='form-button'>Create</button>


      </form>
    );
  };
  
  export default CommentsForm;