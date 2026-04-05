import { motion } from 'framer-motion';

const Covenant = () => {
  return (
    <section id="covenant" className="py-24 px-6 bg-windy-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            The <span className="text-gradient">Covenant</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not renting. Not licensing. Owning.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: '🤗',
              title: 'Open Source. Open Soul.',
              description: 'Download any model, inspect the weights, train your own variants. Full transparency. Full control.',
              link: { text: 'Browse Models →', url: '#' }
            },
            {
              icon: '🔓',
              title: 'No Kill Switch. Ever.',
              description: 'If WindyWord disappeared tomorrow, your models still work. No kill switches. No phone-home requirements. No expiration.',
            },
            {
              icon: '🛡️',
              title: 'Your Voice Is Your Temple',
              description: 'Local processing by default = your voice stays on your device. Cloud is opt-in, never automatic. We don\'t collect usage data. We don\'t train on your audio.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-windy-dark p-8 rounded-xl border border-gray-800/60 text-center hover:border-windy-amber/30 transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
              {item.link && (
                <a href={item.link.url} className="text-windy-amber hover:text-windy-gold transition-colors text-sm font-semibold">
                  {item.link.text}
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Philosophy block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto bg-windy-dark p-8 md:p-10 rounded-2xl border border-windy-amber/20"
        >
          <h3 className="text-2xl font-black mb-6 text-center text-gradient">
            Why We Give It Away
          </h3>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              <strong className="text-white">Because trust is earned, not demanded.</strong> You can inspect every model, verify every claim, 
              and understand exactly what happens with your voice data.
            </p>
            <p>
              <strong className="text-white">Because freedom beats convenience.</strong> You're not renting access. 
              You're not dependent on our uptime. You own your AI stack the way you own a book on your shelf.
            </p>
            <p>
              <strong className="text-white">Because the ecosystem is the business.</strong> WindyWord is free. 
              WindyCloud, WindyClone, WindyChat — that's where we build a sustainable company. 
              Your success with WindyWord is our best marketing.
            </p>
          </div>
        </motion.div>
        
        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-windy-dark border-2 border-windy-amber/50 text-windy-amber font-bold rounded-xl hover:bg-windy-amber/10 hover:border-windy-amber transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Star us on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Covenant;
