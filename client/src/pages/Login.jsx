import React from 'react'
import grp_user from '../assets/group_users.png'
import { Star } from 'lucide-react'
import {SignIn} from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
        <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:p-40'>
            <p className='text-white/90 font-bold text-3xl'>Wildlife Hub</p>
            <div>
                <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
                    <img src={grp_user} className='h-8 md:h-10'/>
                    <div>
                        <div className='flex'>
                            {Array(5).fill(0).map((_,i)=>(<Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500'/>))}
                        </div>
                        <p className='text-white/90'>Used by 10k+ Wildlife enthusiast</p>
                    </div>
                </div>

                <h1 className='text-3xl md:text-6xl md:pb-2 font-bold text-white/90'>
                    Together we share, protect, and celebrate the wild.
                </h1>
                <p className='text-xl md:text-3xl text-white/85 max-w-72 md:max-w-md'>
                    WildlifeHub – Discover, Connect, Conserve.
                </p>
            </div>
            <span className='md:h-10'></span>
        </div>

        <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
            <SignIn/>
        </div>
    </div>
  )
}

export default Login
