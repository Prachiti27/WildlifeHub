import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const allFacts = [
    "Elephants are the only animals that can't jump",
    "Tigers have striped skin, not just striped fur",
    "Koalas sleep up to 22 hours a day to conserve energy",
    "Octopuses have three hearts and blue blood",
    "Peacocks can have more than 200 eyespots on their tail feathers",
    "Sea turtles can live over 100 years and navigate back to the beach where they were born",
    "Pandas eat 12-38 kg of bamboo every day to get enough nutrition",
    "Wolves communicate using howls to assemble the pack and warn intruders",
    "Sloths can hold their breadth longer than dolphins - up to 40 minutes underwater",
    "Bees communicate with a waggle dance to show the location of flowers",
    "Dolphins sleep with ne eye open to stap alert for predators",
    "Chameleons can move their eyes independently to look in two directions at once",
    "Owls hace asymmetrical ears that help them pinpoint prey even in complete darkness",
    "Hummingbirds are the only birds that can fly backwards",
    "Giraffes have the same number of neck vertebrae a humans - just much longer!",
    "Cheetahs can accelerate from 0 to 60 mph in just 3 seconds, faster than most sports cars",
    "Frogs absorb water through their skin instead on drinking it",
    "Penguins propose to their mates with a pebble",
    "Ants can carry objects 50 times their body weight",
    "Jellyfish have been around for more than 500 million year - older than dinosaurs"
]

const getRandomFacts = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
}

const FactsCarasouel = () => {

    const [facts, setFacts] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setFacts(getRandomFacts(allFacts, 10))
    }, [])

    const nextFact = () => {
        setIndex((prev) => (prev + 1) % facts.length)
    }

    const prevFact = () => {
        setIndex((prev) => (prev - 1 + facts.length) % facts.length)
    }

    return (
        <section className='bg-white py-16 h-[480px]'>
            <div className='max-w-6xl mx-auto px-6 relative'>
                <motion.h2
                    className='text-3xl font-bold text-[#074240] text-center mb-24'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Fun WildLife Facts
                </motion.h2>

                <div className='relative'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={index}
                            className='bg-gradient-to-b from-[#074240] to-[#12A8A3] text-white p-8 rounded-2xl shadow-lg text-center min-h-[150px] flex items-center justify-center relative'
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='text-lg'>{facts[index]}</p>

                            <motion.button
                                onClick={prevFact}
                                className='absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-[#074240] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-100 transition duration-300'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft size={28} />
                            </motion.button>

                            <motion.button
                                onClick={nextFact}
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-[#074240] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-100 transition duration-300'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowRight size={28} />
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default FactsCarasouel
