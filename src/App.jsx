import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
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
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  const handleLinkClick = (linkPath) => {
    setActiveLink(linkPath)
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-['Roboto']">
      {/* Left Sidebar */}
      <aside className="w-72 bg-[#f3f4f8] shadow-lg p-6 flex flex-col justify-between items-center text-center">
        <div>
          {/* Profile Picture */}
          <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto overflow-hidden flex items-center justify-center">
            <img src="https://via.placeholder.com/160" alt="Profile" className="object-cover w-full h-full" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-6 font-['Playfair_Display']">Jackson Ford</h2>
          <p className="text-sm text-[#6da0cf] uppercase font-semibold mt-2 mb-8">UI/UX Designer in Philippines</p>

          {/* Navigation Links */}
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
                  to="/services"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/services' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('/services')}
                >
                  Services
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
                  to="/work"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/work' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('Work')}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className={`font-medium uppercase text-sm pb-1 ${activeLink === '/blog' ? 'text-[#6da0cf] border-b-2 border-[#6da0cf]' : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleLinkClick('Blog')}
                >
                  Blog
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
        
        {/* Copyright Information */}
        <div className="text-xs text-gray-500 mt-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mt-1">Fusce vel sapien nec odio varius.</p>
        </div>
      </aside>

      {/* Right Main Content (Routes) */}
      <div className="flex-1 bg-white">
        <FadeTransition>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes for other pages here */}
          </Routes>
        </FadeTransition>
      </div>
    </div>
  )
}

export default App
