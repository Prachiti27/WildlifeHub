import React from 'react'
import Hero from '../components/Hero'
import KeyFeatures from '../components/KeyFeatures'
import FeaturedAnimals from '../components/FeaturedAnimals'
import FactsCarasouel from '../components/FactsCarasouel'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <KeyFeatures/>
        <FeaturedAnimals/>
        <FactsCarasouel/>
        <Testimonials/>
        <About/>
        <Footer/> 
    </>
  )
}

export default Home
