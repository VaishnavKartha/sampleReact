import React from 'react'
import { useState,useRef,useEffect } from 'react'
import OtpField from './OtpField';

const OtpForm = () => {
  const [phoneNumber,setPhoneNumber]=useState("");
  const [showOtp,setShowOtp]=useState(false);
  const inputRef=useRef();
  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  },[])

  const handleChange=(e)=>{
    setPhoneNumber(e.target.value);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    const regex=/[^0-9]/;
    if(phoneNumber.length<10 || regex.test(phoneNumber)){
      alert("Invalid Phone Number");
      setPhoneNumber("");
      return;
    }

    setShowOtp(true);

  }


  const OtpSubmit=()=>{
    console.log("Successful");
  }


  return (
    <div className='text-center m-[10px]'>
      <div>
        <h1 className='text-white text-[50px]'>Login With Phone</h1>
      </div>
      {!showOtp?
        <form onSubmit={handleSubmit}>
          <input type='text' ref={inputRef} value={phoneNumber} onChange={handleChange} placeholder='Enter your phoneNumber' className='text-black p-[15px] bg-white' />
          <button className='text-white bg-blue-500 p-[15px] cursor-pointer'>Submit</button>
        </form>:
        <OtpField length={4} OtpSubmit={OtpSubmit}/>
      }
    </div>
  )
}

export default OtpForm
