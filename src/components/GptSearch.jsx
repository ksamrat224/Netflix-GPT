import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BODY_IMG } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 '>
              <img
                src={BODY_IMG}
                alt="Body-Image"
              />
              </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch