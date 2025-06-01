import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  const[products,setProducts]=useState([])

  useEffect(()=>{

    const fetchData=async()=>{

      const response=await fetch("https://dummyjson.com/products")
      const data=await response.json();
      setProducts(data.products);

    }

    fetchData();
  },[]);


  return (
    <div>
      <h1 className='text-center'>Products</h1>
      <div className='grid grid-cols-2 gap-4'>
        {products.map((product)=>{
          return <div className='border-1 flex flex-col justify-center items-center'>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail}/>
              <span>{product.title}</span>
              
            </Link>
            <span>{product.price}</span>
          </div>
        })}
      </div>
    </div>
  )
}

export default Products
