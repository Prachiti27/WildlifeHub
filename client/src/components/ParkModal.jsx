import React from 'react'
import { motion } from 'motion/react'

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 100 } }
}

const ParkModal = ({ park, onClose }) => {

    if (!park) return null

    return (
        <motion.div
            className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50'
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
                variants={modalVariants}
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-[#074240] font-bold text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={park.images} alt={park.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <h2 className="text-[#074240] text-2xl font-bold mb-2">{park.name}</h2>
                <p className="text-[#12A8A3] font-semibold mb-2">📍 {park.location}</p>
                <p><span className="font-bold">Established:</span> {park.established}</p>
                <p><span className="font-bold">Habitats:</span> {park.habitats.join(", ")}</p>
                <p><span className="font-bold">Fauna:</span> {park.fauna.join(", ")}</p>
                <p><span className="font-bold">Flora:</span> {park.flora.join(", ")}</p>
                <p><span className="font-bold">Best Time to Visit:</span> {park.best_time_to_visit}</p>
            </motion.div>
        </motion.div>
    )
}

export default ParkModal
