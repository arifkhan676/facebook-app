import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GroupIcon from '@mui/icons-material/Group';
import Diversity1Icon from '@mui/icons-material/Diversity1';

function Row(props){
    return(
     <div>
        <div className='div1'>
             <div className="equal">
            <HomeIcon/>
            <a className='atag'  href="index.js"> <h5>{props.head}</h5> </a>
            </div>
            <div className="equal">
            <PersonIcon/>
            <a className='atag' href="index.js"> <h5>{props.profile}</h5> </a>
            </div>
        </div>

        <div className='div1'>
            <div className="equal">
            <SaveAltIcon/>
            <a className='atag' href="index.js"> <h5>{props.saved}</h5> </a>
            </div>
            <div className="equal">
            <GroupIcon/>
            <a className='atag' href="index.js"> <h5>{props.group}</h5> </a>
            </div>
            <div className="equal">
            <Diversity1Icon/>
            <a className='atag' href="index.js"> <h5>{props.friends}</h5> </a>
            </div>
            <div className="equal">
            <SaveAltIcon/>
            <a className='atag' href="index.js"> <h5>{props.mostRecent}</h5> </a>
            </div>
            
      </div>
</div>
    );


}
export default Row;

/*
   <a className='atag' href="index.js"> <h5>{props.friends}</h5> </a>
          <a className='atag' href="index.js"> <h5>{props.mostRecent}</h5> </a>
          */