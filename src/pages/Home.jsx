import React from 'react'
import {useState,useEffect} from'react'
import { Link } from 'react-router-dom'

const API_ENDPOINT=""

const Home = () => {

  const [products,setProducts]=useState([]);
  

  useEffect(()=>{

    const fetchData=async ()=>{
      const response=await fetch(API_ENDPOINT);
      const data=await response.json();
      
      setProducts(data.products.slice(0,10));
      
      
    }

    fetchData();

   
  },[]);

  




  return (
    <div className='text-center'>
      <h1>Trending items</h1>
      <div className='grid grid-cols-2 gap-3'>
       {products.map((product,index)=>{
        return <div key={index} className='border-1 flex justify-center'>
          <Link to={`/products/${product.id}`}>

          <img src={product.thumbnail}/>
          <h1>{product.title}</h1>
          

          
          </Link>
        </div>
       })}
      </div>

      <Link to={'/products'}>

            <button >View All</button>

      
      </Link>
      
    </div>
  )
}

export default Home
