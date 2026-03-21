import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/* Simulated real-time transcription across 5 languages simultaneously */
const languages = [
  { code: 'EN', flag: '🇺🇸', name: 'English', text: 'The patient presents with acute respiratory symptoms and requires immediate evaluation.' },
  { code: 'ES', flag: '🇪🇸', name: 'Spanish', text: 'El paciente presenta síntomas respiratorios agudos y requiere evaluación inmediata.' },
  { code: 'ZH', flag: '🇨🇳', name: 'Mandarin', text: '患者出现急性呼吸道症状，需要立即评估。' },
  { code: 'DE', flag: '🇩🇪', name: 'German', text: 'Der Patient zeigt akute respiratorische Symptome und benötigt sofortige Untersuchung.' },
  { code: 'AR', flag: '🇸🇦', name: 'Arabic', text: 'يعاني المريض من أعراض تنفسية حادة ويحتاج إلى تقييم فوري.' },
];

const LiveDemo = () => {
  const [charIndex, setCharIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (!isPlaying) return;
    const maxLen = Math.max(...languages.map(l => l.text.length));
    if (charIndex >= maxLen) {
      // Reset after pause
      const t = setTimeout(() => { setCharIndex(0); }, 2000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCharIndex(c => c + 1), 40);
    return () => clearTimeout(t);
  }, [charIndex, isPlaying]);
  
  const startDemo = () => {
    setIsPlaying(true);
    setHasStarted(true);
    setCharIndex(0);
  };
  
  return (
    <section className="py-20 px-6 bg-windy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-windy-gray/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-3 font-semibold">See It In Action</p>
          <h2 className="text-3xl md:text-5xl font-black mb-3">
            One Voice. <span className="text-gradient">Five Languages. Simultaneously.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Watch a single English sentence transcribed across 5 specialist models — each one 
            trained for its specific language pair and medical domain.
          </p>
        </motion.div>
        
        {/* Demo container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-windy-gray/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-gray-600'}`}></div>
              <span className="text-xs text-gray-400 font-mono">
                {isPlaying ? 'TRANSCRIBING' : 'READY'}
              </span>
              <span className="text-xs text-gray-600">· Medical Domain · 5 Models Active</span>
            </div>
            {!hasStarted && (
              <button 
                onClick={startDemo}
                className="px-4 py-1.5 bg-windy-amber/10 border border-windy-amber/30 text-windy-amber text-xs font-bold rounded-lg hover:bg-windy-amber/20 transition-colors"
              >
                ▶ Start Demo
              </button>
            )}
          </div>
          
          {/* Transcription lines */}
          <div className="space-y-3">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.code}
                initial={{ opacity: hasStarted ? 1 : 0.4 }}
                animate={{ opacity: hasStarted ? 1 : 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center gap-1.5 w-20 flex-shrink-0 pt-0.5">
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-xs font-bold text-gray-500">{lang.code}</span>
                </div>
                <div className="flex-1 bg-windy-dark/60 rounded-lg p-3 min-h-[48px] border border-gray-800/30">
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white' : 'text-gray-300'}`}>
                    {hasStarted ? (
                      <>
                        {lang.text.slice(0, charIndex)}
                        {charIndex < lang.text.length && (
                          <span className="inline-block w-0.5 h-4 bg-windy-amber animate-pulse ml-0.5 align-middle"></span>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-600 italic text-xs">Waiting...</span>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Model info */}
          {hasStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 pt-4 border-t border-gray-800/30 flex flex-wrap gap-2"
            >
              {languages.slice(1).map((lang, i) => (
                <span key={i} className="text-[10px] text-gray-600 bg-windy-dark/60 px-2 py-1 rounded">
                  EN↔{lang.code} Medical Specialist v2.1
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-gray-600 mt-4"
        >
          All processing happens locally on your device. Zero data transmitted.
        </motion.p>
      </div>
    </section>
  );
};

export default LiveDemo;
