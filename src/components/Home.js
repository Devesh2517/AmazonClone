import React from 'react'
import Productitem from "./product/Productitem";
import './home.css'
import Carousel from './product/Carousel'
import Imagecarousels from './product/Imagecarousels';
import { Link } from 'react-router-dom';
import ProductItem2 from './product/ProductItem2';
import { clotheSingle, clothesmulti, electronic, electronicSingle, grocerieMulti, grocerieSingle, imageClothes, imageElectronic, imageGroceries } from './product/StoredProducts';


export default function Home() {

  return (
    <>
      {/* home page start from here */}
      <div className='home'>

        {/* carousel  */}
        <Carousel></Carousel>

        {/* msg on carousel */}
        <div className='hero-msg'>
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <Link to="/" className='hero-link'>click here for go to amazon.com</Link></p>
        </div>

      </div>


      {/* start the block of div for showing the items on the home page*/}

      <div className="container" >
        {/* electronic products */}

        <div className="row" >
          {
            electronic.map(item => {
              return <div className="col-md-3" key={item._id}>
                <ProductItem2 item={item} type="electronics" />
              </div>
            })
          }
        </div>

        <div className="row" style={{ marginTop: "50px" }}>
          {
            electronicSingle.map(item => {
              return <div className="col-md-3" key={item._id}>
                <Productitem img={item.Image} type="electronics" />
              </div>
            })
          }
        </div>
        {/* Imagecarousels for electronics */}
        <div className="mt-5 container">
        <div className="product-header" >Electronics</div>
          <Imagecarousels imgproduct={imageElectronic} type="electronics" />
        </div>


      </div>

      {/* for clothes */}


      <div className="container">
        {/* single clothes product */}
        <div className="row" style={{ marginTop: "50px" }}>
          {
            clotheSingle.map(item => {
              return <div className="col-md-3" key={item._id}>
                <Productitem img={item.Image} type="clothes" />
              </div>
            })
          }
        </div>

        {/* multi image clothes product */}
        <div className="row" style={{ marginTop: "50px" }} >
          {
            clothesmulti.map(item => {
              return <div className="col-md-3" key={item._id}>
                <ProductItem2 item={item} type="clothes" />
              </div>
            })
          }
        </div>

        {/* Imagecarousels for clothes */}
        <div className="mt-5 container">
        <div className="product-header" >Clothes</div>
          <Imagecarousels imgproduct={imageClothes} type="clothes" />
        </div>
      </div>

      {/* for Groceries */}


      <div className="container">
        {/* single clothes product */}
        <div className="row" style={{ marginTop: "50px" }}>
          {
            grocerieSingle.map(item => {
              return <div className="col-md-3" key={item._id}>
                <Productitem img={item.Image} type="groceries" />
              </div>
            })
          }
        </div>

        {/* multi image clothes product */}
        <div className="row" style={{ marginTop: "50px" }} >
          {
            grocerieMulti.map(item => {
              return <div className="col-md-3" key={item._id}>
                <ProductItem2 item={item} type="groceries" />
              </div>
            })
          }
        </div>

        {/* Imagecarousels for clothes */}
        <div className="mt-5 container">
          <div className="product-header" >Groceries</div>
          <Imagecarousels imgproduct={imageGroceries} type="groceries" />
        </div>
      </div>




    </>

  )
}
