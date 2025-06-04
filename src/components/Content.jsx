import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Scroll animation hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate', 'is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}

function Services() {
  useScrollAnimation();
  
  const services = [
    {
      title: "Data Analytics & Insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions. We leverage cutting-edge tools and methodologies to help you make data-driven decisions.",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Performance Metrics"]
    },
    {
      title: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      description: "Accelerate your digital transformation with our comprehensive cloud services. We help you migrate, optimize, and manage your cloud infrastructure seamlessly.",
      features: ["Cloud Migration", "Infrastructure Optimization", "Security & Compliance", "24/7 Support"]
    },
    {
      title: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      description: "Harness the power of AI and machine learning to automate processes, gain insights, and create intelligent solutions that drive business growth.",
      features: ["Custom AI Models", "Process Automation", "Natural Language Processing", "Computer Vision"]
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold mb-6 slide-in-right reveal-on-scroll bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 slide-in-right reveal-on-scroll">
          Empowering businesses with cutting-edge data solutions and cloud technologies
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="service-card bg-white rounded-xl shadow-lg overflow-hidden slide-in-right reveal-on-scroll"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={service.image}
                alt={service.title}
                className="service-image w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-sky-600">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition duration-300 transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

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

function Career() {
  useScrollAnimation();
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 slide-in-right reveal-on-scroll">Career Opportunities</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 slide-in-right reveal-on-scroll">
          <h3 className="text-xl font-semibold mb-2 text-sky-600">Senior Developer</h3>
          <p className="text-gray-600 mb-4">We're looking for experienced developers to join our team.</p>
          <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition">Apply Now</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg slide-in-right reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-semibold mb-2 text-sky-600">UX Designer</h3>
          <p className="text-gray-600 mb-4">Join our design team and create amazing user experiences.</p>
          <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  useScrollAnimation();
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 slide-in-right reveal-on-scroll">Contact Us</h2>
      <div className="max-w-xl mx-auto px-4">
        <form className="bg-white p-6 rounded-lg shadow-lg slide-in-right reveal-on-scroll">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>
          <button className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  )
}

function Content() {
  return (
    <main className="flex-grow bg-gray-50">
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default Content 