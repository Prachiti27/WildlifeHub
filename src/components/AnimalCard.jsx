import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const AnimalCard = ({ animal }) => {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 18px 30px rgba(2,8,23,0.12" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className='bg-white rounded-2xl overflow-hidden cursor-pointer'
        >
            <Link to={`/animal/${animal.id}`} className='block'>
                <motion.img
                    src={animal.image}
                    alt={animal.name}
                    className='w-full h-48 object-cover'
                    layoutId={`image-${animal.id}`}
                />

                <div className='p-4 text-[#074240]'>
                    <motion.h3 className='text-xl font-bold mb-1' layoutId={`title-${animal.id}`}>
                        {animal.name}
                    </motion.h3>

                    <p className='text-sm'><span className='font-semibold'>Food:</span>{animal.food}</p>
                    <p className='text-sm'><span className='font-semibold'>Region:</span>{animal.region}</p>
                    <p className='text-sm mt-1'>
                        <span className='font-semibold'>Conservation:</span>{"  "}
                        <span className='text-[#12A8A3]'>{animal.conservation_status}</span>
                    </p>
                </div>
            </Link>
        </motion.article>
    )
}

export default AnimalCard
