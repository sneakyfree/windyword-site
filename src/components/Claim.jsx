import { motion } from 'framer-motion';

const platforms = [
  { name: 'macOS', icon: '🍎', status: 'available', url: '#download-mac' },
  { name: 'Windows', icon: '🪟', status: 'available', url: '#download-windows' },
  { name: 'Linux', icon: '🐧', status: 'available', url: '#download-linux' },
  { name: 'iOS', icon: '📱', status: 'coming-soon', url: '#' },
  { name: 'Android', icon: '🤖', status: 'coming-soon', url: '#' },
];

const Claim = () => {
  return (
    <section id="claim" className="py-24 px-6 bg-windy-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-windy-amber/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">Claim Your Voice</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join 50,000+ people who retired their keyboards. Speak and your words become text — instantly, locally, no internet needed. Paste anywhere.
          </p>
        </motion.div>
        
        {/* Platform badges */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto mb-12">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative group p-5 rounded-xl border transition-all text-center ${
                platform.status === 'available'
                  ? 'bg-windy-gray/60 border-gray-800/60 hover:border-windy-amber/50 hover:card-glow cursor-pointer'
                  : 'bg-windy-gray/30 border-gray-800/30 opacity-50 cursor-not-allowed'
              }`}
            >
              {platform.status === 'coming-soon' && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-windy-amber text-windy-dark text-[10px] font-bold rounded-full whitespace-nowrap">
                  SOON
                </div>
              )}
              <div className="text-4xl mb-2">{platform.icon}</div>
              <div className="text-xs font-bold text-white">{platform.name}</div>
              {platform.status === 'available' && (
                <div className="mt-2 text-[10px] text-windy-amber opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="group relative px-14 py-6 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-black text-2xl rounded-xl hover:scale-105 transition-all border-glow overflow-hidden">
            <span className="relative z-10">Speak It Into Existence</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-windy-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <div className="mt-6 space-y-1">
            <p className="text-sm text-gray-500">
              No account · No credit card · No internet required · Just voice-to-text
            </p>
            <p className="text-xs text-gray-600">
              v1.0 · macOS 11+ · Windows 10+ · Ubuntu 20.04+ · 4GB RAM minimum
            </p>
          </div>
        </motion.div>
        
        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { num: '50K+', label: 'Downloads' },
            { num: '100%', label: 'Open Source' },
            { num: '0', label: 'Data Collected' },
            { num: '∞', label: 'Free Usage' },
          ].map((stat, i) => (
            <div key={i} className="px-4">
              <div className="text-2xl font-black text-gradient">{stat.num}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Claim;
