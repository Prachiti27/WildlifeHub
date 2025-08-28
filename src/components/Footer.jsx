import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#074240] mb-2">WILDLIFE HUB</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Explore, learn, and protect wildlife around the globe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link to="/about-us" className="text-gray-600 hover:text-[#074240] transition">About</Link>
          <Link to="/contact-us" className="text-gray-600 hover:text-[#074240] transition">Contact</Link>
          <Link to="/animals" className="text-gray-600 hover:text-[#074240] transition">Species</Link>
          <Link to="/parks&sancturies" className="text-gray-600 hover:text-[#074240] transition">Parks</Link>
          <Link to="/games" className="text-gray-600 hover:text-[#074240] transition">Games</Link>
          <Link to="/live-tracking" className="text-gray-600 hover:text-[#074240] transition">Live Tracking</Link>
          <Link to="/news" className="text-gray-600 hover:text-[#074240] transition">News</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#074240] transition">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#074240] transition">
            <Twitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#074240] transition">
            <Facebook size={20} />
          </a>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Wildlife Hub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
