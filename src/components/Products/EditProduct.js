import React, {useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams}from "react-router";
const EditProduct=()=>{
    let history=useNavigate();
    const {id}=useParams();
    const [product,setProduct]=useState({
        name:"",
        category:"",
        url:"",
        price:""
        });
const {name,category,url,price}=product; 
const onInputChange=e=>{
console.log(e.target.value);
setProduct({...product,[e.target.name]:e.target.value})
};
useEffect(()=>{
loadProduct()
},[])
const onSubmit=async e=>{
e.preventDefault();
await axios.put(`http://localhost:3005/products/${id}`,product);
history.push("/")
}
const loadProduct=async()=>{
    const result=await axios.get(`http://localhost:3005/products/${id}`)
    //console.log(result);
    setProduct(result.data);
}
    return(
        <div className='container'>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit a Product</h2>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
    <input placeholder="Enter the Product Name"  className="form-control form-control-lg"  name="name"   value={name} onChange={e=>onInputChange(e)} />
</div>

<div className="form-group">
<input type="text" className="form-control form-control-lg"  placeholder="Enter the Category" name="category" value={category} onChange={e=>onInputChange(e)} />
</div>

<div className="form-group">
<input type="text" className="form-control form-control-lg"   placeholder="url" name="url"  value={url} onChange={e=>onInputChange(e)} />
</div>

<div className="form-group">
<input type="text" className="form-control form-control-lg"  class="form-control"  placeholder="Enter the price "name="price" value={price} onChange={e=>onInputChange(e)} />
</div>

<button className="btn btn-success btn-block">Edit Product</button>
      </form>
   </div>
  </div>
 
  
    )
}
export default EditProduct;