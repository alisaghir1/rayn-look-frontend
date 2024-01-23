import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleProduct = () => {
  const location = useLocation()
  const product = location.state.product
  console.log(product)

  return (
    <div className='d-flex align-items-center m-5'>
        <div>
            <img className='h-50 w-50 m-auto justify-content-between' src={`http://localhost:8080/${product.Image[0]}`}alt="" />
        </div>
        <div>
          <div className='d-flex flex-column'>
            <p>{product.Name}</p>
            <p>{product.Price}</p>
            <p>{product.Description}</p>
            <p>{product.Category.Name}</p>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct