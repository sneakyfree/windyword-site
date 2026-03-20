import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'macOS',
    icon: '🍎',
    status: 'available',
    url: '#download-mac'
  },
  {
    name: 'Windows',
    icon: '🪟',
    status: 'available',
    url: '#download-windows'
  },
  {
    name: 'Linux',
    icon: '🐧',
    status: 'available',
    url: '#download-linux'
  },
  {
    name: 'iOS',
    icon: '📱',
    status: 'coming-soon',
    url: '#'
  },
  {
    name: 'Android',
    icon: '🤖',
    status: 'coming-soon',
    url: '#'
  }
];

const Download = () => {
  return (
    <section id="download" className="py-20 px-6 bg-windy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get WindyWord</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Available for desktop now. Mobile coming soon.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group p-6 bg-windy-gray rounded-lg border-2 transition-all text-center ${
                platform.status === 'available'
                  ? 'border-gray-800 hover:border-windy-amber cursor-pointer'
                  : 'border-gray-800 opacity-60 cursor-not-allowed'
              }`}
            >
              {platform.status === 'coming-soon' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-windy-amber text-windy-dark text-xs font-bold rounded-full whitespace-nowrap">
                  Coming Soon
                </div>
              )}
              
              <div className="text-5xl mb-3">{platform.icon}</div>
              <div className="text-sm font-semibold text-white">{platform.name}</div>
              
              {platform.status === 'available' && (
                <div className="mt-3 text-xs text-windy-amber opacity-0 group-hover:opacity-100 transition-opacity">
                  Download →
                </div>
              )}
            </motion.a>
          ))}
        </div>
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="px-12 py-5 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-xl rounded-lg hover:scale-105 transition-transform shadow-lg shadow-windy-amber/30">
            Download Free Now
          </button>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required. No sign-up. Just download and go.
          </p>
        </motion.div>
        
        {/* System requirements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <details className="bg-windy-gray p-6 rounded-lg border border-gray-800">
            <summary className="cursor-pointer text-white font-semibold mb-4">
              System Requirements
            </summary>
            <div className="text-gray-400 space-y-2 text-sm">
              <p><strong className="text-white">macOS:</strong> macOS 11 Big Sur or later</p>
              <p><strong className="text-white">Windows:</strong> Windows 10/11 (64-bit)</p>
              <p><strong className="text-white">Linux:</strong> Ubuntu 20.04+, Fedora 35+, or equivalent</p>
              <p><strong className="text-white">RAM:</strong> 4GB minimum, 8GB recommended</p>
              <p><strong className="text-white">Storage:</strong> 500MB for app + model pack size</p>
              <p><strong className="text-white">GPU:</strong> Optional, speeds up processing</p>
            </div>
          </details>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
