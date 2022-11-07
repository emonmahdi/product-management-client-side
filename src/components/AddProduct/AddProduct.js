import React from 'react' 
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      navigate('/')
    })
  };

  return (
    <div className='w-50 mx-auto border shadow p-3 rounded my-4'> 
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='form-control mb-3' placeholder='Product Name..' {...register("name")} />
        <input className='form-control mb-3' placeholder='Product Image..' {...register("img")} />
        <input className='form-control mb-3' placeholder='Product Price..' type="number" {...register("price")} />
        <input type="submit" className='btn btn-success' value={"Add Product"} />
    </form>
    </div>
  )
}

export default AddProduct
