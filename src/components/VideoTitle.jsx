import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
       <h1 className='text-6xl font-extrabold drop-shadow-lg'>{title}</h1> 
       <p className="text-lg text-blue-950 mt-4 max-w-2xl drop-shadow-md">{overview}</p>
       <div className='flex space-x-4 mt-6'>
        <button className='bg-gray-400 text-white p-4 px-12  flex items-center rounded-lg text-xl bg-opacity-50'>▶️Play</button>
        <button className='bg-gray-400 text-white p-4 px-12  flex items-center rounded-lg text-xl bg-opacity-50'>❕More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle

