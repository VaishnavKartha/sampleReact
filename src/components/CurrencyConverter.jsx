import React from 'react'
import { useState,useEffect } from 'react'
import DropDown from './DropDown';
const CurrencyConverter = () => {
    const [amount,setAmount]=useState(1);
    const [currencies,setCurrencies]=useState([]);
    const [fromCurrency,setFromCurrency]=useState("USD");
    const [toCurrency,setToCurrency]=useState("INR");
    const [convertedValue,setConvertedValue]=useState();
    const [isConverting,setIsConverting]=useState(false);

    useEffect(()=>{
        const fetchCurrency=async()=>{

            const response=await fetch("https://api.frankfurter.app/currencies");
            const data=await response.json();
            setCurrencies(Object.keys(data));
        }
        fetchCurrency();
    },[])


    const convertCurrency=async()=>{
        const response=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
        const data=await response.json();
        setConvertedValue(Object.values(data.rates).join("")+" "+toCurrency);
        setIsConverting(false);

    }
    const handleClick=()=>{
        setIsConverting(true);
        convertCurrency();
        
    }
    const handleFromChange=(e)=>{
        setFromCurrency(e.target.value)
    }

     const handleToChange=(e)=>{
        setToCurrency(e.target.value)
    }

    const swapCurrency=()=>{
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }


  return (
    <div className='h-screen bg-gray-100 flex justify-center items-center'>
        <div className='bg-white shadow-md py-5 px-5 w-[50%] flex flex-col gap-5'>
            <h1 className='text-2xl text-gray-600 font-bold'>Convert Currency</h1>
            <div className='flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between gap-7'>
                {/*selection*/}
                <div className='w-full'>
                    <label className='text-gray-400 text-[15px]'>From:</label>
                    <DropDown setCurrency={fromCurrency} currencies={currencies} handleChange={handleFromChange}/>

                </div>
                
                <button onClick={swapCurrency}
                        className='relative bottom-0 cursor-pointer bg-gray-300 active:bg-gray-400 rounded-full text-white p-2 '>
                    swap
                </button>

                <div className='w-full'>

                    <label className='text-gray-400 text-[15px]'>To:</label>
                    <DropDown setCurrency={toCurrency} currencies={currencies}  handleChange={handleToChange}/>

                </div>
                
            </div>
            <div className='flex flex-col'>
                <label htmlFor='amount'>Amount:</label>
                <input type='number' className='max-w-full h-10 text-xl focus:outline-0 focus:ring-2 
                                            focus:ring-indigo-400 border-1 border-gray-200'
                        value={amount}
                        min={1}
                        onChange={(e)=>setAmount(e.target.value)}
                />
            </div>

            <div className='flex flex-col items-end'>
                <button className={`text-white text-[15px] px-2 py-1.5 rounded-full cursor-pointer 
                                bg-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
                                ${isConverting?"animate-pulse":""}`}
                            onClick={handleClick}
                >
                    Convert
                </button>
                {convertedValue&&<label htmlFor='converted' className='text-green-600'>{convertedValue}</label>}
            </div>
        </div>
      
    </div>
  )
}

export default CurrencyConverter
