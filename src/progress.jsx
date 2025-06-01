import React,{useState,useEffect} from "react";

function ProgressBar(){

    const [value,setValue]=useState(0);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setValue(v=>{
                if(v>=100){
                    clearInterval(intervalId)
                    return v
                }
                return v+1

            });
        },100)

        return ()=>clearInterval(intervalId)
    },[]);

  


    return <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-[450px] border border-solid rounded-[20px] overflow-hidden text-center align-middle relative">
            <span className={`absolute ${value>50?'text-white':''} z-2`}>{value}</span>
            <div style={{transform:`scaleX(${value/100})`,transformOrigin:"left"}} className="h-5 bg-green-400 transition-all "></div>
        </div>
        <span>{value===100?"Finished Loading":"Loading..."}</span>
    </div>

}

export default ProgressBar