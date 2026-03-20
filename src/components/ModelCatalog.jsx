import { motion } from 'framer-motion';
import { useState } from 'react';

const modelPacks = [
  {
    name: 'Marco Polo Pack',
    description: 'The essentials. 40 most-used language pairs for global communication.',
    languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian'],
    pairs: 40,
    size: '20GB'
  },
  {
    name: 'Traveler Pack',
    description: 'Wanderlust edition. 60+ languages covering every continent and major tourist destination.',
    languages: ['All Marco Polo', 'Thai', 'Vietnamese', 'Turkish', 'Polish', 'Dutch', 'Swedish', 'Indonesian', 'Greek', 'Czech', 'Hebrew'],
    pairs: 60,
    size: '30GB'
  },
  {
    name: 'Specialist Pairs',
    description: 'Industry-specific models. Medical, legal, technical translations with specialized vocabulary.',
    languages: ['Medical EN↔ES', 'Legal EN↔DE', 'Tech EN↔ZH', 'Finance EN↔JP', 'Engineering pairs', 'Academic pairs'],
    pairs: 120,
    size: '60GB'
  },
  {
    name: 'Full Catalog',
    description: 'Everything. All 2,000+ models. Every language pair we offer. Own the complete stack.',
    languages: ['Every language pair', 'All specialists', 'All regional variants', 'Beta models', 'Experimental pairs'],
    pairs: 2000,
    size: '200GB'
  }
];

const ModelCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPack, setSelectedPack] = useState(null);
  
  const filteredPacks = modelPacks.filter(pack =>
    pack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pack.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pack.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <section id="models" className="py-20 px-6 bg-windy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Model Catalog</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose your pack. Download what you need. Run locally or sync to WindyCloud.
          </p>
          
          {/* Powered by badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-windy-gray border border-windy-amber rounded-full mb-8">
            <span className="text-sm text-gray-400">Powered by</span>
            <span className="text-sm font-bold text-gradient">WindyTranslate</span>
          </div>
        </motion.div>
        
        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <input
            type="text"
            placeholder="Search languages or packs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-windy-gray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-windy-amber transition-colors"
          />
        </motion.div>
        
        {/* Model packs grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPacks.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-windy-gray p-8 rounded-lg border-2 transition-all cursor-pointer ${
                selectedPack === index 
                  ? 'border-windy-amber shadow-lg shadow-windy-amber/30' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}
              onClick={() => setSelectedPack(index)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{pack.name}</h3>
                <div className="text-right">
                  <div className="text-windy-amber font-bold text-lg">{pack.pairs} pairs</div>
                  <div className="text-gray-500 text-sm">{pack.size}</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4">{pack.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {pack.languages.slice(0, 6).map((lang, i) => (
                  <span key={i} className="px-3 py-1 bg-windy-dark text-gray-300 text-sm rounded-full">
                    {lang}
                  </span>
                ))}
                {pack.languages.length > 6 && (
                  <span className="px-3 py-1 bg-windy-dark text-windy-amber text-sm rounded-full">
                    +{pack.languages.length - 6} more
                  </span>
                )}
              </div>
              
              <button className="w-full px-4 py-2 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold rounded-lg hover:scale-105 transition-transform">
                Download Pack
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* HuggingFace link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            All models are open source and available on HuggingFace
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-windy-amber hover:text-windy-gold transition-colors"
          >
            <span>Browse on HuggingFace</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelCatalog;
