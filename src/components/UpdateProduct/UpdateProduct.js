import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {Id} = useParams();
    const [product, setProduct] = useState({});
 

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/product/${Id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product/${Id}`;
        fetch(url, {
          method: "PUT",
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            const procced = window.confirm('Are you update this product?')
            if(procced){ 
                navigate('/manage-product');
            }
          console.log(data)
        })
      };

  return (
    <div className='w-50 mx-auto border shadow p-3 rounded my-4'>
      <h2 className='my-3'>Update Product {product.name}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control mb-3' defaultValue={product?.name} placeholder='Product Name..' {...register("name")} />

            <input className='form-control mb-3' defaultValue={product?.img} placeholder='Product Image..' {...register("img")} />

            <input className='form-control mb-3' defaultValue={product?.price} placeholder='Product Price..' type="number" {...register("price")} />

            <input type="submit" className='btn btn-success' value={"Update Product"} />
        </form>
    </div>
  )
}

export default UpdateProduct
