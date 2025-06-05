import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Services from './pages/Services'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Apply from './pages/apply'


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

function Content() {
  useScrollAnimation();

  return (
    <main className="flex-grow bg-gray-50">
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </main>
  )
}

export default Content 