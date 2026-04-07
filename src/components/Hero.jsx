import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Waveform from './Waveform';

// All images — cosmos leads, portrait images use object-position to show the face/top
// flip: mirrors horizontally, pos: object-position for best framing on wide viewport
const heroSlides = [
  { src: '/images/creators/creator-cosmos-1.jpg', flip: false, pos: 'center 30%' },   // personage LEFT, cosmos right
  { src: '/images/creators/creator-v3-1.jpg',     flip: false, pos: 'center 15%' },   // portrait — show face at top
  { src: '/images/creators/creator-cosmos-2.jpg', flip: false, pos: 'center 25%' },   // personage CENTER, cosmos
  { src: '/images/creators/creator-v2-1.jpg',     flip: true,  pos: 'center 15%' },   // portrait flipped
  { src: '/images/creators/creator-cosmos-1.jpg', flip: true,  pos: 'center 30%' },   // FLIPPED — personage RIGHT
  { src: '/images/creators/creator-v3-2.jpg',     flip: false, pos: 'center 10%' },   // portrait — show top
  { src: '/images/creators/creator-cosmos-2.jpg', flip: true,  pos: 'center 25%' },   // FLIPPED
  { src: '/images/creators/creator-v2-3.jpg',     flip: true,  pos: 'center 15%' },   // portrait flipped
  { src: '/images/creators/creator-v3-3.jpg',     flip: false, pos: 'center 10%' },
  { src: '/images/creators/creator-v2-4.jpg',     flip: false, pos: 'center 15%' },
  { src: '/images/creators/creator-v3-4.jpg',     flip: true,  pos: 'center 10%' },
  { src: '/images/creators/creator-v2-5.jpg',     flip: false, pos: 'center 15%' },
  { src: '/images/creators/creator-1.jpg',        flip: false, pos: 'center 20%' },
  { src: '/images/creators/creator-2.jpg',        flip: true,  pos: 'center 20%' },
  { src: '/images/creators/creator-3.jpg',        flip: false, pos: 'center 20%' },
];

// Ken Burns presets — subtle motion, never reveals edges
const kenBurnsVariants = [
  { scaleFrom: 1.02, scaleTo: 1.08, xFrom: '0%',  xTo: '-1%', yFrom: '0%',  yTo: '-1%'  },
  { scaleFrom: 1.08, scaleTo: 1.02, xFrom: '-1%', xTo: '1%',  yFrom: '-0.5%', yTo: '0.5%' },
  { scaleFrom: 1.03, scaleTo: 1.07, xFrom: '0.5%',xTo: '-0.5%', yFrom: '0.5%', yTo: '-0.5%' },
  { scaleFrom: 1.07, scaleTo: 1.02, xFrom: '0%',  xTo: '1%',  yFrom: '-1%', yTo: '0%'   },
  { scaleFrom: 1.02, scaleTo: 1.09, xFrom: '-0.5%',xTo: '0%', yFrom: '0.5%', yTo: '-0.5%' },
  { scaleFrom: 1.06, scaleTo: 1.02, xFrom: '1%',  xTo: '-0.5%', yFrom: '0%', yTo: '0.5%' },
];

// Lightning bolt positions — scattered patches like distant storm flashes
const lightningPatches = [
  { x: 12, y: 18, size: 350 },
  { x: 78, y: 12, size: 400 },
  { x: 35, y: 55, size: 300 },
  { x: 88, y: 50, size: 280 },
  { x: 22, y: 72, size: 320 },
  { x: 55, y: 20, size: 380 },
  { x: 8,  y: 42, size: 260 },
  { x: 92, y: 35, size: 300 },
  { x: 50, y: 80, size: 340 },
  { x: 65, y: 65, size: 290 },
];

