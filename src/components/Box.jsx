import React from 'react'

const Box = ({filled,clicked}) => {
  return (
    <div  className={`border border-solid ${filled?"bg-green-500":""}`} onClick={clicked}>
      
    </div>
  )
}

export default Box
