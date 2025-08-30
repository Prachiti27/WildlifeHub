import React, { useState } from 'react'
import ParkCard from '../components/ParkCard'
import ParkModal from '../components/ParkModal'
import parksData from '../assets/park.json'
import { Search } from 'lucide-react'
import { motion } from 'motion/react'

const Parks = () => {

  const [selectedPark, setSelectedPark] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filterType, setFilterType] = useState("All")

  const parksPerPage = 9

  const getParkType = (park) => {
    if (park.name.toLowerCase().includes("national park")) return "National Park"
    if (park.name.toLowerCase().includes("wildlife sanctuary")) return "Wildlife Sanctuary"
    return "Other"
  }

  const filteredParks = parksData.filter((park) => {
     const matchesSearch = park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    park.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType =
      filterType === "All" || getParkType(park) === filterType

    return matchesSearch && matchesType
  })

  const indexOfLastPark = currentPage * parksPerPage
  const indexOfFirstPark = indexOfLastPark - parksPerPage
  const currentParks = filteredParks.slice(indexOfFirstPark, indexOfLastPark)
  const totalPages = Math.ceil(filteredParks.length / parksPerPage)

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] p-6">
      <motion.h1
        className="text-white text-4xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        National Parks & Wildlife Sanctuaries
      </motion.h1>

      <motion.p
        className="text-white/80 text-center mb-6 text-lg"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Explore the rich biodiversity of India’s national parks and wildlife sanctuaries. Click on a park to see detailed information about habitats, fauna, flora, and the best time to visit.
      </motion.p>

      <motion.div
        className="relative flex justify-center mb-8 w-full max-w-md mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={20} />
        <input
          type="text"
          placeholder=" Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 p-3 rounded-full border border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
        />
      </motion.div>

      <div className="flex justify-center gap-4 mb-6">
        {["All", "National Park", "Wildlife Sanctuary"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilterType(type)
              setCurrentPage(1)
            }}
            className={`px-4 py-2 rounded-full border-2 ${filterType === type
              ? "bg-[#12A8A3] text-white border-[#12A8A3]"
              : "bg-transparent text-white border-white"
              } hover:bg-[#074240] hover:border-[#12A8A3] transition-colors`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentParks.length > 0 ? (
          currentParks.map((park) => (
            <motion.div
              key={park.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <ParkCard park={park} onClick={() => setSelectedPark(park)} />
            </motion.div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No parks found.
          </p>
        )}
      </div>

      {filteredParks.length > parksPerPage && (
        <div className="flex justify-center items-center mt-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#12A8A3] text-white rounded-full disabled:opacity-50 hover:bg-[#074240] transition-colors"
          >
            Previous
          </motion.button>
          <span className="text-white font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#12A8A3] text-white rounded-full disabled:opacity-50 hover:bg-[#074240] transition-colors"
          >
            Next
          </motion.button>
        </div>
      )}

      {selectedPark && (
        <ParkModal park={selectedPark} onClose={() => setSelectedPark(null)} />
      )}
    </div>
  )
}

export default Parks
