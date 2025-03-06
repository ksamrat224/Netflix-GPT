import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12 rounded-lg'>

         <input type="text" className='p-4 m-4 rounded-md col-span-9' placeholder='what would you like to watch today?'/>

         <button className='py-2 px-4 m-4 bg-red-800 text-white rounded-lg col-span-3'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar