import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Download',
    description: 'Grab WindyWord. Pick a model pack — or download them all. Install takes 30 seconds.',
    icon: '⬇️',
    detail: 'Mac · Windows · Linux'
  },
  {
    number: '02',
    title: 'Speak',
    description: 'Hit record. Talk in any language. The specialist model for your language pair activates automatically.',
    icon: '🎤',
    detail: '100+ languages · auto-detect'
  },
  {
    number: '03',
    title: 'Own It',
    description: 'Get domain-accurate transcriptions instantly. Export, edit, sync to cloud, or feed to WindyClone. Your data, your rules.',
    icon: '✨',
    detail: 'Local · Private · Yours'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-windy-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Download. Speak. <span className="text-gradient">Own It.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No account creation. No API keys. No tutorials needed.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-px bg-gradient-to-r from-windy-amber/30 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 bg-windy-dark p-8 rounded-xl border border-gray-800/60 hover:border-windy-amber/30 transition-all text-center group">
                <div className="text-7xl font-black text-windy-amber/8 mb-2">
                  {step.number}
                </div>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-3">{step.description}</p>
                <p className="text-xs text-windy-amber/50 font-medium uppercase tracking-wider">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Ready for more? Your transcriptions can sync to <span className="text-windy-amber">WindyCloud</span>, 
            become a voice clone with <span className="text-windy-amber">WindyClone</span>, 
            or power real-time conversations in <span className="text-windy-amber">WindyChat</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
