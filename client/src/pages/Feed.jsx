import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'
import { useAuth } from '@clerk/clerk-react'
import api from '../api/axios.js'
import toast from 'react-hot-toast'

const Feed = () => {

    const [feeds,setFeeds] = useState([])
    const [loading,setLoading] = useState(true)
    const {getToken} = useAuth()

    const fetchFeeds = async () => {
        try {
          setLoading(true)
          const {data} = await api.get('/api/post/feed',{
            headers: {Authorization: `Bearer ${await getToken()}`}
          })  

          if(data.success){
            setFeeds(data.posts)
          }
          else{
            toast.error(data.message)
          }
        } 
        catch (error) {
          toast.error(error.message)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchFeeds()
    },[])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex flex-col xl:flex-row xl:items-start xl:justify-center items-start justify-between xl:gap-8'>
      <div className='w-full xl:w-3/5 flex flex-col items-center'>
        <div className='flex flex-col items-center text-center gap-2 mb-8'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-[#074240]'>Wildlife Connect</h1>
            <h3 className='text-lg md:text-2xl font-medium text-slate-700 max-w-2xl'>Join hands with fello explorers, storyrellers, and conservationists</h3>
        </div>
        <div className='p-4 space-y-6'>
            {
                feeds.map((post)=>(
                    <PostCard key={post._id} post={post}/>
                ))
            }
        </div>
      </div>

      <div className='max-xl:hidden sticky top-0'>
        <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
            <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
            <img src={assets.sponsored_img} className='w-75 h-50 rounded-md'/>
            <p className='text-slate-600'>Wildlife Trust of India (WTI)</p>
            <p className='text-slate-400'>An NGO dedicated to protecting India’s wildlife and habitats through crisis response, species recovery, and securing animal corridors for safe movement.</p>
        </div>
        
        <RecentMessages/>
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default Feed
