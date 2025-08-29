import React, { useState } from 'react'
import { motion } from 'framer-motion'

const animals = [
    { 
        name: "Elephant", 
        clues: ["I have a trunk", "I am the largest land animal", "I have tusks"] 
    },
    { 
        name: "Tiger", 
        clues: ["I have stripes", "I am a big cat", "I roar loudly"] 
    },
    { 
        name: "Kangaroo", 
        clues: ["I can jump very high", "I carry babies in a pouch", "I live in Australia"] 
    },
    { 
        name: "Penguin", 
        clues: ["I cannot fly", "I live in cold regions", "I waddle when I walk"] 
    },
    { 
        name: "Giraffe", 
        clues: ["I have a long neck", "I eat leaves from trees", "I have spots"] 
    },
    { 
        name: "Dolphin", 
        clues: ["I live in the ocean", "I am very intelligent", "I can jump out of water"] 
    },
    { 
        name: "Lion", 
        clues: ["I am called the king of the jungle", "I live in prides", "I have a mane"] 
    },
    { 
        name: "Monkey", 
        clues: ["I swing on trees", "I eat bananas", "I am very playful"] 
    },
    { 
        name: "Zebra", 
        clues: ["I have black and white stripes", "I live in Africa", "I run very fast"] 
    },
    { 
        name: "Owl", 
        clues: ["I am nocturnal", "I can rotate my head", "I hoot at night"] 
    },
    { 
        name: "Rabbit", 
        clues: ["I have long ears", "I like to hop", "I eat carrots"] 
    },
    { 
        name: "Frog", 
        clues: ["I can jump far", "I live near water", "I croak"] 
    },
    { 
        name: "Bear", 
        clues: ["I hibernate in winter", "I am very strong", "I love honey"] 
    },
    { 
        name: "Snake", 
        clues: ["I have no legs", "I slither", "Some of me are venomous"] 
    },
    { 
        name: "Peacock", 
        clues: ["I have colorful feathers", "I can fan my tail", "I live in India"] 
    }
]

const AnimalDetective = () => {
    const [current, setCurrent] = useState(0)
    const [showHint, setShowHint] = useState(0)
    const [guess, setGuess] = useState("")
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState("")

    const handleGuess = () => {
        if (guess.toLowerCase() === animals[current].name.toLowerCase()) {
            setFeedback("✅ Correct!")
            setScore(score + 1)
        } else {
            setFeedback(`❌ Wrong! It's ${animals[current].name}`)
        }

        setTimeout(() => {
            setGuess("")
            setFeedback("")
            setShowHint(0)
            setCurrent((prev) => (prev + 1) % animals.length)
        }, 1500)
    }

    const nextClue = () => {
        if (showHint < animals[current].clues.length - 1) {
            setShowHint(showHint + 1)
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] flex flex-col items-center justify-start py-10 px-4'>
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='text-4xl text-white font-bold mb-6 text-center'
            >
                Animal Detective 🕵️‍♂️
            </motion.h1>

            <motion.div
                className='flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-8 shadow-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className='text-white font-semibold text-lg mr-2'>Score:</span>
                <span className='bg-white text-[#074240] font-bold px-3 py-1 rounded-full text-lg'>{score}</span>
            </motion.div>

            <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md text-center'
            >
                <p className='text-xl font-semibold text-[#074240] mb-6'>{animals[current].clues[showHint]}</p>

                {showHint < animals[current].clues.length - 1 && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextClue}
                        className='mb-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition'
                    >
                        Next Clue
                    </motion.button>
                )}

                <input
                    type='text'
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder='Your guess...'
                    className='w-full px-4 py-3 rounded-lg mb-4 border-2 border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 font-medium'
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGuess}
                    className='w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition'
                >
                    Submit
                </motion.button>

                {feedback && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-4 font-bold text-lg ${feedback.includes('Correct') ? 'text-green-700' : 'text-red-600'}`}
                    >
                        {feedback}
                    </motion.p>
                )}
            </motion.div>
        </div>
    )
}

export default AnimalDetective;
