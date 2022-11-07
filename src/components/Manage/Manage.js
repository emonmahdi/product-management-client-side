import React from 'react' 
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts'

const Manage = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const procced = window.confirm('Are you sure delete this product?');
    if(procced){  
      const url = `http://localhost:5000/product/${id}`
      fetch(url, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remainingProduct = products.filter(product => product._id !== id);
        setProducts(remainingProduct);
      })
    }
  }

  return (
    <div className='my-4'> 
      <h2 className='my-4 text-success'>Manage All Products by Admin</h2>
      <div className="all-products">
        <div className="container">
          <div className="row">
          {
        products.map(product => {
          const {_id, img, name, price} = product;
          return (
            <div key={_id} className='col-md-6 mx-auto border p-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <img src={img} className='img-fluid' alt="" />
                </div>
                <div>
                  <h4>{name}</h4>
                  <h2>{price}</h2>
                </div>
                <div>
                  <Link to={`/update/${_id}`}><button className='btn btn-success mb-3'>Update</button></Link> 
                 <br />
                 <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                 </div>
              </div>
            </div>
          )
        })
      }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage
