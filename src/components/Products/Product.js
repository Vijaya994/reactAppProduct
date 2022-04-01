import React,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Product=()=>{
const [product,setProduct]=useState({
    name:"",
    category:"",
    url:"",
    price:""  
    });
    const {id}=useParams();
    useEffect(()=>{
        loadProduct();
    })
    const loadProduct=async()=>{
        const res=await axios.get(`http://localhost:3005/products/${id}`)
        console.log(res);
        setProduct(res.data);
        };
    return(
        <div class="container py-4">
            <Link className="btn btn-primary" to="/home">
                Back to Product Information
            </Link>
            <h2 className="display-4">Product Id:{id}</h2>
            <hr />
            <ul className="list-group w-50">
            <li className="list-group-item">name:{product.name}</li>
            <li className="list-group-item">category:{product.category}</li>
            <li className="list-group-item">url:{product.url}</li>
            <li className="list-group-item">price:{product.price}</li>
            
            </ul>
        </div>
    )
}
export default Product;