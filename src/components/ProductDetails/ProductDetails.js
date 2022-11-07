import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
  const {productId} = useParams();
  const [products, setProducts]  = useState();
  console.log(products);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
  return (
    <div className='border shadow p-3 w-75 mx-auto rounded'>
      <h2>Product are available : <span className='text-danger'>{products?.name} </span> </h2>
      
      <div>
        <img src={products?.img} className='img-fluid' alt="" />
        <br />
        <h4>Price: {products?.price}</h4>
      </div>
    </div>
  )
}

export default ProductDetails
