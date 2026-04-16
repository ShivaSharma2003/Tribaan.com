import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            TRIBAAN
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-green-400 transition">Home</a>
            <a href="#gallery" className="text-white hover:text-green-400 transition">Gallery</a>
            <a href="#about" className="text-white hover:text-green-400 transition">About</a>
            <a href="#services" className="text-white hover:text-green-400 transition">Services</a>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="hidden md:block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            CONTACT US
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-white hover:text-green-400">Home</a>
            <a href="#gallery" className="block text-white hover:text-green-400">Gallery</a>
            <a href="#about" className="block text-white hover:text-green-400">About</a>
            <a href="#services" className="block text-white hover:text-green-400">Services</a>
            <a href="#contact" className="block bg-green-500 text-white px-4 py-2 rounded">Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
