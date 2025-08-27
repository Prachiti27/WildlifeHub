import React from 'react'
import HeroImg from '../assets/project_images/wild_hero.jpg'
import { motion, useViewportScroll, useTransform, delay } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [0, 500], [0, 100])

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: .2 * i, duration: 0.5 }
        })
    }

    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const subheadingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
    }

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImg})`, y }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 md:px-8">
                <motion.nav
                    className="absolute top-0 left-0 w-full p-6 flex items-center text-white/80"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="text-2xl md:text-3xl font-bold tracking-wide"
                        variants={navVariants}
                    >
                        WILDLIFE HUB
                    </motion.div>
                    <div className="ml-auto flex space-x-6 md:space-x-10 text-lg">
                        {['Live Tracking', 'Species', 'Parks', 'News', 'About'].map((text, i) => (
                            <motion.div key={i} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                                <Link
                                    className="hover:underline hover:text-white transition-all duration-300"
                                    to={
                                        text === 'Live Tracking'
                                            ? '/live-tracking'
                                            : text === 'Species'
                                                ? '/animals'
                                                : text === 'Parks'
                                                    ? '/parks&sancturies'
                                                    : text === 'News'
                                                        ? '/news'
                                                        : '/about-us'
                                    }
                                >
                                    {text}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.nav>

                <div className="flex flex-col items-center gap-6 md:gap-8 mt-12 md:mt-0">
                    <motion.h1
                        className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-snug md:leading-tight"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        DISCOVER THE WILD LIKE NEVER BEFORE!
                    </motion.h1>
                    <motion.p
                        className="text-white/80 text-base md:text-lg lg:text-xl tracking-wide max-w-2xl"
                        variants={subheadingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Discover the secrets of the wild — search for species, explore their stories, and track their movements.
                    </motion.p>
                    <motion.div
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link
                            to="/animals"
                            className="mt-4 inline-flex items-center gap-2 bg-transparent hover:bg-white/20 border border-white text-white font-semibold text-2xl md:text-3xl px-8 py-4 rounded-full transition-all duration-300"
                        >
                            Explore <ArrowRight size={28} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
