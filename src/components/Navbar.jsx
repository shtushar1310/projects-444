import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/INGINSX.jpg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="h-8 w-auto sm:h-10 md:h-12 transition-all duration-300"
              />
            </Link>
            <h1 className="text-xl font-bold ml-2 animate-pulse bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent bg-300% animate-gradient">
              Insignyx
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/services" className="hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Services</Link>
              <Link to="/about" className="hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About Us</Link>
              <Link to="/career" className="hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Career</Link>
              <Link to="/contact" className="hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact Us</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-sky-700 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sky-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/services" className="block hover:bg-sky-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Services</Link>
            <Link to="/about" className="block hover:bg-sky-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About Us</Link>
            <Link to="/career" className="block hover:bg-sky-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Career</Link>
            <Link to="/contact" className="block hover:bg-sky-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 