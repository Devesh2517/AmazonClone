import React from 'react'
import { Link } from 'react-router-dom'
const ProductItem2 = (props) => {
  const {item} = props
  const {Image1,Image2,Image3,Image4} =item
  return (
    <>
        <div className="card Product_card h-100" style={{color:"black",backgroundColor:"white"}}>
        <div className="card-header Product_header" style={{ border:"none",color:"black",backgroundColor:"white",fontWeight:"500",fontSize:"21px"}}>{props.type}</div>


       <div className="card-body Product_body text-center" style={{height:"300px"}}>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div >
              <Link to={`/${props.type}`}><img src={Image1} className="my-1 img-fluid  Product_img" style={{ border: "none", height: "120px" ,width:"100px" }} alt="..." /></Link>
            </div>
            <div >
              <Link to={`/${props.type}`}><img src={Image2} className="my-1 img-fluid  Product_img" style={{ border: "none", height: "120px",width:"100px" }} alt="..." /></Link>
            </div>
          </div>

          {/* second Two Group div */}
          <div style={{ display: "flex", justifyContent: "space-evenly" ,marginTop:"15px" }}>
            <div >
              <Link to={`/${props.type}`}><img src={Image3} className="my-1 img-fluid  Product_img" style={{ border: "none", height: "120px",width:"100px" }} alt="..." /></Link>
            </div>
            <div >
              <Link to={`/${props.type}`}><img src={Image4} className="my-1 img-fluid Product_img" style={{ border: "none", height: "120px",width:"100px" }} alt="..." /></Link>
            </div>
          </div>

       </div>



       {/* footer of card */}
          <div  className="card-footer Product_footer" style={{border:"none",color:"black",backgroundColor:"white"}}>
           <Link to="/electronics" className='Product_link' style={{    textDecoration:"none",fontSize:"13px",color:"#007185"}}>See more</Link>
          </div>
      </div>
     
    </>
  )
}

export default ProductItem2
