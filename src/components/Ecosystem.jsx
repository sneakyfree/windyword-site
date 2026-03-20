import { motion } from 'framer-motion';

const products = [
  {
    name: 'WindyCloud',
    tagline: 'The Gravity Well',
    description: 'Store, sync, and access your transcriptions, models, and voice data across all devices.',
    icon: '☁️',
    url: 'https://windycloud.com',
    nextStep: 'Back up your transcriptions and sync across devices'
  },
  {
    name: 'WindyClone',
    tagline: 'Your Digital Twin',
    description: 'Clone your voice and create your AI avatar from the voice data you already have.',
    icon: '🧬',
    url: 'https://windyclone.ai',
    nextStep: 'Your voice data can power your AI clone'
  },
  {
    name: 'WindyChat',
    tagline: 'Real-Time Translation',
    description: 'Communicate in real-time across 100+ languages with AI-powered translation.',
    icon: '💬',
    url: 'https://windychat.ai',
    nextStep: 'Chat with anyone in their language'
  },
  {
    name: 'WindyTraveler',
    tagline: 'Your Travel Companion',
    description: 'Full-service travel platform with AI translation, guides, deals, and planning.',
    icon: '✈️',
    url: 'https://windytraveler.com',
    nextStep: 'Travel the world with AI in your pocket'
  },
  {
    name: 'WindyTranslate',
    tagline: 'The Engine',
    description: '2,000+ specialized translation models. The brain behind every Windy product.',
    icon: '🔧',
    url: 'https://windytranslate.com',
    nextStep: 'Developers: integrate our API'
  }
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 px-6 bg-windy-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Part of the Windy Family</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            WindyWord is just the beginning. Your voice data unlocks an entire ecosystem of AI tools.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-windy-dark p-6 rounded-lg border border-gray-800 hover:border-windy-amber transition-all hover:shadow-lg hover:shadow-windy-amber/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{product.icon}</div>
              
              {/* Name & Tagline */}
              <h3 className="text-xl font-bold mb-1 text-white group-hover:text-gradient transition-all">
                {product.name}
              </h3>
              <p className="text-sm text-windy-amber mb-3">{product.tagline}</p>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>
              
              {/* Next step */}
              <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-windy-amber transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>{product.nextStep}</span>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold text-gray-300 mb-4">
            One account. One ecosystem. Infinite possibilities.
          </p>
          <p className="text-gray-400">
            The world is talking. Now you understand.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
