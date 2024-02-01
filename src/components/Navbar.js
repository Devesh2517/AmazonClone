
import { Link, useNavigate } from "react-router-dom"
import AmzonLogo from './images/AmzonLogo.png'
import './header.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import React, { useContext } from 'react'
import ProductContext from "../context/ProductContext";

export default function Navbar() {

    //context api for get the cart 
    const context = useContext(ProductContext)
    const { cart } = context
    //make a navigator for navigate if user want to logout
    let navigate = useNavigate()

    //log out function 
    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("name")
        navigate("/")
    }



    return (
        <>
            <nav className='navbar'>
                <div className='nav-belt'>
                    <div className='nav-logo bordernav'>
                        <Link to="/" className='logo-link'>
                            <img src={AmzonLogo} className='logo' alt="" />
                        </Link>
                    </div>
                    <div className='nav-address bordernav'>
                        <span className='navaddress'>
                            <Link to="/" className='locationlink'>
                                <div className="nav-icon">
                                    <LocationOnRoundedIcon />
                                </div>
                                <div className="navlocation">
                                    <span className='navlocline1'>Deliver to</span>
                                    <span className='navlocline2'>India</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div className="nav-search">
                        <select name="" id="" className="search-select">
                            <option value="ALL">ALL</option>
                            <option value="ALL">T-shirts</option>
                            <option value="ALL">Tv</option>
                            <option value="ALL">Mobile</option>
                        </select>
                        <input type="text" placeholder="Search Amazon" className="search-input" />
                        <div className="nav-searchicon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="header__nav bordernav">
                        {!localStorage.getItem("token") ? <Link to="/login" className="header__link link">
                            <div className="header__option">
                                <span className="header__optionLineOne">Hello, sign in </span>
                                <span className="header__optionLineTwo">Account &list<ArrowDropDownOutlinedIcon /> </span>
                            </div>
                        </Link> : <button onClick={handleLogout} className="header__link" style={{ backgroundColor: "#0f1111", border: "none" }}>
                            <div className="header__option">
                                <span className="header__optionLineOne">Welcome,{localStorage.getItem('name')} </span>
                                <span className="header__optionLineTwo">Log Out </span>
                            </div>
                        </button>}
                    </div>
                    <div className="header__nav bordernav">
                        <Link to="/order" className="header__link link">
                            <div className="header__option">
                                <span className="header__optionLineOne">Returns</span>
                                <span className="header__optionLineTwo">& Orders</span>
                            </div>
                        </Link>
                    </div>
                    <div className="header__nav bordernav">
                        <Link to="/" className="header__link link">
                            <div className="header__option">
                                <span className="header__optionLineOne">Your</span>
                                <span className="header__optionLineTwo">Prime</span>
                            </div>
                        </Link>
                    </div>
                    <Link to="/cart" className="header__link link bordernav" >
                        <div className="header__optionBasket">
                            <Badge badgeContent={localStorage.getItem("token") ? cart.length : 0} color="secondary" className='header__optionLineTwo header__basketCount'>
                                <AddShoppingCartIcon />
                            </Badge>
                        </div>
                    </Link>


                </div>
            </nav>
            <div className='panel' >
                <div className="panel-all " >
                    <i className="fa-solid fa-bars mx-1"></i>
                    All
                </div>
                <div className='panel-ops ' >
                    <Link to="/">Home</Link>
                    <Link to="/electronics">Electronics</Link>
                    <Link to="/clothes">Clothes</Link>
                    <Link to="/groceries">Groceries</Link>
                    <Link to="/">sell</Link>
                </div>
                <div className="panel-deals ">
                    <Link to="/">Shops Deals in electronics</Link>
                </div>
            </div>
        </>
    )
}















