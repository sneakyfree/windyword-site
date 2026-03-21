import { motion } from 'framer-motion';
import Waveform from './Waveform';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-windy-gray via-windy-dark to-black"></div>
      
      {/* Sound ring pulses behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-windy-amber/10 sound-ring"></div>
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-windy-amber/10 sound-ring-delayed"></div>
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-windy-amber/10 sound-ring-delayed-2"></div>
      </div>
      
      {/* Floating particles - more of them, varied sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, rgba(251,191,36,${0.4 + Math.random() * 0.4}) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Powered by badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-windy-amber/10 border border-windy-amber/30 rounded-full text-sm">
            <span className="w-2 h-2 bg-windy-amber rounded-full animate-pulse"></span>
            <span className="text-windy-amber font-medium">Powered by WindyTranslate — 2,000 specialized AI models</span>
          </span>
        </motion.div>
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tight">
            <span className="text-gradient glow">Windy</span>
            <span className="text-white">Word</span>
          </h1>
        </motion.div>
        
        {/* The Hook - THE holy shit line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <p className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            2,000 AI models. Your voice.
            <br />
            <span className="text-gradient">Zero cost. Forever.</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Not generic speech-to-text. <strong className="text-gray-200">Specialized pair translators</strong> that 
            destroy Google Translate on accuracy. Download them. Own them. 
            Run them offline. No subscription. No catch.
          </p>
        </motion.div>
        
        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-8"
        >
          <Waveform />
        </motion.div>
        
        {/* The Accuracy Hook - "holy shit" comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <AccuracyComparison />
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="group px-10 py-5 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-black text-xl rounded-xl hover:scale-105 transition-all border-glow relative overflow-hidden">
            <span className="relative z-10">Download Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-windy-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-windy-amber/60 text-windy-amber font-bold text-xl rounded-xl hover:bg-windy-amber/10 hover:border-windy-amber transition-all">
            Try in Browser →
          </button>
        </motion.div>
        
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-black text-gradient">2,000+</div>
            <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">Specialized Models</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-black text-gradient">100+</div>
            <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">Languages</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-black text-gradient">$0</div>
            <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">Forever</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-windy-amber/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

/* Accuracy Comparison - THE "holy shit" moment */
const AccuracyComparison = () => {
  const comparisons = [
    { domain: 'Medical Spanish', generic: 73, windy: 96, pair: 'ES↔EN' },
    { domain: 'Legal German', generic: 68, windy: 94, pair: 'DE↔EN' },
    { domain: 'Technical Mandarin', generic: 61, windy: 93, pair: 'ZH↔EN' },
  ];
  
  return (
    <div className="max-w-2xl mx-auto bg-windy-gray/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-semibold">Why Specialized Models Win</p>
      <div className="space-y-4">
        {comparisons.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-28 md:w-36 text-right">
              <span className="text-xs text-gray-500 block">{item.pair}</span>
              <span className="text-sm text-gray-300 font-medium">{item.domain}</span>
            </div>
            <div className="flex-1">
              {/* Generic bar */}
              <div className="flex items-center gap-2 mb-1">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gray-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.generic}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-10">{item.generic}%</span>
              </div>
              {/* WindyWord bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-windy-gold to-windy-amber rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.windy}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.7 + i * 0.2 }}
                  />
                </div>
                <span className="text-xs text-windy-amber font-bold w-10">{item.windy}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          <span className="text-xs text-gray-500">Generic STT</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-windy-amber rounded-full"></div>
          <span className="text-xs text-windy-amber">WindyWord Specialist</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
