// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/007.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative z-50 top-0 sticky w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="p-3 bg-gray-100 backdrop-blur-lg rounded-full shadow-xl shadow-black/20 hover:shadow-2xl transition-shadow duration-300">
            <img src={logo} alt="iTek Solutions UK" className="w-40 sm:w-48 md:w-56 h-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 shadow-lg shadow-black/30 hover:shadow-xl transition-shadow duration-300">
            {/* SERVICES Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className="text-black font-bold hover:text-red-300 transition-colors px-5 py-2"
              >
                SERVICES
              </Link>

              {/* Mega Menu */}
              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-[800px] bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50">
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-red-600 font-bold text-lg mb-4">Digital Marketing</h3>
                      <ul className="space-y-3 text-gray-800 text-sm">
                        <li><Link to="/services/seo" className="hover:text-red-600 transition">Search Engine Optimization</Link></li>
                        <li><Link to="/services/ppc" className="hover:text-red-600 transition">Pay-Per-Click Advertising</Link></li>
                        <li><Link to="/services/social-media" className="hover:text-red-600 transition">Social Media Marketing</Link></li>
                        <li><Link to="/services/content-marketing" className="hover:text-red-600 transition">Content Marketing</Link></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="text-red-600 font-bold text-lg mb-4">Web & Development</h3>
                      <ul className="space-y-3 text-gray-800 text-sm">
                        <li><Link to="/services/web-design" className="hover:text-red-600 transition">Website Design</Link></li>
                        <li><Link to="/services/ecommerce" className="hover:text-red-600 transition">E-commerce Solutions</Link></li>
                        <li><Link to="/services/custom-development" className="hover:text-red-600 transition">Custom Web Development</Link></li>
                        <li><Link to="/services/app-development" className="hover:text-red-600 transition">Mobile App Development</Link></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="text-red-600 font-bold text-lg mb-4">AI & Automation</h3>
                      <ul className="space-y-3 text-gray-800 text-sm">
                        <li><Link to="/services/ai-automation" className="hover:text-red-600 transition">AI Automation</Link></li>
                        <li><Link to="/services/chatbots" className="hover:text-red-600 transition">AI Chatbots</Link></li>
                        <li><Link to="/services/machine-learning" className="hover:text-red-600 transition">Machine Learning Solutions</Link></li>
                        <li><Link to="/services/data-analytics" className="hover:text-red-600 transition">Data Analytics & Insights</Link></li>
                      </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                      <h3 className="text-red-600 font-bold text-lg mb-4">Branding & Design</h3>
                      <ul className="space-y-3 text-gray-800 text-sm">
                        <li><Link to="/services/branding" className="hover:text-red-600 transition">Brand Identity</Link></li>
                        <li><Link to="/services/logo-design" className="hover:text-red-600 transition">Logo & Visual Identity</Link></li>
                        <li><Link to="/services/ui-ux" className="hover:text-red-600 transition">UI/UX Design</Link></li>
                        <li><Link to="/services/video-production" className="hover:text-red-600 transition">Video Production</Link></li>
                        <li><Link to="/services/graphic-design" className="hover:text-red-600 transition">Graphic Design</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-black font-bold hover:text-red-300 transition-colors px-5 py-2">
              ABOUT US
            </Link>
            <Link to="/projects" className="text-black font-bold hover:text-red-300 transition-colors px-5 py-2">
              PROJECTS
            </Link>
            <Link to="/blog" className="text-black font-bold hover:text-red-300 transition-colors px-5 py-2">
              BLOG
            </Link>

            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors ml-3 shadow-md hover:shadow-lg"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden bg-gray-100/70 backdrop-blur-lg rounded-xl text-red-500 focus:outline-none shadow-lg shadow-black/30 hover:shadow-xl transition-shadow duration-300 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-10 h-10 transition-transform duration-400 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu - slides from left */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-black/90 to-black/95 backdrop-blur-lg transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        ref={menuRef}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div className="text-white text-xl font-bold">Menu</div>
          <button onClick={closeMenu} className="text-white text-3xl focus:outline-none">
            ×
          </button>
        </div>

        <div className="px-6 py-8 flex flex-col space-y-6 text-white text-lg font-medium">
          <Link to="/" className="hover:text-red-300 transition-colors flex items-center gap-3" onClick={closeMenu}>
            🏠 Home
          </Link>

          <Link to="/services" className="hover:text-red-300 transition-colors" onClick={closeMenu}>
            SERVICES
          </Link>

          <Link to="/about" className="hover:text-red-300 transition-colors" onClick={closeMenu}>
            ABOUT US
          </Link>

          <Link to="/projects" className="hover:text-red-300 transition-colors" onClick={closeMenu}>
            PROJECTS
          </Link>

          <Link to="/blog" className="hover:text-red-300 transition-colors" onClick={closeMenu}>
            BLOG
          </Link>

          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-full text-center transition-colors shadow-md mt-4"
            onClick={closeMenu}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}