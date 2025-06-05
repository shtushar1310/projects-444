import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import Contact from "./pages/Contact"

function Hero() {
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const fullTitleText = 'Welcome to Insignyx';
  const fullSubtitleText = 'Discover amazing possibilities with our services';

  useEffect(() => {
    // Animation for title
    let titleIndex = 0;
    let isTitleDeleting = false;
    let titleTimeoutId;

    const animateTitle = () => {
      if (!isTitleDeleting) {
        if (titleIndex <= fullTitleText.length) {
          setTitleText(fullTitleText.substring(0, titleIndex));
          titleIndex++;
          // Slower typing speed for smoother animation
          titleTimeoutId = setTimeout(animateTitle, 150);
        } else {
          isTitleDeleting = true;
          // Longer pause at full text
          titleTimeoutId = setTimeout(animateTitle, 2000);
        }
      } else {
        if (titleIndex > 0) {
          setTitleText(fullTitleText.substring(0, titleIndex));
          titleIndex--;
          // Slower deletion for smoother effect
          titleTimeoutId = setTimeout(animateTitle, 75);
        } else {
          isTitleDeleting = false;
          // Longer pause before restarting
          titleTimeoutId = setTimeout(animateTitle, 1000);
        }
      }
    };

    animateTitle();

    // Animation for subtitle
    let subtitleIndex = 0;
    let isSubtitleDeleting = false;
    let subtitleTimeoutId;

    const animateSubtitle = () => {
      if (!isSubtitleDeleting) {
        if (subtitleIndex <= fullSubtitleText.length) {
          setSubtitleText(fullSubtitleText.substring(0, subtitleIndex));
          subtitleIndex++;
          subtitleTimeoutId = setTimeout(animateSubtitle, 100);
        } else {
          isSubtitleDeleting = true;
          subtitleTimeoutId = setTimeout(animateSubtitle, 1000);
        }
      } else {
        if (subtitleIndex > 0) {
          setSubtitleText(fullSubtitleText.substring(0, subtitleIndex));
          subtitleIndex--;
          subtitleTimeoutId = setTimeout(animateSubtitle, 50);
        } else {
          isSubtitleDeleting = false;
          subtitleTimeoutId = setTimeout(animateSubtitle, 500);
        }
      }
    };

    animateSubtitle();

    return () => {
      if (titleTimeoutId) clearTimeout(titleTimeoutId);
      if (subtitleTimeoutId) clearTimeout(subtitleTimeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1920&q=80"
          alt="Data Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/90 to-blue-600/90" />
      </div>

      {/* Floating Data Images */}
      <div className="absolute inset-0 z-1">
        {/* Top Left Data Visualization */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
          alt="Data Analytics"
          className="absolute top-10 -left-10 w-64 h-64 object-cover rounded-lg transform -rotate-12 opacity-40 animate-float"
        />
        
        {/* Bottom Right Charts */}
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
          alt="Business Analytics"
          className="absolute bottom-10 -right-10 w-64 h-64 object-cover rounded-lg transform rotate-12 opacity-40 animate-float animation-delay-500"
        />
        
        {/* Middle Right Data Flow */}
        <img
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80"
          alt="Data Flow"
          className="absolute top-1/2 -right-20 w-48 h-48 object-cover rounded-lg transform -rotate-6 opacity-40 animate-float animation-delay-1000"
        />
      </div>

      {/* Content Container with Improved Spacing */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
        <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <div className="flex items-center justify-center">
              <span className="relative">
                <span className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent animate-gradient inline-block">
                  {titleText}
                </span>
                <span className="animate-blink text-white absolute -right-2">|</span>
              </span>
            </div>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-sky-100 relative">
            <span className="block min-h-[40px]">
              {subtitleText}
              <span className="animate-blink">|</span>
            </span>
          </p>
          <Link 
            to='/Contact'
            
             
            rel="noopener noreferrer"
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-float-left animation-delay-400"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 z-5 opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Add keyframes for floating animation in your CSS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotation, 0deg)); }
          100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}

export default Hero 