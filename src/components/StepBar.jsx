import React from 'react'
import {useState} from 'react'

const StepBar = () => {

    const [currentStep,setCurrentStep]=useState(0);
    const [finishedSteps,setFinishedSteps]=useState([])
    const [isComplete,setComplete]=useState(false);
     const pos=[0,33,67,99]

    const handleClick=()=>{

        //if(currentStep>pos.length-1)return

        
        setFinishedSteps([...finishedSteps,currentStep])
        setCurrentStep((c)=>{
            if(c===pos.length-1){
                setComplete(true);
                return c;
            }
            else{
                return c+1;
            }
        });
        

    }

    const isFinished=(index)=>{
        return finishedSteps.includes(index)
    }

  

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-10'>
            <div>
                <h1>Steps</h1>
            </div>

            <div>
                <div className=' relative w-[200px] sm:w-[500px] h-[15px] rounded-full bg-gray-300'>
                    <div style={{width:`${pos[currentStep]+5}%`}} className='overflow-hidden h-full absolute bg-green-400 rounded-full transition-width duration-400 ease-in'></div>
                    
                    {pos.map((value,index)=>{
                        return <div style={{left:`${value}%`}} className={`z-2 absolute top-[-55%] rounded-full size-[30px] ${isFinished(index)?"bg-green-400 text-white":index===currentStep?"bg-blue-400 text-white":"bg-gray-300"} flex justify-center`}>{index+1}</div>
                    })}
                    

                </div>
            </div>

            {!isComplete?<button className='bg-blue-300 p-2 text-white rounded-xl' onClick={handleClick}>{currentStep===3?"Submit":"Next"}</button>:<span>Finished Process</span>}

        </div>

      
    </div>
  )
}

export default StepBar
