import React, { useState } from "react";
import Input from "./Input";
import Img from "./Userimg";
import DuoIcon from '@mui/icons-material/Duo';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Post(){
  
 //  const getTime = new Date().toLocaleTimeString();
  const [postStatus,setPost] = useState("");
  const [userInput,setInput] = useState([]); // here is an array for collected values
   
  const [Upload,setUpload] = useState();

  function handleChange(event){
    const x = event.target.value; //retrieve the value from input
    setPost(x);  // and pass it to the value of postStatus
  }

  function handleClick(event){
    setInput((preValue) =>{ //pass the previous value to the userInput 
      return [...preValue,postStatus] //used spred operator for collecting values from input and insert as an array index 
     });
     setPost(""); 
  }

  function handleInput(event){
    setUpload(event.target.files[0]);
  }
   function changeInput(){
    setUpload(null);
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
             <input  className="input-display" type="file" onChange={handleInput}  /> 
              <EmojiEmotionsIcon  className="FeelIcon"/>
            </div>

            {Upload && (
           <div className="below-post"> 
              <img alt="" width={"350px"}  src={URL.createObjectURL(Upload)} />

             <button className="btn-postImg" onClick={changeInput} > Delete </button> 
             </div>
            )}

            {userInput.map((Status)=> // mapping through the userInput(all of array indexes) and given each element in postArea div
            (
            <div className="postArea">
             <h6>{Status}</h6>
             <p className="Ptag"> { new Date().toLocaleTimeString()} </p>  
            </div>)

           )}
           

        </div>

     );
}
export default Post;

// <PhotoSizeSelectActualIcon className="ImgIcon"  />
