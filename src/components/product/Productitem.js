import React from 'react'
import { Link } from 'react-router-dom'

const Productitem = (props) => {
  

  return (
    <>
      <div className="card Product_card h-100" style={{color:"black",backgroundColor:"white"}}>
        <div className="card-header Product_header" style={{ border:"none",color:"black",backgroundColor:"white",fontWeight:"500",fontSize:"21px"}}>{props.type}</div>
       <div className="card-body Product_body text-center" style={{height:"300px"}}>
       <Link to={`/${props.type}`}><img src={props.img}  className="my-1 img-fluid rounded-start Product_img" style={{border:"none",height: "250px"}} alt="..."/></Link>
       </div>
          <div  className="card-footer Product_footer" style={{border:"none",color:"black",backgroundColor:"white"}}>
           <Link to={`/${props.type}`} className='Product_link' style={{    textDecoration:"none",fontSize:"13px",color:"#007185"}}>See more</Link>
          </div>
      </div>
    </>
  )
}

export default Productitem

