import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse= () => {

 useNowPlayingMovies();
  
  return (
  <div>
    <Header/>
    {/* 
     Main container
      -video Background
      -Video Title
    Secondary container
     -MovieList * n
      -Cards * n
    */}

  </div>
  );
};

export default Browse