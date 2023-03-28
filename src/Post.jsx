import React from "react";
import Input from "./Input";
import Img from "./Userimg";
import DuoIcon from '@mui/icons-material/Duo';

function Post(props){

    return (
        <div className="Post">
            <div className="input-post">
            <Img />
            <Input 
           type="text"  
           placeholder="Whats on your mind? " 
           />
            </div>
            <div className="input-post">
              <DuoIcon />
            </div>
        </div>

     );
}
export default Post;