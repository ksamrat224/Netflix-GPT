import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInform =()=> {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg" alt="background" />
        </div>
        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
         <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>

         {!isSignInForm &&(<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-md' />)}

         <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
         
         <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
         
         <button className='p-4 my-4 bg-red-800 w-full rounded-md'>{isSignInForm? "Sign In":"Sign Up"}</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInform}>
         {isSignInForm? "New to Netflix? Sign up now.":"Already Registered?Sign In Now"}
           </p>
        
        </form>
    </div>
  )
}

export default Login;