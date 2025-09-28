import React from 'react'
import { motion } from 'motion/react'

const ParkCard = ({ park, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white rounded-xl shadow-md overflow-hidden cursor-pointer'
        >
            <img
                src={park.images}
                alt={park.name}
                className='w-full h-48 object-cover'
            />
            <div className='p-4'>
                <h2 className='text-[#074240] font-bold text-lg'>
                    {park.name}
                </h2>
                <p className='text=[#12A8A3]'>📍 {park.location}</p>
                <button
                    onClick={onClick}
                    className='mt-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#074240] to-[#12A8A3] text-white font-semibold hover:[#074240] transition-colors'
                >
                    See Details
                </button>
            </div>
        </motion.div>
    )
}

export default ParkCard
