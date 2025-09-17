import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

function App() {


  return (
    <>
      {/* hero section */}
      <Hero name = 'Michael John'/>
      {/* custom card component */}
      <div className="mt-30">
      <Gallery/>

      </div>

    </>
  )
}

export default App
