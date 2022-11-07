import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <h2 className='mt-3'>Products available: <span className='bg-dark p-2 rounded text-light'>{products.length}</span> </h2>
      <div className="all-products">
        <div className="container">
          <div className="row">
          {
        products.map(product => <Product key={product._id} product={product}>

        </Product>)
      }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Products
