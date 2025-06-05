import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function Apply() {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    qualification: '',
    specialization: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a PDF file');
      e.target.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 slide-in-right reveal-on-scroll bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">
          Job Application Form
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg slide-in-right reveal-on-scroll">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Qualification Field */}
            <div>
              <label htmlFor="qualification" className="block text-gray-700 font-medium mb-2">
                Highest Qualification *
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                required
                value={formData.qualification}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your highest qualification"
              />
            </div>

            {/* Specialization Field */}
            <div>
              <label htmlFor="specialization" className="block text-gray-700 font-medium mb-2">
                Specialization *
              </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                required
                value={formData.specialization}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your specialization"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                Upload Resume (PDF only) *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                required
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
              />
              <p className="mt-1 text-sm text-gray-500">
                Please upload your resume in PDF format only
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-700 transition duration-300 transform hover:-translate-y-0.5"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apply; 