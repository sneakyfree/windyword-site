import { motion } from 'framer-motion';
import { useState } from 'react';

/* Animated specialist model cards that cascade in */
const specialistModels = [
  { pair: 'EN ↔ ES', domain: 'Medical', flag1: '🇺🇸', flag2: '🇪🇸', accuracy: 96 },
  { pair: 'ZH ↔ EN', domain: 'Technical', flag1: '🇨🇳', flag2: '🇺🇸', accuracy: 93 },
  { pair: 'DE ↔ EN', domain: 'Legal', flag1: '🇩🇪', flag2: '🇺🇸', accuracy: 94 },
  { pair: 'JP ↔ EN', domain: 'Finance', flag1: '🇯🇵', flag2: '🇺🇸', accuracy: 92 },
  { pair: 'AR ↔ FR', domain: 'Technical', flag1: '🇸🇦', flag2: '🇫🇷', accuracy: 91 },
  { pair: 'KO ↔ EN', domain: 'Academic', flag1: '🇰🇷', flag2: '🇺🇸', accuracy: 93 },
  { pair: 'PT ↔ EN', domain: 'Medical', flag1: '🇧🇷', flag2: '🇺🇸', accuracy: 95 },
  { pair: 'RU ↔ EN', domain: 'Engineering', flag1: '🇷🇺', flag2: '🇺🇸', accuracy: 92 },
  { pair: 'HI ↔ EN', domain: 'General', flag1: '🇮🇳', flag2: '🇺🇸', accuracy: 94 },
  { pair: 'IT ↔ EN', domain: 'Culinary', flag1: '🇮🇹', flag2: '🇺🇸', accuracy: 95 },
  { pair: 'TR ↔ DE', domain: 'Legal', flag1: '🇹🇷', flag2: '🇩🇪', accuracy: 90 },
  { pair: 'TH ↔ EN', domain: 'Tourism', flag1: '🇹🇭', flag2: '🇺🇸', accuracy: 91 },
  { pair: 'VI ↔ EN', domain: 'Technical', flag1: '🇻🇳', flag2: '🇺🇸', accuracy: 92 },
  { pair: 'NL ↔ EN', domain: 'Business', flag1: '🇳🇱', flag2: '🇺🇸', accuracy: 95 },
  { pair: 'PL ↔ DE', domain: 'Medical', flag1: '🇵🇱', flag2: '🇩🇪', accuracy: 93 },
  { pair: 'SV ↔ EN', domain: 'Academic', flag1: '🇸🇪', flag2: '🇺🇸', accuracy: 94 },
];

const modelPacks = [
  {
    name: 'The Grand Tour',
    emoji: '🇪🇺',
    description: 'Paris to Prague to Porto. All of Europe covered with ~1,087 language pairs.',
    pairs: '~1,087',
    size: '$129',
    highlight: 'Europe',
    examples: ['EN↔FR', 'EN↔DE', 'EN↔ES', 'EN↔IT', 'EN↔PT', 'DE↔FR', 'ES↔IT', 'PL↔DE']
  },
  {
    name: 'The Safari',
    emoji: '🌍',
    description: 'Cairo to Cape Town. All of Africa with ~200 language pairs.',
    pairs: '~200',
    size: '$79',
    highlight: 'Africa',
    examples: ['EN↔AR', 'EN↔SW', 'FR↔AR', 'EN↔AM', 'EN↔ZU', 'FR↔WO']
  },
  {
    name: 'The Silk Road',
    emoji: '🌏',
    description: 'Dubai to Delhi. Middle East + Central + South Asia with ~75 language pairs.',
    pairs: '~75',
    size: '$59',
    highlight: 'Middle East + South Asia',
    examples: ['EN↔AR', 'EN↔HI', 'EN↔UR', 'EN↔FA', 'AR↔FA', 'HI↔UR']
  },
  {
    name: 'The Dragon',
    emoji: '🐉',
    description: 'Tokyo to Beijing — 1.5 billion people. East Asia with ~45 language pairs.',
    pairs: '~45',
    size: '$49',
    highlight: 'East Asia',
    examples: ['EN↔ZH', 'EN↔JP', 'EN↔KO', 'ZH↔JP', 'ZH↔KO', 'JP↔KO']
  },
  {
    name: 'The Archipelago',
    emoji: '🌺',
    description: 'Bali to Fiji. Southeast Asia + Pacific Islands with ~170 language pairs.',
    pairs: '~170',
    size: '$69',
    highlight: 'Southeast Asia + Pacific',
    examples: ['EN↔TH', 'EN↔VI', 'EN↔ID', 'EN↔TL', 'EN↔MS', 'TH↔VI']
  },
  {
    name: 'The Explorer',
    emoji: '🌎',
    description: 'The Amazon to the Arctic. Americas + Caribbean + Sign Languages with ~75 pairs.',
    pairs: '~75',
    size: '$49',
    highlight: 'Americas + Caribbean',
    examples: ['EN↔ES', 'EN↔PT-BR', 'EN↔FR-CA', 'EN↔QU', 'EN↔ASL']
  },
  {
    name: "Marco Polo's Magic Box",
    emoji: '🧭',
    description: 'The whole world. Every language. One box. ALL language pairs — cheaper than buying all 6 packs individually.',
    pairs: 'ALL',
    size: '$399',
    highlight: 'Everything',
    examples: ['Every region', 'Every pair', 'Every specialist', 'Every domain']
  }
];

