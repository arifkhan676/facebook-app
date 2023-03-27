import React from 'react'

function Row(props){
    return(
        <div className='div1'>
           <div className="equal">
          <i className="fa-solid fa-house"></i> 
          <a href=""> <h5>{props.head}</h5> </a>
          <a href=""> <h5>{props.profile}</h5> </a>
          <a href=""> <h5>{props.friends}</h5> </a>
          <a href=""> <h5>{props.mostRecent}</h5> </a>

       </div>
     </div>
    );


}
export default Row;