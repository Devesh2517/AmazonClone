import React from 'react'
import './Imagecard.css'
import { Link } from 'react-router-dom'

const Imagecard = (props) => {
  

  return (
    
      <div className=" product-card" >
        {/* <div className=" product-header" >{props.type}</div> */}
       <div className=" product-body">
        <Link to={`/${props.type}`}><img src={props.img}  alt="" /></Link>
       </div>
      </div>
  
  )
}

export default Imagecard
