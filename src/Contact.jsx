import React from 'react';

function Contact() {
  return (
    <div className="p-12 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-['Playfair_Display']">Let's Connect and Collaborate</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        I'm always open to new opportunities and discussions. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12">
        {/* Direct Contact & Info Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Other Ways to Connect</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong className="block">Email:</strong> 
                <a href="mailto:mto9902@gmail.com" className="text-[#6da0cf] hover:underline">mto9902@gmail.com</a>
              </p>
              <p>
                <strong className="block">LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/mto9902" target="_blank" rel="noopener noreferrer" className="text-[#6da0cf] hover:underline">linkedin.com/in/mto9902</a>
              </p>
              <p>
                <strong className="block">Phone (Thailand):</strong> 
                <a href="tel:+66948830645" className="text-[#6da0cf] hover:underline">+66 948830645</a>
              </p>
              <p>
                <strong className="block">Phone (Myanmar):</strong> 
                <a href="tel:+9595097360" className="text-[#6da0cf] hover:underline">+95 95097360</a>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">Connect with Me</h3>
            <p className="text-gray-600 text-base">
              Feel free to reach out via email or LinkedIn for collaborations, inquiries, or just to say hello. I look forward to hearing from you and discussing how we can work together to achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 