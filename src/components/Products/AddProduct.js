import React, {useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router";
const AddProduct=()=>{
    let history=useNavigate();
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
}
const onSubmit=async e=>{
e.preventDefault();
await axios.post("http://localhost:3005/products",product);
history.push("/")
}
    return(
        <div className='container'>
          <form class  ="row g-3" onSubmit={e=>onSubmit(e)}>
            <table border="2">
<div class="col-md-6">
<label for="name" class="form-label">Product Name</label>
<input type="name" class="form-control" name="name"  placeholder="Enter the product Name" value={name} onChange={e=>onInputChange(e)} />
</div>
<div class="col-md-12">
<label for="category" class="form-label">Category</label>
<input type="text" class="form-control" name="category" placeholder="Category"  value={category} onChange={e=>onInputChange(e)} />
</div>
<div class="col-md-6">
<label for="url" class="form-label">Url</label>
<input type="text" class="form-control" name="url" placeholder="url"  value={url} onChange={e=>onInputChange(e)} />
</div>
<div class="col-md-6">
  <label for="price" class="form-label">Price</label>
  <input type="text" class="form-control" name="price" placeholder="Give the price"   value={price} onChange={e=>onInputChange(e)} />
</div>
</table> 
<div class="col= 12">
<button className='btn btn-success' >Add Product</button>
    </div> 
      </form>
  </div>
    )
}
export default AddProduct;