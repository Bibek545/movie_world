import React from 'react'

const Moviecard = ({poster, title,imdbID, imdbRating, summary,setMovieList,genre, search = false}) => {

  const handleOnClick = (genre) => {
    const localMovieData = localStorage.getItem("movie-data");
    const movieList = JSON.parse(localMovieData) || [];

    const movieObject = {
      imdbID, 
      title,
      poster,
      imdbRating,
      summary,
      genre,
    };
    movieList.push(movieObject);
    localStorage.setItem("movie-data", JSON.stringify(movieList));
    setMovieList(movieList);
  };
   const handleOnDelete = (id) => {
    const localData = localStorage.getItem("movie-data");
    const tempMovieList = JSON.parse(localData);

    const updatedMovieList = tempMovieList.filter((movie) => movie.imdbID !== id);
    localStorage.setItem("movie-data", JSON.stringify(updatedMovieList));
    setMovieList(updatedMovieList);
   }
  return ( 
    <>
    <div className="movie-card">
      <img className="movie-poster" src={poster} alt="Movie Poster"/>
      <div className="movie-detail">
        <div className="movie-title">{title}</div>
        <div className="movie-rating">{imdbRating}</div>
        <div className="movie-summary">{summary}</div>

      </div>
      </div>
      
      { search ? (
        <>
        <button onClick={() => handleOnClick("Drama")}>Drama</button>
        <button onClick={() => handleOnClick("Action")}>Action</button>
        </>

      ) : (
        <>
        Genre : {genre}
        <button onClick={() => handleOnDelete(imdbID)}>Delete</button>
        </>
      )
      }
    
    </>
  )
}

export default Moviecard
