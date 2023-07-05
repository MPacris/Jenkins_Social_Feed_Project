import React, {useState} from 'react';

const LikesDislikes = (props) => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const HandleLike = () => {
        if (isLiked) {
          setLikes(likes - 1);
          setIsLiked(false);
        } else {
          setLikes(likes + 1);
          setDislikes(0);
          setIsLiked(true);
        }
      };

      const HandleDislike = () => {
        if (isLiked) {
          setLikes(0);
          setIsLiked(false);
        } else {
          setDislikes(dislikes + 1);
          setLikes(0);
          setIsLiked(false);
        }
      };

    return ( 
        <div>
        <button onClick={HandleLike}>Like ({likes})</button>
        <button onClick={HandleDislike}>Dislike ({dislikes})</button>
            
        </div>
     );
}
 
export default LikesDislikes;