import React, { useState } from "react";
import Input from "./Input";
import Img from "./Userimg";
import DuoIcon from '@mui/icons-material/Duo';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Post(){
  
 //  const getTime = new Date().toLocaleTimeString();
  const [postStatus,setPost] = useState("");
  const [userInput,setInput] = useState([]);

  function handleChange(event){
    const x = event.target.value;
    setPost(x);
  }

  function handleClick(event){
     setInput((preValue) =>{
      return [...preValue,postStatus]
     });
     setPost("");
  }
  function PhotoUp(){
    
  }

    return (
        <div className="Post">
            <div className="input-post">
            <Img />
            <input
            onChange={handleChange}
            type="text"  
            placeholder="Whats on your mind? " 
            className="head-search" 
            value={postStatus}
           /> 
           <button onClick={handleClick} className="btn btn-secondary">Post</button>          
            </div>
            <div className="input-post-2">
              <DuoIcon className="DuoIcon" />
              <PhotoSizeSelectActualIcon
               className="ImgIcon"
                onClick={PhotoUp}
                />
              <EmojiEmotionsIcon  className="FeelIcon"/>
            </div>
            {userInput.map((Status)=>
            (
            <div className="postArea">
             <h6>{Status}</h6>
            </div>)

           )}
           

        </div>

     );
}
export default Post;