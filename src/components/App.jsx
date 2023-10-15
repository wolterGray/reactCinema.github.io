import React,{ useContext, useState } from 'react'

import Header from './Header/Header'
import HomePage from '../Pages/homePage/HomePage'
import MoviePage from '../Pages/moviePage/moviePage'
import Footer from './Footer/Footer'
import axios from 'axios'




function App() {
  
  return (
    <div className='App'>
     <Header/>
     <HomePage/>
      {/* <MoviePage/> */}
      <Footer/>
    </div>
  )
}

export default App
