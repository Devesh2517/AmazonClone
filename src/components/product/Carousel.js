import H1 from '../images/Hero1.jpg'
import H2 from '../images/hero2.jpg'
import H3 from '../images/hero3.jpg'
import H4 from '../images/hero4.jpg'
import H5 from '../images/hero5.jpg'
import './Carousel.css'


// Carousel for home page

import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={H1} className="d-block w-100 home_img" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={H2} className="d-block w-100 home_img" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={H3} className="d-block w-100 home_img" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={H4} className="d-block w-100 home_img" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={H5} className="d-block w-100 home_img" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next btn-dark" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>


  )
}


