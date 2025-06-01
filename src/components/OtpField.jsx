import React from 'react'
import {useState,useRef,useEffect} from 'react'

const OtpField = ({length ,OtpSubmit=()=>{}}) => {
    const [otp,setOtp]= useState(new Array(length).fill(""));
    const inputRef=useRef([]);

    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus();
        }
    },[]);


    const handleChange=(index,e)=>{
        const value=e.target.value;

        if(isNaN(value))return;

        const newOtp=[...otp];
        newOtp[index]=value.substring(value.length-1);
        setOtp(newOtp);

        const combinedOtp=newOtp.join("");

        if(combinedOtp.length==length){
            OtpSubmit();
        }

        if(value && index<length-1 && inputRef.current[index+1]){
            inputRef.current[index+1].focus();
        }

    }


    const handleKeyDown=(index,e)=>{
        if(e.key==="Backspace" && index>0 && inputRef.current[index-1] && !otp[index]){
            inputRef.current[index-1].focus();
            
        }

    }

    const handleClick=(index,e)=>{
        inputRef.current[index].setSelectionRange(1,1);

        if(index>0){
            const newOtp=[...otp];
            const nextIndex=newOtp.indexOf("");
            inputRef.current[nextIndex].focus();
        }




    }


  return (
    <div>
      {otp.map((value,index)=>{
        return <input key={index} className='w-[40px] h-[40px] bg-white text-black m-2 pl-[17px] text-[20px]' 
                type='text' 
                value={value}
                onChange={(e)=>handleChange(index,e)}
                onClick={(e)=>handleClick(index,e)}
                onKeyDown={(e)=>handleKeyDown(index,e)}
                ref={(input)=>inputRef.current[index]=input}
                
                />
      })}
    </div>
  )
}

export default OtpField