// Rolling thunder — wider, slower glows that drift across like cloud-to-cloud lightning
const thunderRolls = [
  { x: 20, y: 25, width: 600, height: 200 },
  { x: 60, y: 15, width: 500, height: 180 },
  { x: 40, y: 70, width: 550, height: 220 },
  { x: 80, y: 45, width: 480, height: 190 },
  { x: 15, y: 55, width: 520, height: 200 },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightningFlash, setLightningFlash] = useState(null);
  const [thunderGlow, setThunderGlow] = useState(null);

  // Get a Ken Burns variant for the current image
  const currentKenBurns = useMemo(
    () => kenBurnsVariants[currentImage % kenBurnsVariants.length],
    [currentImage]
  );
  const currentSlide = heroSlides[currentImage];

  // Image rotation — 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Lightning system — sharp flashes at random patches
  const triggerLightning = useCallback(() => {
    const patch = lightningPatches[Math.floor(Math.random() * lightningPatches.length)];
    const intensity = 0.12 + Math.random() * 0.18;
    setLightningFlash({ ...patch, intensity });

    // Double/triple strike effect
    const strikes = 1 + Math.floor(Math.random() * 3);
    let delay = 0;
    for (let s = 1; s < strikes; s++) {
      delay += 80 + Math.random() * 100;
      const d = delay;
      const fade = intensity * (0.7 - s * 0.15);
      setTimeout(() => {
        setLightningFlash({ ...patch, intensity: fade });
      }, d);
    }
    setTimeout(() => setLightningFlash(null), delay + 100);
  }, []);

  // Rolling thunder — slower, wider glows that drift
  const triggerThunder = useCallback(() => {
    const roll = thunderRolls[Math.floor(Math.random() * thunderRolls.length)];
    const intensity = 0.06 + Math.random() * 0.1;
    setThunderGlow({ ...roll, intensity });
    // Thunder rolls last longer — 300-600ms
    setTimeout(() => {
      setThunderGlow({ ...roll, intensity: intensity * 0.5 });
      setTimeout(() => setThunderGlow(null), 200);
    }, 300 + Math.random() * 300);
  }, []);

  useEffect(() => {
    // Lightning: every 1.5-4s
    const scheduleLightning = () => {
      const delay = 1500 + Math.random() * 2500;
      return setTimeout(() => {
        triggerLightning();
        lightningTimer = scheduleLightning();
      }, delay);
    };
    // Thunder: every 2-6s (offset from lightning)
    const scheduleThunder = () => {
      const delay = 2000 + Math.random() * 4000;
      return setTimeout(() => {
        triggerThunder();
        thunderTimer = scheduleThunder();
      }, delay);
    };
    let lightningTimer = scheduleLightning();
    let thunderTimer = setTimeout(() => { scheduleThunder(); }, 800);
    return () => { clearTimeout(lightningTimer); clearTimeout(thunderTimer); };
  }, [triggerLightning, triggerThunder]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden hero-grain">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-windy-gray via-windy-dark to-black"></div>

      {/* === CREATOR IMAGE CROSSFADE with Ken Burns motion === */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0"
              style={currentSlide.flip ? { transform: 'scaleX(-1)' } : undefined}
            >
              <motion.img
                src={currentSlide.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.35) contrast(1.15) saturate(0.7)',
                  objectPosition: currentSlide.pos,
                }}
                initial={{
                  scale: currentKenBurns.scaleFrom,
                  x: currentKenBurns.xFrom,
                  y: currentKenBurns.yFrom,
                }}
                animate={{
                  scale: currentKenBurns.scaleTo,
                  x: currentKenBurns.xTo,
                  y: currentKenBurns.yTo,
                }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* === LIGHTNING FLASH — sharp pocket of light === */}
        {lightningFlash && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${lightningFlash.x}%`,
              top: `${lightningFlash.y}%`,
              width: `${lightningFlash.size}px`,
              height: `${lightningFlash.size}px`,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(ellipse at center, rgba(230,215,170,${lightningFlash.intensity * 1.8}) 0%, rgba(251,191,36,${lightningFlash.intensity * 0.7}) 20%, rgba(251,191,36,${lightningFlash.intensity * 0.2}) 45%, transparent 65%)`,
              mixBlendMode: 'screen',
              zIndex: 2,
            }}
          />
        )}

        {/* === ROLLING THUNDER — wide slow glow drifting through clouds === */}
        {thunderGlow && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: `${thunderGlow.x}%`,
              top: `${thunderGlow.y}%`,
              width: `${thunderGlow.width}px`,
              height: `${thunderGlow.height}px`,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(ellipse at center, rgba(200,185,140,${thunderGlow.intensity}) 0%, rgba(180,160,100,${thunderGlow.intensity * 0.4}) 35%, transparent 70%)`,
              mixBlendMode: 'screen',
              zIndex: 2,
              borderRadius: '50%',
            }}
            initial={{ x: -30, opacity: 0.5 }}
            animate={{ x: 30, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Ambient cloud glow patches — slow drift, very subtle */}
        {lightningPatches.map((patch, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${patch.x}%`,
              top: `${patch.y}%`,
              width: `${patch.size}px`,
              height: `${patch.size}px`,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(ellipse at center, rgba(251,191,36,0.04) 0%, transparent 70%)`,
              mixBlendMode: 'screen',
            }}
            animate={{
              opacity: [0, 0.4, 0, 0, 0.3, 0],
              scale: [0.9, 1.1, 1, 0.95, 1.05, 0.9],
              x: [0, 10, -5, 0],
            }}
            transition={{
              duration: 6 + i * 1.2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Galaxy shimmer particles — brighter, twinkling */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`shimmer-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 85}%`,
              background: `radial-gradient(circle, rgba(251,191,36,0.95) 0%, transparent 70%)`,
              boxShadow: `0 0 ${6 + Math.random() * 10}px rgba(251,191,36,0.6)`,
            }}
            animate={{
              opacity: [0, 0.9, 0.3, 0.8, 0],
              y: [0, -20 - Math.random() * 30],
              x: [0, (Math.random() - 0.5) * 40],
              scale: [0.3, 1.3, 0.8, 1.1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Vignette overlays — darken edges for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.25) 0%, transparent 45%)' }}></div>
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
            Emails, documents, code, notes, text messages — on your phone, laptop, or desktop.
            Anywhere you go. No internet required. Never touch a keyboard to type again.
          </p>
          <p className="text-xl text-white font-bold mt-4 drop-shadow-lg">
            Life will never be the same.
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
