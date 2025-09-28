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
import Favorites from './pages/Favorites'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import {useUser} from '@clerk/clerk-react'
import Layout from './pages/Layout'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const {user} = useUser()

  return (
    <div className='bg-gradient-to-b from-[#074240] to-[#12A8A3]'>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/live-tracking' element={<LiveTracking />} />
          <Route path='/news' element={<News />} />
          <Route path='/parks&sancturies' element={<Parks />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/animals' element={<AllSpecies />} />
          <Route path='/games' element={<Games />} />
          <Route path='/animal/:id' element={<AnimalDetailPage />} />
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/community' element={ !user ?  <Login/> : <Layout/>}>
              <Route index element={<Feed/>}/>
              <Route path='messages' element={<Messages/>}/>
              <Route path='messages/:userId' element={<ChatBox/>}/>
              <Route path='connections' element={<Connections/>}/>
              <Route path='discover' element={<Discover/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='profile/:profileId' element={<Profile/>}/>
              <Route path='create-post' element={<CreatePost/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster position='top-center'/>
    </div>
  )
}

export default App