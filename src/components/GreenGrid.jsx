import React,{useState,useEffect} from 'react'
import Box from './Box';

const GreenGrid = () => {

    const[order,setOrder]=useState([]);
    const [deactivate,setDeactivate]=useState(false);
    const template=[
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ];


const setColor=(index)=>{
    if(deactivate || order?.includes(index))return
    const newOrder=[...order,index];
    setOrder(newOrder);

    if(template.flat(1).filter(Boolean).length===newOrder.length){
        
        remove();
        

}
}

const remove=()=>{
    setDeactivate(true);
        
       const timer=setInterval(()=>{
            setOrder(prevOrder=>{
               const oldOrder=prevOrder.slice();
               oldOrder.pop();
               if(oldOrder.length===0){
                clearInterval(timer);
                setDeactivate(false);
                return []
               }
              
                return oldOrder
               
               

            })
        },300)
    }
    







  return (
    <div className={`h-screen w-full flex justify-center items-center`}>
      <div className='w-[300px] h-[300px] grid grid-cols-3 gap-4'>
        {template.flat(1).map((value,index)=>{
            return value?<Box 
            key={index}
            filled={order.includes(index)}
            clicked={()=>setColor(index)} />:<span/>
        })}
      </div>
    </div>
  )
}

export default GreenGrid
