import { motion } from 'framer-motion';

const powers = [
  {
    icon: '🔥',
    title: 'Voice-to-Text, Not Recording',
    description: 'This isn\'t a voice memo app. You speak — your words instantly become text. Paste them wherever your cursor is blinking: emails, documents, code, Slack, anywhere. WindyWord understands context, domain, and intent. Speak a medical note — get a medical document. Never type again.',
    highlight: 'Speak → Text → Paste anywhere'
  },
  {
    icon: '🛡️',
    title: 'Your Voice Is Sacred',
    description: 'Your voice is the most personal data you own. WindyWord processes everything locally by default. No cloud. No eavesdropping. No data harvesting. Your voice stays in your sanctuary.',
    highlight: 'Local-first, offline-capable'
  },
  {
    icon: '⚡',
    title: 'Unlimited Voice-to-Text',
    description: 'Dictate all day, every day — no limits, no caps, no internet needed. Your voice becomes text on YOUR machine, even in airplane mode. No API keys. No rate limits. Download the engines, own them forever. Even if we disappeared tomorrow, your voice-to-text keeps working.',
    highlight: 'All day, every day, no internet required'
  },
  {
    icon: '🌍',
    title: 'Every Tongue, Every Domain',
    description: '99+ languages. Medical, legal, technical, financial domains. Not one model pretending to know everything — 3,500+ specialists, each one an expert in its exact language pair and field.',
    highlight: '3,500+ specialist models'
  },
  {
    icon: '🎯',
    title: 'Precision That Humbles the Giants',
    description: 'Generic voice-to-text hits 73% on medical Spanish. WindyWord\'s specialist hits 96%. That\'s not an incremental improvement — it\'s a different universe of accuracy.',
    highlight: 'Up to 96% domain accuracy'
  },
  {
    icon: '☁️',
    title: 'Cloud When You Choose',
    description: 'Go Pro for WindyCloud sync. Your creations backed up, synced across devices, ready to power your digital twin via WindyClone. Free stays free forever. Cloud is your choice, never our requirement.',
    highlight: 'Optional cloud, mandatory freedom'
  },
];

const Powers = () => {
  return (
    <section id="powers" className="py-24 px-6 bg-windy-gray relative overflow-hidden">
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
            The Six <span className="text-gradient">Powers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your voice isn't just input. It's a force of creation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powers.map((power, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-windy-dark p-8 rounded-xl border border-gray-800/60 hover:border-windy-amber/40 transition-all duration-300 hover:card-glow"
            >
              <div className="text-4xl mb-4">{power.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">{power.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">{power.description}</p>
              <div className="text-xs font-semibold text-windy-amber/80 uppercase tracking-wider">
                {power.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Powers;
