import React, { useState } from 'react'
import { motion } from 'framer-motion'

const animals = [
  "tiger", "zebra", "lion", "panda", "koala", "rhino", 
  "camel", "otter", "whale", "snake", "shark", "moose", 
  "horse", "beaver", "eagle"
]

const MAX_ATTEMPTS = 6

const AnimalWordle = () => {
  const [target] = useState(
    animals[Math.floor(Math.random() * animals.length)]
  )

  const [attempts, setAttempts] = useState([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [feedback, setFeedback] = useState("")

  const checkGuess = () => {
    if (currentGuess.length !== target.length) {
      setFeedback(`Word must be ${target.length} letters`)
      return
    }

    const result = currentGuess.split("").map((char, idx) => {
      if (char === target[idx]) return "correct"
      else if (target.includes(char)) return "present"
      else return "absent"
    })

    setAttempts([...attempts, { word: currentGuess, result }])
    setCurrentGuess("")
    setFeedback("")

    if (currentGuess.toLowerCase() === target.toLowerCase()) {
      setFeedback("🎉 Correct! You guessed the animal")
    } else if (attempts.length + 1 >= MAX_ATTEMPTS) {
      setFeedback(`❌ Game over! The animal was "${target}"`)
    }
  }

  return (
    <div className='min-h-screen bg-white flex flex-col items-center py-10 px-4 shadow'>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold text-[#074240] mb-6 text-center'
      >
        Animal Wordle 🦁
      </motion.h1>

      <motion.div
        className='bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md mb-6'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='grid gap-2 mb-4'>
          {attempts.map((attempt, i) => (
            <div key={i} className='flex gap-1 justify-center'>
              {attempt.word.split("").map((char, idx) => {
                let bgColor = "bg-gray-300";
                if (attempt.result[idx] === "correct") bgColor = "bg-green-400";
                else if (attempt.result[idx] === "present") bgColor = "bg-yellow-400";
                else if (attempt.result[idx] === "absent") bgColor = "bg-gray-300";

                return (
                  <motion.div
                    key={idx}
                    className={`w-10 h-10 flex items-center justify-center rounded font-bold text-white ${bgColor}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    {char.toUpperCase()}
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>

        <input
          type='text'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
          placeholder={`Enter ${target.length}-letter animal`}
          className='w-full px-4 py-3 rounded-lg mb-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 font-medium'
        />

        <motion.button
          onClick={checkGuess}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition'
        >
          Submit
        </motion.button>

        {feedback && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 font-bold text-lg ${feedback.includes('Correct') ? 'text-green-700' : 'text-red-600'} text-center`}
          >
            {feedback}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default AnimalWordle;
