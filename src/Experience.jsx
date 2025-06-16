import React from 'react'
import { Link } from 'react-router-dom'

function Experience() {
  return (
    <div className="py-12 px-6 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center font-['Playfair_Display']">My Professional Journey</h1>
      <div className="max-w-4xl mx-auto py-6 relative">
        <div className="absolute left-[20px] h-full bg-gray-200" style={{ width: '1px' }}></div>

        <div className="mb-6 flex items-start relative">
          <div className="absolute left-[13px] top-1/2 -translate-y-1/2 bg-[#6da0cf] w-4 h-4 rounded-full"></div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 flex-grow px-6 py-4 ml-[40px] transition-all duration-300 hover:shadow-xl hover:border-[#6da0cf]">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-[#6da0cf] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.282-8.454-3.528m16.89 0c.34-.412.637-.872.89-1.378m-16.89 0c-.34.412-.637.872-.89 1.378m0 0V5.992m0 5.263V18.27M12 8.25V18.27m0-10.017C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253m9 0c1.168-.776 2.754-1.253 4.5-1.253 1.746 0 3.332.477 4.5 1.253m-4.5 0v13m-9-13v13" /></svg>
              <h3 className="font-bold text-gray-800 text-xl font-['Playfair_Display']">Director of Web Operations</h3>
            </div>
            <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">Digicel Accel Inc. | Tokyo, Japan - Remote | February 2022 – December 2023</p>
            <ul className="text-gray-600 space-y-2 mt-2 list-disc pl-5">
              <li>Directed cross-functional teams to design and deploy market-entry analytics projects for U.S./European firms entering Japan and ASEAN markets, resulting in a 25% increase in market penetration.</li>
              <li>Conducted in-depth market research and analysis, leveraging both qualitative and quantitative data to gather insights into customer preferences, behaviors, and emerging market trends, driving informed decision-making and a 15% improvement in strategic planning.</li>
              <li>Applied advanced data analytics techniques (including predictive modeling and regression analysis) to large datasets, uncovering actionable insights that guided strategic business decisions and facilitated market expansion, leading to a 20% growth in target regions.</li>
              <li>Transformed CRM data into interactive dashboards (Tableau/Power BI) with location-based filters, equipping executives to pinpoint growth opportunities in high potential regions and improving reporting efficiency by 30%.</li>
              <li>Identified key performance drivers through data analysis, leading to a targeted marketing campaign that boosted brand awareness in a specific country by 50% in 6 months and increased lead generation by 35%.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex items-start relative">
          <div className="absolute left-[13px] top-1/2 -translate-y-1/2 bg-[#6da0cf] w-4 h-4 rounded-full"></div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 flex-grow px-6 py-4 ml-[40px] transition-all duration-300 hover:shadow-xl hover:border-[#6da0cf]">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-[#6da0cf] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              <h3 className="font-bold text-gray-800 text-xl font-['Playfair_Display']">Business Analyst</h3>
            </div>
            <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">Aethered Systems (Co-Founded) | Yangon, Myanmar | November 2019 – August 2021</p>
            <ul className="text-gray-600 space-y-2 mt-2 list-disc pl-5">
              <li>Translated complex client needs into clear, actionable technical roadmaps for software development across logistics and healthcare sectors, improving project clarity by 40%.</li>
              <li>Conducted comprehensive market research and competitive analysis to identify key industry trends and inform product development strategies, leading to a 20% increase in successful feature implementations.</li>
              <li>Led biweekly sprint planning sessions with development teams using Jira, efficiently resolving feature bottlenecks pre-deployment and ensuring 95% on-time delivery for enterprise clients.</li>
              <li>Provided continuous support to project teams by meticulously managing documentation and tracking project progress, reducing communication gaps by 25%.</li>
              <li>Reduced cross-team miscommunication by 30% through centralizing API documentation and changelogs, significantly streamlining development workflows.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex items-start relative">
          <div className="absolute left-[13px] top-1/2 -translate-y-1/2 bg-[#6da0cf] w-4 h-4 rounded-full"></div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 flex-grow px-6 py-4 ml-[40px] transition-all duration-300 hover:shadow-xl hover:border-[#6da0cf]">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-[#6da0cf] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-6-4h-.01M9 16h.01" /></svg>
              <h3 className="font-bold text-gray-800 text-xl font-['Playfair_Display']">Executive Management Assistant</h3>
            </div>
            <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">Royal Orbit Co. Ltd | Yangon, Myanmar | July 2019 – January 2022</p>
            <ul className="text-gray-600 space-y-2 mt-2 list-disc pl-5">
              <li>Oversaw the usage of 50+ heavy machinery and equipment, deploying IoT sensors to reduce idle time by 20% and extend equipment lifespan by 15% through predictive maintenance schedules.</li>
              <li>Negotiated critical contracts with international suppliers to maintain on-time delivery of essential spare parts (drill bits, conveyor belts), successfully mitigating the impact of Myanmar's 2021 import restrictions.</li>
              <li>Conducted in-depth analysis of equipment and machinery performance data to proactively identify maintenance needs and prevent unscheduled downtime, improving operational efficiency by 10%.</li>
              <li>Led regular project review meetings, rigorously tracking key performance indicators (KPIs) to evaluate progress and implement swift corrective measures, ensuring 98% of projects remained on track and within budget.</li>
              <li>Supervised and mentored a team of 30+ operations staff, implementing targeted training programs that enhanced skill development by 20% and boosted overall team productivity.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex items-start relative">
          <div className="absolute left-[13px] top-1/2 -translate-y-1/2 bg-[#6da0cf] w-4 h-4 rounded-full"></div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 flex-grow px-6 py-4 ml-[40px] transition-all duration-300 hover:shadow-xl hover:border-[#6da0cf]">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-[#6da0cf] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              <h3 className="font-bold text-gray-800 text-xl font-['Playfair_Display']">Fleet Management Intern</h3>
            </div>
            <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">Royal Orbit Co. Ltd | Yangon, Myanmar | July 2017 – August 2018</p>
            <ul className="text-gray-600 space-y-2 mt-2 list-disc pl-5">
              <li>Assisted in the comprehensive management and coordination of the organization's fleet of vehicles and heavy machinery, ensuring optimal utilization and adherence to maintenance schedules.</li>
              <li>Generated in-depth reports and performed advanced data analysis on fleet performance, maintenance costs, and operational efficiency, presenting key findings and strategic recommendations to senior management.</li>
              <li>Collaborated effectively with a network of vendors, suppliers, and service providers to ensure timely and efficient vehicle maintenance and repairs, minimizing downtime and maximizing asset availability.</li>
              <li>Designed and implemented monthly dashboards for executives, providing clear comparative analysis of fleet Key Performance Indicators (KPIs) such as cost per mile and utilization rates, facilitating data-driven strategic adjustments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience 