import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Waveform from './Waveform';

const creatorImages = [
  '/images/creators/creator-cosmos-1.jpg',
  '/images/creators/creator-v2-1.jpg',
  '/images/creators/creator-cosmos-2.jpg',
  '/images/creators/creator-v2-2.jpg',
  '/images/creators/creator-v3-1.jpg',
  '/images/creators/creator-v2-3.jpg',
  '/images/creators/creator-v3-2.jpg',
  '/images/creators/creator-v2-4.jpg',
  '/images/creators/creator-v3-3.jpg',
  '/images/creators/creator-v2-5.jpg',
  '/images/creators/creator-v3-4.jpg',
  '/images/creators/creator-1.jpg',
  '/images/creators/creator-2.jpg',
  '/images/creators/creator-3.jpg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % creatorImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-windy-gray via-windy-dark to-black"></div>
      
      {/* === CREATOR IMAGE CROSSFADE === */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <img 
              src={creatorImages[currentImage]}
              alt=""
              className="max-h-full max-w-full object-contain"
              style={{ filter: 'brightness(0.9) contrast(1.1)' }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Lightning flash effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0, 0, 0, 0.15, 0, 0.08, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(251,191,36,0.6) 0%, rgba(251,191,36,0.1) 40%, transparent 70%)' }}
        />
        
        {/* Shimmer particles floating across the creator */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shimmer-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 70}%`,
              background: `radial-gradient(circle, rgba(251,191,36,0.9) 0%, transparent 70%)`,
              boxShadow: '0 0 8px rgba(251,191,36,0.5)',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -30 - Math.random() * 40],
              x: [0, (Math.random() - 0.5) * 30],
              scale: [0.5, 1.2, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Dark vignette overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Sound ring pulses behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-windy-amber/10 sound-ring"></div>
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-windy-amber/10 sound-ring-delayed"></div>
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-windy-amber/10 sound-ring-delayed-2"></div>
      </div>
      
      {/* Floating particles */}
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
        {/* Voice-First badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-windy-amber/10 border border-windy-amber/30 rounded-full text-sm backdrop-blur-sm">
            <span className="w-2 h-2 bg-windy-amber rounded-full animate-pulse"></span>
            <span className="text-windy-amber font-medium">🎤 Voice-First AI — No Keyboard Required</span>
          </span>
        </motion.div>
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tight drop-shadow-2xl">
            <span className="text-gradient glow">Windy</span>
            <span className="text-white">Word</span>
          </h1>
        </motion.div>
        
        {/* THE HOOK */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <p className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
            You were never meant to type your vision.
            <br />
            <span className="text-gradient">Speak it into existence.</span>
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            You speak. Text appears. Paste it wherever your cursor is blinking — emails, documents, 
            code, notes, messages. All day. No internet required. Never touch a keyboard to type again. 
            <strong className="text-white">Life will never be the same.</strong>
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
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="group px-10 py-5 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-black text-xl rounded-xl hover:scale-105 transition-all border-glow relative overflow-hidden">
            <span className="relative z-10">Claim Your Voice</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-windy-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-windy-amber/60 text-windy-amber font-bold text-xl rounded-xl hover:bg-windy-amber/10 hover:border-windy-amber transition-all backdrop-blur-sm">
            Watch the Vision →
          </button>
        </motion.div>
        
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-black text-gradient">∞</div>
            <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">Unlimited Voice-to-Text</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-black text-gradient">99+</div>
            <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">Languages</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-black text-gradient">$0</div>
            <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">Forever Free</div>
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

export default Hero;
