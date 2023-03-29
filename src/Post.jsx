import React, { useState } from "react";
import Input from "./Input";
import Img from "./Userimg";
import DuoIcon from '@mui/icons-material/Duo';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Post(){
  
 //  const getTime = new Date().toLocaleTimeString();
  const [postStatus,setPost] = useState("");
  const [takeInput,setInput] = useState([]);

  function handleChange(event){
    const x = event.target.value;
    setPost(x);
  }

  function handleClick(event){
     setInput((preValue) =>{
      return [...preValue,postStatus]
     })
  }

    return (
        <div className="Post">
            <div className="input-post">
            <Img />
            <Input
            onchange={handleChange}
            name="title"
           type="text"  
           placeholder="Whats on your mind? " 
           value={postStatus}
           /> 
           <button onClick={handleClick} className="btn btn-secondary">Post</button>          
            </div>
            <div className="input-post-2">
              <DuoIcon />
              <PhotoSizeSelectActualIcon />
              <EmojiEmotionsIcon />
            </div>

         <div className="postArea">
           {takeInput.map((status)=>
            (<h5>{status}</h5>)
           )}
         </div>

        </div>

     );
}
export default Post;