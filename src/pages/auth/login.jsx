import React from 'react'
import { loginEndpoint } from '../../spotify'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
        <a href={loginEndpoint}>
            <div className='text-white bg-green-500 p-2'>Log In</div>
        </a>
      
    </div>
  )
}

export default Login
