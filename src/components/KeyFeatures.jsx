import React from 'react'
import live_tracking_img from '../assets/project_images/live_tracking_f.svg'
import info_img from '../assets/project_images/info_f.svg'
import game_img from '../assets/project_images/game_f.svg'
import news_img from '../assets/project_images/news_updates_f.svg'
import { motion } from 'motion/react'

const features = [
    {
        id:1,
        name:"Live Animal Tracking",
        desc:"Track migratory patterns or movements of tagged animals",
        img:live_tracking_img
    },
    {
        id:2,
        name:"Wildlife News & Updates",
        desc:"Latest news related to wildlife conservation, discoveries, rescues, endangered species updates",
        img:news_img
    },
    {
        id:3,
        name:"Wildlife Knowledge Hub",
        desc:"A comprehensive directory of animals and national parks with detailed info, maps, key species, and powerful search & filter options",
        img:info_img
    },
    {
        id:4,
        name:"Fun Facts & Interactive Content",
        desc:"Discover fun animal facts and engage in interactive games like “Guess the Animal” for an enjoyable learning experience",
        img:game_img
    }
]

const cardVariants = {
    hidden : { opacity: 0, y:40},
    visible : (i) => ({
        opacity : 1,
        y : 0,
        transition : {delay: i*0.2, duration: 0.6, ease:"easeOut"}
    })
}

const KeyFeatures = () => {
  return (
    <section className='relative py-16'>
        <div className='relative z-10 max-w-6xl mx-auto px-6'>
            <motion.h2
                initial={{opacity: 0,y: -20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                className='text-3xl font-bold text-center text-white mb-12'
            >
                Key Features
            </motion.h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    features.map((feature,i)=>(
                        <motion.div
                            key={feature.id}
                            className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300'
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true}}
                            custom={i}
                        >
                            <motion.img
                                src={feature.img}
                                alt={feature.name}
                                className='h-20 w-20 mb-4'
                                whileHover={{scale:1.1, rotate: 5}}
                                transition={{type:"spring",stiffness: 200}}
                            />
                            <h3 className='text-xl font-semibold text-[#074240] mb-2'>
                                {feature.name}
                            </h3>
                            <p className='text-gray-600 text-sm'>{feature.desc}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default KeyFeatures
