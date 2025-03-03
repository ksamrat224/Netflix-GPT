import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-6xl font-extrabold drop-shadow-lg'>{title}</h1> 
       <p className="text-lg text-white mt-4 max-w-2xl drop-shadow-md">{overview}</p>
       <div className='flex space-x-4 mt-6'>
        <button className='bg-gray-400 text-white p-4 px-12  flex items-center rounded-lg text-xl bg-opacity-50'>▶️Play</button>
        <button className='bg-gray-400 text-white p-4 px-12  flex items-center rounded-lg text-xl bg-opacity-50'>❕More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle

