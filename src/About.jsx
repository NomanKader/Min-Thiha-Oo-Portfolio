import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="p-12 bg-white">
      {/* Hero Section: Dynamic Introduction */}
      <section className="relative bg-gradient-to-r from-[#e0effe] to-[#f3f4f8] py-20 px-8 rounded-lg shadow-xl text-center mb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/clean-textile.png")' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <rect x="12" y="100" width="20" height="32" rx="4" fill="#6da0cf"/>
              <rect x="40" y="80" width="20" height="52" rx="4" fill="#b4d8f8"/>
              <rect x="68" y="60" width="20" height="72" rx="4" fill="#6da0cf"/>
              <rect x="96" y="40" width="20" height="92" rx="4" fill="#b4d8f8"/>
              <circle cx="106" cy="32" r="8" fill="#6da0cf"/>
              <circle cx="78" cy="52" r="6" fill="#b4d8f8"/>
              <circle cx="50" cy="72" r="5" fill="#6da0cf"/>
              <circle cx="22" cy="92" r="4" fill="#b4d8f8"/>
              <polyline points="22,92 50,72 78,52 106,32" fill="none" stroke="#4a7ca8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 font-['Playfair_Display']">
            Crafting Digital Success Through Data & Strategy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            As a Digital Strategist and Web Operations leader, I specialize in leveraging insightful data to build robust digital ecosystems and drive measurable growth across diverse markets.
          </p>
          <Link to="/experience" className="inline-block px-8 py-4 bg-white text-gray-800 text-md font-semibold uppercase tracking-wider rounded-full hover:bg-[#4a7ca8] hover:!text-white transition-all duration-300 shadow-lg border border-gray-200 hover:border-transparent">
            Explore My Journey <span className="ml-2">&#x2192;</span>
          </Link>
        </div>
      </section>
      
      {/* Who I Am / My Story */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-['Playfair_Display']">Who I Am</h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              My professional path has been defined by a passion for transforming complex challenges into clear, actionable strategies. With a strong foundation in data analytics and market research, I excel at dissecting raw information to uncover hidden opportunities and predict future trends.
            </p>
            <p>
              I thrive in dynamic environments, leading cross-functional teams to design and deploy innovative solutions that not only meet but exceed business objectives. Whether it's developing predictive models, automating intricate reporting systems, or crafting nuanced market-entry strategies, my focus remains on tangible impact and sustainable growth.
            </p>
          </div>
          <div className="lg:w-1/2 text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              What truly sets me apart is my ability to bridge the gap between technical complexity and business understanding. I believe in the power of storytelling to communicate intricate insights effectively, utilizing tools like Python, Power BI, and SQL to present compelling narratives that resonate with stakeholders at all levels.
            </p>
            <p>
              My international experience across Western and Southeast Asian markets has cultivated a broad perspective on diverse business challenges and cultural nuances, allowing me to approach problem-solving with a global mindset.
            </p>
          </div>
        </div>
      </section>

      {/* My Philosophy / Approach */}
      <section className="mb-16 border-t border-b border-gray-200 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-['Playfair_Display']">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg className="w-16 h-16 text-[#6da0cf] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-3 1m8-11h3.75L17.25 3H10C6.75 3 4.5 4.75 4.5 8.25v7.5C4.5 19.25 6.75 21 10 21h7.25c.875 0 1.5-.75 1.5-1.5S18.125 18 17.25 18H15" /></svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Data-Centric Decision Making</h3>
            <p className="text-gray-600">Every strategy is rooted in rigorous data analysis, ensuring decisions are informed, precise, and impactful.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg className="w-16 h-16 text-[#6da0cf] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-9.313a2.25 2.25 0 00-2.25-2.25h-4.375a2.25 2.25 0 00-2.25 2.25V20M2 10.428V20m0 0h17.75m-14.75 0V8.25a2.25 2.25 0 012.25-2.25h2.556a2.25 2.25 0 012.25 2.25v2.172a2.25 2.25 0 01-.102.775L2.1 16.34C1.944 16.792 1.583 17 1.157 17H0" /></svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Collaborative Leadership</h3>
            <p className="text-gray-600">Fostering a collaborative environment where cross-functional teams innovate and deliver exceptional results.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg className="w-16 h-16 text-[#6da0cf] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253m9 0c1.168-.776 2.754-1.253 4.5-1.253 1.746 0 3.332.477 4.5 1.253m-4.5 0v13m-9-13v13" /></svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">Continuous Innovation</h3>
            <p className="text-gray-600">Embracing new technologies and methodologies to stay ahead in a rapidly evolving digital landscape.</p>
          </div>
        </div>
      </section>

      {/* Beyond the Office */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 font-['Playfair_Display']">Beyond the Office</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-[#e0effe] hover:shadow-2xl">
            <svg className="w-24 h-24 text-[#6da0cf] mb-4 transition-colors duration-300 group-hover:text-[#4a7ca8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-['Playfair_Display']">Multilingual Proficiency</h3>
            <p className="text-lg text-gray-700 leading-relaxed">Fluent in Burmese, English (IELTS 8.5), and proficient in Japanese (JLPT N2) and French (A2), I bridge communication gaps across diverse global contexts.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-[#e0effe] hover:shadow-2xl">
            <svg className="w-24 h-24 text-[#6da0cf] mb-4 transition-colors duration-300 group-hover:text-[#4a7ca8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.5 3-9s-1.343-9-3-9m0 18v-8.003c0-3.248-.003-6.5-.003-6.5H12a9 9 0 009-9m-9 9h.01" /></svg>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-['Playfair_Display']">Curiosity Beyond Code</h3>
            <p className="text-lg text-gray-700 leading-relaxed">Beyond digital strategies, I delve into new data visualization techniques, emerging tech trends, and explore the dynamics of economic and international relations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About