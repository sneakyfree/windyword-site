import { motion } from 'framer-motion';
import Waveform from './Waveform';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-windy-dark via-windy-gray to-windy-dark opacity-50"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-windy-amber rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="text-gradient glow">Windy</span>
            <span className="text-white">Word</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Your Voice. Your Language. Your AI.
          </p>
        </motion.div>
        
        {/* Waveform visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="my-12"
        >
          <Waveform />
        </motion.div>
        
        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-semibold mb-6">
            FREE local voice-to-text in <span className="text-gradient">100+ languages</span>
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by 2,000+ specialized AI models. Own your stack. 
            Process locally for privacy, or sync to the cloud. Your choice.
          </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-lg rounded-lg hover:scale-105 transition-transform border-glow">
            Download Free
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-windy-amber text-windy-amber font-bold text-lg rounded-lg hover:bg-windy-amber hover:text-windy-dark transition-all">
            Try in Browser
          </button>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gradient">2,000+</div>
            <div className="text-sm md:text-base text-gray-400 mt-2">AI Models</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gradient">100+</div>
            <div className="text-sm md:text-base text-gray-400 mt-2">Languages</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gradient">FREE</div>
            <div className="text-sm md:text-base text-gray-400 mt-2">Forever</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-windy-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
