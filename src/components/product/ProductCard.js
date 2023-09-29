import React ,{useContext} from 'react'
import ProductContext from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    //context api for addtobucket function
    const context = useContext(ProductContext)
    const {addToBucket,GetBucket} = context
    const {item}=props


    //make a navigator for navigate if user not loggedin
    let navigate = useNavigate()

    

    const handleclick = ()=>{
        if(localStorage.getItem("token"))
        {
            addToBucket(item.Title,item.Image,item.Price)
            GetBucket()
        }
        else
        {
            navigate("/login")
        }
    }
    return (
        <div>
            <div key={item._id} className="card h-100 " style={{ color: "black", backgroundColor: "white" }}>
                <div className="card-body">
                    <img  src={item.Image}style={{ border: "none" }} className="my-1" height={"200px"} width={"200px"} alt="..." />
                    <p  className='my-1' style={{color:"black",fontWeight: "500", fontSize: "21px" }}>{item.Title.length>15 ? `${item.Title.slice(0,15)}...`:item.Title }</p>
                    {/* pricing  */}
                    <p style={{ marginTop: "5px" }}><span style={{ fontWeight: 'bold', position: 'absolute', color: 'rgb(177 39 4)', marginTop: '2px' }}>₹</span>
                        <span style={{ color: 'rgb(177 39 4)', fontSize: '20px', marginLeft: '10px' }}>{item.Price}</span><span style={{ marginLeft: '2px', fontSize: '10px', position: 'absolute', color: 'rgb(177 39 4)', marginTop: '5px' }}>00</span></p>

                    {/*  add to cart button */}
                    
                    <button onClick={handleclick} className='my-1 text-center mx-3' style={{ width: '15rem', borderRadius: '10px', backgroundColor: '#edaa05f7' }}>Add to cart</button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard
