import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Imagecard from './Imagecard'


const Imagecarousels = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  //mapping on the initial products
  const products = props.imgproduct.map(item => <Imagecard img={item.Image} type={props.type} />)
  return (
    <>
      <Carousel responsive={responsive} >{products}</Carousel>
    </>
  )
}

export default Imagecarousels

