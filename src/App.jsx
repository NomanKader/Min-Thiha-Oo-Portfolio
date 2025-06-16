import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import './App.css'

function FadeTransition({ children }) {
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey(prev => prev + 1)
  }, [children])

  return (
    <div key={key} className="fade-enter">
      {children}
    </div>
  )
}

function App() {
  const [activeLink, setActiveLink] = useState('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleLinkClick = (linkPath) => {
    setActiveLink(linkPath)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-['Roboto']">
      <button 
        className="md:hidden fixed top-4 left-4 p-2 z-50 bg-gray-200 rounded-md"
        onClick={toggleMobileMenu}
      >
        <svg 
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-full bg-[#f3f4f8] shadow-lg p-6 flex flex-col justify-between items-center text-center transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-72 md:flex
        `}
      >
        <div>
          <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto overflow-hidden flex items-center justify-center">
            <img src="/profile.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-6 font-['Playfair_Display']">Min Thiha Oo</h2>
          <p className="text-sm text-[#6da0cf] uppercase font-semibold mt-2 mb-8">Digital Strategist</p>

          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('/')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/about' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('/about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/skills' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('/skills')}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="/education"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/education' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('/education')}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  to="/experience"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/experience' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('/experience')}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/contact' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('Contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="text-xs text-gray-500 mt-8">
          <p>Site built by myself using React</p>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      <div className="flex-1 bg-white md:ml-72">
        <FadeTransition>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </FadeTransition>
      </div>
    </div>
  )
}

export default App
