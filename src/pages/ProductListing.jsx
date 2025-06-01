import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ProductListing = () => {

    const {id}=useParams();
    const [product,setProduct]=useState({});

     useEffect(()=>{
    
        const fetchData=async()=>{
    
          const response=await fetch(`https://dummyjson.com/products/${id}`)
          const data=await response.json();
          setProduct(data);
    
        }
    
        fetchData();
      },[]);


  return (
    <div className='flex justify-center'>
      <div>
        <img src={product.thumbnail}/>
      </div>
      <div className='flex flex-col gap-10'>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>${product.price}</div>
      </div>
    </div>
  )
}

export default ProductListing
