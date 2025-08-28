import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const About = () => {
    const sectionVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const buttonVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
    }

    return (
        <div>
            <motion.section
                className="bg-white py-24"
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 text-center space-y-12">
                    <motion.div
                        className="bg-white/90 p-8 md:p-12 rounded-2xl shadow-lg space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                    >
                        <motion.h2 className="text-4xl md:text-5xl font-bold text-[#074240] leading-tight">
                            Discover Wildlife Like Never Before
                        </motion.h2>
                        <motion.p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Wildlife Hub brings you closer to the wonders of the natural world. Explore detailed species profiles, track animal movements in real-time, and engage with fun facts and interactive games.
                        </motion.p>
                        <motion.p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Our mission is to connect people with nature and inspire conservation. Whether you’re a wildlife enthusiast, student, photographer, or just curious, Wildlife Hub offers resources and tools to make learning about wildlife engaging and immersive.
                        </motion.p>
                        <motion.p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            With comprehensive information about national parks, habitats, and endangered species, you can discover biodiversity hotspots and gain insights into conservation efforts around the world. Every visit to Wildlife Hub helps you learn, explore, and contribute to the preservation of our planet’s amazing wildlife.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="bg-gradient-to-b from-[#074240] to-[#12A8A3] py-16"
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <ContactForm />

                    <motion.div
                        className="flex flex-col md:flex-row justify-center gap-4"
                        variants={buttonVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link
                            to="/about-us"
                            className="inline-block bg-white text-[#074240] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition text-center"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="/contact-us"
                            className="inline-block bg-white text-[#074240] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition text-center"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

export default About
