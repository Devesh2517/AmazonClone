import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import { useNavigate,Link } from 'react-router-dom'
import './Bucket.css'
import CurrencyFormat from 'react-currency-format'
const Bucket = () => {
    //context api for geting bucket details 
    const context = useContext(ProductContext)
    const { GetBucket, cart, DeleteItem, getTotalPrice, DeleteAllitems } = context

    //make navigator for user loggedin or not
    let navigate = useNavigate()

    //fetch item from db for specific user
    useEffect(() => {
        if (localStorage.getItem("token")) {
            GetBucket()
            // eslint-disable-next-line
        }
        else {
            navigate("/login")
        }

        // eslint-disable-next-line
    }, [])

    //Delete item from buket
    const handleDelete = (id) => {
        DeleteItem(id)
    }

    //Checkout funtion for clear all items from the bucket and also from the db
    const handleCheckout = () => {
        DeleteAllitems()
        navigate("/checkout")
    }


    return (
        <div className='container  my-3' >
            {cart.length > 0 ? <h1 style={{ fontFamily: "arial" }}>Shopping Cart</h1> : <h1 style={{ fontFamily: "arial" }}>Your Shopping Cart is Empty</h1>}
            <hr />

            <div className="row">

                {/* for bucket items layout */}
                <div className='col-md-8 text-center' >
                    {
                        cart.length > 0 ? cart.map((item) => {
                            return <div className='row align-items-start Bucket_row ' key={item._id}>
                                <div className='col-md-3 bucket_first' >
                                    <img src={item.Image} alt="Sorry" />

                                </div>
                                <div className="col-md-9">
                                    {/* For title */}
                                    <div className="row text-left ">
                                        <div className="col bucket_second">
                                            <p>{item.Title}</p>
                                        </div>
                                    </div>

                                    {/* for price */}
                                    <div className="row text-left">
                                        <div className="col bucket_third" ><p><span className='first_span' >₹</span>
                                            <span className='second_span' >{item.Price}</span><span className='third_span' >00
                                            </span></p></div>
                                    </div>

                                    {/* for button */}
                                    <div className="row">
                                        <div className="col bucket_four" >
                                            <button className="btn-warning btn_remove " style={{ marginTop: '50px', width: '15rem', borderRadius: '7px' }} onClick={() => { handleDelete(item._id) }}>Remove Item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })




                            : <div className="empty-cart">
                            <h1>Your cart is empty</h1>
                            <p>Start shopping to add items to your cart.</p>
                            <Link to="/">Start shopping</Link>
                          </div>}




                </div>

                <div className='col-md-1'></div>

                {/* checkout layout */}
                {cart.length !== 0 && <div className='col-md-3 checkout_cart my-3'  >
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p>
                                    Subtotal ({cart.length} items ) : <strong>{`${value}`}</strong>
                                </p>
                                <small className="subtotal__gift">
                                    <input type="checkbox" /> This order contains a gift
                                </small>
                            </>
                        )}
                        value={getTotalPrice()}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₹'}
                    />
                    <button onClick={handleCheckout} className=' btn_checkout' >Procced to Checkout</button>
                </div>
                }
            </div>
        </div>


    )
}

export default Bucket
