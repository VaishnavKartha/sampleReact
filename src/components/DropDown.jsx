import React from 'react'

const DropDown = ({ setCurrency,currencies,handleChange=()=>{} }) => {

  return (
    <div className='w-full'>
      <select value={setCurrency} onChange={handleChange} className='w-full rounded-full p-2 focus:ring-2 focus:ring-indigo-400 bg-gray-200 '>
        <hr/>
        {currencies.map((currency,index)=>{
            return <option key={index} 
                        
                        className='w-full'>{currency}</option>
        })}
      </select>
    </div>
  )
}

export default DropDown
