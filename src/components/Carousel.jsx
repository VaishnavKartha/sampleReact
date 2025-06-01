import React from 'react'
import {useState,useEffect,useRef} from 'react'


const Carousel = ({children}) => {

    const [index,setIndex]=useState(0);
    const IntervalRef=useRef();

    useEffect(()=>{
        startInterval();
        return ()=>clearInterval(IntervalRef.current)
    

    },[])

    function startInterval(){
        IntervalRef.current=setInterval(()=>{
            setIndex((prev)=>{
                return (prev+1)%children.length
            })
        },2000);

       

    }

    const handlePrev=()=>{
        clearInterval(IntervalRef.current);
        const newIndex=index===0?children.length-1:index-1;
        setIndex(newIndex);
        setTimeout(()=>{
            startInterval();
        },1000)
    }

    const handleNext=()=>{
        clearInterval(IntervalRef.current);
        const newIndex=index===children.length-1?0:index+1;
        setIndex(newIndex);

        setTimeout(()=>{
            startInterval();
        },700)
        

    }

    const handleMouseEnter=()=>{
        clearInterval(IntervalRef.current);
    }

    const handleMouseLeave=()=>{
        startInterval();
    }

    const goToSlide=(idx)=>{
        clearInterval(IntervalRef.current);
        setIndex(idx);
        setTimeout(()=>{
            startInterval();
        },700);


    }


  return (
    <div className='relative w-fit my-[20px] flex flex-col gap-3 m-auto'>
        <div className='relative h-[200px] w-[300px] sm:h-[300px] sm:w-[500px]'>
            {[...children].map((image,i)=>{
                return <div key={i} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${index===i?"opacity-100":"opacity-0"} transition-opacity duration-600 ease-in absolute inset-0 overflow-hidden`}>{image}</div>
            })}
            
        </div>

        <button className='cursor-pointer text-[10px] sm:text-[17px] w-fit p-[10px] rounded-full absolute top-[30%] left-[-10%] bg-yellow-500 text-white' onClick={handlePrev}>Previous</button>
        <button className='cursor-pointer text-[10px] sm:text-[17px] w-fit px-[23px] py-[10px]  rounded-full absolute top-[30%] right-[-10%] bg-yellow-500 text-white' onClick={handleNext}>Next</button>

        <div className='flex justify-between'>
            {Array.from(children).map((_,idx)=>{
                return <button key={idx} onClick={()=>goToSlide(idx)} className={`${idx===index?"bg-white text-black":"bg-black text-white"} rounded-full cursor-pointer w-[25px] h-[25px]`}>{idx}</button>
            })}
        </div>

        

        
      
    </div>
  )
}

export default Carousel
