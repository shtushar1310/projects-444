import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function About() {
  const [showMore, setShowMore] = useState(false);
  useScrollAnimation();

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 slide-in-right reveal-on-scroll bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">
          About Us
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 slide-in-right reveal-on-scroll">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Insignynx is a leading innovator in the data field, dedicated to empowering businesses with actionable insights through advanced data analytics, machine learning, AI, and data management solutions.
            </p>

            {showMore && (
              <div className="space-y-6 animate-fade-in">
                <p className="text-gray-600 leading-relaxed">
                  Our expert team delivers customized, end-to-end services, including big data, predictive modeling, real-time visualization, and cloud-based analytics, tailored to each client's needs. Committed to excellence, innovation, and collaboration, we transform complex data into strategic assets, driving growth and efficiency.
                </p>

                <div className="bg-sky-50 p-6 rounded-lg border border-sky-100 my-8">
                  <h3 className="text-2xl font-bold text-sky-600 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To empower organizations with data-driven insights that drive innovation, efficiency, and sustainable growth. We strive to be the catalyst that transforms complex data challenges into strategic advantages.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h4 className="text-xl font-semibold text-sky-600 mb-3">Our Expertise</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Advanced Analytics
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Machine Learning
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Cloud Solutions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-sky-600 mb-3">Our Values</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Innovation
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Excellence
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Integrity
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  With a client-centric approach built on trust and transparency, Insignynx helps organizations thrive in the digital landscape, turning vision into reality through the power of data. Our commitment to excellence drives us to continuously innovate and deliver solutions that exceed expectations.
                </p>
              </div>
            )}

            <div className="text-center mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {showMore ? 'Show Less' : 'Show More About Us'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 