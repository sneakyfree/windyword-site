import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: '2,000+ Specialized Models',
    description: 'Not one-size-fits-all. Every language pair gets its own expert AI translator for unmatched accuracy.'
  },
  {
    icon: '🔒',
    title: 'Local Processing',
    description: 'Your voice never leaves your device. Process locally for complete privacy. No cloud required.'
  },
  {
    icon: '⚡',
    title: 'Pair Specialists',
    description: 'English↔Spanish? Chinese↔English? Each language pair has a dedicated model trained for that exact translation.'
  },
  {
    icon: '☁️',
    title: 'Cloud Option Available',
    description: 'Want cloud sync and processing? Upgrade to Pro and sync everything via WindyCloud.'
  },
  {
    icon: '🎨',
    title: 'Own Your Stack',
    description: 'Download models, run locally, no vendor lock-in. Your AI, your terms, your control.'
  },
  {
    icon: '🌍',
    title: 'Powered by WindyTranslate',
    description: 'Built on the world\'s largest catalog of specialized translation models. The engine that powers the entire Windy ecosystem.'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-windy-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Why WindyWord?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Because your voice deserves better than generic AI. 
            We built the world's most specialized voice-to-text platform.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-windy-dark p-8 rounded-lg border border-gray-800 hover:border-windy-amber transition-all hover:shadow-lg hover:shadow-windy-amber/20"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
