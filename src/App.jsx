import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LiveTracking from './pages/LiveTracking'
import News from './pages/News'
import Parks from './pages/Parks'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import SupportUs from './pages/SupportUs'
import AllSpecies from './pages/AllSpecies'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/live-tracking' element={<LiveTracking/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/parks&sancturies' element={<Parks/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/support-us' element={<SupportUs/>}/>
      <Route path='/animals' element={<AllSpecies/>}/>
    </Routes>
  )
}

export default App
