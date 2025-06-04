import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </div>
    </Router>
  )
}

export default App
