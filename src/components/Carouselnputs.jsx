import React from 'react'
import Carousel from './Carousel'
import one from "../assets/spidey.jpg"
import two from "../assets/thor.jpg"
import three from "../assets/loki.jpg"
import four from "../assets/IronMan.jpg"

const Carouselnputs = () => {
  return (
   <>
    <Carousel>
        <img src={one} className='w-fit'/>
        <img src={two} className='  w-fit'/>
        <img src={three} className=' w-fit'/>
        <img src={four} className='  w-fit'/>

    </Carousel>
   </>
  )
}

export default Carouselnputs
