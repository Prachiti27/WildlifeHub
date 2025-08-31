import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LiveTracking from './pages/LiveTracking'
import News from './pages/News'
import Parks from './pages/Parks'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import AllSpecies from './pages/AllSpecies'
import Games from './pages/Games'
import { AnimatePresence } from 'motion/react'
import AnimalDetailPage from './pages/AnimalDetailPage'

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/live-tracking' element={<LiveTracking/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/parks&sancturies' element={<Parks/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/animals' element={<AllSpecies/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/animal/:id' element={<AnimalDetailPage/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default App
