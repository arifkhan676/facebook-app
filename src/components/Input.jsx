import React from 'react'

function Input(props){
      return <div >
       <input className="head-search"  type={props.type}  placeholder={props.placeholder}   aria-label="Search" />
      </div>
}
export default Input;