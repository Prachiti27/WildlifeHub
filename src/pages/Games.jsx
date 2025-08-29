import React, { useState } from 'react'
import AnimalWordle from '../games/AnimalWordle'
import AnimalDetective from '../games/AnimalDetective'
import WildMatch from '../games/WildMatch'
import wild_match from '../assets/project_images/wild_match.png'
import animal_wordle from '../assets/project_images/animal_wordle.png'
import animal_detective from '../assets/project_images/animal_detective.png'
import { Link } from 'react-router-dom'

const games = [
  {
    id: 1,
    name: "Wild Match",
    img: wild_match,
    component: <WildMatch />,
    description: "Test your memory by matching animal pairs in this fun memory game."
  },
  {
    id: 2,
    name: "Animal Wordle",
    img: animal_wordle,
    component: <AnimalWordle />,
    description: "Guess the hidden animal word in limited attempts like Wordle."
  },
  {
    id: 3,
    name: "Animal Detective",
    img: animal_detective,
    component: <AnimalDetective />,
    description: "Solve clues and identify the animal before moving to the next one."
  }
]

const Games = () => {

  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] flex flex-col items-center py-10 px-4'>
      {
        !selectedGame ? (
          <>
            <h1 className='text-4xl font-bold text-white mb-10'>
              Animal Games Hub
            </h1>

            <p className='text-white text-center max-w-2xl mb-10'>
              Welcome to the Animal Games Hub! Play memory, guessing, and word games to test your knowledge of animals.
              Click any game to start playing and have fun!
            </p>

            <div className='flex flex-wrap justify-center gap-8 mt-12'>
              {
                games.map((game) => (
                  <div
                    key={game.id}
                    className='bg-white rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300'
                    onClick={() => setSelectedGame(game.component)}
                  >
                    <img
                      src={game.img}
                      alt={game.name}
                      className='w-full h-48 object-cover rounded-t-2xl'
                    />
                    <div className='p-4 text-center'>
                      <h2 className='text-xl font-semibold text-gray-800'>
                        {game.name}
                      </h2>
                      <p className='text-gray-500 text-sm mt-2'>
                        {game.description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
        ) : (
          <div className='w-full max-w-4xl'>
            <button
              onClick={() => setSelectedGame(null)}
              className='mb-6 px-4 py-2 bg-white text-[#074240] font-semibold rounded-lg hover:bg-gray-200 transition'
            >
              ← Back to Games
            </button>
            {selectedGame}
          </div>
        )
      }

      {!selectedGame && (
        <Link to='/' className='mt-12 px-6 py-3 bg-white text-[#074240] font-semibold rounded-lg shadow hover:bg-gray-200 transition'>
          ← Back to Home
        </Link>
      )}

    </div>
  )
}

export default Games
