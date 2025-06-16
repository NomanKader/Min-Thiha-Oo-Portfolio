import React from 'react'

function Skills() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 font-['Playfair_Display']">My Skills & Expertise</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Data Analysis & Business Intelligence */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-['Playfair_Display']">Data Analysis & BI</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Translating complex datasets into strategic recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Designing intuitive dashboards (Tableau, Power BI)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>SQL (PostgreSQL, MySQL)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Python (Pandas, NumPy)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Excel, Google Sheets</span>
            </li>
          </ul>
        </div>

        {/* New Machine Learning & Deep Learning */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-['Playfair_Display']">Machine Learning & Deep Learning</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Machine Learning Algorithms (Regression, Classification, Clustering)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Deep Learning Frameworks (TensorFlow, Keras, PyTorch)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Neural Networks (CNNs, RNNs, LSTMs)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Natural Language Processing (NLP)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Computer Vision</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Model Evaluation & Deployment</span>
            </li>
          </ul>
        </div>

        {/* Project & Product Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-['Playfair_Display']">Project Management</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Managing end-to-end project lifecycles</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Scrum methodologies (Jira, ClickUp)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Resolving feature bottlenecks, pre-deployment management</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Cross-team communication & documentation</span>
            </li>
          </ul>
        </div>

        {/* Search Engine Optimization (SEO) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-['Playfair_Display']">SEO & Digital Marketing</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Keyword research, content optimization, link-building</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Technical SEO</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Performance monitoring (Google Analytics, SEMrush, Ahrefs)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Highlighting performance metrics (CTR, conversion, ROI)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Website visibility & performance enhancement</span>
            </li>
          </ul>
        </div>

        {/* Tools & Languages */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-['Playfair_Display']">Tools & Languages</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Python, SQL</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Tableau, Power BI</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Jira, ClickUp, Trello</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>SEMrush, Ahrefs, Google Analytics, Screaming Frog</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6da0cf] rounded-full mr-3 mt-1.5"></span>
              <span>Microsoft Office Suite, Google Workspace</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills 