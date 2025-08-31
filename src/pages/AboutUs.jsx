import React from 'react'
import { motion } from 'motion/react'
import mission_img from '../assets/project_images/bird_abt_pg.jpg'
import vision_img from '../assets/project_images/bear_abt_pg.jpg'
import strategy_img from '../assets/project_images/ele_about_pg.jpg'
import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

const AboutUs = () => {

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 }
    }
  }

  return (
    <div className='bg-gradient-to-b from-[#074240] to-[#12A8A3] text-white py-16 px-6 md:px-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold'>ABOUT US</h2>
        <p className='mt-2 text-lg md:text-xl'>
          Our mission is to preserve biodiversity and build a conscious society
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 mb-12'>
        <motion.div
          className='text-white rounded-lg p-6 flex flex-col items-center'
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once:true, amount:0.5}}
          variants={cardVariants}
        >
          <img
            src={mission_img}
            className='mb-4 rounded-lg'
          />
          <h3 className='font-bold text-xl mb-2'>MISSION</h3>
          <p className='text-center'>
            To protect biodiversity through research, community engagement, and sustainable action
          </p>
        </motion.div>

        <motion.div
          className=' text-white rounded-lg p-6 flex flex-col items-center'
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once:true, amount:0.5}}
          variants={cardVariants}
        >
          <img
            src={vision_img}
            className='mb-4 rounded-lg'
          />
          <h3 className='font-bold text-xl mb-2'>VISION</h3>
          <p className='text-center'>
            To create a world where wildlife and people live in harmony
          </p>
        </motion.div>

        <motion.div
          className='text-white rounded-lg p-6 flex flex-col items-center'
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once:true, amount:0.5}}
          variants={cardVariants}
        >
          <img
            src={strategy_img}
            className='mb-4 rounded-lg'
          />
          <h3 className='font-bold text-xl mb-2'>STRATEGY</h3>
          <p className='text-center'>
            We combine science, education, and local collaboration to drive
            effective conservation
          </p>
        </motion.div>
      </div>

      <div className='text-center mb-12'>
        <h3 className='text-2xl font-bold mb-6'>OUR CORE VALUES</h3>
        <div className='grid md:grid-cols-4 gap-6 text-white'>
          <div>
            <p className='font-semibold'>⚖️ INTEGRITY</p>
            <p>Honest & Fair</p>
          </div>

          <div>
            <p className="font-semibold">🌿 Sustainability</p>
            <p>Long-term thinking</p>
          </div>

          <div>
            <p className="font-semibold">🤝 Collaboration</p>
            <p>Work with people</p>
          </div>

          <div>
            <p className="font-semibold">🔍 Transparency</p>
            <p>Open & clear</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-6'>
        <Link to={'/contact-us'}>
          <button className='border border-white text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 hover:text-[#074240] transition'>
            Contact Us
          </button>
        </Link>
      </div>

      <div className='flex justify-center gap-6 mt-8 text-white'>
        <Link to={'https://www.instagram.com/'}>
          <InstagramIcon/>
        </Link>
        <Link to={'https://www.x.com/'}>
          <TwitterIcon/>
        </Link>
        <Link to={'https://www.facebook.com/'}>
          <FacebookIcon/>
        </Link>
      </div>
    </div>
  )
}

export default AboutUs
