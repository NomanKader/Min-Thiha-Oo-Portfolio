import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="flex-1 p-12 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-16 lg:py-24">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-4 font-['Playfair_Display']">
            Hello, I'm <br/><span className="text-[#6da0cf]">Min Thiha Oo</span><br/>A Digital Strategist
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Experienced professional in data analytics and market research. I leverage data to drive revenue growth and lead cross-functional teams in developing impactful strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/about" 
              className="px-8 py-4 bg-[#6da0cf] text-white text-sm font-semibold uppercase tracking-wider rounded-md hover:opacity-80 transition-opacity duration-200 shadow-lg flex items-center justify-center !text-white"
            >
              About Me <span className="ml-2">&#x2192;</span>
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-gray-400 text-gray-800 text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="/dashboard.png"
            alt="Data Analytics Dashboard"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Key Contributions Section */}
      <section className="py-16 lg:py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 font-['Playfair_Display']">Key Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contribution Card 1: Data Analytics */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#6da0cf] mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18A9 9 0 0112 3z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Data-Driven Strategy</h3>
            <p className="text-gray-600">Translating complex data into actionable strategies for revenue growth and market penetration.</p>
          </div>

          {/* Contribution Card 2: Team Leadership */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#6da0cf] mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-9.313a2.25 2.25 0 00-2.25-2.25h-4.375a2.25 2.25 0 00-2.25 2.25V20M2 10.428V20m0 0h17.75m-14.75 0V8.25a2.25 2.25 0 012.25-2.25h2.556a2.25 2.25 0 012.25 2.25v2.172a2.25 2.25 0 01-.102.775L2.1 16.34C1.944 16.792 1.583 17 1.157 17H0" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Cross-functional Leadership</h3>
            <p className="text-gray-600">Leading teams to design predictive models, automate reporting, and deliver market-entry solutions.</p>
          </div>

          {/* Contribution Card 3: Storytelling & Communication */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#6da0cf] mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Stakeholder Communication</h3>
            <p className="text-gray-600">Communicating insights effectively through compelling storytelling using Python, Power BI, and SQL.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 px-4 md:py-16 lg:py-24 text-center bg-gradient-to-r from-[#e0effe] to-[#f3f4f8] rounded-lg shadow-lg">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-['Playfair_Display']">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-103">
              <div className="text-[#6da0cf] mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18A9 9 0 0112 3z" /></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Predictive Analytics for Market Entry</h3>
              <p className="text-sm md:text-base text-gray-600">Designed and deployed a sophisticated predictive model utilizing Python and R, accurately forecasting market trends and achieving a 30% increase in successful market entries for a global tech firm.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-103">
              <div className="text-[#6da0cf] mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Automated CRM Data Visualization</h3>
              <p className="text-sm md:text-base text-gray-600">Developed and integrated dynamic Power BI dashboards with CRM systems, reducing manual reporting efforts by 60% and providing real-time insights for executive decision-making, impacting over 5,000 customers.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-103">
              <div className="text-[#6da0cf] mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">IoT-Enabled Fleet Optimization</h3>
              <p className="text-sm md:text-base text-gray-600">Implemented an IoT-based solution for heavy machinery, optimizing fleet utilization by 25% and extending equipment lifespan through proactive maintenance, leading to a 15% reduction in operational costs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home 