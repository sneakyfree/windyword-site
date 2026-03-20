import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "Is WindyWord really free?",
    answer: "Yes! The core app with local processing is 100% free forever. You can download models, transcribe unlimited audio, and use all features locally without paying a cent. The Pro plan ($4.99/mo) is optional and adds cloud sync via WindyCloud."
  },
  {
    question: "How is this different from Whisper or other voice-to-text tools?",
    answer: "WindyWord uses 2,000+ specialized models trained for specific language pairs (e.g., English↔Spanish). Generic models like Whisper are great, but specialized pair translators offer superior accuracy for specific language combinations. Plus, you can own and run models locally."
  },
  {
    question: "Do I need an internet connection?",
    answer: "No! Download your model packs once, and WindyWord works completely offline. Your voice never leaves your device unless you choose to use cloud processing with the Pro plan."
  },
  {
    question: "How much storage do I need?",
    answer: "It depends on which model pack you choose. Marco Polo Pack (40 pairs) = ~20GB. Traveler Pack = ~30GB. Full catalog = ~200GB. You only download what you need."
  },
  {
    question: "Can I use WindyWord for commercial purposes?",
    answer: "Yes! The models are open source and commercially usable. Whether you're a freelancer, small business, or enterprise, you're free to use WindyWord for any purpose."
  },
  {
    question: "What's the relationship between WindyWord and the other Windy products?",
    answer: "WindyWord is the entry point to the Windy ecosystem. Your voice data can power WindyClone (voice cloning), sync to WindyCloud (storage), enable WindyChat (real-time translation), and assist with WindyTraveler (travel AI). One account, one ecosystem."
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. With local processing, your voice data never leaves your device. Even with Pro cloud sync, your data is encrypted and stored securely on WindyCloud. We never sell or share your data."
  },
  {
    question: "What languages are supported?",
    answer: "100+ languages with 2,000+ specialized language pair models. From major languages (English, Spanish, Chinese, French, Arabic) to regional languages and dialects. Check the Model Catalog for the full list."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section id="faq" className="py-20 px-6 bg-windy-gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about WindyWord
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-windy-dark rounded-lg border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-windy-gray/50 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-windy-amber flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@windyword.ai" 
            className="text-windy-amber hover:text-windy-gold transition-colors font-semibold"
          >
            Contact Support →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
