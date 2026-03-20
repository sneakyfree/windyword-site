import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Download',
    description: 'Get WindyWord for desktop or mobile. Choose your model pack. Install in seconds.',
    icon: '⬇️'
  },
  {
    number: '02',
    title: 'Speak',
    description: 'Hit record. Speak naturally in any of 100+ languages. No training required.',
    icon: '🎤'
  },
  {
    number: '03',
    title: 'Perfect Text',
    description: 'Get accurate transcriptions powered by specialized AI models. Edit, export, or sync to cloud.',
    icon: '✨'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-windy-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three steps to perfect voice-to-text. It's that simple.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-windy-amber to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 bg-windy-dark p-8 rounded-lg border border-gray-800 hover:border-windy-amber transition-all text-center">
                {/* Step number */}
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-windy-amber to-transparent opacity-20 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-6xl mb-4">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Want more? Sync to <span className="text-windy-amber">WindyCloud</span>, 
            clone your voice with <span className="text-windy-amber">WindyClone</span>, 
            or chat in real-time with <span className="text-windy-amber">WindyChat</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
