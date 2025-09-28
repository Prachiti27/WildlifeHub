import React, { useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import { useUser, useAuth } from '@clerk/clerk-react'
import Layout from './pages/Layout'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from './features/user/userSlice.js'
import { fetchConnections } from './features/connections/connectionSlice.js'
import { addMessage } from './features/messages/messagesSlice.js'
import Notification from './components/Notification.jsx'

const App = () => {

  const { user } = useUser()
  const { getToken } = useAuth()
  const {pathname} = useLocation()
  const pathnameRef = useRef(pathname)

  const dispatch = useDispatch()

  useEffect(() => {

    const fetchData = async () => {
      if (user) {
        const token = await getToken()
        dispatch(fetchUser(token))
        dispatch(fetchConnections(token))
      }
    }
    fetchData()
  }, [user, getToken, dispatch])

  useEffect(()=>{
    pathnameRef.current = pathname
  },[pathname])

  useEffect(()=>{
    if(user){
      const eventSource = new EventSource(import.meta.env.VITE_BASEURL + '/api/messages/'+user.id)

      eventSource.onmessage = (event) => {
        const message = JSON.parse(event.data)

        if(pathnameRef.current === ('/messages/' + message.from_user_id.id)){
          dispatch(addMessage(message))
        }else{
          toast.custom((t)=>(
            <Notification t={t} message={message}/>
          ), {position:'bottom-right', duration:1000})
        }
      }
      return () => {
        eventSource.close()
      }
    }
  },[user, dispatch])

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
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/community' element={!user ? <Login /> : <Layout />}>
            <Route index element={<Feed />} />
            <Route path='messages' element={<Messages />} />
            <Route path='messages/:userId' element={<ChatBox />} />
            <Route path='connections' element={<Connections />} />
            <Route path='discover' element={<Discover />} />
            <Route path='profile' element={<Profile />} />
            <Route path='profile/:profileId' element={<Profile />} />
            <Route path='create-post' element={<CreatePost />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster position='top-center' />
    </div>
  )
}

export default App