const TheVault = () => {
  const [visibleCards, setVisibleCards] = useState(8);

  const revealMore = () => {
    setVisibleCards(specialistModels.length);
  };
  
  return (
    <section id="the-vault" className="py-24 px-6 bg-windy-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-windy-amber/3 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Open the <span className="text-gradient">Vault</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2">
            3,500+ specialist models. Each one trained obsessively on one language pair, one domain. Each one yours to keep.
          </p>
          
          {/* Powered by badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-windy-amber/10 to-windy-gold/10 border border-windy-amber/30 rounded-full mt-4"
          >
            <span className="text-sm text-gray-400">Powered by</span>
            <span className="text-sm font-black text-gradient">WindyTranslate</span>
            <span className="text-sm text-gray-500">— built by linguists, perfected by AI</span>
          </motion.div>
        </motion.div>
        
        {/* Animated model cards grid */}
        <div className="my-12">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-6 font-semibold">Specialist Models — A Sample</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {specialistModels.slice(0, visibleCards).map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-windy-gray/80 border border-gray-800/60 rounded-lg p-3 hover:border-windy-amber/40 transition-all duration-300 hover:card-glow cursor-default"
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-lg">{model.flag1}</span>
                  <span className="text-xs text-gray-600">↔</span>
                  <span className="text-lg">{model.flag2}</span>
                </div>
                <div className="text-xs font-bold text-white">{model.pair}</div>
                <div className="text-xs text-windy-amber/70">{model.domain}</div>
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-windy-gold to-windy-amber rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${model.accuracy}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.06 }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">{model.accuracy}%</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {visibleCards < specialistModels.length && (
            <motion.div 
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={revealMore}
                className="text-windy-amber hover:text-windy-gold transition-colors text-sm font-semibold"
              >
                Show more specialists (+{specialistModels.length - visibleCards}) →
              </button>
            </motion.div>
          )}
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-600 text-sm mt-4"
          >
            …and 3,484 more where these came from.
          </motion.p>
        </div>
        
        {/* WindyTraveler Packs Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500/10 to-windy-amber/10 border border-orange-500/30 rounded-full mb-4">
              <span className="text-lg">✈️</span>
              <span className="text-sm font-black text-gradient">WindyTraveler Packs</span>
              <span className="text-sm text-gray-500">— Powered by WindyTranslate</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Regional translation model packs for travel and multilingual use. WindyWord's core voice-to-text 
              works in 99+ languages out of the box — these specialist packs add domain-level translation accuracy.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modelPacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-windy-gray/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800/60 hover:border-windy-amber/40 transition-all duration-300 hover:card-glow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{pack.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{pack.name}</h3>
                      <span className="text-xs font-semibold text-windy-amber/70 uppercase tracking-wider">{pack.highlight}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-windy-amber font-black text-xl">{pack.pairs}</div>
                    <div className="text-gray-600 text-xs">{pack.size}</div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{pack.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pack.examples.map((ex, i) => (
                    <span key={i} className="px-2 py-0.5 bg-windy-dark/80 text-gray-400 text-xs rounded border border-gray-800/40">
                      {ex}
                    </span>
                  ))}
                </div>
                
                <button className="w-full px-4 py-3 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold rounded-lg hover:scale-[1.02] transition-transform text-sm">
                  {pack.size.startsWith('$') ? `Get Pack — ${pack.size}` : `Download — ${pack.size}`}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* HuggingFace */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-3 text-sm">
            Every model is open source and free on HuggingFace. No strings attached.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-windy-amber hover:text-windy-gold transition-colors font-semibold text-sm"
          >
            <span>🤗 Browse the full catalog on HuggingFace</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TheVault;
