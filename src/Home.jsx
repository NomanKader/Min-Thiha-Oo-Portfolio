import React from 'react'

function Home() {
  return (
    <main className="flex-1 p-12 flex items-center justify-center">
      <div className="text-left max-w-xl">
        <h1 className="text-6xl font-bold text-gray-800 leading-tight mb-4 font-['Playfair_Display']">I am <br/> a Designer</h1>
        <p className="text-lg text-gray-600 mb-8">100% html5 bootstrap templates Made<br/>by <a href="#" className="text-blue-600 hover:underline">colorlib.com</a></p>
        <button className="px-8 py-4 border border-gray-400 text-gray-800 text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors duration-200">VIEW PORTFOLIO <span className="ml-2">&#x2192;</span></button>
      </div>
    </main>
  )
}

export default Home 