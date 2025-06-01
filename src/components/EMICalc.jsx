import React, { useEffect } from 'react'
import {useState} from 'react'
import { Tenure } from '../utils/constants';

const EMICalc = () => {
    const [cost,setCost]=useState(0);
    const [Interest,setInterest]=useState(10);
    const [pfee,setPfee]=useState(1);
    const [downPayment,setDownPayment]=useState(0);
    const [EMI,setEMI]=useState(0)
    const [tenure,setTenure]=useState(12);

    useEffect(()=>{
        const emi=calculateEMI(downPayment);
        setEMI(emi);
    },[tenure,cost,Interest])

    const updateEMI=(e)=>{
        if(!cost)return;

        const dp=Number(e.target.value).toFixed(0);
        setDownPayment(dp);
        const emi=calculateEMI(dp);
        setEMI(emi);



    }

    const updateDownPayment=(e)=>{
        if(!cost)return;
        const emi=Number(e.target.value).toFixed(0);
        setEMI(emi);

        const dp=calculateDP(emi);
        setDownPayment(dp);

    }

    const calculateEMI=(dp)=>{
        if(!cost)return

        const loanAmt=cost-dp;
        const rate=(Interest/100);
        const years=tenure/12;
        const emi=(loanAmt*rate*((1+rate)**years))/(((1+rate)**years)-1);
        return Number(emi/12).toFixed(0);
    }

    const calculateDP=(emi)=>{
        if(!cost)return;

        const downPaymentPercent=100-((emi/calculateEMI(0))*100);
        return Number((downPaymentPercent/100)*cost).toFixed(0);

    }
    

   






  return (
    <div className='mx-2 w-screen flex flex-col gap-10'>
      <header>EMI Calculator</header>
      <div className='flex flex-col items-start gap-5 w-19/20'>

        <div className='totalCost w-full'>
            <p>TotalCost</p>
            <input type='text' value={cost} onChange={(e)=>setCost(e.target.value)} className='w-full border-2 border-gray-200' placeholder='Total Cost'></input>

        </div>
        <div className='Interest w-full'>
            <p>Interest {'(%)'}</p>
            <input type='number' value={Interest} onChange={(e)=>setInterest(e.target.value)} className='w-full border-2  border-gray-200'></input>
        </div>
        <div className='ProFee w-full '>
            <p>Processing Fee{'(%)'}</p>
            <input type='number' value={pfee} onChange={(e)=>setPfee(e.target.value)} className='w-full border-2  border-gray-200'></input>
        </div>
        <div className='downPayment w-full '>
            <p>Down Payment</p>
            <div className='w-full flex justify-between flex-wrap'>
                 <input type='range' min={0} max={cost} value={downPayment}  onChange={updateEMI} className='w-full border-2  border-gray-200'></input>
                 <label>0%</label>
                 <label>{downPayment}</label>
                 <label>100%</label>
            </div>
           
        </div>
        <div className='loanAmount w-full '>
            <p>Loan Amount</p>
            <div className='w-full flex justify-between flex-wrap'>
                <input type='range' value={EMI} min={calculateEMI(cost)} max={calculateEMI(0)} onChange={updateDownPayment} className='w-full border-2  border-gray-200'></input>
                <label>{calculateEMI(cost)}</label>
                <label>{EMI}</label>
                <label>{calculateEMI(0)}</label>
                
            </div>
            
        </div>
        

        <div className='tenure w-full flex justify-around'>
            {Tenure.map((value,index)=>{
                return <div key={index} className={`${value==tenure?"bg-blue-400 text-white":""} px-[40px] py-[15px] border-1 border-gray-200 rounded-[30px] cursor-pointer`} onClick={()=>setTenure(value)}>{value}</div>
            })}
        </div>

      </div>


    </div>
  )
}

export default EMICalc
