import React from 'react'
import Moviecard from './Moviecard'

const Hero = () => {
  return (
    <>
  
    <div className='hero'>
      <div className='hero-container'>
      <h3>Type the name of the movie</h3>
      <input name='search'placeholder='search'></input>
      <button>Search</button>
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
