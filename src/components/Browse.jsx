import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse= () => {

 useNowPlayingMovies();
 usePopularMovies();
 useUpcomingMovies();
  
  return (
  <div>
    <Header/>
    <MainContainer />
    <SecondaryContainer />
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