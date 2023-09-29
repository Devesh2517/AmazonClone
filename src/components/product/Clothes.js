import React, { useContext, useEffect } from 'react'
import ProductContext from '../../context/ProductContext'
import ProductCard from './ProductCard'


const Clothes = () => {
    //using the context api and get the value 
    const context = useContext(ProductContext)

    const { Clothes, getClothes } = context
    useEffect(() => {
        getClothes()
        // eslint-disable-next-line
    }, [])
  return (
    <div>
        <div className="container my-3">
        <div className='row'>
            
          {/* mapping on the state value of product */}
  
          {Clothes.map((item) => {
            
            // every unique div block creating by giving id as key
            return <div key={item._id} className="col-md-3 my-2" >
              <ProductCard item={item}  />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Clothes
