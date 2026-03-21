import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: 'Specialist, Not Generalist',
    description: 'Each of our 2,000+ models is a pair specialist — trained obsessively on one language combination. English↔Spanish Medical isn\'t the same model as English↔Spanish Legal. That\'s why we win.',
    highlight: 'Up to 96% accuracy on domain-specific content'
  },
  {
    icon: '🔒',
    title: 'Your Voice Never Leaves Your Device',
    description: 'Process everything locally. No audio uploaded. No cloud dependency. No eavesdropping. Your voice is yours — we built it that way on purpose.',
    highlight: '100% offline capable'
  },
  {
    icon: '⚡',
    title: 'Download. Own. Run.',
    description: 'No API keys. No rate limits. No "fair use" policies. Download the models to your machine and they\'re yours. Forever. Even if we disappeared tomorrow.',
    highlight: 'True ownership, not rental'
  },
  {
    icon: '🧠',
    title: 'Powered by WindyTranslate',
    description: 'The world\'s largest catalog of specialized translation LLMs. Built by linguists. Perfected by AI. Every model trained on domain-specific corpora — medical, legal, technical, financial.',
    highlight: '2,000+ models and growing'
  },
  {
    icon: '🌍',
    title: '100+ Languages, Every Dialect',
    description: 'From Mandarin to Malay, Arabic to Afrikaans. Major languages get dozens of specialist models. Even niche pairs get dedicated attention. If humans speak it, we translate it.',
    highlight: 'Coverage competitors can\'t match'
  },
  {
    icon: '☁️',
    title: 'Cloud When You Want It',
    description: 'Go Pro for cloud sync via WindyCloud. Your transcriptions backed up, synced across devices, ready to power WindyClone and WindyChat. Free stays free. Cloud is optional.',
    highlight: 'Your choice, always'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-windy-gray relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-windy-amber/3 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Why <span className="text-gradient">Everyone Else</span> Is Second Best
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Generic voice-to-text tools use one model for everything. That's like hiring 
            a general practitioner to do brain surgery. <strong className="text-gray-300">We hired 2,000 brain surgeons.</strong>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-windy-dark p-8 rounded-xl border border-gray-800/60 hover:border-windy-amber/40 transition-all duration-300 hover:card-glow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">{feature.description}</p>
              <div className="text-xs font-semibold text-windy-amber/80 uppercase tracking-wider">
                {feature.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
