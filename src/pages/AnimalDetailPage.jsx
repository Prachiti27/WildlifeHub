import React from 'react'
import { motion } from 'motion/react'
import animals from '../assets/animals.json'
import { Link, useParams } from 'react-router-dom'

const detailVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { suration: 0.36 } },
    exit: { opacity: 0, y: -12, tranition: { duration: 0.22 } }
}

const AnimalDetailPage = () => {

    const { id } = useParams()
    const animal = animals.find((a) => a.id.toString() === id)

    if (!animal) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-[#074240] text-white'>
                <h2 className='text-2xl'>Animal not found</h2>
            </div>
        )
    }

    return (
        <motion.div
            className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] text-white p-6 flex items-center justify-center'
            variants={detailVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className='max-w-3xl mx-auto bg-white text-[#074240] rounded-2xl shadow-lg overflow-hidden'
                layout
            >
                <motion.img
                    src={animal.image}
                    alt={animal.name}
                    className='w-full h-full object-contain'
                    layoutId={`image-${animal.id}`}
                />

                <motion.div className='p-6'>
                    <motion.h2 className='text-3xl font-bold mb-4' layoutId={`title-${animal.id}`}>
                        {animal.name}
                    </motion.h2>
                    <p className='mb-2'><span className='font-semibold'>Scientific Name:</span> {animal.scientific_name}</p>
                    <p className="mb-2"><span className="font-semibold">Type:</span> {animal.type}</p>
                    <p className="mb-2"><span className="font-semibold">Habitat:</span> {animal.habitat}</p>
                    <p className="mb-2"><span className="font-semibold">Food:</span> {animal.food}</p>
                    <p className="mb-2"><span className="font-semibold">Region:</span> {animal.region}</p>

                    <p className="mb-2">
                        <span className="font-semibold">Conservation Status:</span>{" "}
                        <span className="text-[#12A8A3]">{animal.conservation_status}</span>
                    </p>

                    <p className="mb-2"><span className="font-semibold">Threats:</span> {animal.status_threats}</p>

                    <p className="mt-4">{animal.description}</p>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6">
                        <Link to="/" className="inline-block bg-[#12A8A3] text-white px-6 py-2 rounded-lg hover:opacity-95">
                            ← Back to Animals
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AnimalDetailPage
