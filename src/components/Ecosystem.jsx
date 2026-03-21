import { motion } from 'framer-motion';

const products = [
  {
    name: 'WindyCloud',
    icon: '☁️',
    tagline: 'The Gravity Well',
    seduction: 'You just transcribed 100 hours of audio. That data is gold. WindyCloud keeps it safe, synced, and ready across every device. Your AI data vault — encrypted, backed up, and yours.',
    cta: 'Never lose a transcription',
    url: 'https://windycloud.com',
    color: 'from-blue-500/10 to-blue-600/5',
  },
  {
    name: 'WindyClone',
    icon: '🧬',
    tagline: 'Your Digital Twin',
    seduction: 'Your voice data can create something extraordinary — a clone that speaks like you, looks like you, thinks like you. In any language. One click from the data you already have.',
    cta: 'Own your AI identity',
    url: 'https://windyclone.ai',
    color: 'from-purple-500/10 to-purple-600/5',
  },
  {
    name: 'WindyChat',
    icon: '💬',
    tagline: 'Real-Time Multilingual Comms',
    seduction: 'Talk to anyone on Earth in their language. Real-time translation in voice and text. With your WindyClone, they hear YOUR voice speaking THEIR language. That\'s not science fiction — it\'s Tuesday.',
    cta: 'Break every language barrier',
    url: 'https://windychat.ai',
    color: 'from-green-500/10 to-green-600/5',
  },
  {
    name: 'WindyTraveler',
    icon: '✈️',
    tagline: 'Your AI Travel Companion',
    seduction: 'Offline translation, AI tour guides, local deals, trip planning — all powered by the same specialist models. Travel the world with an interpreter, concierge, and local expert in your pocket.',
    cta: 'Travel without limits',
    url: 'https://windytraveler.com',
    color: 'from-orange-500/10 to-orange-600/5',
  },
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 px-6 bg-windy-gray relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-windy-amber/3 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Your Voice Data Is <span className="text-gradient">Gold</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            WindyWord is the door. Behind it is an entire ecosystem where your voice 
            becomes your most powerful digital asset.
          </p>
        </motion.div>
        
        {/* Flywheel narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed italic">
            "You just transcribed 100 hours of meetings. That voice data is <strong className="text-windy-amber not-italic">GOLD</strong>. 
            WindyClone can turn it into your digital twin. WindyCloud can keep it safe forever. 
            WindyChat lets your clone speak your words in 100 languages. 
            You're one click away from <strong className="text-windy-amber not-italic">owning your AI identity</strong>."
          </p>
        </motion.div>
        
        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br ${product.color} bg-windy-dark p-8 rounded-xl border border-gray-800/60 hover:border-windy-amber/40 transition-all duration-300 hover:card-glow`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{product.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">{product.name}</h3>
                  <p className="text-xs text-windy-amber/70 font-semibold uppercase tracking-wider">{product.tagline}</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{product.seduction}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-windy-amber transition-colors font-medium">
                <span>{product.cta}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Engine badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-windy-dark border border-windy-amber/20 rounded-xl">
            <span className="text-xl">🔧</span>
            <div className="text-left">
              <p className="text-sm font-bold text-white">All powered by WindyTranslate</p>
              <p className="text-xs text-gray-500">3,100+ specialized models • B2B API available • <a href="https://windytranslate.com" className="text-windy-amber/70 hover:text-windy-amber">windytranslate.com</a></p>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-black text-gray-300">
            One account. One ecosystem. <span className="text-gradient">Your voice is the key.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
