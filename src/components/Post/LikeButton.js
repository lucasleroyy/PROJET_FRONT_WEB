import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; // style du popup
import { useDispatch } from "react-redux";
 import { likePost, unlikePost } from "../../actions/post.actions";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
 const uid = useContext(UidContext);
 const dispatch = useDispatch();

 const like = () => {
    dispatch(likePost(post._id, uid));
   setLiked(true);
  };

  const unlike = () => {
   dispatch(unlikePost(post._id, uid));
    setLiked(false);
  };

 useEffect(() => { 
   if (post.likers.includes(uid)) {
     setLiked(true); 
    } else {
      setLiked(false);
    }
  }, [uid, post.likers]);

  return (
    <div className="like-container">
      {uid === null ? (
        <div>Connectez-vous pour ajouter un pinceau !</div>
      ) : (
        <>
          {liked === false ? (
            <img src="./img/icons/heart.svg" onClick={like} alt="like" />
          ) : (
            <img src="./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
          )}
        </>
      )}
      <span>{post.likers.length}</span>
    </div>
  ); 
  
 };

export default LikeButton;
