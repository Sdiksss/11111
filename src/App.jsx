import { useState } from 'react'
import './App.css'
import FooterShared from './Components/Shared/FooterShared'
import HeaderShared from './Components/Shared/HeaderShared'
import HomePage from './Components/pages/HomePage'
import Reviews from './Components/Shared/styles/Reviuws'

function App() {


  return (
    <> 
      <div className='body-div'>
    <HeaderShared/>
    <HomePage/>
    <Reviews/>
    <FooterShared/>
     </div>
    </>
  )
}

export default App
