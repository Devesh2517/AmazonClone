import React from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
const Checkout = () => {
    return (
        <div className="delivery-message">
            <h2>Your order is delivered!</h2>
            <p>Thank you for shopping with Amazon. Your order has been delivered.</p>
            <p>Go to home page click here <Link to="/" className='Link_checkout'>Home</Link></p>
        </div>
    )
}

export default Checkout
