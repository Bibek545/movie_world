// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Display from './component/Display'
import Moviecard from './component/Moviecard'
import Hero from './component/Hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
<div className='wrapper'>
  <Navbar />
  <Hero />
  <Display />
  
</div>
  )
}

export default App
