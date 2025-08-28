import React from 'react'
import tiger from '../assets/project_images/tiger.jpg'
import panda from '../assets/project_images/panda.jpg'
import turtle from '../assets/project_images/turtle.jpg'
import peacock from '../assets/project_images/peacock.png'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const featuredAnimals = [
    {
        id: 1,
        name: "Bengal Tiger",
        desc: "The majestic predator of India’s forests, known for its strength, agility, and iconic orange coat with black stripes",
        img: tiger
    },
    {
        id: 2,
        name: "Giant Panda",
        desc: "A symbol of peace and conservation, spending most of its day munching on bamboo in the misty mountains of China",
        img: panda
    },
    {
        id: 3,
        name: "Indian Peacock",
        desc: "India’s national bird, famous for its dazzling feather display and vibrant colors during courtship",
        img: peacock
    },
    {
        id: 4,
        name: "Sea Turtle",
        desc: "Ancient ocean voyagers, playing a vital role in marine ecosystems and traveling thousands of miles across oceans.",
        img: turtle
    }
]

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
}

const FeaturedAnimals = () => {
    return (
        <section className='relative py-16 bg-gradient-to-b from-[#074240] to-[#12A8A3]'>
            <div className='max-w-6xl mx-auto px-6'>
                <motion.h2
                    className='text-3xl md:text-4xl font-bold text-white text-center mb-12'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Featured Animals
                </motion.h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        featuredAnimals.map((animal, i) => (
                            <motion.div
                                key={animal.id}
                                className='bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300'
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    src={animal.img}
                                    alt={animal.name}
                                    className='h-32 w-32 object-cover rounded-full mb-4'
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                />
                                <h3 className='text-xl font-semibold text-[#074240] mb-2'>
                                    {animal.name}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {animal.desc}
                                </p>
                            </motion.div>
                        ))
                    }
                </div>

                <motion.a
                    href="/animals"
                    className='absolute bottom-3 right-4 bg-transparent bg-opacity-20 backdrop-blur-md text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-opacity-40 transition duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore More Animals
                </motion.a>
            </div>
        </section>
    )
}

export default FeaturedAnimals
