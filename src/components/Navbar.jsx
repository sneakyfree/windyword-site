import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Powers', href: '#powers' },
    { name: 'The Vault', href: '#the-vault' },
    { name: 'Offering', href: '#offering' },
    { name: 'Kingdom', href: '#kingdom' },
  ];
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-windy-dark/90 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-black">
            <span className="text-gradient">Windy</span>
            <span className="text-white">Word</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#claim"
              className="px-5 py-2 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-sm rounded-lg hover:scale-105 transition-transform"
            >
              Speak Now
            </a>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-800/50 pt-4"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#claim"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-center rounded-lg"
            >
              Speak Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
