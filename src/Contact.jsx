import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message! I will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="p-12 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-['Playfair_Display']">Let's Connect and Collaborate</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        I'm always open to new opportunities and discussions. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6da0cf] focus:border-[#6da0cf]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6da0cf] focus:border-[#6da0cf]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6da0cf] focus:border-[#6da0cf]"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-[#6da0cf] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6da0cf]"
            >
              Send Message
            </button>
          </form>
        </div>

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
                <strong className="block">Phone:</strong> 
                <a href="tel:+66948830645" className="text-[#6da0cf] hover:underline">+66 948830645</a>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">What to Expect</h3>
            <p className="text-gray-600 text-base">
              I strive to respond to all inquiries within 24-48 business hours. Your message is important to me, and I look forward to exploring how we can achieve your digital objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 