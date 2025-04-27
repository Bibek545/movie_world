import React, { useState, useRef, useEffect } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios';
const apiKEY = import.meta.env.VITE_APIKEY;

const Hero = ({ setMovieList }) => {
 const [inputValue, setInputValue] = useState('');
 const searchRef = useRef();

 const [loading, setLoading] = useState (false);
 const [movieObject, setMovieObject] = useState('')
    const handleInputChange = (e) => {
      console.log(e.target.value);
      // console.log(e.target.value); 
      if(e.target.value != "test") {
        setInputValue(e.target.value);
      }
    };
  //  console.log(setInputValue());
  const searchMovie = async (text) => {
    setLoading(true);
    const omdbURL = `https://www.omdbapi.com/?apikey=${apiKEY}&t=${text}`;

    const response = await axios.get(omdbURL);

    setMovieObject({
      imdbID: response.data?.imdbID,
      title: response.data?.Title,
      poster: response.data?.Poster,
      imdbRating: response.data?.imdbRating,
      summary: response.data?.Plot,
    });

    setLoading(false);
  };
  const handleOnClick = async () => {
    searchMovie(searchRef.current.value);
  };

  useEffect(() => {
    // TODO: get random character
    let randomString = "x";

    searchMovie(randomString);
  }, []);
  
  return (
    <>
  
    <div className='hero'>
      <div className='hero-container'>
      <h3>Type the name of the movie</h3>
      <div className='btn-input'>
      <input 
         name='search'
         placeholder='search' 
         value={inputValue} 
         onChange={handleInputChange} 
         className='input-name' 
         ref={searchRef}>

         </input>

      <button className='btn-search' onClick={handleOnClick}> Search</button>
      
      </div>
      <p> You typed : <strong> {inputValue}</strong> </p>
      {loading ? (
        <div className='loading'></div>
      ) : (
      <Moviecard {...movieObject} setMovieList = {setMovieList} search={true}/>
      )} </div>
      {/* npm axious look up
      conditonal loadingv */}
     
    </div>
   
    <hr />
    
    </>

  )
}

export default Hero
