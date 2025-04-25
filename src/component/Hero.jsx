import React, { useState } from 'react'
import Moviecard from './Moviecard'

const Hero = () => {
 const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      console.log(e.target.value); 
    }
  //  console.log(setInputValue());
  return (
    <>
  
    <div className='hero'>
      <div className='hero-container'>
      <h3>Type the name of the movie</h3>
      <div className='btn-input'>
      <input name='search'placeholder='search' value={inputValue} onChange={handleInputChange} className='input-name'></input>
      <button className='btn-search'>Search</button>
      
      </div>
      {/* <p> You typed : <strong> {inputValue}</strong> </p> */}
      <Moviecard />
      </div>
      {/* npm axious look up
      conditonal loadingv */}
     
    </div>
   
    <hr />
    
    </>

  )
}

export default Hero
