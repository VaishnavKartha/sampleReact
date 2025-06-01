import React from 'react'
import { useState } from 'react'

const usePasswordGenerator = () => {
  const[password,setPassword]=useState("");
  const[errorMsg,setErrorMsg]=useState("");

  const generatePassword=(checkBoxData,length)=>{
    let charset="";
    let generatedPass="";
    const validCheckBox=checkBoxData.filter((checkBox)=>checkBox.state==true);

    if(!validCheckBox.length){
        setPassword("");
        setErrorMsg("Select atleast one option");
        return;
    }

    validCheckBox.forEach((box)=>{
        switch (box.title){
            case "Include Uppercase Letters":
                for(let i=65;i<=90;i++){
                    charset+=String.fromCharCode(i);
                }

                break;

            case "Include Lowercase Letters":
                for(let i=97;i<=122;i++){
                    charset+=String.fromCharCode(i);
                }
                break;

            case "Include Numbers":
                charset+="0123456789";
                break;

            case "Include Special Characters":
                charset+="!@#$%^&*";
        }
    })

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*charset.length);
        generatedPass+=charset[randomIndex];
    }

    setPassword(generatedPass);
    setErrorMsg("");


  }
  return {password,errorMsg,generatePassword}
}

export default usePasswordGenerator
