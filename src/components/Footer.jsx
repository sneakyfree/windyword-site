import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const windyBrands = [
    { name: 'WindyWord', url: 'https://windyword.ai' },
    { name: 'WindyCloud', url: 'https://windycloud.com' },
    { name: 'WindyClone', url: 'https://windyclone.ai' },
    { name: 'WindyChat', url: 'https://windychat.ai' },
    { name: 'WindyTraveler', url: 'https://windytraveler.com' },
    { name: 'WindyTranslate', url: 'https://windytranslate.com' }
  ];
  
  const resources = [
    { name: 'Documentation', url: '#' },
    { name: 'Model Catalog', url: '#the-vault' },
    { name: 'API Reference', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'HuggingFace', url: '#' }
  ];
  
  const company = [
    { name: 'About', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Press Kit', url: '#' },
    { name: 'Contact', url: '#' }
  ];
  
  const legal = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'License', url: '#' },
    { name: 'Security', url: '#' }
  ];
  
  return (
    <footer className="bg-windy-dark border-t border-gray-800/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black mb-3">
              <span className="text-gradient">Windy</span>
              <span className="text-white">Word</span>
            </h3>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">
              Speak it into existence. 🌪️
            </p>
            
            {/* Powered by badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-windy-amber/5 border border-windy-amber/20 rounded-full mb-4">
              <span className="text-[10px] text-gray-500">Powered by</span>
              <span className="text-[10px] font-bold text-gradient">WindyTranslate</span>
            </div>
            
            <div className="flex gap-4">
              {/* Twitter */}
              <a href="#" className="text-gray-600 hover:text-windy-amber transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="text-gray-600 hover:text-windy-amber transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-gray-600 hover:text-windy-amber transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Windy Ecosystem</h4>
            <ul className="space-y-2">
              {windyBrands.map((brand, i) => (
                <li key={i}>
                  <a href={brand.url} className="text-gray-500 hover:text-windy-amber transition-colors text-xs">
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((r, i) => (
                <li key={i}>
                  <a href={r.url} className="text-gray-500 hover:text-windy-amber transition-colors text-xs">{r.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((c, i) => (
                <li key={i}>
                  <a href={c.url} className="text-gray-500 hover:text-windy-amber transition-colors text-xs">{c.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((l, i) => (
                <li key={i}>
                  <a href={l.url} className="text-gray-500 hover:text-windy-amber transition-colors text-xs">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} WindyWord. Part of the Windy Empire.
          </p>
          <p className="text-gray-700 text-xs">
            In the beginning was the Word. 🌪️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
