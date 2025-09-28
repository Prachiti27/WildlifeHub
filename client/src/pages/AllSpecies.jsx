import React, { useState } from 'react'
import { motion } from 'motion/react'
import animals from '../assets/animals.json'
import AnimalCard from '../components/AnimalCard'

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.36 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22 } }
}

const AllSpecies = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const animalsPerPage = 15

  const filteredAnimals = animals.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.region.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = statusFilter === "All" || a.conservation_status === statusFilter

    return matchesSearch && matchesFilter
  })

  const indexOfLast = currentPage * animalsPerPage
  const indexOfFirst = indexOfLast - animalsPerPage
  const currentAnimals = filteredAnimals.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage)

  return (
    <motion.main
      className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] text-white px-6 py-10'
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className='text-3xl font-bold text-center mb-2'>
        Wildlife Explorer
      </h1>

      <p className='text-center text-white/90 mb-8'>
        Discover fascinating animals, their habitats, and conservation status.
      </p>

      <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
        <input
          type='text'
          placeholder='Search by name or region...'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className='w-full md:w-1/2 px-6 py-4 border border-gray-300 rounded-full shadow-sm focus:outline-none'
        />

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value)
            setCurrentPage(1)
          }}
          className='w-full md:w-1/4 px-6 py-4 border border-gray-300 rounded-full shadow-sm focus:outline-none'
        >
          <option value="All" className='text-[#074240]'>All Conservation Status</option>
          <option value="Vulnerable" className='text-[#074240]'>Vulnerable</option>
          <option value="Endangered" className='text-[#074240]'>Endangered</option>
          <option value="Critically Endangered" className='text-[#074240]'>Critically Endangered</option>
          <option value="Near Threatened" className='text-[#074240]'>Near Threatened</option>
          <option value="Least Concern" className='text-[#074240]'>Least Concern</option>
        </select>
      </div>

      {
        currentAnimals.length > 0 ?
          (
            <motion.div
              className='grid md:grid-cols-3 gap-6'
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {
                currentAnimals.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))
              }
            </motion.div>
          ) :
          (
            <p className='text-center mt-10 text-lg text-gray-200'>
              No animals match your search/filter
            </p>
          )
      }

      {
        totalPages > 1 && (
          <div className='flex justify-center mt-10 space-x-2'>
            {
              Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-4 py-2 rounded-lg ${currentPage === idx + 1
                    ? "bg-[#12A8A3] text-white"
                    : "bg-white text-[#074240]"
                    }`}
                >
                  {idx + 1}
                </button>
              ))
            }
          </div>
        )
      }
    </motion.main>
  )
}

export default AllSpecies
