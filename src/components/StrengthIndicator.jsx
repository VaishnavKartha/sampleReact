import React from 'react'

const StrengthIndicator = ({password}) => {
   const showStrength=()=>{
    length=password.length;
    if(length<=3)return;

    else if(length>=4 && length<8){
        return "very weak"
    }

    else if(length>=4 && length<8){
        return "very weak"
    }

    else if(length>=8 && length<12){
        return "weak"
    }

    else if(length>=12 && length<16){
        return "strong"
    }

    else if(length>=16 && length<=20){
        return "very strong"
    }
   }
    
    
  return (
    <div className='flex justify-between'>
            <label className='text-white'>strength :</label>
            <label className='text-white'>{showStrength()}</label>
    </div>
  )
}

export default StrengthIndicator
