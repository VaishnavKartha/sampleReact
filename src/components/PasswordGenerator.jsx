import React from 'react'
import { useState } from 'react'
import usePasswordGenerator from './usePasswordGenerator';
import StrengthIndicator from './StrengthIndicator';

const PasswordGenerator = () => {
    const [length,setLength]=useState(1);
    const [checkBoxData,setCheckBoxData]=useState([
        {title:"Include Uppercase Letters",state:false},
        {title:"Include Lowercase Letters",state:false},
        {title:"Include Numbers",state:false},
        {title:"Include Special Characters",state:false},
    ]);

    const [change,setChange]=useState(false);



    const updateLength=(e)=>{
        setLength(Number(e.target.value));
    }
    const updateCheckBox=(index)=>{
        const updatedCheckBox=[...checkBoxData];
        updatedCheckBox[index].state=!updatedCheckBox[index].state;
        setCheckBoxData(updatedCheckBox);
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(password);
        setChange(true);
        setTimeout(()=>{
            setChange(false);
                
        },1000);
        
    }
    const {password,errorMsg,generatePassword}=usePasswordGenerator();
    







  return (
    <div className='w-screen border-1 bg-[#2d2e2e] sm:w-2/5 mx-[10px] pt-[15px] px-[15px]'>
      {password &&<div className='header flex justify-between items-center'>
        <div className='text-white text-[30px] pl-[10px]'>
            {password}
        </div>
        <button onClick={handleCopy} className='text-white px-[20px] py-[10px] bg-[#08968d] cursor-pointer active:opacity-70'>{change?"copied":"copy"}</button>

      </div>
      }

      <div className='flex flex-col gap-5 mx-[10px]'>
        <div className='text-white flex justify-between'>
            <label>Character Length</label>
            <label>{length}</label>
        </div>
        <div className=''>
            <input type='range' min={4} max={20} value={length} onChange={updateLength} className='w-full'></input>
        </div>

        <div className='flex flex-col sm:grid sm:grid-cols-2 gap-5'>
            {checkBoxData.map((box,index)=>{
                return <div key={index}>
                    <input type='checkbox' checked={box.state} onChange={()=>updateCheckBox(index)}></input>
                    <label className='text-white'>{box.title}</label>
                </div>
            })}
        </div>

        <div className='flex flex-col '>
            {errorMsg?<div className='text-red-500'>{errorMsg}</div>:
            <StrengthIndicator password={password}/>
            }
            
            <button onClick={()=>generatePassword(checkBoxData,length)} className=' active:opacity-70 cursor-pointer w-full  bg-[#08968d] py-[15px] mb-[10px] text-white'>GENERATE PASSWORD</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
