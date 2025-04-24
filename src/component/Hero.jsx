import React from 'react'
import Moviecard from './Moviecard'

const Hero = () => {
  return (
    <>
    <div className='hero'>
        <h3>Type the name of the movie</h3>
      <input name='search'placeholder='search'></input>
      <button>Search</button>
      <Moviecard />
     
    </div>
   
    <hr />
    
    </>

  )
}

export default Hero
