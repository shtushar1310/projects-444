import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
// import Contact from "./Contact"

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
                to='/Contact'
                
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
  );
}

export default Services; 