import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "Is WindyWord actually free? What's the catch?",
    answer: "There is no catch. The core app with all 2,000+ models, unlimited local transcription, and complete offline processing is free forever. We make money from the optional Pro tier ($4.99/mo for cloud sync) and the broader Windy ecosystem (WindyCloud, WindyClone, WindyChat). WindyWord being free and amazing is literally our business model — it's how people discover the ecosystem."
  },
  {
    question: "Why are specialized models better than generic ones?",
    answer: "Imagine asking a general practitioner to read a brain scan vs. a neuroradiologist. Generic STT models know a little about everything. Our specialized pair translators are trained obsessively on specific language combinations AND specific domains (medical, legal, technical). An EN↔ES Medical model has been fed millions of medical conversations, papers, and terminology. That's why it hits 96% where generics hover around 73%."
  },
  {
    question: "Do I need an internet connection?",
    answer: "No. Download your model packs once, and WindyWord works fully offline. By default, your voice stays on your device — that's not a feature, it's a philosophy. If you choose cloud mode, audio is encrypted and processed on WindyCloud servers, then deleted. But in local mode? Even in airplane mode, in a bunker, on a submarine — if you have a laptop and a voice, WindyWord works."
  },
  {
    question: "How much storage do the models need?",
    answer: "Marco Polo Pack (40 essential pairs) = ~20GB. Traveler Pack (60+ pairs) = ~30GB. Specialist Vault (120 domain models) = ~60GB. Full Arsenal (all 2,000+) = ~200GB. Download only what you need — you can always grab more later."
  },
  {
    question: "Can I use this for my business?",
    answer: "Absolutely. All models are open source and commercially licensable. Freelancers, startups, enterprises — use WindyWord for any purpose. If you need enterprise-grade translation at scale, check out the WindyTranslate API at windytranslate.com."
  },
  {
    question: "How does WindyWord connect to the other Windy products?",
    answer: "WindyWord is the entry point. Your transcriptions can sync to WindyCloud (backup/access anywhere). Your voice recordings can train a WindyClone (your AI digital twin). WindyChat uses the same specialist models for real-time translated conversations. WindyTraveler takes it on the road. One account connects everything — but you never have to use anything beyond WindyWord if you don't want to."
  },
  {
    question: "Is my voice data private?",
    answer: "All three processing modes — Device Only, Device + WindyCloud, and Auto — are fully private. We don't collect telemetry. We don't phone home. We don't train on your audio. In Device Only mode, nothing ever leaves your machine. In cloud modes, your data is encrypted end-to-end and deleted after processing. You choose where your voice is processed — it's a setting, never a surprise."
  },
  {
    question: "What makes this different from Whisper, Deepgram, or AssemblyAI?",
    answer: "Those are great general-purpose tools. WindyWord is different in three ways: (1) Specialized pair translators instead of one-size-fits-all models — dramatically higher accuracy on specific language combinations. (2) True local ownership — download and run models offline, no API dependency. (3) It's the entry point to an entire AI ecosystem where your voice data becomes your most powerful digital asset."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section id="faq" className="py-24 px-6 bg-windy-gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">Questions? Answered.</span>
          </h2>
        </motion.div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-windy-dark rounded-xl border border-gray-800/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-windy-gray/30 transition-colors"
              >
                <span className="font-semibold text-white pr-4 text-sm">{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-windy-amber flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-3">Still curious?</p>
          <a 
            href="mailto:support@windyword.ai" 
            className="text-windy-amber hover:text-windy-gold transition-colors font-semibold text-sm"
          >
            support@windyword.ai →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
