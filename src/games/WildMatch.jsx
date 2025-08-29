import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const animals = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"]

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5)
}

const WildMatch = () => {

    const [cards, setCards] = useState([])
    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [matches, setMatches] = useState(0)

    useEffect(() => {
        const doubled = [...animals, ...animals]

        setCards(
            shuffleArray(doubled).map((animal, idx) => ({
                id: idx,
                animal,
                flipped: false,
                matched: false
            }))
        )
    }, [])

    const handleClick = (card) => {
        if (disabled || card.flipped || card.matched) return

        const updatedCards = cards.map((c) => c.id === card.id ? { ...c, flipped: true } : c)

        setCards(updatedCards)

        if (!firstCard) {
            setFirstCard(card)
        }
        else if (!secondCard) {
            setSecondCard(card)
            setDisabled(true)

            if (firstCard.animal === card.animal) {
                setCards((prev) =>
                    prev.map((c) => c.animal === card.animal ? { ...c, matched: true } : c)
                )
                setMatches((prev) => prev + 1)
                resetTurn()
            }
            else {
                setTimeout(() => {
                    setCards((prev) =>
                        prev.map((c) =>
                            c.id === firstCard.id || c.id === card.id
                                ? { ...c, flipped: false }
                                : c
                        )
                    )
                    resetTurn()
                }, 1000)
            }
        }
    }

    const resetTurn = () => {
        setFirstCard(null)
        setSecondCard(null)
        setDisabled(false)
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] flex flex-col items-center py-10'>
            <h1 className='text-4xl text-white font-bold mb-2'>Wild Match</h1>
            <h2 className='text-lg text-white mb-6'>
                Matches: <span className='font-semibold'>{matches}</span> / {animals.length}
            </h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    cards.map((card) => (
                        <motion.div
                            key={card.id}
                            className='w-24 h-24 relative cursor-pointer'
                            onClick={() => handleClick(card)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.div
                                className='absolute w-full h-full rounded-xl flex items-center justify-center text-3xl bg-white backface-hidden'
                                animate={{ rotateY: card.flipped || card.matched ? 180 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                ❓
                            </motion.div>

                            <motion.div
                                className='absolute w-full h-full rounded-xl flex items-center justify-center text-3xl bg-[#4cdad6] backface-hidden'
                                animate={{ rotateY: card.flipped || card.matched ? 0 : -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                {card.animal}
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default WildMatch
