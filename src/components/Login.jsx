import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    if (!email.current || !password.current) {
      console.error("Email or Password input field not found!");
      return;
    }
  
    const nameValue = !isSignInForm && name.current ? name.current.value : ""; // Only use name for Sign-Up
    const message = checkValidData(nameValue, email.current.value, password.current.value);
    setErrorMessage(message);
  
    if (message) return; // Stop execution if validation fails
  
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          console.log("User signed up successfully:", userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          console.log("User signed in successfully:", userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    }
  };
  
  
  const toggleSignInform =()=> {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg" alt="background" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
         <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>

         {!isSignInForm &&(<input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-md' />)}

         <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
         
         <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-md' />
         
         <button className='p-4 my-4 bg-red-800 w-full rounded-md'onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>

         <p className='text-red-500'>{errorMessage}</p>

         <p className='py-4 cursor-pointer' onClick={toggleSignInform}>
         {isSignInForm? "New to Netflix? Sign up now.":"Already Registered?Sign In Now"}
           </p>
        
        </form>
    </div>
  )
}

export default Login;