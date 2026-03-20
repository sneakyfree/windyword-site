import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals who want complete privacy and control',
    features: [
      'Unlimited local transcriptions',
      'Download any model pack',
      'Process 100% offline',
      'No cloud dependency',
      'Own your stack',
      'Open source models',
      'Community support'
    ],
    cta: 'Download Free',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$4.99',
    period: '/month',
    description: 'For power users who want cloud sync and priority processing',
    features: [
      'Everything in Free',
      'Cloud STT processing',
      'Sync across devices via WindyCloud',
      'Priority model access',
      'Faster processing',
      'Auto-backup transcriptions',
      'Premium support',
      'Early access to new models'
    ],
    cta: 'Start Pro Trial',
    highlight: true,
    badge: 'Most Popular'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-windy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Simple, Honest Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start free. Upgrade when you want cloud sync. No surprises.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-windy-gray p-8 rounded-lg border-2 transition-all ${
                plan.highlight 
                  ? 'border-windy-amber shadow-lg shadow-windy-amber/30 md:scale-105' 
                  : 'border-gray-800'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark text-sm font-bold rounded-full">
                  {plan.badge}
                </div>
              )}
              
              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-black text-gradient">{plan.price}</span>
                <span className="text-gray-400 text-lg ml-2">{plan.period}</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-windy-amber flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <button className={`w-full px-6 py-4 font-bold rounded-lg transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark hover:scale-105'
                  : 'bg-windy-dark border-2 border-windy-amber text-windy-amber hover:bg-windy-amber hover:text-windy-dark'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Pro subscription requires a WindyCloud account for sync and cloud processing.
          </p>
          <p className="text-sm text-gray-500">
            Payment processing by Stripe. Cancel anytime. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
