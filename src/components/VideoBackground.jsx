import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  
  return (
    <div className=' w-screen'>
    <iframe
    className='w-screen aspect-video'
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&si=s7y2h1X7sM6jlhLU`}

     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></div>
  )
}

export default VideoBackground