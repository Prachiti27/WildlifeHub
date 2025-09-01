import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">WILDLIFE HUB</h2>
          <p className="text-white/90 text-sm md:text-base">
            Explore, learn, and protect wildlife around the globe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link to="/about-us" className="text-white/90 hover:text-[#074240] transition">About</Link>
          <Link to="/contact-us" className="text-white/90 hover:text-[#074240] transition">Contact</Link>
          <Link to="/animals" className="text-white/90 hover:text-[#074240] transition">Species</Link>
          <Link to="/parks&sancturies" className="text-white/90 hover:text-[#074240] transition">Parks</Link>
          <Link to="/games" className="text-white/90 hover:text-[#074240] transition">Games</Link>
          <Link to="/live-tracking" className="text-white/90 hover:text-[#074240] transition">Live Tracking</Link>
          <Link to="/news" className="text-white/90 hover:text-[#074240] transition">News</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#074240] transition">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#074240] transition">
            <Twitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#074240] transition">
            <Facebook size={20} />
          </a>
        </div>

      </div>

      <div className="mt-8 text-center text-white/90 text-sm">
        &copy; {new Date().getFullYear()} Wildlife Hub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
