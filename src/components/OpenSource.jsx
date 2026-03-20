import { motion } from 'framer-motion';

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 px-6 bg-windy-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Open Source. Open Future.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We believe AI should be accessible, transparent, and owned by everyone.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-windy-dark p-8 rounded-lg border border-gray-800 text-center"
          >
            <div className="text-5xl mb-4">🤗</div>
            <h3 className="text-xl font-bold mb-3 text-white">Models on HuggingFace</h3>
            <p className="text-gray-400 mb-4">
              All 2,000+ models are publicly available, downloadable, and free to use.
            </p>
            <a href="#" className="text-windy-amber hover:text-windy-gold transition-colors">
              Browse Models →
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-windy-dark p-8 rounded-lg border border-gray-800 text-center"
          >
            <div className="text-5xl mb-4">🔓</div>
            <h3 className="text-xl font-bold mb-3 text-white">No Vendor Lock-In</h3>
            <p className="text-gray-400 mb-4">
              Download models. Run them locally. No API keys. No rate limits. No dependencies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-windy-dark p-8 rounded-lg border border-gray-800 text-center"
          >
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-white">Own Your Stack</h3>
            <p className="text-gray-400 mb-4">
              The models are yours. The code is yours. The data is yours. Forever.
            </p>
          </motion.div>
        </div>
        
        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-windy-dark p-8 rounded-lg border border-windy-amber"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient">
            Why Open Source?
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Trust:</strong> You can inspect every model, verify every claim, 
              and understand exactly what's happening with your voice data.
            </p>
            <p>
              <strong className="text-white">Privacy:</strong> Running models locally means your voice never 
              leaves your device unless you explicitly choose cloud processing.
            </p>
            <p>
              <strong className="text-white">Freedom:</strong> You're not renting access to our AI. You own it. 
              Use it however you want. Build on it. Modify it. Share it.
            </p>
            <p>
              <strong className="text-white">Community:</strong> Open source means contributions from thousands 
              of developers worldwide. Better models. Faster improvements. Shared progress.
            </p>
          </div>
        </motion.div>
        
        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-windy-dark border-2 border-windy-amber text-windy-amber font-bold rounded-lg hover:bg-windy-amber hover:text-windy-dark transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
