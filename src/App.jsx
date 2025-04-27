// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Display from './component/Display'
import Moviecard from './component/Moviecard'
import Hero from './component/Hero'
import { useState, useEffect} from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    let localData = localStorage.getItem("movie-data");

    setMovieList(JSON.parse(localData) || []);
  }, []);

  return (
<div className='wrapper'>
  <Navbar />
  <Hero setMovieList ={setMovieList} />
  <Display movieList = {movieList} setMovieList = {setMovieList}/>
  
</div>
  )
}

export default App
