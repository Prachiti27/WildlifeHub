import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(favs)
  }, [])

  const removeFavorite = id => {
    const updated = favorites.filter(a => a.id !== id)
    localStorage.setItem('favorites', JSON.stringify(updated))
    setFavorites(updated)
  }

  if (favorites.length === 0) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-[#074240] text-white p-6'>
        <h2 className='text-3xl mb-4'>No Favorites Yet</h2>
        <Link to="/animals" className='bg-[#12A8A3] px-6 py-2 rounded-full hover:opacity-90'>Browse Animals</Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] text-white p-6'>
      <h1 className='text-4xl font-bold mb-6 text-center'>My Favorite Animals</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {favorites.map(animal => (
          <motion.div
            key={animal.id}
            className='bg-white text-[#074240] rounded-2xl shadow-lg overflow-hidden flex flex-col'
            layout
          >
            <img src={animal.image} alt={animal.name} className='w-full h-64 object-cover'/>
            <div className='p-4 flex flex-col flex-1'>
              <h2 className='text-2xl font-bold mb-2'>{animal.name}</h2>
              <p className='text-sm flex-1'>{animal.description.slice(0, 100)}...</p>
              <div className='mt-4 flex gap-2'>
                <Link to={`/animal/${animal.id}`} className='px-4 py-2 bg-[#12A8A3] text-white rounded-lg hover:opacity-90'>
                  View
                </Link>
                <button onClick={() => removeFavorite(animal.id)} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-90'>
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
