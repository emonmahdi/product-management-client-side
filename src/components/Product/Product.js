import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Product = ({product}) => {
  
  const {_id, name, img, price} = product; 
    
  return (
    <div className='col-md-3'>
        <div className="single-product mb-4">
            <img src={img} className='img-fluid' alt="" />
            <h5 className='fw-bold'>{name}</h5>
            <span> <b> Price: {price}</b></span> 
            <p className='mt-3'> <Link to={`/product/${_id}`}><button className='btn btn-primary'>Buy Now</button></Link> </p> 
        </div>
    </div>
  )
}

export default Product
