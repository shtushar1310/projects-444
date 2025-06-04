import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="animate-blink-orange">Welcome to Insignyx</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100">Discover amazing possibilities with our services</p>
          <Link 
            to="/contact" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero 