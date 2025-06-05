import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Apply from './Apply'

function Career() {
  useScrollAnimation();
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 slide-in-right reveal-on-scroll">Career Opportunities</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 slide-in-right reveal-on-scroll">
          <h3 className="text-xl font-semibold mb-2 text-sky-600">Senior Developer</h3>
          <p className="text-gray-600 mb-4">We're looking for experienced developers to join our team.</p>
          <Link 
            to='/Apply' 
           
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
          >
            Apply Now
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg slide-in-right reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-semibold mb-2 text-sky-600">UX Designer</h3>
          <p className="text-gray-600 mb-4">Join our design team and create amazing user experiences.</p>
          <Link 
            to='/Apply' 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Career; 