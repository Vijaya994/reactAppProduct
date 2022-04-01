import {useEffect,useState} from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home=()=>{
    const[products,setProducts]=useState([])
    useEffect(()=>{
//console.log("From Use Effect")
loadProducts();
    },[])

const loadProducts=async()=>{
    const result=await axios.get("http://localhost:3005/products");
console.log(result);
setProducts(result.data.reverse());
}

const EditProduct=async id=>{
    await axios.put(`http://localhost:3005/produts/${id}`);
    loadProducts(); 
}

const deleteProduct=async id=>{
    await axios.delete(`http://localhost:3005/products/${id}`);
    loadProducts();
}

    return(
        <div className="container">
            <div className="py-4">
                <h1>Products Information</h1>
<table className="table border shadow">
    <thead className="table-dark">
    <tr>
    <th scope="col">Id</th>
    <th scope="col">Name</th>
    <th scope="col">Category</th>
    <th scope="col">url</th>
    <th scope="col">Price</th>
    <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {
          products.map((product,index)=>(
              <tr>
                  <th scope="row">{index+1}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.url}</td>
                  <td>{product.price}</td>
                 <td>
                     <Link class="btn btn-primary mr-2" to={`/products/${product.id}`}>View</Link>
                      <Link class="btn btn-warning mr-2" to={`/products/edit/${product.id}`}>Edit</Link>
                     <button class="btn btn-danger mr-2" onClick={()=>deleteProduct(product.id)}>Delete</button>
                 </td>
                                     
              </tr>
          )
          )
}    
       
    </tbody>
</table>
            </div>
          
        </div>
    )
}
export default Home;
