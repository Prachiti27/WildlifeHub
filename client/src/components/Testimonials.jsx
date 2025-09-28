import React from 'react'
import user1 from '../assets/project_images/user1.png'
import user2 from '../assets/project_images/user2.png'
import user3 from '../assets/project_images/user3.png'
import user4 from '../assets/project_images/user4.png'
import { motion } from 'motion/react'

const testimonials = [
    {
        name: "Sarah M.",
        role: "Wildlife Enthusiast",
        desc: "ildlife Hub is my go-to platform for learning about animals! The interactive facts and live tracking make exploring wildlife so fun and educational.",
        img: user4
    },
    {
        name: "Raj P.",
        role: "Nature Photographer",
        desc: "The detailed animal and national park info on Wildlife Hub is a game-changer for planning my photography trips. Highly recommended.",
        img: user1
    },
    {
        name: "Jack J.",
        role: "Conservation Volunteer",
        desc: "I love how Wildlife Hub keeps me updated with the latest news on endangered species and conservation efforts. It’s both informative and inspiring.",
        img: user2
    },
    {
        name: "Arjun S.",
        role: "Students & Wildlife lover",
        desc: "The games and quizzes make learning about animals super fun. Wildlife Hub makes education interactive and engaging for all ages.",
        img: user3
    }
]

const Testimonials = () => {
    return (
        <section className='py-16'>
            <div className='max-w-6xl mx-auto px-6'>
                <motion.h2
                    className='text-3xl md:text-4xl font-bold text-white text-center mb-12'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What Our Users Say 
                </motion.h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        testimonials.map((t,i)=>(
                            <motion.div
                                key={i}
                                className='bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center'
                                initial={{opacity:0,y:30}}
                                whileInView={{opacity:1,y:0}}
                                transition={{duration:0.5,delay:i*0.2}}
                                viewport={{once:true}}
                            >
                                <img
                                    src={t.img}
                                    slt={t.name}
                                    className='w-20 h-20 rounded-full object-cover mb-4'
                                />
                                <h3 className='text-lg font-semibold'>{t.name}</h3>
                                <p className='text-sm text-gray-500 mb-4'>{t.role}</p>
                                <p className='text-gray-700 text-sm'>{t.desc}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials
