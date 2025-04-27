import React, { useEffect } from 'react'
import { useState } from 'react'
import Moviecard from './Moviecard';

const Display = ({ movieList, setMovieList}) => {
  const [displayMovieList, setDisplayMovieList] = useState([]);

  const handleOnGenreChange = (genre) => {
    // const filteredMovieList = movieList.filter (
      // (movie) => movie.genre == genre || genre ==" All"

      if(genre === "All") {
        setDisplayMovieList(movieList);
      } else {
        const filteredMovieList = movieList.filter (
          (movie) => movie.genre === genre
        );
    setDisplayMovieList(filteredMovieList);
  }
  };

  useEffect(() => {
   setDisplayMovieList(movieList);
  }, [movieList]);
   return (
   <>
   <div className='display'>
      <h1>Your favorites</h1>
      <hr/>
      <button onClick = {()=> handleOnGenreChange("All")}>All</button>
      <button onClick={() => handleOnGenreChange("Drama")}>Drama</button>
      <button onClick={() => handleOnGenreChange("Action")}>Action</button>
      <div className='movie-List'>
        {displayMovieList.map((movie) => {
          return <Moviecard key={movie.imdbID}{...movie} setMovieList = {setMovieList} />;
        })} 

      </div>
    </div>
   </> 
  )
}

export default Display
